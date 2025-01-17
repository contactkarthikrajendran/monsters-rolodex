import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.components";

class CardList extends Component {
  render() {
    console.log("card list component" + this.props);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          //return <h1 key={monster.id}>{monster.name}</h1>;
          const { name, email, id } = monster;
          return (
            <Card cardId={name} cardName={name} cardEmail={email}></Card>
            // <div className="card-container" key={id}>
            //   <img
            //     alt={`monster ${name}`}
            //     src={`https://robohash.org/${id}?set=set2&size=180x180`}
            //   ></img>
            //   <h1>{name}</h1>
            //   <p>{email}</p>
            // </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
