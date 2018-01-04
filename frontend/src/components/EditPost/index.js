import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSinglePost, getCategories } from '../../containers/Home/actions'
import styled from 'styled-components';
import PageContainer from '../PageContainer';
import PageContent from '../PageContent';
import NavBar from '../NavBar';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  label{
    margin-right: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  input, textarea, select {
    width: 300px;
  } 
  > * {
    margin: 1em;
  }
`;

class EditPost extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
    this.props.getCategories()
  }

  render() {
    const { singlePost, categories } = this.props;
    return (
      <PageContainer>
        <NavBar/>
        <PageContent>
          <h1>EditPost</h1>
          <FormContainer>
            <label htmlFor="">
              Title
              <input value={singlePost.title}
                     type="text"/>
            </label>
            <label htmlFor="">
              Content
              <textarea value={singlePost.body}/>
            </label>
            <label htmlFor="">
              Author
              <input value={singlePost.author}
                     type="text"/>
            </label>
            <label htmlFor="">
              Category
              <select name="" id="">
                {categories.map((item, i) =>
                  <option value={item.name}>{item.name}</option>)}
              </select>
            </label>
            <button>submit</button>
          </FormContainer>
        </PageContent>
      </PageContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(getSinglePost(id)),
  getCategories: () => dispatch(getCategories())
});

const mapStateToProps = state => ({
  categories: state.categories,
  singlePost: state.singlePost,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);