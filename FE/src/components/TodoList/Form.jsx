import React, { useState } from 'react'
import Card from './../atoms/Card';


const Form = ({cardList, setCardList}) => {

    const [newTitle, setNewTitle] = useState();
    const [newContent, setNewContent] = useState();
    // const [cardList, setCardList] = useState(cards);
    
    
    const addTodo = (e) => {
        e.preventDefault();
        setCardList([...cardList, {"title": newTitle, "content": newContent, "id": cardList.length+1}]);
        console.log(cardList);
    }

    const changeInputDataTitle = (e) => {
        setNewTitle(e.target.value);
    };


    const changeInputDataContent = (e) => {
        setNewContent(e.target.value);
    };



    return (
        <>
            <form action="">
                <input type="text" placeholder="제목을 적어주세요" onChange={changeInputDataTitle}></input>
                <input type="text" placeholder="내용을 적어주세요" onChange={changeInputDataContent}></input>
                <div>
                    <button onClick={addTodo}>등록</button>
                    <button onClick={addTodo}>취소</button>
                </div>
            </form>
            
        </>
    );


}

export default Form
