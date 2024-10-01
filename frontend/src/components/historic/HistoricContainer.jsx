
import { STATS } from "../../utils/data";
import HistoricCard from "./HistoricCard";

const HistoricContainer = () => {
  const sortedStat = STATS.sort((a,b) => {
    const dateA = new Date(a.sessionDate)
    const dateB = new Date(b.sessionDate)
    return dateB - dateA
  })
 
  return (
    <>
      <h2 className="title">Historic</h2>
      
      <div className="mt-10
      ">
      {sortedStat.map((stat, i) => (
        <HistoricCard stat={stat} key={i} />
      ))}
      </div>
    </>
  );
};

export default HistoricContainer;
