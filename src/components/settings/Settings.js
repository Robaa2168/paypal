import React from "react";
import SettingsHeader from "./SettingsHeader";
import { Route, Routes } from "react-router-dom";
// import Account from "./Account";
import Security from "./Security";

function Settings() {
  return (
    <div>
      <SettingsHeader />
      <Routes>
        <Route path="/" element={<Security />} />
      </Routes>
    </div>
  );
}

export default Settings;
