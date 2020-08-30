import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({ deck: deck.data });
    console.log("component mounted");
  }
  // https://deckofcardsapi.com/api/deck/<<deck_id>>/draw
  async getCard() {
    let deck_id = this.state.deck.deck_id;
    try {
      let cardRes = await axios.get(`${API_BASE_URL}/${deck_id}/draw/`);
      if (!cardRes.data.success) {
        throw new Error("No card Remaining!");
      }
      let card = cardRes.data.cards[0];
      this.setState((st) => ({
        // Object {code: "9H", image: "https://deckofcardsapi.com/static/img/9H.png", images: Object, value: "9", suit: "HEARTS"}
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.suit} ${card.value}`
          }
        ]
      }));
    } catch (err) {
      alert(err);
    }
  }
  render() {
    const cards = this.state.drawn.map((c) => (
      <Card key={c.id} name={c.name} image={c.image} />
    ));
    return (
      <div className="Deck">
        <p>{this.state.drawn.length}</p>
        <h1 className="Deck-title">&#9670;Card Dealer&#9670;</h1>
        <h2 className="Deck-title subtitle">
          &#9670;A little demo made with React&#9670;
        </h2>
        <button className="Deck-btn" onClick={this.getCard}>Get Card!!</button>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}

export default Deck;
