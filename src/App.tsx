import { useState } from "react";
import "./App.css";
import facts from "./assets/facts.json";
import { FaTwitter } from "react-icons/fa";

interface Fact {
  fact: string;
  author: string;
}

// select a random fact from the facts file
const getRandomFact = (): Fact => {
  return facts[Math.floor(Math.random() * facts.length)];
};

function App() {
  const [fact, setFact] = useState<Fact>(getRandomFact());
  // when called, will change the state of "fact" to a new fact
  const ChangeFact = () => {
    setFact(getRandomFact());
  };
  return (
    <>
      <div id="wrapper" className="center">
        <div id="quote-box">
          <h1>Fun Fact Generator </h1>
          <div id="text" className="fade-in-text">
            <p>{fact.fact}</p>
            <div id="buttons">
              <button type="button" onClick={ChangeFact} id="new-quote">
                Generate Fact
              </button>
              <a
                href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${fact.fact}`}
                id="tweet-quote"
              >
                <FaTwitter id="twit-icon" />
              </a>
            </div>
            <div>
              <p id="author">Created by {fact.author}</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        All Facts Generated From "125 Interesting Facts About Practically
        Everything" by Elizabeth Yuko
      </footer>
    </>
  );
}

export default App;
