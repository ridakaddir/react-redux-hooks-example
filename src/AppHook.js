import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { ADD_POST } from "./store/constants/action-types";

function App() {
  const posts = useSelector(state => state.posts);

  const disparch = useDispatch();

  return (
    <div className="App">
      <h2>Posts list!</h2>
      {posts && posts.length > 0 && posts.map(post => <div>{post.title}</div>)}
      <button
        onClick={() =>
          disparch({ type: ADD_POST, payload: { title: "NEW TITLE" } })
        }
      >
        ADD
      </button>
    </div>
  );
}

export default App;
