import React from "react";
import "./Vehicles.css";

function Vehicles() {

  const vehicles = [

    {
      name: "BMW Luxury Car",
      price: "₹2000/day",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e"
    },

    {
      name: "Royal Enfield Bike",
      price: "₹500/day",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39"
    },

    {
      name: "Range Rover SUV",
      price: "₹3000/day",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b"
    }

  ];


  // Load Razorpay SDK
  const loadRazorpay = () => {

    return new Promise((resolve) => {

      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);

      script.onerror = () => resolve(false);

      document.body.appendChild(script);

    });

  };


  // Booking + Payment
  const bookVehicle = async (vehicle) => {

    try {

      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {

        alert("Please Login First");

        return;

      }

      const loaded = await loadRazorpay();

      if (!loaded) {

        alert("Razorpay SDK Failed");

        return;

      }

      const date = prompt("Enter Booking Date");

      if (!date) {

        alert("Booking Date Required");

        return;

      }

      // Convert ₹2000/day => 200000 paise
      const amount = parseInt(vehicle.price.replace(/[^\d]/g, "")) * 100;

      const orderRes = await fetch(

        "/api/payment/create-ohttps://vehicle-rental-system-1-fca8.onrender.comrder",

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json"

          },

          body: JSON.stringify({

            amount

          })

        }

      );

      const order = await orderRes.json();
      console.log("Order Response:", order);
console.log("Status:", orderRes.status);
console.log("Amount:", amount);

      const options = {

        // 👇 Replace with your Test Key ID
        key: 'rzp_test_TAWT64G0a0WxYk',

        amount: order.amount,

        currency: "INR",

        name: "Vehicle Rental System",

        description: vehicle.name,

        order_id: order.id,

        handler: async function (response) {

          const bookingRes = await fetch(

            "https://vehicle-rental-system-1-fca8.onrender.com/api/booking/create",

            {

              method: "POST",

              headers: {

                "Content-Type": "application/json"

              },

              body: JSON.stringify({

                userId: user._id,

                vehicle: vehicle.name,

                price: vehicle.price,

                date: date,

                paymentId: response.razorpay_payment_id,

                paymentStatus: "Paid"

              })

            }

          );

          const bookingData = await bookingRes.json();

          if (bookingRes.ok) {

            alert("✅ Payment & Booking Successful");

          } else {

            alert(bookingData.message);

          }

        },

        prefill: {

          name: user.name,

          email: user.email

        },

        theme: {

          color: "#2563eb"

        }

      };

      const paymentObject = new window.Razorpay(options);

      paymentObject.open();

    }

    catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  };


  return (

    <div className="vehicles">

      <h1>Available Vehicles 🚗</h1>

      <div className="vehicle-container">

        {

          vehicles.map((v, index) => (

            <div className="vehicle-card" key={index}>

              <div className="vehicle-image">

                <img
                  src={v.image}
                  alt={v.name}
                />

                <span className="tag">
                  Available
                </span>

                <span className="rating">
                  ⭐ 4.8
                </span>

              </div>

              <div className="vehicle-info">

                <h2>{v.name}</h2>

                <div className="details">

                  <span>Self Drive</span>

                  <span>Petrol</span>

                </div>

                <p className="price">

                  {v.price}

                </p>

                <button onClick={() => bookVehicle(v)}>

                  Book Now

                </button>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default Vehicles;