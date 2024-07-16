
import React, { useState } from 'react';

const Booking = () => {
  const [haircutStyle, setHaircutStyle] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [music, setMusic] = useState('');
  const [cancellation, setCancellation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission logic here
    console.log('Booking:', { haircutStyle, selectedStyle, dateTime, music, cancellation });
  };

  return (
    <div>
      <h2 className="text-gray-700 text-6xl font-semibold">Booking</h2>
      <h3 className="text-2xl font-semibold mb-6">Make a reservation</h3>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label htmlFor="haircutStyle" className="block mb-1">Haircut Style</label>
          <input
            type="text"
            id="haircutStyle"
            value={haircutStyle}
            onChange={(e) => setHaircutStyle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="selectedStyle" className="block mb-1">Select Style</label>
          <select
            id="selectedStyle"
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select a style</option>
            <option value="braids">Braids</option>
            <option value="fade">Fade</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        <div>
          <label htmlFor="dateTime" className="block mb-1">Date and Time</label>
          <input
            type="datetime-local"
            id="dateTime"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="music" className="block mb-1">Music Option</label>
          <input
            type="text"
            id="music"
            value={music}
            onChange={(e) => setMusic(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Preferred music genre or playlist"
          />
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={cancellation}
              onChange={(e) => setCancellation(e.target.checked)}
              className="mr-2"
            />
            Allow cancellation
          </label>
        </div>

        <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default Booking;
