import React from "react";

import SliderInput from "./SliderInput";

import NavSession from "./NavSession";

const SessionForm = () => {
  return (
    <form action="">
      <section className="flex flex-wrap gap-6 mb-8">
        <NavSession>

        </NavSession>
        
      </section>

      <section className="bg-white rounded-md mb-8">
        <h2 className="text-center text-2xl uppercase font-bold mb-4">
          layup and free throw
        </h2>
        <div>
          <SliderInput />
          <SliderInput />
          <SliderInput />
        </div>
      </section>
      <button className="px-4 py-3 bg-red w-full uppercase text-white font-bold text-xl rounded-lg">
        Finished
      </button>
    </form>
  );
};

export default SessionForm;
