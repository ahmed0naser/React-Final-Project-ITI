// import work2 from "../images/work2.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function Post({ post, editPost, deletePost }) {
  const { user } = useContext(AuthContext);

  const isAuthor = user?.id === post.userId;
  return (
    <div className="card shadow-sm bg-stone-400 w-100">
      <figure>
        <img className="w-full" src={post.imgURL} alt="profilePic" />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{post.title}</h1>
        <p className="break-words whitespace-normal">{post.description}</p>
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
