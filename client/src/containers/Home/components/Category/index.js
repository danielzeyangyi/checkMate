import React, { Component } from 'react';
import Slider from 'react-slick';
import './style.css';

const dataSource = [
  [
    {
      name: 'Movies',
      src:
        'https://www.dpfile.com/sc/eleconfig/20170223152109dp_wx_maoyan_icon.png'
    },
    {
      name: 'Hotels',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126203337jiudian.png'
    },
    {
      name: 'entertainment',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126202841xiuxianyule.png'
    },
    {
      name: 'Delivery',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126203251waimai.png'
    },
    {
      name: 'HotPot',
      src: 'https://www.dpfile.com/sc/eleconfig/20160204172927huoguo.png'
    },
    {
      name: 'Food',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126194705meishi.png'
    },
    {
      name: 'Beaty',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126202946liren.png'
    },
    {
      name: 'Relaxing',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126203542ktv.png'
    },
    {
      name: 'karaoke',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126203440zhoubianyou.png'
    },
    {
      name: 'Photography',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126203830jiehun.png'
    }
  ],
  [
    {
      name: 'Convinience',
      src: 'https://www.dpfile.com/sc/eleconfig/20170308125500community_new.png'
    },
    {
      name: 'Travel',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126205135jingguan.png'
    },
    {
      name: 'Cars',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126203742aiche.png'
    },
    {
      name: 'Fitness',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126203617jianshen.png'
    },
    {
      name: 'Shopping',
      src: 'https://www.dpfile.com/sc/eleconfig/20160314121215icongouwu135.png'
    },
    {
      name: 'Families',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126203905qinzi.png'
    },
    {
      name: 'House Rental',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126203812daojia.png'
    },
    {
      name: 'Furnitures',
      src: 'https://www.dpfile.com/sc/eleconfig/20161213162031zhuangxiu.png'
    },
    {
      name: 'Studying',
      src: 'https://www.dpfile.com/gp/cms/1455525720807.png'
    },
    {
      name: 'Health',
      src: 'https://www.dpfile.com/sc/eleconfig/20160126204327yiliao.png'
    }
  ],
  [
    {
      name: 'Fast Food',
      src:
        'https://www.dpfile.com/sc/eleconfig/20160204173331xiaochikuaican.png'
    },
    {
      name: 'American',
      src: 'https://www.dpfile.com/sc/eleconfig/20160204173511zizhucan.png'
    },
    {
      name: 'Japanese',
      src: 'https://www.dpfile.com/sc/eleconfig/20160415121719rihanliaoli.png'
    },
    {
      name: 'Hair Salon',
      src: 'https://www.dpfile.com/sc/eleconfig/20160316142804meifa.png'
    },
    {
      name: 'Beauty',
      src: 'https://www.dpfile.com/sc/eleconfig/20160316143047meijia.png'
    },
    {
      name: 'SPA',
      src: 'https://www.dpfile.com/sc/eleconfig/20160316143239meirong.png'
    },
    {
      name: 'Fitness',
      src: 'https://www.dpfile.com/sc/eleconfig/20160316143316shoushen.png'
    },
    {
      name: 'Photography',
      src: 'https://www.dpfile.com/sc/eleconfig/20160316143612qinzisheying.png'
    },
    {
      name: 'Families',
      src: 'https://www.dpfile.com/sc/eleconfig/20160316143656qinziyoule.png'
    },
    {
      name: 'All',
      src: 'https://www.dpfile.com/sc/eleconfig/20160125182200more.png'
    }
  ]
];

class Category extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      slidesToShow: 1,
      swipeToSlide: true,
      autoplay: true
    };

    return (
      <div className='category'>
        <Slider {...settings}>
          {dataSource.map((section, index) => {
            return (
              <div key={index}>
                {section.map((item, i) => {
                  return (
                    <div className='category_section' key={i}>
                      <img className='category_icon' src={item.src} />
                      <div>
                        <span className='category_text'>{item.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Category;
