import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-v2";
//import StarRating from "./StarRating";

// use the rarting somewhere else
// function Test() {
//   const [movieRating, setmovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setmovieRating} />
//       <p>this movie wat rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "nutural", "good", "fantastic"]}
    /> */}
  </React.StrictMode>
);
