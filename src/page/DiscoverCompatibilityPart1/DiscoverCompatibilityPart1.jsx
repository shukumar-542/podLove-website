import { useNavigate } from "react-router";
import DiscoverCompatibilityPart from "../../component/Shared/DiscoverCompatibilityPartX";
import { part1Questions } from "../../constants/questionsData";
import { useEffect } from "react";

const DiscoverCompatibilityPart1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("podlove-token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  return (
    <DiscoverCompatibilityPart
      partNumber={1}
      questions={part1Questions}
      nextRoute="/discover-compatibility-part2"
    />
  );
};

export default DiscoverCompatibilityPart1;
