import { useNavigate } from "react-router";
import DiscoverCompatibilityPart from "../../component/Shared/DiscoverCompatibilityPartX";
import { part3Questions } from "../../constants/questionsData";
import { useEffect } from "react";

const DiscoverCompatibilityPart3 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("podlove-token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  return (
    <DiscoverCompatibilityPart
      partNumber={3}
      questions={part3Questions}
      nextRoute="/discover-compatibility-part4"
    />
  );
};

export default DiscoverCompatibilityPart3;
