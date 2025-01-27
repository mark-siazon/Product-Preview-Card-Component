// import React from "react";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

function App() {
  return (
    <>
      <main className="__main m-auto my-5 font-serif flex">
        <div className="bg-white rounded-t-2xl flex flex-grow flex-row basis-3/4 lg:basis-7/12 shadow-lg m-auto mb-4 p-0">
          <LeftContainer />
          <RightContainer />
        </div>
      </main>
    </>
  );
}

export default App;
