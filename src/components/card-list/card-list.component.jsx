import "./card-list.styles.css";
import Card from "../card/card.components";

const CardList = ({ monsters }) => {
  //console.log("card list component" + this.props);
  //const { monsters } = this.props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        //return <h1 key={monster.id}>{monster.name}</h1>;
        const { id, name, email } = monster;
        return <Card cardId={id} cardName={name} cardEmail={email}></Card>;
      })}
    </div>
  );
};

export default CardList;
