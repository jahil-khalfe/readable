import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSinglePost, getSinglePostComment, addCommentAction } from '../../containers/Home/actions';
import PageContainer from '../../components/PageContainer';
import PageContent from '../../components/PageContent';
import Heading from '../../components/Heading';
import Comments from '../../components/Comment';
import PostCard from '../../components/PostCard';
import styled from "styled-components";

const CommentList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
 `;

const AddComment = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  > * {
  margin-right: 1em;
  padding: 1em;
  }
`;

class Post extends Component {
  state = {
    addCommentIsOpen: true,
    newComment: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
    this.props.getComments(id);
  }

  componentDidUpdate() {
    if (Object.keys(this.props.singlePost).length === 0) {
      this.props.history.push("/");
    }
  }

  toggleInputComment = () => {
    if (this.state.addCommentIsOpen === false) {
      this.setState({ addCommentIsOpen: true })
    } else {
      this.setState({ addCommentIsOpen: false })
    }
  };

  upDateAuthor = e => {
    this.setState({newComment:{...this.state.newComment, author: e.target.value}})
  };

  upDateComment = e => {
    this.setState({newComment:{...this.state.newComment, body: e.target.value}})
  };

  handleCommentSubmit = () => {
    const newComment = {
      ...this.state.newComment,
      voteScore: 0,
      timestamp: new Date().getTime(),
      id: `id:${new Date().getTime()}`,
      deleted: false,
      parentDeleted: false,
      parentId: this.props.comments[0].parentId
    };
    console.dir(newComment);
    this.props.addComment(newComment);
  };

  render() {
    const { singlePost, comments } = this.props;
    return (
      <PageContainer>
        <PageContent>
          <Heading>{singlePost.title}</Heading>
          <PostCard {...singlePost}/>
          <Heading>Comments</Heading>
          <CommentList>
            {comments.map((item, i) =>
              <Comments {...item} key={i}/>)}
          </CommentList>
          <div>
            <button onClick={this.toggleInputComment}>Add Comment</button>
            <AddComment isOpen={this.state.addCommentIsOpen}>
              <label htmlFor="Author">
                Author
                <input type="text"
                       onChange={this.upDateAuthor}
                />
              </label>
              <label htmlFor="Comment">
                Comment
                <input type="text"
                        onChange={this.upDateComment}
                />
              </label>
              <button onClick={this.handleCommentSubmit}>Add</button>
              <button onClick={this.toggleInputComment}>Cancel</button>
            </AddComment>
          </div>
        </PageContent>
      </PageContainer>
    )
  }
}

const mapStateToProps = state => ({
  singlePost: state.singlePost,
  comments: state.singlePostComments
});

const mapDispatchToProps = dispatch => ({
  getPost: item => dispatch(getSinglePost(item)),
  getComments: item => dispatch(getSinglePostComment(item)),
  addComment: item => dispatch(addCommentAction(item)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));

