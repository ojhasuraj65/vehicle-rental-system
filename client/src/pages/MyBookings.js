import React, { useEffect, useState } from "react";
import "./MyBookings.css";

function MyBookings() {

  const [bookings, setBookings] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  // Vehicle Images
  const vehicleImages = {
    "BMW Luxury Car":
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",

    "Royal Enfield Bike":
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",

    "Range Rover SUV":
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80"
  };

  useEffect(() => {

    if (!user || !user._id) {
      alert("Please Login First");
      return;
    }

    fetch(`https://vehicle-rental-system-1-fca8.onrender.com/api/booking/mybookings/${user._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Bookings:", data);
        setBookings(data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [user]);

  // Cancel Booking
  const cancelBooking = async (id) => {

    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    try {

      const res = await fetch(
        `https://vehicle-rental-system-1-fca8.onrender.com/api/booking/cancel/${id}`,
        {
          method: "DELETE"
        }
      );

      const data = await res.json();

      alert(data.message);

      setBookings(bookings.filter(item => item._id !== id));

    } catch (error) {

      console.log(error);
      alert("Something went wrong");

    }

  };

  return (

    <div className="my-bookings">

      <h1>📅 My Bookings</h1>

      <p className="subtitle">
        View all your booked vehicles.
      </p>

      <div className="booking-container">

        {
          bookings.length === 0 ?

            <h2>No Booking Found 😔</h2>

            :

            bookings.map((item, index) => (

              <div className="booking-card" key={index}>

                <img
                  src={vehicleImages[item.vehicle]}
                  alt={item.vehicle}
                  className="booking-image"
                />

                <h2>{item.vehicle}</h2>

                <p>💰 {item.price}</p>

                <p>📅 {item.date}</p>

                <span className="status">
                  ✅ Confirmed
                </span>

                <button
                  className="cancel-btn"
                  onClick={() => cancelBooking(item._id)}
                >
                  Cancel Booking
                </button>

              </div>

            ))
        }

      </div>

    </div>

  );

}

export default MyBookings;