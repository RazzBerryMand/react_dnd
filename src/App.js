import React, { Component } from "react";
import "./App.css";
import Item from "./Item.js";
import Target from "./Target.js";
import Card from "./Card";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
      { id: 4, name: "Item 4" }
    ],
    cards: [
      {
        id: 1,
        text: "Go to work"
      },
      {
        id: 2,
        text: "Drink bubble tea"
      },
      {
        id: 3,
        text: "Watch the goldbergs"
      },
      {
        id: 4,
        text: "Play pokemon"
      },
      {
        id: 5,
        text: "Go to nandos"
      },
      {
        id: 6,
        text: "Go home"
      },
      {
        id: 7,
        text: "Go to sleep"
      }
    ]
  };

  deleteItem = id => {
    this.setState(prevState => {
      let items = prevState.items;
      const index = items.findIndex(item => item.id === id);

      items.splice(index, 1);

      return { items };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Drag and drop examples:</h1>
          <h2>Recycle bin and re-ordering a list</h2>
        </header>

        <div className="app-intro">
          <div className="app-container">
            {/* <div className="item-container">
              {this.state.items.map((item, index) => (
                <Item
                  key={item.id}
                  item={item}
                  handleDrop={id => this.deleteItem(id)}
                />
              ))}
            </div> */}
            {/* <Target /> */}
          </div>

          <div className="card-container">
            {this.state.cards.map((card, i) => (
              <Card
                key={card.id}
                index={i}
                id={card.id}
                text={card.text}
                moveCard={this.moveCard}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
