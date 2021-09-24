import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    countersArray: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.countersArray];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ countersArray: counters });
    console.log(this.state.countersArray[index]);
  };

  handleDelete = (counterId) => {
    const countersArray = this.state.countersArray.filter(
      (c) => c.id !== counterId
    );
    this.setState({ countersArray });
    console.log(counterId);
  };

  handleReset = () => {
    const counters = this.state.countersArray.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ countersArray: counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.countersArray];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    counters[index].value--;
    this.setState({ countersArray: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.countersArray.filter((c) => c.value > 0).length
          }
        />
        <main>
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.countersArray}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
