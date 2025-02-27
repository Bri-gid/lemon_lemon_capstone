// BookingForm.js
import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="book-date">Choose Date:</label>
            <input id="book-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="book-time">Choose Time:</label>
            <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)} required>
              <option value="">Select a Time</option>
              {availableTimes.map((availableTime) => (
                <option key={availableTime} value={availableTime}>{availableTime}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="book-guests">Number of Guests:</label>
            <input id="book-guests" type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="book-occasion">Occasion:</label>
            <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option value="">Select Occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <div className="btnReceive">
            <input type="submit" value="Make Your Reservation" />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default BookingForm;