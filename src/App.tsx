import React from "react";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import "./App.css";

function App() {
  return (
    <>
      <main className="__main container m-auto my-5">
        <div className="__col-main container row col-9 col-lg-7 m-auto mb-4 p-0">
          <LeftContainer />
          <RightContainer />
        </div>
      </main>
    </>
  );
}

export default App;
