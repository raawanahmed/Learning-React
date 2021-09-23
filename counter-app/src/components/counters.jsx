import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
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

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.countersArray.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
