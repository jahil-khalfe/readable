import React, { PureComponent } from 'react';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategoryPosts } from "../Home/actions";
import PageContainer from '../../components/PageContainer';
import PageContent from '../../components/PageContent';
import AddButton from '../../components/AddButton';
import SortButton from '../../components/SortButton';
import ButtonContainer from '../../components/ButtonContainer';
import Heading from '../../components/Heading';
import PostCard from '../../components/PostCard';
import '../../theme/globals';

class Category extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderList: [],
    };
  }

  componentDidMount() {
    const { category } = this.props.match.params;
    this.props.getCategoryPosts(category);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ renderList: newProps.categoryPosts });
  }

  sortPostsByDate = () => {
    const tempSort = [].concat(this.props.categoryPosts)
      .sort((x, y) => {
        return x.timestamp > y.timestamp;
      })
      .map((item) => item);
    this.setState({ renderList: tempSort })
  };

  sortPostsByVote = () => {
    const tempSort = [].concat(this.props.categoryPosts)
      .sort((x, y) => {
        return x.voteScore > y.voteScore;
      })
      .map((item) => item);
    this.setState({ renderList: tempSort })
  };

  render() {
    const { renderList } = this.state;
    console.dir(this.props);
    return (
      <PageContainer>
        <AddButton>+</AddButton>
        <PageContent>
          <ButtonContainer>
            <SortButton onClick={this.sortPostsByDate}>Sort By Date</SortButton>
            <SortButton onClick={this.sortPostsByVote}>Sort By Vote</SortButton>
          </ButtonContainer>
          <Heading>{this.props.match.params.category.toUpperCase()}</Heading>
          {renderList &&
          renderList.map((item, i) =>
            <PostCard {...item} key={i}/>
          )}
        </PageContent>
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  categoryPosts: state.categoryPosts
});

const mapDispatchToProps = dispatch => ({
  getCategoryPosts: items => dispatch(getCategoryPosts(items))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));