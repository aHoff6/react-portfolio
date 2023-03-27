import { useState, useEffect } from "react";
import SlideShow from "./SlideShow";

export default function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    const toRotate = ["Web Developer", "JavaScript", "HTML", "React", "CSS"];

    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, loopNum, isDeleting]);

  return (
    <div className="homepage-container">
      <figure className="profilepicContainer">
        <img
          src={require("../components/assets/images/profilepic.jpeg")}
          alt="profilepic"
          className="profilepic"
        />
      </figure>
      <div className="text-container">
        <h2 className="changing-text">{text}</h2>
        <figure className="slideshow-container-main">
          <SlideShow />
        </figure>
      </div>
    </div>
  );
}
