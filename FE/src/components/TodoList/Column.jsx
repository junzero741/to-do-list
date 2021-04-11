import React, {useState, useEffect} from 'react';
import {ColumnHeader, ColumnContainer} from './columnStyle'
import {ColumnTitle, ColumnIcon} from '../atoms/ColumnHeader'
import Card from '../atoms/Card'
import Form from './Form'


const Column = ({data:{columns}, changeColumns}) => {
    const [initialColumns, setColumn] = useState(columns);
    const [currentID, setCurrentID] = useState(null);
    const [cardList, setCardList] = useState(columns.map(el => (el.cards)));
   

    const handleClick = (clickedID) => {
        if(currentID !== clickedID) setCurrentID(clickedID);
        else if(currentID !== null) setCurrentID(null);
        else setCurrentID(clickedID);
        
    };


    /* columnLists 의 각 column 별로  독립된 상태를 갖는 cardList가 필요한데,
        상태를 관리하는 useState는 리액트 함수 최상위에서만 쓸 수 있다는 문제가 있음.
    */

    const columnLists = initialColumns.map(({id, title, cards}) => {
  

        return (
        <li key={id}>
        <header>
        <span>{title}</span>
        <span>{cards.length}개</span>
        <button onClick={() => handleClick(id)}><i className="fas fa-plus"></i></button>
        <button><i className="fas fa-times"></i></button>
        </header>
        <div>
        {currentID === id ? <Form key={id} cardList = {cardList} setCardList={setCardList} /> : <></>}
        </div>
        <ul><Card cardList={cardList} cards = {cards}/></ul>
        </li>
            )      
        
    })

    return (
        <ColumnContainer>
        {columnLists}
        </ColumnContainer>
    )
}

export default Column;
