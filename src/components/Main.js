// Main.js
import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";

const seedRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = (s * a % m) / m);
};

const fetchAPI = (date) => {
  let result = [];
  const random = seedRandom(date.getTime());
  for (let i = 17; i <= 23; i++) {
    const rand = random();
    result.push(rand < 0.5 ? `${i}:00` : `${i}:30`);
  }
  return result;
};

const submitAPI = (formData) => true;

const updateTimes = (state, action) => {
  if (action.type === "UPDATE_DATE") {
    return { availableTimes: fetchAPI(action.payload) };
  }
  return state;
};

const Main = () => {
  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/booking" element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
