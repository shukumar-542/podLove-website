import PropTypes from "prop-types";
import Question from "./Question";
import AuthButton from "../../component/AuthButton/AuthButton";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useUpdateUserInfoMutation } from "../../redux/Api/AuthApi";
import { useEffect, useState } from "react";
import logo from "../../assets/podLogo.png";

const STORAGE_KEY = "compatibility_parts_v1"; // per-part storage (object)

const DiscoverCompatibilityPart = ({
  partNumber,
  questions,
  nextRoute,
  isLastPart,
}) => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState([]);
  const [updateCompatibility, { isLoading }] = useUpdateUserInfoMutation();

  // Helper: load saved parts object from localStorage
  const loadSavedParts = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  };

  // On mount / when questions change: load this part's saved answers or default
  useEffect(() => {
    const parts = loadSavedParts();
    const savedForThisPart = parts[`part${partNumber}`] || [];
    const initialized = questions.map((q, i) => {
      const saved = savedForThisPart[i];
      const init = { value: saved?.value ?? null };

      // Initialize all conditional input keys as null if not saved
      if (q.conditionalInput) {
        Object.keys(q.conditionalInput).forEach((trigger) => {
          const key = q.conditionalInput[trigger].key;
          init[key] = saved?.[key] ?? null;
        });
      }

      return init;
    });
    setAnswers(initialized);
  }, [questions, partNumber]);

  // handleChange: writes into answers array safely
  const handleChange = (index, value, subKey = "value") => {
    setAnswers((prev) => {
      const copy = [...prev];
      if (!copy[index] || typeof copy[index] !== "object") copy[index] = {};

      const q = questions[index];

      if (subKey === "value") {
        copy[index].value = value;

        // Reset all conditional inputs except the one triggered by current value
        if (q.conditionalInput) {
          Object.keys(q.conditionalInput).forEach((trigger) => {
            const key = q.conditionalInput[trigger].key;
            if (trigger === value) {
              // Maintain existing value if any
              copy[index][key] = copy[index][key] ?? null;
            } else {
              copy[index][key] = null;
            }
          });
        }
      } else {
        // Conditional input value change
        copy[index][subKey] = value;
      }

      return copy;
    });
  };

  const handleNext = () => {
    // Validate required questions including conditional inputs
    const empty = questions.some((q, i) => {
      const mainValue = answers[i]?.value;
      if (!mainValue && !q.optional) return true;

      if (q.conditionalInput && mainValue in q.conditionalInput) {
        const ciKey = q.conditionalInput[mainValue].key;
        if (!answers[i]?.[ciKey]) return true;
      }

      return false;
    });

    if (empty) {
      toast.error("Please answer all required questions before proceeding!");
      return;
    }

    // Build formattedAnswers for this part
    const formattedAnswers = questions.map((q, i) => {
      const ans = { value: answers[i]?.value ?? null };
      if (q.conditionalInput) {
        Object.keys(q.conditionalInput).forEach((trigger) => {
          const key = q.conditionalInput[trigger].key;
          ans[key] = answers[i]?.[key] ?? null;
        });
      }
      return ans;
    });

    // Save per-part
    const parts = loadSavedParts();
    parts[`part${partNumber}`] = formattedAnswers;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parts));

    if (isLastPart) {
      // Merge all parts
      const finalPartsObj = loadSavedParts();
      const merged = [];
      Object.keys(finalPartsObj)
        .filter((k) => /^part\d+$/.test(k))
        .sort(
          (a, b) =>
            Number(a.replace("part", "")) - Number(b.replace("part", ""))
        )
        .forEach((k) => {
          finalPartsObj[k].forEach((q) => {
            merged.push(q.value);
            Object.keys(q)
              .filter((key) => key !== "value")
              .forEach((key) => merged.push(q[key]));
          });
        });

      updateCompatibility({ compatibility: merged })
        .unwrap()
        .then((res) => toast.success(res.message))
        .catch((err) => toast.error(err?.data?.message));
      localStorage.removeItem("compatibility_parts_v1");
      navigate(nextRoute);
    } else {
      navigate(nextRoute);
    }
  };

  return (
    <div className="bg-[#FBECE5] min-h-screen">
      <div className="container max-w-5xl mx-auto py-10 px-6">
        <div className="flex flex-col justify-center items-center mb-6 ">
          <img className="w-[267px] " src={logo} alt="" />
          <p className=" text-xl md:text-[40px] font-medium font-poppins mt-5 text-[#242424] px-6">
            Discover Compatibility
          </p>
        </div>

        {partNumber === 1 && (
          <h2 className="text-lg mt-6 font-bold mb-4">
            Let&apos;s Discover Your Compatibility!
          </h2>
        )}

        {questions.map((q, i) => (
          <Question
            key={i}
            question={q}
            index={i}
            answers={answers}
            handleChange={handleChange}
          />
        ))}

        <div className="text-center mt-8">
          <AuthButton
            handleOnClick={handleNext}
            className={"max-w-80 py-2"}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : isLastPart ? "Submit" : "Next"}
          </AuthButton>
        </div>
      </div>
    </div>
  );
};

DiscoverCompatibilityPart.propTypes = {
  partNumber: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  nextRoute: PropTypes.string.isRequired,
  isLastPart: PropTypes.bool,
};

export default DiscoverCompatibilityPart;
