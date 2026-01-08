import { useEffect, useState, useMemo } from "react";
import Pricing from "../../component/Pricing/Pricing";
import FirstSurvey from "../../component/Modals/FirstSurvey";
import SecondSurvey from "../../component/Modals/SecondSurvey";
import After7DaysSurveyModal from "../../component/Modals/After7DaysSurvey";
import MatchCards from "./MatchCards";
import PodcastAction from "./PodcastAction";
import PodcastHistory from "./PodcastHistory";

import {
  useGetPodCastDetailsQuery,
  useGetSubscriptionsQuery,
  useGetUserQuery,
} from "../../redux/Api/AuthApi";
import { useGetAllPlanQuery } from "../../redux/Api/SubscriptionPlan";

const HomePage = () => {
  // local states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [is7DaysModalOpen, setIs7DaysModalOpen] = useState(false);

  // RTK Queries
  const { data: userData, isLoading: isUserLoading } = useGetUserQuery();
  const { data: podcastData, isLoading: isPodcastLoading } =
    useGetPodCastDetailsQuery();
  const { data: planData } = useGetAllPlanQuery();
  const { data: currentPlan } = useGetSubscriptionsQuery();

  const podcast = podcastData?.data?.podcast;
  const userId = userData?.data?._id;
  const isPrimaryUser = podcast?.primaryUser?._id === userId;
  const isComplete7Days =
    podcastData?.data?.user?.auth?.shareFeedback === "7days";

  const currentParticipant = useMemo(
    () => podcast?.participants?.find((p) => p?._id === userId),
    [podcast, userId]
  );
  const currentUserStatus = isPrimaryUser
    ? podcast?.isQuestionAnswer
    : currentParticipant?.isQuestionAnswer;

  // bio & chat access
  const isBioAvailable = currentPlan?.bioPreview;
  const isChatAvailable = currentPlan?.chatWindow;

  // survey
  const shouldShowFirstSurvey =
    podcast?.finishStatus === "1stFinish" && currentUserStatus !== "1stDone";

  const shouldShowSecondSurvey =
    podcast?.finishStatus === "2ndFinish" && currentUserStatus !== "2ndDone";

  const isTwoRoundsComplete =
    podcast?.finishStatus === "2ndFinish" && currentUserStatus === "2ndDone";

  useEffect(() => {
    if (!podcast || !userId) return;

    if (shouldShowFirstSurvey) {
      setIsModalOpen(true);
    }

    if (shouldShowSecondSurvey) {
      setIsSecondModalOpen(true);
    }

    if (isComplete7Days) {
      setIs7DaysModalOpen(true);
    }
  }, [
    podcast,
    userId,
    shouldShowFirstSurvey,
    shouldShowSecondSurvey,
    isComplete7Days,
  ]);

  return (
    <div className="bg-[#F7E8E1] min-h-screen pb-20">
      <div className="container mx-auto pt-14 px-4">
        <MatchCards
          podcast={podcast}
          userId={userId}
          isPrimaryUser={isPrimaryUser}
          isBioAvailable={isBioAvailable}
          isChatAvailable={isChatAvailable}
          isLoading={isPodcastLoading || isUserLoading}
        />
        <PodcastAction
          podcast={podcast}
          isPrimaryUser={isPrimaryUser}
          myParticipant={currentParticipant}
          isTwoRoundsComplete={isTwoRoundsComplete}
          isLoading={isPodcastLoading || isUserLoading}
        />
        <PodcastHistory userId={userId} />
        <div className="mt-20">
          <Pricing
            subscriptions={planData?.data}
            activePlan={userData?.data?.subscription?.plan}
          />
        </div>
      </div>

      <FirstSurvey
        isModalOpen={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        podcastId={podcast?._id}
      />
      <SecondSurvey
        isSecondModalOpen={isSecondModalOpen}
        handleSecondOk={() => setIsSecondModalOpen(false)}
        podcastId={podcast?._id}
      />
      <After7DaysSurveyModal
        is7DaysModalOpen={is7DaysModalOpen}
        handle7DaysOk={() => setIs7DaysModalOpen(false)}
        podcastId={podcast?._id}
      />
    </div>
  );
};

export default HomePage;
