import DiscoverCompatibilityPart from "../../component/Shared/DiscoverCompatibilityPartX";
import { part4Questions } from "../../constants/questionsData";

const DiscoverCompatibilityPart4 = () => {
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
