export default function Light({ color, turnOn }) {
  return <div className={turnOn ? "light " + color : "light"}></div>;
}
