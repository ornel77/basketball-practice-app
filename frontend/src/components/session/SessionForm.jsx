import SliderInput from "./SliderInput";
import NavSession from "./NavSession";
import { useEffect, useState } from "react";

import useInputRangeStore from "../../store/useInputRangeStore";
import useInputNumberStore from "../../store/useInputNumberStore";
import useRecapStore from "../../store/useRecapStore";

import { generatePercent } from "../../utils/generatePercent";

import { SPOT_ID } from "../../utils/data";
import { useNavigate } from "react-router-dom";

const SessionForm = () => {
  const navigate = useNavigate();
  // STORE
  const { inputRangeValues, resetRangeValue } = useInputRangeStore();
  const { inputNumberValues, initializeValues, resetNumberValue } =
    useInputNumberStore();
  const { setRecap, recap } = useRecapStore();

  const currentDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(currentDate)
    .split("/")
    .reverse()
    .join("-");

  // STATE
  const [selectedDate, setSelectedDate] = useState(formattedDate);
  const [comment, setComment] = useState("");

  useEffect(() => {
    initializeValues(SPOT_ID, 0);
  }, [initializeValues, SPOT_ID]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const average = generatePercent(inputNumberValues, inputRangeValues);
    setRecap({ ...average, sessionDate: selectedDate, comment });
    // console.log({ ...average, selectedDate });
    // console.log(inputNumberValues);
    console.log(recap);
    resetNumberValue();
    resetRangeValue();
    navigate("/recap");
  };

  const handleInputDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <section className="flex flex-wrap gap-6 mb-8">
        <NavSession />
      </section>

      <section className="bg-white rounded-lg mb-8 p-4 shadow-lg">
        <h2 className="title">layup and free throw</h2>
        <div className="flex flex-col gap-5">
          <SliderInput
            label={"Layup Left"}
            min={"0"}
            step={"1"}
            max={"20"}
            id={"ll"}
            name={"ll"}
          />
          <SliderInput
            label={"Layup Right"}
            min={"0"}
            step={"1"}
            max={"20"}
            id={"lr"}
            name={"lr"}
          />
          <SliderInput
            label={"Free Throw"}
            min={"0"}
            step={"1"}
            max={"10"}
            id={"ft"}
            name={"ft"}
          />
        </div>
      </section>
      <textarea
        name="comment"
        id="comment"
        className="w-full rounded-lg focus:outline-none shadow-lg mb-6 px-4 py-3 h-20"
        placeholder="Rapport..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <input
        type="date"
        className="w-full inline-block mb-10 p-4 rounded-lg focus:outline-none shadow-lg"
        value={selectedDate}
        onChange={handleInputDateChange}
      />
      <button className="px-4 py-3 bg-red w-full uppercase text-white font-bold text-xl rounded-lg shadow-lg bottom-20 left-0 z-10 sticky opacity-90">
        Finished
      </button>
    </form>
  );
};

export default SessionForm;
