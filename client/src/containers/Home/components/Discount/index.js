import React, { Component } from 'react';
import './style.css';

export default class Discount extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='discount'>
        <a className='discount__header'>
          <span className='discount__title'>Hot Discounts</span>
          <span className='discount__more'>More Discounts</span>
          <span className='discount__arrow' />
        </a>
        <div className='discount__content'>
          {data.map((item, index) => {
            return (
              <a key={item.id} className='discount__item'>
                <div className='discount__itemPic'>
                  <img src={item.picture} width='100%' height='100%' />
                </div>
                <div className='discount__itemTitle'>{item.shop}</div>
                <div className='discount__itemPriceWrapper'>
                  <ins className='discount__itemCurrentPrice'>
                    {item.currentPrice}
                  </ins>
                  <del className='discount__itemOldPrice'>{item.oldPrice}</del>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
