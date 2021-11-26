import "./App.css";
import { Global, css } from "@emotion/react";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
          * {
            font-family: Poppins;
            box-sizing: border-box;
            margin: 0;
            border: 0;
            padding: 0;
            outline: 0;
          }
          a {
            text-decoration: none;
            color: #2797dd;
          }
          html,
          #root {
            height: 100%;
          }
          body {
            height: 100%;
            background-color: black;
          }
        `}
      />
      <div className="App">
        <Card />
      </div>
    </>
  );
}

export default App;
