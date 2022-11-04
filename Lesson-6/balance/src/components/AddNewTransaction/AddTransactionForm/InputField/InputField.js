import "./InputField.css";

export default function InputField({ title, input }) {
  return (
    <div className="input-field">
      {title}
      {input}
    </div>
  );
}
