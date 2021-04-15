import { useState, useEffect } from 'react';
import Column from './Column';
import styled from 'styled-components';

const TodoStore = () => {
  const [todoData, setToDoData] = useState([]);

  useEffect(() => {
    const url = '/boards';
    fetchTodos(url, setToDoData);
  }, []);

  const fetchTodos = async (url, callback) => {
    const response = await fetch(url);
    const data = await response.json();
    callback(data);
  };

  const columnLists = todoData.map((column, columnI, columnArray) => {
    return (
      <Column
        key={column.id}
        title={column.title}
        cards={column.cards}
        columnI={columnI}
        columnArray={columnArray}
      />
    );
  });

  return (
    <ToDoListWrap>
      <div className="TodoList">{columnLists}</div>
    </ToDoListWrap>
  );
};

export default TodoStore;

const ToDoListWrap = styled.div`
  .TodoList {
    margin-top: 30px;
  }
`;
