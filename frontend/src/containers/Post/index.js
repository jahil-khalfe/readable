import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSinglePost, getSinglePostComment } from '../../containers/Home/actions';
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
 `

class Post extends Component {
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
  getComments: item => dispatch(getSinglePostComment(item))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));

