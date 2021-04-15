import { useState, useEffect, useRef } from 'react';
import Columns from './Columns';
import styled from 'styled-components';

const TodoStore = () => {
  const [todoData, setToDoData] = useState([]);
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  useEffect(() => {
    const url = 'http://localhost:3000/data.json';
    fetchTodos(url, setToDoData);
  }, []);

  const fetchTodos = async (url, callback) => {
    const response = await fetch(url);
    const data = await response.json();
    callback(data);
  };

  const handleDragStart = (e, params) => {
    console.log('drag starting...', params);
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    console.log('Entering drag..', params);
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      console.log('target is not the same');
      setToDoData((oldToDoData) => {
        let newToDoData = JSON.parse(JSON.stringify(oldToDoData));
        console.log(params);
        newToDoData.columns[params.columnI].cards.splice(
          params.cardI,
          0,
          newToDoData[currentItem.columnI].cards.splice(currentItem.cardI, 1)[0]
        );
        dragItem.current = params;
        return newToDoData;
      });
    }
  };

  const handleDragEnd = (params) => {
    console.log('Ending drag..');
    dragNode.current.removeEventListener('dragend', handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
    setDragging(false);
  };

  const columnLists = todoData.map((grp, grpI) => (
    <Columns
      key={grp.columns[grpI].id}
      grp={grp}
      grpI={grpI}
      onDragEnter={
        dragging && !grp.columns.length
          ? (e) => handleDragEnter(e, { grp, itemI: 0 })
          : null
      }
      handleDragEnter={handleDragEnter}
      handleDragStart={handleDragStart}
      dragging={dragging}
    />
  ));

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
