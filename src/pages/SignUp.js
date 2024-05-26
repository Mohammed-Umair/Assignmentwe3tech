import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../services/api";
import Form from "../components/Form";
import Input from "../components/Input";
import { useNavigate } from "react-router";
import Modal from "../components/Modal";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await register(email, password);
      console.log("data", data);

      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to login", error);
      setError("Only defined users succeed registration.");
    }
    setShowModal(true);
  };
  const isFormValid = email !== "" && password !== "";
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
            placeholder="password"
          />

          <button
            type="submit"
            className={`p-2 text-white rounded ${
              isFormValid ? "bg-blue-500" : "bg-gray-500 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Sign Up
          </button>
        </Form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Sign In
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

export default SignUp;
