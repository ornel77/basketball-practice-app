import { FaArrowLeft } from "react-icons/fa";
import RecapCard from "./RecapCard";
import { avatar } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useStatsStore } from "../../store/useStatsStore";
import { useAuthStore } from "../../store/useAuthStore";

const RecapContainer = () => {
  const { lastCreatedStat, stats } = useStatsStore();
  const { authUser } = useAuthStore();
  const sortedStat = [...stats].sort((a, b) => {
    const dateA = new Date(a.workoutDate);
    const dateB = new Date(b.workoutDate);
    return dateA - dateB;
  });

  // Find index of current stats
  const currentIndex = sortedStat.findIndex(
    (stat) => stat._id === lastCreatedStat?._id
  );

  // Prev stat
  const prevStat = currentIndex > 0 ? sortedStat[currentIndex - 1] : null

  const navigate = useNavigate();

  return (
    <div>
      {/* Redirect button */}
      <div>
        <button onClick={() => navigate("/session")}>
          <FaArrowLeft size={28} />
        </button>
      </div>

      {/* Avatar */}
      <div className="flex justify-center py-4">
        <img src={avatar} alt="" className="w-24" />
      </div>

      <h2 className="title">
        good job <span>{authUser.firstname}</span>
      </h2>
      {lastCreatedStat ? (
        <div>
          <RecapCard
            percent={lastCreatedStat?.fieldGoal}
            title={"Field Goal %"}
            delay={0.2}
            prevPercent={prevStat?.fieldGoal}
          />
          <RecapCard
            percent={lastCreatedStat?.threePoint}
            title={"Three Point %"}
            delay={0.4}
            prevPercent={prevStat?.threePoint}
          />
          <RecapCard
            percent={lastCreatedStat?.layupLeft}
            title={"Layup Left %"}
            delay={0.6}
            prevPercent={prevStat?.layupLeft}
          />
          <RecapCard
            percent={lastCreatedStat?.layupRight}
            title={"Layup Right %"}
            delay={0.8}
            prevPercent={prevStat?.layupRight}
          />
          <RecapCard
            percent={lastCreatedStat?.freeThrow}
            title={"Free Throw %"}
            delay={1}
            prevPercent={prevStat?.freeThrow}
          />
        </div>
      ) : (
        <p className="flex justify-center items-center">No data yet :(</p>
      )}
    </div>
  );
};
export default RecapContainer;
