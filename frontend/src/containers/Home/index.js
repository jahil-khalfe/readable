import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts, getCategories } from "./actions";
import PageContainer from '../../components/PageContainer';
import PageContent from '../../components/PageContent';
import SortButton from '../../components/SortButton';
import ButtonContainer from '../../components/ButtonContainer';
import CatHeading from '../../components/CatHeading';
import Heading from '../../components/Heading';
import PostCard from '../../components/PostCard';
import NavBar from '../../components/NavBar';
import '../../theme/globals';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderList: [],
    };
  }

  componentDidMount() {
    this.props.loadPosts();
    this.props.loadCategories();
  }

  componentWillReceiveProps(newProps) {
    this.setState({ renderList: newProps.posts });
  }

  sortPostsByDate = () => {
    const tempSort = [].concat(this.props.posts)
      .sort((x, y) => {
        return x.timestamp > y.timestamp;
      })
      .map((item) => item);
    this.setState({ renderList: tempSort })
  };

  sortPostsByVote = () => {
    const tempSort = [].concat(this.props.posts)
      .sort((x, y) => {
        return x.voteScore > y.voteScore;
      })
      .map((item) => item);
    this.setState({ renderList: tempSort })
  };

  render() {
    const { categories } = this.props;
    const { renderList } = this.state;
    return (
      <PageContainer>
        <NavBar/>
        <PageContent>
          <ButtonContainer>
            <SortButton onClick={this.sortPostsByDate}>Sort By Date</SortButton>
            <SortButton onClick={this.sortPostsByVote}>Sort By Vote</SortButton>
          </ButtonContainer>
          <Heading>Categories</Heading>
          {categories &&
          categories.map((item, i) =>
            <CatHeading key={i} to={item.path}>{item.name}</CatHeading>)}
          <Heading>Posts</Heading>
          {renderList &&
          renderList.map((item, i) =>
            <PostCard {...item} key={i}/>
          )}
        </PageContent>
      </PageContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  loadPosts: () => dispatch(getPosts()),
  loadCategories: () => dispatch(getCategories())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));