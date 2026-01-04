
import { useEffect } from "react";
import { useStatsStore } from "../../store/useStatsStore";
import HistoricCard from "./HistoricCard";

const HistoricContainer = () => {
  const {stats, fetchStats} = useStatsStore()

  useEffect(() => {
    fetchStats()
  }, [fetchStats])
  
  return (
    <>
      <h2 className="title">Historic</h2>

      <div
        className="mt-10
      "
      >
        {stats.map((stat, i) => (
          <HistoricCard stat={stat} key={i} />
        ))}
      </div>
    </>
  );
};

export default HistoricContainer;
