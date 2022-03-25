import React from "react";
import Card from "./Card";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-center m-4">Pricing Table</h1>
      <section className="pricing m-4 py-5">
        <div className="container">
          <div className="row">
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
