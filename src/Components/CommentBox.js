import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
class CommentBox extends Component {

  state = {comment: ''}

  handleChange = (event) => {
    this.setState({comment : event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // todo : call action creator

    this.props.save_comment(this.state.comment)

    // empty textarea
    this.setState({comment : ''});
  }

  render() { 
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <h4> Add a comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment}/>
        <div>
            <button>
              Submit Comment
            </button>
        </div>
      </form>
      <button onClick={this.props.fetchComments} className="fetch-comments">
        fetch comments
      </button>
    </div>

    )
  }
}

export default connect(null, actions)(CommentBox);
