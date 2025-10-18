import { useState, useRef } from "react";
import gift from "./assets/image1.jpg";
import card from "./assets/image2.jpg";
import music from "./assets/music.mp3";

export default function App() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setOpened(true);
    audioRef.current.play();
  };

  return (
    <div className="app">
      <audio ref={audioRef} src={music} loop></audio>

      {!opened ? (
        <div className="cover" onClick={handleOpen}>
          <img src={gift} alt="gift" className="gift" />
          <p className="hint">Nhấn vào hộp quà 🎁</p>
        </div>
      ) : (
        <div className="card">
          <img src={card} alt="card" className="card-img" />
        </div>
      )}
    </div>
  );
}
