import React from "react";
import { connect } from "react-redux";
import "./styles.css";

function ConnectedApp({ posts }) {
  return (
    <div className="App">
      <h2>Posts list!</h2>
      {posts && posts.length > 0 && posts.map(post => <div>{post.title}</div>)}
    </div>
  );
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
