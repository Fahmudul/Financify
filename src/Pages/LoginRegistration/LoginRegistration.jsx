import React, { useEffect } from "react";
import "./LoginRegistration.css";
import axios from "axios";
import bcrypt from "bcryptjs";
import useAxios from "../../Hooks/useAxios";
import { useNavigate } from "react-router-dom";
const LoginRegistration = () => {
  const axiosRequest = useAxios();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const phoneEmail = form.phoneEmail.value;
    const password = form.password.value;
    // console.log(phoneEmail, password);
    //Check if user typed email or phone number
    const loginCredentials = {
      phoneEmail,
      password,
    };
    // Send login credentials to server
    const res = await axiosRequest.post(
      `/login-number-email`,
      loginCredentials
    );
    // console.log(res.data);
    if (res.data.success) {
      localStorage.setItem("user-phone", res.data.user.phone);
      // Navigating to dashboard
      navigate("/dashboard/home");
    } else {
      alert(res.data.message);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const saltRounds = 3;
    const salt = bcrypt.genSaltSync(saltRounds);
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;
    const appliedFor = form.buton.value;
    const pinRegex = /^\d{6}$/;
    if (!pinRegex.test(password)) {
      return alert("Invalid password, password should be 6 digits number");
    }
    const hashedPassword = bcrypt.hashSync(password, salt);

    // console.log(name, phone, email, password);
    const registerCredentials = {
      name,
      phone,
      email,
      hashedPassword,
      appliedFor,
    };
    // Send register credentials to server
    const res = await axiosRequest.post(`/request-user`, registerCredentials);
  };
  return (
    <div className="bg-[#5c5e79] min-h-screen flex justify-center items-center">
      <div>
        <div className="wrapper mb-10">
          <div className="card-switch">
            <label className="switch">
              <input type="checkbox" className="toggle" />
              <span className="slider" />
              <span className="card-side" />
              <div className="flip-card__inner">
                <div className="flip-card__front">
                  <div className="title">
                    <h1 className="text-2xl font-bold">
                      Welcome back to{" "}
                      <span className="text-[#4b4f8f] ">Financify</span>
                    </h1>
                    <p className="text-xl font-semibold mt-2">
                      Login to your account
                    </p>
                  </div>
                  {/* Login form */}
                  <form className="flip-card__form" onSubmit={handleLogin}>
                    <input
                      className="flip-card__input"
                      name="phoneEmail"
                      placeholder="Enter Mobile / Email"
                      type="text"
                      required
                    />
                    <input
                      className="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type="password"
                      required
                    />
                    <button className="flip-card__btn">Login</button>
                  </form>
                </div>
                <div className="flip-card__back">
                  <h1 className="text-2xl font-bold">
                    New to <span className="text-[#4b4f8f] ">Financify!</span>{" "}
                    Create an account
                  </h1>
                  {/* Register form */}

                  <form className="flip-card__form" onSubmit={handleRegister}>
                    <div className="wrapperr">
                      <div className="option">
                        <input
                          defaultChecked
                          defaultValue="User"
                          name="buton"
                          type="radio"
                          className="input"
                        />
                        <div className="buton">
                          <span className="span">User</span>
                        </div>
                      </div>
                      <div className="option">
                        <input
                          defaultValue="Agent"
                          name="buton"
                          type="radio"
                          className="input"
                        />
                        <div className="buton">
                          <span className="span">Agent</span>
                        </div>
                      </div>
                    </div>
                    <input
                      className="flip-card__input"
                      placeholder="Name"
                      type="name"
                      name="name"
                      required
                    />
                    <input
                      className="flip-card__input"
                      placeholder="Phone"
                      type="number"
                      name="phone"
                      required
                    />
                    <input
                      className="flip-card__input"
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                    />

                    <input
                      className="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                    <button className="flip-card__btn">Register!</button>
                  </form>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistration;
