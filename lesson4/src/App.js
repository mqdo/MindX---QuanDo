import "./App.css";
import { podcastData } from "./data/data";
import PodcastContainer from "./components/PodcastContainer";
import PodcastLayout from "./components/PodcastLayout";

const firstThreePodcasts = podcastData.slice(0, 3);
const secondThreePodcasts = podcastData.slice(3, 6);

function App() {
  return (
    <div className="App">
      <div className="TitlePane">
        <h2>Bảng Xếp Hạng Podcast</h2>
        <button className="AllPodcast">Tất cả</button>
      </div>
      <PodcastLayout
        left={<PodcastContainer collection={firstThreePodcasts} />}
        right={<PodcastContainer collection={secondThreePodcasts} />}
      ></PodcastLayout>
    </div>
  );
}

export default App;
