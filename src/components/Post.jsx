// import work2 from "../images/work2.png";
export default function Post({ post }) {
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
          <button className="text-sm btn btn-primapry">edit</button>
          <button className="text-sm btn btn-primapry">Delete</button>
        </div>
      </div>
    </div>
  );
}
