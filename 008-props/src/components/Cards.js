import React, { Component } from 'react';

import CardList from './CardList.js';

let Cards = [
  {title:'这是第一天',data:'2016.7.19'},
  {title:'这是第二天',data:'2016.7.21'},
  {title:'这是第三天',data:'2016.7.22'}
]

class Card extends Component {
  render(){
    // console.log(Cards.length);
    var AllCards = [];
    for (var i = 0; i < Cards.length; i++) {
      let j=i+1;
      AllCards.push(
        <CardList title={Cards[i].title} data={Cards[i].data} index={j} key={i}/>
      )
    };
    // console.log(AllCards);
    return(
      <div>
        {AllCards}
      </div>
    )
  }
}

export default Card;
