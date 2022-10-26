import React from "react";

export default class StudentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { student: { name: "Will", age: 18 } };
  }

  handleChangeAge = (e) => {
    this.setState((prev) => {
      return {
        student: { ...prev, age: e.target.value },
      };
    });
  };

  handleCountDown = () => {
    const prev = this.state.count;
    if (this.state.count <= 1) this.setState({ count: 0 });
    else this.setState({ count: prev - 1 });
  };

  render() {
    return (
      <div className="Student">
        <h3>Hello, {this.state.student.name}</h3>
        <p>Your age is {this.state.student.age}</p>
        <label>Change your age? </label>
        <input
          type="number"
          name="student-age"
          id="student-age"
          value={this.state.student.age}
          min="18"
          max="99"
          onChange={this.handleChangeAge}
        />
      </div>
    );
  }
}
