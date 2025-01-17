import { Component } from "react";

class Card extends Component {
  render() {
    const { cardId, cardName, cardEmail } = this.props;
    return (
      <div className="card-container" key={cardId}>
        <img
          alt={`monster ${cardName}`}
          src={`https://robohash.org/${cardId}?set=set2&size=180x180`}
        ></img>
        <h1>{cardName}</h1>
        <p>{cardEmail}</p>
      </div>
    );
  }
}

export default Card;
