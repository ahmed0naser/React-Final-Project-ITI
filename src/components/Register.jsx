import { useForm } from "react-hook-form";
export default function Register() {
  //register
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => console.log(data);
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

        <button className="btn btn-neutral mt-4">Sign up</button>
      </form>
    </div>
  );
}
