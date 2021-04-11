import React, {useState, useEffect} from 'react';
import "./TodoList.css";
import Column from './Column'
import fetchTodos from './fetchTodos';


const TodoStore = () => {
    const [todoData, setToDoData] = useState([]);
    
    useEffect (() => {
        const url = "http://localhost:3000/data.json"
        fetchTodos(url, setToDoData);
    }, []);

    
    const changeColumns = (columns) => {
        setToDoData(columns);
    }

    const columnLists = todoData.map((data, i) => (
        <Column key={data.columns[i].id} data={data} changeColumns={changeColumns} />
    ))

    return (
       <>
        <div className="TodoList">
            <ul>{columnLists}</ul>
        </div>
      </>
    )
}

export default TodoStore;