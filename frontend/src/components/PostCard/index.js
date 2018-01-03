import React, { Component } from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import * as MD from 'react-icons/lib/md';
import Heading from '../../components/Heading';
import { CardContainer, Card, Item } from '../../components/Card';

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


class PostCard extends Component {
  render() {
    const { category, id, timestamp, author, voteScore, title } = this.props;
    return (
      <CardContainer>
        <Card>
          <Heading>Title</Heading>
          <Link to={`/${category}/${id}`}>
            <Item>{title}</Item>
          </Link>
          <Heading>Date</Heading>
          <Moment format="DD MMMM YYYY">
            <Item>{new Date(timestamp).toString()}</Item>
          </Moment>
          <Heading>Author</Heading>
          <Item>{author}</Item>
          <Heading>Votes</Heading>
          <Item>{voteScore}</Item>
          <div>
            <Link to={`/post/edit/${id}`} title="Edit">
              <Button>
                <MD.MdCreate/>
              </Button>
            </Link>
            <Button title="Delete">
              <MD.MdDelete/>
            </Button>
            <Button title="Vote Down">
              <MD.MdThumbDown/>
            </Button>
            <Button title="Vote Up">
              <MD.MdThumbUp/>
            </Button>
          </div>
        </Card>
      </CardContainer>
    )
  }
}

export default PostCard;

