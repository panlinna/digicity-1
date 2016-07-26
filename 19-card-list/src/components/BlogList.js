import React, { Component } from 'react';

import BlogCard from './BlogCard';

let blogs = [
  {title:'这是第一天',date:'2016.7.19'},
  {title:'这是第二天',date:'2016.7.21'},
  {title:'这是第三天',date:'2016.7.22'}
]

class BlogList extends Component {
  render(){
    // console.log(Cards.length);
    var allCards = [];
    for (var i = 0; i < blogs.length; i++) {
      let j=i+1;
      allCards.push(
        <BlogCard title={blogs[i].title} date={blogs[i].date} index={j} key={i}/>
      )
    };
    // console.log(AllCards);
    return(
      <div>
        {allCards}
      </div>
    )
  }
}

export default BlogList;
