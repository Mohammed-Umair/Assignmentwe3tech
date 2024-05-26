import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../features/auth/authSlice";
import { fetchUsers, login as loginUser } from "../services/api";
import Form from "../components/Form";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { useNavigate } from "react-router";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const isExist = await fetchUsers(email);
      if (isExist) {
        const token = await loginUser(email, password);
        console.log("token", token);
        dispatch(loginAction({ token: token,email:email }));
        navigate("/dashboard");
      } else {
        setError("Unauthorized user. Please sign up first.");
      }
    } catch (error) {
      console.error("Failed to login", error);
      setError("Failed to login. Please check your credentials and try again.");
    }
    setShowModal(true);
  };
  const isFormValid = email !== "" && password !== "";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button
            type="submit"
            className={`p-2 text-white rounded ${
              isFormValid ? "bg-blue-500" : "bg-gray-500 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Sign In
          </button>
        </Form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
        {showModal && (
          <Modal
            title={error ? "Failed" : "Success"}
            footer={
              <button
                onClick={() => setShowModal(false)}
                className="p-2 bg-blue-500 text-white rounded"
              >
                Close
              </button>
            }
          >
            <p>{error}</p>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default SignIn;
