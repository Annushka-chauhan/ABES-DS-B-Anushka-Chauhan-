import image from "./image.png";
import "./CardDesign.css";
export default function CardDesign({text,course}) {
  return (
    <>
    <div className="Card">
      <img src={image} alt="Front image" />
      <h1>{text}</h1>
      <h3>{course}</h3>
      </div>
         </>
  );
}
