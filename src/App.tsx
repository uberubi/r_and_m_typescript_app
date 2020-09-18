import React, { useContext } from "react";
import "./App.css";
import { Store } from "./context/Store";
import { Link } from "@reach/router";

const App = (props: any): JSX.Element => {
  const { state } = useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morthy</h1>
          <p>Pick your favourite episode!!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
};

export default App;
