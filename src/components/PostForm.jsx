import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
export default function PostForm() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    let img = "/default.png";
    if (data.imgURL) {
      img = data.imgURL;
    }
    try {
      const response = await axios.post("http://localhost:3001/posts", {
        title: data.title,
        description: data.description,
        imgURL: img,
        author: "test for now",
        userId: user.id,
      });
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      console.log(error);
      toast.error("something went wrong", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl ">New Post</h1>
          {/* Title */}
          <input
            className="input"
            placeholder="Title"
            {...register("title", {
              required: "Please provide a title",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
              maxLength: {
                value: 50,
                message: "Title must be less than 50 characters",
              },
            })}
          />
          {errors.title && (
            <label className="text-red-500 text-sm">
              {errors.title.message}
            </label>
          )}

          {/* Description */}
          <textarea
            className="textarea h-32 grow"
            placeholder="Description"
            {...register("description", {
              required: "Please provide a description",
              minLength: {
                value: 5,
                message: "Description must be at least 5 characters",
              },
            })}
          />
          {errors.description && (
            <label className="text-red-500 text-sm">
              {errors.description.message}
            </label>
          )}
          <input
            className="input"
            placeholder="image-url (optional)"
            {...register("imgURL", {
              pattern: {
                value: /^(https?:\/\/).+\.(jpg|jpeg|png|webp|gif)$/i,
                message: "Enter a valid image URL",
              },
            })}
          />

          {errors.imgURL && (
            <label className="text-red-500 text-sm">
              {errors.imgURL.message}
            </label>
          )}

          <input className="btn btn-neutral mt-4" type="submit" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
