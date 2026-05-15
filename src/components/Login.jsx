import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email: data.emailLogin,
        password: data.PasswordLogin,
      });

      login(response.data.user);
      navigate("/");
    } catch (error) {
      toast.error("something went wrong please enter valid credenetials", {
        position: "bottom-right",
      });
    }
  };
  return (
    <div className="flex justify-center items-center mt-15">
      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <legend className="fieldset-legend text-2xl">Login</legend>

        <label className="label">Email</label>
        <input
          className="input"
          placeholder="Email"
          {...register("emailLogin", {
            required: "Please provide an email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.emailLogin && (
          <label className="text-red-500 text-sm">
            {errors.emailLogin.message}
          </label>
        )}

        <label className="label">Password</label>
        <input
          className="input"
          placeholder="Password"
          type="password"
          {...register("PasswordLogin", {
            required: "Please provide a password",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 50,
              message: "Password must be less than 50 characters",
            },
          })}
        />
        {errors.PasswordLogin && (
          <label className="text-red-500 text-sm">
            {errors.PasswordLogin.message}
          </label>
        )}
        <button type="submit" className="btn btn-neutral mt-4">
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
