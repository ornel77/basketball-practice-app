import { useEffect, useMemo, useState } from "react";
import {
  getCalendarMonthStat,
  getCalendarWeekStat,
  getYearStats,
} from "../../utils/stats";
import StatsItem from "./StatsItem";
import { useStatsStore } from "../../store/useStatsStore";
import LoaderContainer from "../common/LoaderContainer";
import { useNavigate } from "react-router-dom";

const tabPeriod = [
  { label: "1 Week", tabName: "7d" },
  { label: "1 Month", tabName: "1m" },
  { label: "1 Year", tabName: "1y" },
];

const StatsDashboard = () => {
  const [period, setPeriod] = useState("1m");
  const { stats, fetchStats, isLoading } = useStatsStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const sortedStat = [...stats].sort((a, b) => {
    const dateA = new Date(a.workoutDate);
    const dateB = new Date(b.workoutDate);
    return dateA - dateB;
  });
  const filteredData = useMemo(() => {
    if (period == "7d") return getCalendarWeekStat(sortedStat);
    if (period == "1m") return getCalendarMonthStat(sortedStat);
    if (period == "1y") return getYearStats(sortedStat);
  }, [period, sortedStat]);

  const handlePeriod = (tab) => {
    if (tab === period) return;
    setPeriod(tab);
  };

  return (
    <div className="pb-10">
      <h2 className="title">Statistics</h2>
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
        <>
          <div className=" flex gap-2.5 mb-5 bg-white p-1.5 rounded-xl">
            {tabPeriod.map((tab, i) => (
              <button
                key={i}
                onClick={() => handlePeriod(tab.tabName)}
                className={`btn-stats ${
                  period === tab.tabName ? "bg-red text-white" : ""
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            <StatsItem
              title="Field Goal"
              valueKey="fieldGoal"
              stats={filteredData}
              color="#F233EE"
            />
            <StatsItem
              title="3 Pointers"
              valueKey="threePoint"
              stats={filteredData}
              color="#F2E00E"
            />
            <StatsItem
              title="Layup Left"
              valueKey="layupLeft"
              stats={filteredData}
              color="#2133EE"
            />
            <StatsItem
              title="Layup Right"
              valueKey="layupRight"
              stats={filteredData}
              color="#EE2330"
            />
            <StatsItem
              title="Free Throw"
              valueKey="freeThrow"
              stats={filteredData}
              color="#F3E00E"
            />
          </div>
        </>
      )}
    </div>
  );
};
export default StatsDashboard;
