import React, { Component } from 'react';
import PageContainer from '../PageContainer';
import PageContent from '../PageContent';
import NavBar from '../NavBar';

class EditPost extends  Component {
  render(){
    return(
      <PageContainer>
        <NavBar/>
        <PageContent>
          <h1>EditPost</h1>
        </PageContent>
      </PageContainer>
    )
  }
}

export default EditPost;