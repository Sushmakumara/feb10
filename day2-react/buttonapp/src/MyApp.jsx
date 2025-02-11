import './style.css'
// function MyApp () {
//     return (
//         <>
//         <h2> My first React App</h2>
//         <button onClick={() => console.log("Mouse left the button")} 
//   style={{ backgroundColor: "green", color: "white", padding: "10px" }}>Click Me</button>
//         <link rel="stylesheet" href="styles.css"></link>
//         </>
//     )
// }

import { useState } from "react";

function MyApp() {
  const colors = ["green", "yellow", "red","blue"]; // List of colors
  const [index, setIndex] = useState(0);

  const changeColor = () => {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length); // Loop through colors
  };

  return (
    <button
      onClick={changeColor}
      style={{ backgroundColor: colors[index], color: "white", padding: "10px" }}
    >
      Click Me
    </button>
  );
}

//export default App;


export default MyApp;