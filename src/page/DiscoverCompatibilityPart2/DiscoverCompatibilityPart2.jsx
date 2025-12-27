import DiscoverCompatibilityPart from "../../component/Shared/DiscoverCompatibilityPartX";
import { part2Questions } from "../../constants/questionsData";

const DiscoverCompatibilityPart2 = () => {
  return (
    <DiscoverCompatibilityPart
      partNumber={2}
      questions={part2Questions}
      nextRoute="/discover-compatibility-part3"
    />
  );
};

export default DiscoverCompatibilityPart2;
