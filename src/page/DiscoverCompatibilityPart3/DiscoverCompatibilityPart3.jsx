import DiscoverCompatibilityPart from "../../component/Shared/DiscoverCompatibilityPartX";
import { part3Questions } from "../../constants/questionsData";

const DiscoverCompatibilityPart3 = () => {
  return (
    <DiscoverCompatibilityPart
      partNumber={3}
      questions={part3Questions}
      nextRoute="/discover-compatibility-part4"
    />
  );
};

export default DiscoverCompatibilityPart3;
