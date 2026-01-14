import { useEffect, useMemo, useState } from "react";
import {
  getCalendarMonthStat,
  getCalendarWeekStat,
  getYearStats,
} from "../../utils/stats";
import StatsItem from "./StatsItem";
import { useStatsStore } from "../../store/useStatsStore";
import LoaderContainer from "../common/LoaderContainer"

const StatsDashboard = () => {
  const [period, setPeriod] = useState("7d");
  const { stats, fetchStats, isLoading } = useStatsStore();
  
  useEffect(() => {
    if (!stats || stats.length === 0) {
      fetchStats();
    }
  }, [stats, fetchStats]);

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

  const tabPeriod = [
    { label: "1 week", tabName: "7d" },
    { label: "1 month", tabName: "1m" },
    { label: "1 year", tabName: "1y" },
  ];

  const handlePeriod = (tab) => {
    if (tab === period) return;
    setPeriod(tab);
  };

  if (isLoading) return <LoaderContainer />

  return (
    <div className="pt-12 pb-10">
      <div className="flex gap-2.5 mb-5 bg-white p-1.5 rounded-xl">
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
    </div>
  );
};
export default StatsDashboard;
