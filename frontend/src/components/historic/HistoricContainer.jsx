import { useEffect } from "react";
import { useStatsStore } from "../../store/useStatsStore";
import HistoricCard from "./HistoricCard";
import LoaderContainer from "../common/LoaderContainer";
import { useNavigate } from "react-router-dom";

const HistoricContainer = () => {
  const { stats, fetchStats, isLoading } = useStatsStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return (
    <div>
      <h2 className="title">Historic</h2>
      {isLoading && <LoaderContainer />}

      {stats.length <= 0 ? (
        <div className="text-center mt-20 space-y-9">
          <p className="capitalize font-semibold text-xl">No data yet.</p>
          <img src="/empty_court.png" alt="empty-court" />
          <button
            className="cursor-pointer inline-block bg-green text-white py-2 px-6 rounded-full text-lg font-bold"
            onClick={() => navigate("/session")}
          >
            Start your training
          </button>
        </div>
      ) : (
        <div
          className="mt-10
      "
        >
          {stats.map((stat, i) => (
            <HistoricCard stat={stat} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoricContainer;
