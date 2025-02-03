// import React from "react";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

function App() {
  return (
    <main className="font-serif flex flex-col md:flex-row w-[85vw] max-w-[400px] md:max-w-fit my-10 md:m-0 bg-neu-white shadow-sm rounded-xl transition-all duration-300">
      <LeftContainer />
      <RightContainer />
    </main>
  );
}

export default App;
