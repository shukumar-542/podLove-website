import { useNavigate } from "react-router";
import DiscoverCompatibilityPart from "../../component/Shared/DiscoverCompatibilityPartX";
import { part4Questions } from "../../constants/questionsData";
import { useEffect } from "react";

const DiscoverCompatibilityPart4 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("podlove-token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);
  return (
    <DiscoverCompatibilityPart
      partNumber={4}
      questions={part4Questions}
      nextRoute="/rating-yourself"
      isLastPart={true}
    />
  );
};

export default DiscoverCompatibilityPart4;
