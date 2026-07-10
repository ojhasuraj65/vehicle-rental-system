
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

  return (

    <div className="home">

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-text">

          <span className="badge">
            🚗 India's Trusted Vehicle Rental Platform
          </span>

          <h1>

            <span>Rent Your Dream Vehicle Anytime, Anywhere </span>

          </h1>

          <p>

            Choose from hundreds of luxury cars, bikes and SUVs.
            Affordable prices, instant booking and secure payments.

          </p>

          <div className="hero-buttons">

            <Link to="/vehicles">
              <button className="primary-btn">
                🚘 Explore Vehicles
              </button>
            </Link>

            <Link to="/register">
              <button className="secondary-btn">
                Create Account
              </button>
            </Link>

          </div>

          <div className="hero-stats">

            <div>
              <h2>500+</h2>
              <p>Vehicles</p>
            </div>

            <div>
              <h2>2500+</h2>
              <p>Customers</p>
            </div>

            <div>
              <h2>4500+</h2>
              <p>Bookings</p>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury Car"
          />

        </div>

      </section>

      {/* SERVICES */}

      <section className="services">

        <h1>Why Choose Us?</h1>

        <p className="subtitle">

          Experience premium vehicle rental with world-class service.

        </p>

        <div className="service-box">

          <div className="service-card">

            <h2>🚘</h2>

            <h3>Premium Vehicles</h3>

            <p>

              Luxury cars, bikes and SUVs maintained in top condition.

            </p>

          </div>

          <div className="service-card">

            <h2>⚡</h2>

            <h3>Fast Booking</h3>

            <p>

              Book your favourite ride within just a few clicks.

            </p>

          </div>

          <div className="service-card">

            <h2>🔒</h2>

            <h3>Secure Payment</h3>

            <p>

              Safe and trusted payment gateway for all transactions.

            </p>

          </div>

          <div className="service-card">

            <h2>📞</h2>

            <h3>24×7 Support</h3>

            <p>

              Our support team is always ready to help you.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h1>

          Ready To Ride?

        </h1>

        <p>

          Book your favourite vehicle today and enjoy your journey.

        </p>

        <Link to="/vehicles">

          <button>

            Book Now →

          </button>

        </Link>

      </section>

    </div>

  );

}

export default Home;
