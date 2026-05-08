import work2 from "../images/work2.png";
export default function Post() {
  return (
    <div className="card shadow-sm bg-stone-400 w-100">
      <figure>
        <img src={work2} alt="profilePic" />
      </figure>
      <div className="card-body">
        <h1 className="card-title">Post title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          reprehenderit veniam enim sapiente laborum nihil qui totam soluta
          ipsum dicta, quod molestiae eveniet et rem labore omnis. Soluta,
          architecto ex?
        </p>
        <div className="card-actions justify-center">
          <h6 className="text-sm">Author</h6>
        </div>
        <div className="card-actions justify-center">
          <button className="text-sm btn btn-primapry">edit</button>
          <button className="text-sm btn btn-primapry">Delete</button>
        </div>
      </div>
    </div>
  );
}
