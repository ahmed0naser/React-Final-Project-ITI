import AddBtn from "./components/AddBtn";
import ListOfPosts from "./components/ListOfPosts";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Background from "./components/Background";
// import PostForm from "./components/PostForm";

export default function App() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  const editPost = (post) => {
    navigate(`/editPost/${post.id}`);
  };
  const deletePost = async (post) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?",
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3001/posts/${post.id}`);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <Background>
        <ListOfPosts
          posts={posts}
          editPost={editPost}
          deletePost={deletePost}
        />
      </Background>
      {user && <AddBtn />}
      {/* <PostForm /> */}
    </>
  );
}
