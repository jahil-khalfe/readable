import React, { Component } from 'react';
import PageContainer from '../PageContainer';
import PageContent from '../PageContent';
import NavBar from '../NavBar';

class AddPost extends  Component {
  render(){
    return(
      <PageContainer>
        <NavBar/>
        <PageContent>
          <h1>AddPost</h1>
        </PageContent>
      </PageContainer>

    )
  }
}

export default AddPost;