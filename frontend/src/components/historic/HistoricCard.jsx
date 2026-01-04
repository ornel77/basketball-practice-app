/* eslint-disable react/prop-types */

import { HISTORIC_HEADING } from "../../utils/data";

const HistoricCard = ({ stat }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateObj = new Date(stat.workoutDate);
  const formatedDate = dateObj.toLocaleDateString("en-US", options);

  return (
    <article className="card">
      <p className="text-red font-bold text-xs mb-1 italic">{formatedDate} </p>
      <div className="grid grid-cols-5 gap-8 uppercase text-xs font-bold">
        {HISTORIC_HEADING.map((item, i) => (
          <span key={i}> {item} </span>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-8 mb-1 text-sm">
        <span> {Math.round(stat.fieldGoal)}% </span>
        <span> {Math.round(stat.threePoint)}% </span>
        <span> {Math.round(stat.layupLeft)}% </span>
        <span> {Math.round(stat.layupRight)}% </span>
        <span> {Math.round(stat.freeThrow)}% </span>
      </div>
      <hr />
      <p className="mt-1"> {stat.comment} </p>
    </article>
  );
};

export default HistoricCard;
