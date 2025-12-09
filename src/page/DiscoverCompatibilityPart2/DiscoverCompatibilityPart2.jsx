import { useNavigate } from "react-router";
import DiscoverCompatibilityPart from "../../component/Shared/DiscoverCompatibilityPartX";
import { part2Questions } from "../../constants/questionsData";
import { useEffect } from "react";

const DiscoverCompatibilityPart2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("podlove-token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  return (
    <DiscoverCompatibilityPart
      partNumber={2}
      questions={part2Questions}
      nextRoute="/discover-compatibility-part3"
    />
  );
};

export default DiscoverCompatibilityPart2;
