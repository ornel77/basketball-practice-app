import { useMemo, useState } from "react";
import { getCalendarMonthStat, getCalendarWeekStat, getYearStats } from "../../utils/stats";
import StatsItem from "./StatsItem"
import { useStatsStore } from "../../store/useStatsStore";
const StatsDashboard = () => {
  const [period, setPeriod] = useState("7d");
  const {isLoading, stats} = useStatsStore()
  
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

  return (
    <div className="pt-12 max-w-87.5 mx-auto w-full">
      <div className="flex max-w-xs mx-auto w-full gap-2.5 mb-5">
        
        <button
          onClick={() => setPeriod("7d")}
          className="border p-2 rounded-md bg-violet-600 text-white flex-1 cursor-pointer"
        >
          7d
        </button>
        <button
          onClick={() => setPeriod("1m")}
          className="border p-2 rounded-md bg-violet-600 text-white flex-1 cursor-pointer"
        >
          1m
        </button>
        <button
          onClick={() => setPeriod("1y")}
          className="border p-2 rounded-md bg-violet-600 text-white flex-1 cursor-pointer"
        >
          1y
        </button>
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
}
export default StatsDashboard