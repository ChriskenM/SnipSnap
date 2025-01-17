// src/pages/Booking.js
import React, { useState } from 'react';
import { createBooking } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [hairstyleName, setHairstyleName] = useState('');
  const [hairstyleType, setHairstyleType] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [music, setMusic] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createBooking({ hairstyleName, hairstyleType, dateTime, music });
      navigate('/bookings');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred while creating the booking');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Book an Appointment</h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="hairstyleName" className="block mb-2 font-medium">Hairstyle Name</label>
          <input
            type="text"
            id="hairstyleName"
            value={hairstyleName}
            onChange={(e) => setHairstyleName(e.target.value)}
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="hairstyleType" className="block mb-2 font-medium">Hairstyle Type</label>
          <select
            id="hairstyleType"
            value={hairstyleType}
            onChange={(e) => setHairstyleType(e.target.value)}
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a style</option>
            <option value="braids">Braids</option>
            <option value="fade">Fade</option>
            <option value="custom">Custom</option>
          </select>
        </div>
        <div>
          <label htmlFor="dateTime" className="block mb-2 font-medium">Date and Time</label>
          <input
            type="datetime-local"
            id="dateTime"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="music" className="block mb-2 font-medium">Music Preference</label>
          <input
            type="text"
            id="music"
            value={music}
            onChange={(e) => setMusic(e.target.value)}
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Preferred music genre or playlist"
          />
        </div>
        <div className="mt-12 flex justify-center">
          <button
            type="submit"
            className="btn px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300"
          >
            Book Appointment
          </button>
        </div>
      </form>

      <div className="max-w-2xl space-y-4 pb-2 mt-12 border-b border-gray-200">
        <p className='pb-2'>
           Booking Your Perfect Hairstyle with SnipSnap
        </p>
        <p className='pb-2'>
        Welcome to the SnipSnap booking page, where your journey to fabulous hair begins! We've designed our booking process to be simple, intuitive, and tailored to your needs. Whether you're looking for a quick trim or an elaborate style for a special occasion, we've got you covered.
        </p>
        <p>
        We understand that plans can change, which is why we've made our cancellation process just as straightforward as our booking process. You can cancel or reschedule your appointment up to 24 hours before the scheduled time without any penalty. To do so, simply log into your SnipSnap account, go to your bookings, and select the appointment you wish to modify. Follow the prompts to cancel or choose a new date and time.
        </p>
      </div>
      <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">SS</h4>

    </div>
  );
};

export default Booking;