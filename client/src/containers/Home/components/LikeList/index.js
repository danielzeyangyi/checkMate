import React, { Component } from 'react';
import LikeItem from '../LikeItem';
import Loading from '../../../../components/Loading';
import './style.css';

class LikeList extends Component {
  constructor(props) {
    super(props);
    this.removeListener = false;
    this.myRef = React.createRef();
  }

  render() {
    const { data, pageCount } = this.props;
    return (
      <div ref={this.myRef} className='likeList'>
        <div className='likeList__header'>猜你喜欢</div>
        <div className='likeList__list'>
          {data.map((item, index) => {
            return <LikeItem key={index} data={item} />;
          })}
        </div>
        {pageCount < 3 ? (
          <Loading />
        ) : (
          <a href='' className='likeList__viewAll'>
            View More
          </a>
        )}
      </div>
    );
  }

  componentDidMount() {
    if (this.props.pageCount < 3) {
      document.addEventListener('scroll', this.handleScroll);
    } else {
      this.removeListener = false;
    }
    // check if we can use list data already loaded
    if (this.props.pageCount === 0) {
      this.props.fetchData();
    }
  }

  componentDidUpdate() {
    if (this.props.pageCount >= 3) {
      document.removeEventListener('scroll', this.handleScroll);
      this.removeListener = true;
    }
  }

  componentWillUnmount() {
    if (!this.removeListener) {
      document.removeEventListener('scroll', this.handleScroll);
    }
  }

  // auto Load more data when user scrolls down for first 2 times
  handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const screenHeight = document.documentElement.clientHeight;
    const likeListTop = this.myRef.current.offsetTop;
    const likeListHeight = this.myRef.current.offsetHeight;
    if (scrollTop >= likeListHeight + likeListTop - screenHeight) {
      this.props.fetchData();
    }
  };
}

export default LikeList;
