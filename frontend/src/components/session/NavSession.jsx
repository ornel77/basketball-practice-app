import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import FirstAngle from "./angles/FirstAngle";
import ThirdAngle from "./angles/ThirdAngle";
import SecondAngle from "./angles/SecondAngle";
import FourthAngle from "./angles/FourthAngle";
import FifthAngle from "./angles/FifthAngle";

const NavSession = ({children}) => {
  const [activeTab, setActiveTab] = useState("first")
  return (
    <nav className="">
      <ul className="flex justify-between gap-4">
        <li>
          <button onClick={() => setActiveTab('first')}>0° Left</button>
        </li>
        <li>
          <button onClick={() => setActiveTab('second')}>45° Left</button>
        </li>
        <li>
          <button onClick={() => setActiveTab('third')}>90°</button>
        </li>
        <li>
          <button onClick={() => setActiveTab('fourth')}>45° RIGHT</button>
        </li>
        <li>
          <button onClick={() => setActiveTab('fifth')}>0° RIGHT</button>
        </li>
      </ul>
      <div>
        {activeTab === "first" && <FirstAngle /> }
        {activeTab === "second" && <SecondAngle /> }
        {activeTab === "third" && <ThirdAngle /> }
        {activeTab === "fourth" && <FourthAngle /> }
        {activeTab === "fifth" && <FifthAngle /> }
      </div>
    </nav>
  );
};

export default NavSession;
