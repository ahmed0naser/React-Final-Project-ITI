import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");
  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/register", {
        email: data.email,
        password: data.password,
        name: data.name,
      });
      console.log(response);
      login(response.data.user);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("something went wrong try again later", {
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
        <legend className="fieldset-legend text-2xl">Register</legend>

        <label className="label">Email</label>
        <input
          className="input"
          placeholder="Email"
          {...register("email", {
            required: "Please provide an email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <label className="text-red-500 text-sm">{errors.email.message}</label>
        )}

        <label className="label">Name</label>
        <input
          className="input"
          placeholder="Name"
          type="text"
          {...register("name", {
            pattern: {
              value: /^[A-Za-z ]+$/i,
              message: "Invalid name use characters only",
            },
            required: "Please provide a name",
            minLength: {
              value: 3,
              message: "Name must be atleast 3 characters",
            },
            maxLength: {
              value: 50,
              message: "Name must be less than 50 characters",
            },
          })}
        />
        {errors.name && (
          <label className="text-red-500 text-sm">{errors.name.message}</label>
        )}

        <label className="label">Password</label>
        <input
          className="input"
          placeholder="Password"
          type="password"
          {...register("password", {
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
        {errors.password && (
          <label className="text-red-500 text-sm">
            {errors.password.message}
          </label>
        )}
        <label className="label">Confirm Password</label>
        <input
          className="input"
          placeholder="Confirm Password"
          type="password"
          {...register("confirm", {
            required: "password must match",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 50,
              message: "Password must be less than 50 characters",
            },
            validate: (val) => val === password || "password must match",
          })}
        />
        {errors.confirm && (
          <label className="text-red-500 text-sm">
            {errors.confirm.message}
          </label>
        )}

        <button type="submit" className="btn btn-neutral mt-4">
          Sign up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
