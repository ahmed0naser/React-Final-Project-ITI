import AddBtn from "./components/AddBtn";
import ListOfPosts from "./components/ListOfPosts";
import { useEffect, useState } from "react";

// import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <ListOfPosts posts={posts} />
      <AddBtn />
      {/* <PostForm /> */}
    </>
  );
}
export default App;
