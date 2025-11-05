import DiscoverCompatibilityPart from "../../component/Shared/DiscoverCompatibilityPartX";
import { part1Questions } from "../../constants/questionsData";

const DiscoverCompatibilityPart1 = () => {
  return (
    <DiscoverCompatibilityPart
      partNumber={1}
      questions={part1Questions}
      nextRoute="/discover-compatibility-part2"
    />
  );
};

export default DiscoverCompatibilityPart1;
