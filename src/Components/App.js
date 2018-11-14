import React, { Component } from 'react';
import CommentBox from 'Components/CommentBox';
import CommentList from 'Components/CommentList';
class App extends Component {
  render() {
    return (
      <div>
          <CommentBox />
          <CommentList />
          i am the app component
      </div>
    )
  }
}
export default App;
