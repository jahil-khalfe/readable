import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as MD from 'react-icons/lib/md';
import { updateCommentAction, upVote, downVote, deleteComments } from '../../containers/Home/actions';

export const Button = styled.button`
  padding: 0.6em 0.8em;
  margin: 0.7em 0.7em 0.7em 0;
  background: bisque;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  :active {
    background: white;
  }  
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Comment = styled.li`
  list-style: none;
  border-bottom: 3px solid white;
  padding: 1em 0;
`;

const Body = styled.div`
  margin: 0.7em 0;
  font-size: 18px;
`;

const DetailItem = styled.span`
  margin: 0.6em;
`;

const UpdateComment = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: row;
  padding: 1em 1em 1em 0.3em;
  > * {
  margin-right: 1em;
  padding: 1em;  
  }
`;


class Comments extends Component {
  state = {
    updateIsOpen: false,
    body: '',
  };

  toggleInput = () => {
    if (this.state.updateIsOpen === false) {
      this.setState({ updateIsOpen: true })
    } else {
      this.setState({ updateIsOpen: false })
    }
  };


  handleChange = e => {
    this.setState({ body: e.target.value })
  };

  handleCommentUpdate = () => {
    const updated = { ...this.props, body: this.state.body, timestamp: new Date().getTime() };
    console.dir(updated);
    this.props.updateComment(updated);
  };

  handleDelete = () => {
    this.props.deleteComment(this.props)
  };

  upVote = () => {
    this.props.upVoteComment(this.props);
  };

  downVote = () => {
    this.props.downVoteComment(this.props);
  };

  render() {
    const { body, timestamp, voteScore, author, deleted } = this.props;
    if (!deleted) return (
      <Comment>
        <UpdateComment isOpen={this.state.updateIsOpen}>
          <input type="text"
                 placeholder={body}
                 onChange={this.handleChange}
          />
          <button onClick={this.handleCommentUpdate}>Update</button>
          <button onClick={this.toggleInput}>Cancel</button>
        </UpdateComment>
        <Body>{body}</Body>
        <Details>
          <DetailItem>
            <Moment format="DD MMMM YYYY">{timestamp}</Moment>
          </DetailItem>
          <DetailItem>By {author}</DetailItem>
          <DetailItem>Likes {voteScore}</DetailItem>
        </Details>
        <div>
          <Button onClick={this.toggleInput}>
            <MD.MdCreate/>
          </Button>
          <Button title="Delete"
                  onClick={this.handleDelete}
          >
            <MD.MdDelete/>
          </Button>
          <Button title="Vote Down"
                  onClick={this.downVote}
          >
            <MD.MdThumbDown/>
          </Button>
          <Button title="Vote Up"
                  onClick={this.upVote}>
            <MD.MdThumbUp/>
          </Button>
        </div>
      </Comment>
    )
    return <h1>Comment Deleted</h1>
  }
}

const mapDispatchToProps = dispatch => ({
  updateComment: item => dispatch(updateCommentAction(item)),
  upVoteComment: item => dispatch(upVote(item)),
  downVoteComment: item => dispatch(downVote(item)),
  deleteComment: item => dispatch(deleteComments(item)),
});

export default connect(null, mapDispatchToProps)(Comments);