import Post from "./Post";

export default function ListOfPosts({ posts }) {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      {posts.map((el) => (
        <Post key={el.id} post={el} />
      ))}
    </div>
  );
}
