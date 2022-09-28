import "./styles.css";
import { useState } from "react";

export default function App() {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const handleMouse = (e) => {
    setCoord({ x: e.clientX, y: e.clientY });
  };
  const angle = Math.atan2(
    coord.y - window.innerHeight / 2,
    coord.x - window.innerWidth / 2
  );

  const translate = {
    x: 3 * Math.cos(angle),
    y: 3 * Math.sin(angle)
  };

  return (
    <div className="main" onMouseMove={handleMouse}>
      <div className="eye">
        <div
          className="eyeball"
          style={{
            transform: `translate(${translate.x}vmin, ${translate.y}vmin)`
          }}
        />
      </div>
    </div>
  );
}
