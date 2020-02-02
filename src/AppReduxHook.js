import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { ADD_POST } from "./store/constants/action-types";

function App() {
  const posts = useSelector(state => state.posts);

  const disparch = useDispatch();

  return (
    <div className="App">
      <h2>Posts list using redux hook!</h2>
      {posts &&
        posts.length > 0 &&
        posts.map(post => <div key={post.title}>{post.title}</div>)}
      <button
        onClick={() =>
          disparch({
            type: ADD_POST,
            payload: { title: `NEW RANDOM POST ${Date.now()}` }
          })
        }
      >
        ADD
      </button>
    </div>
  );
}

export default App;
