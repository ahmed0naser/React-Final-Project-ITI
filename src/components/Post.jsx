// import work2 from "../images/work2.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function Post({ post, editPost, deletePost }) {
  const { user } = useContext(AuthContext);

  const isAuthor = user?.id === post.userId;
  return (
    <div className="card shadow-sm bg-stone-700 w-150 md:w-96">
      <figure>
        <img className="w-full" src={post.imgURL} alt="profilePic" />
      </figure>
      <div className="card-body">
        <h1 className="card-title text-3xl font-bold text-black">
          {post.title}
        </h1>
        <p className="break-words whitespace-normal text-lg">
          {post.description}
        </p>
        <div className="card-actions justify-center">
          <h6 className="text-sm">Author: {post.author}</h6>
        </div>
        <div className="card-actions justify-center">
          {isAuthor && (
            <>
              <button
                className="text-sm btn btn-primapry"
                onClick={() => editPost(post)}
              >
                edit
              </button>
              <button
                className="text-sm btn btn-primapry"
                onClick={() => deletePost(post)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
