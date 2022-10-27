import "./PodcastContainer.css";
import Podcast from "./Podcast";

export default function PodcastContainer({ collection }) {
  return (
    <div className="PodcastContainer">
      {
        collection.map(elem => (
          <Podcast
            key = {elem.title}
            id = {elem.id}
            image = {elem.image}
            title = {elem.title}
            author = {elem.author}
            release = {elem.release}
            duration = {elem.duration}
          />
        ))
      }
    </div>
  )
}