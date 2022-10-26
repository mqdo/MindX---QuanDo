import { useState } from "react";

export default function Student() {
  const [student, setStudent] = useState({ name: "Will", age: 18 });

  const handleChangeAge = (e) => {
    setStudent({ ...student, age: e.target.value });
  };

  return (
    <div className="Student">
      <h3>Hello, {student.name}</h3>
      <p>Your age is {student.age}</p>
      <label>Change your age? </label>
      <input
        type="number"
        name="student-age"
        id="student-age"
        value={student.age}
        min="18"
        max="99"
        onChange={handleChangeAge}
      />
    </div>
  );
}
