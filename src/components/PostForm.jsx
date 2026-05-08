import { useForm } from "react-hook-form";

export default function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
    </div>
  );
}
