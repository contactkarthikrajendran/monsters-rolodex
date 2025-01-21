const Card = (props) => {
  const { cardId, cardName, cardEmail } = props;
  return (
    <div key={cardId} className="card-container">
      <img
        alt={`monster ${cardName}`}
        src={`https://robohash.org/${cardId}?set=set2&size=180x180`}
      ></img>
      <h1>{cardName}</h1>
      <p>{cardEmail}</p>
    </div>
  );
};

export default Card;
