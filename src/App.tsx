// import React from "react";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

function App() {
  return (
    <main className="font-serif flex w-[85vw] max-w-[400px] md:max-w-[700px] bg-white shadow-sm rounded-xl">
      <div className="flex flex-grow flex-col md:flex-row basis-3/4 lg:basis-7/12 m-auto">
        <LeftContainer />
        <RightContainer />
      </div>
    </main>
  );
}

export default App;
