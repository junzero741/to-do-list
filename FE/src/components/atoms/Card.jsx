import React from 'react';
import {CardContainer} from './CardContainer';

const Card = ({cardList, cards}) => {
  const cardlists = cards.map(({id, title, content, author}) => {
    return (
      <CardContainer>
        <li key={id}>
        <h3>{title}</h3>
        <p>{content}</p>
        </li> 
      </CardContainer>
    )
  })
  const addedCardList = cardList.map(({id, title, content}) => {
    return (
      <CardContainer>
      <li key={id}>
      <h3>{title}</h3>
      <p>{content}</p>
      </li> 
    </CardContainer>
    )
  })

  return (
    <>
    <div>{cardlists}</div>
    <div>{addedCardList}</div>
    </>
  )
}

export default Card;