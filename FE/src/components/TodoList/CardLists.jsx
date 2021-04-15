import Card from './Card';

const CardLists = ({
  cards,
  inputs,
  onChange,
  checkInputValue,
  hasInput,
  column,
  columnI,
  grp,
  grpI,
  handleDragEnter,
  handleDragStart,
  dragging,
}) => {
  const cardlists = cards.map((card, cardI) => (
    <Card
      key={card.id}
      card={card}
      cardI={cardI}
      onChange={onChange}
      inputs={inputs}
      checkInputValue={checkInputValue}
      hasInput={hasInput}
      column={column}
      columnI={columnI}
      grp={grp}
      grpI={grpI}
      handleDragEnter={handleDragEnter}
      handleDragStart={handleDragStart}
      dragging={dragging}
    />
  ));

  return <>{cardlists}</>;
};
export default CardLists;
