import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

const NavSession = ({children}) => {
  const [activeTab, setActiveTab] = useState("first")
  return (
    <nav className="flex justify-between gap-4">
      <ul>
        <li>
          <button onClick={() => setActiveTab('first')}>0° Left</button>
        </li>
      </ul>
      {children}
    </nav>
  );
};

export default NavSession;
