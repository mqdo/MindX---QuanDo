import "./PodcastLayout.css";

export default function PodcastLayout({ left, right }) {
  return (
    <div className="PodcastLayout">
      <div className="LayoutLeft">{left}</div>
      <div className="LayoutRight">{right}</div>
    </div>
  )
}