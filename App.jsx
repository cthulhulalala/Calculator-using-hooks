import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

const App = () => {
  const [display, setDisplay] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  const click = (e) => {
    setDisplay(display.concat(e.target.name));
  };

  const backspace = () => {
    setDisplay(display.slice(0, display.length - 1));
  };

  const clear = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString()); //change it into a string otherwise youll recive error.alt (display).""
    } catch (e) {
      setDisplay("error");
    }
  };

  return (
    <>
      <div className="calc">
        <div className="screen">
          <input type="text" value={display} ref={inputRef}></input>
        </div>
        <div className="keypad">
          <button name="clear" onClick={clear} id="clear">
            Clear
          </button>
          <button name="c" onClick={backspace} id="backspc">
            c
          </button>
          <button name="%" onClick={click}>
            %
          </button>
          <button name="/" onClick={click}>
            /
          </button>
          <button name="7" onClick={click}>
            7
          </button>
          <button name="8" onClick={click}>
            8
          </button>
          <button name="9" onClick={click}>
            9
          </button>
          <button name="*" onClick={click}>
            *
          </button>{" "}
          <button name="4" onClick={click}>
            4
          </button>
          <button name="5" onClick={click}>
            5
          </button>
          <button name="6" onClick={click}>
            6
          </button>
          <button name="-" onClick={click}>
            -
          </button>
          <button name="1" onClick={click}>
            1
          </button>
          <button name="2" onClick={click}>
            2
          </button>
          <button name="3" onClick={click}>
            3
          </button>
          <button name="+" onClick={click}>
            +
          </button>
          <button name="-" onClick={click}>
            -
          </button>
          <button name="0" onClick={click}>
            0
          </button>
          <button name="=" onClick={calculate} id="result">
            =
          </button>
          <button onClick={click}>.</button>
        </div>
      </div>
    </>
  );
};

export default App;
