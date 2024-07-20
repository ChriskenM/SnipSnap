import React, { useState, useEffect } from 'react';
import { getUserBookings, cancelBooking } from '../services/api';

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await getUserBookings();
      setBookings(response.data);
    } catch (error) {
      setError('Error fetching bookings');
    }
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      await cancelBooking(bookingId);
      fetchBookings(); // Refresh the list after cancellation
    } catch (error) {
      setError('Error cancelling booking');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Your Bookings</h2>
      {error && <p className="text-red-500 mb-3">{error}</p>}
      {bookings.map((booking) => (
        <div key={booking._id} className="bg-white shadow-md rounded-lg p-6 mb-4 pb-2">
          <h3 className="text-xl font-semibold mb-2">{booking.hairstyleName}</h3>
          <p className="mb-1"><strong>Type:</strong> {booking.hairstyleType}</p>
          <p className="mb-1"><strong>Date:</strong> {new Date(booking.dateTime).toLocaleString()}</p>
          <p className="mb-1"><strong>Music:</strong> {booking.music || 'Not specified'}</p>
          <p className="mb-3"><strong>Status:</strong> {booking.cancellation ? 'Cancelled' : 'Active'}</p>
          {!booking.cancellation && (
            <button
              onClick={() => handleCancelBooking(booking._id)}
              className=" bg-secondary-100 text-secondary-200 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 cursor-pointer"
            >
              Cancel Booking
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookingsList;