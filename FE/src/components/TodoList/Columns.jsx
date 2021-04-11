import React, {useState, useEffect} from 'react';
import {ColumnHeader, ColumnContainer} from './columnStyle'
import {ColumnTitle, ColumnIcon} from '../atoms/ColumnHeader'
import Card from '../atoms/Card'
import Form from './Form'


const Column = ({data:{columns}, changeColumns}) => {
    const [initialColumns, setColumn] = useState(columns);
    const [currentID, setCurrentID] = useState(null);



    const handleClick = (clickedID) => {
        return () => {
            if(currentID !== clickedID) setCurrentID(clickedID);
            else if(currentID !== null) setCurrentID(null);
            else setCurrentID(clickedID)
        };
    };

    const deleteColumn = (deletedID) => {
        return () => {
            const newColumn = initialColumns.filter(({id}) => id !== deletedID)
            setColumn([...newColumn])
        }
    }

    const addCard = (column) => {
        const newColumns = Object.assign(initialColumns, column)
        setColumn([...newColumns]);
    }

    const handleClickCancel = () => {
        setCurrentID(null);
    }
    const columnLists = initialColumns.map((column) => {
        const {id, title, cards} = column;
        return (<ul key={id}>
        <header>
        <span>{title}</span>
        <span>{cards.length}개</span>
        <button onClick={handleClick(id)}><i className="fas fa-plus"></i></button>
        <button onClick={deleteColumn(id)}><i className="fas fa-times"></i></button>
        </header>
        <div>
        
        {currentID === id ? <Form key={id} addCard={addCard} handleClickCancel={handleClickCancel} column={column}/> : <></>}
        <Card cards={cards} />

        </div>
        </ul>)
        })

    return (
        <ColumnContainer>
        {columnLists}
        </ColumnContainer>
    )
}

export default Column
