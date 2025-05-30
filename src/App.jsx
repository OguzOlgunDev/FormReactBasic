import { useState } from "react";
import { nanoid } from "nanoid";

import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleText = (event) => {
    event.preventDefault();
    let amount = Number(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h4>Paragraph Generator</h4>
      <form action="" className="lorem-form" onSubmit={handleText}>
        <label htmlFor="amount">Paragraph: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
        <button className="btn ">Generate Text</button>
      </form>
      <article className="lorem-text">
        {text.map((sentence) => {
          return <p key={nanoid()}>{sentence}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
