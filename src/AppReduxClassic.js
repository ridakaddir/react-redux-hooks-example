import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import { ADD_POST } from "./store/constants/action-types";

function ConnectedApp({ posts, addPost }) {
  return (
    <div className="App">
      <h2>Posts list using Redux Classic!</h2>
      {posts &&
        posts.length > 0 &&
        posts.map(post => <div key={post.title}>{post.title}</div>)}
      <button
        onClick={() => addPost({ title: `NEW RANDOM POST ${Date.now()}` })}
      >
        ADD
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: payload => dispatch({ type: ADD_POST, payload })
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedApp);

export default App;
