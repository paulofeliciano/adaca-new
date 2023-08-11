import { useState } from "react";

function App() {
  const [top, setTop] = useState("");
  const [mid, setMid] = useState("");
  const [bottom, setBottom] = useState("");
  const [order, setOrder] = useState("");


  const [showingMid, setShowingMid] = useState(false);
  const [showingBottom, setShowingBottom] = useState(false);
  const [showingButton, setShowingButton] = useState(false);


  let items = {
    menus: [
      // first group of radio-buttons
      [
        { id: "101", value: "Vegetarian" },
        { id: "102", value: "Nut allergy" },
        { id: "103", value: "Halal" },
      ],
      // second group of radio-buttons
      [
        { id: "201", value: "Cashew chicken" },
        { id: "202", value: "Sweet and sour pork" },
        { id: "203", value: "Stir fried Tofu" },
        { id: "204", value: "Vegetable fried rice" },
        { id: "205", value: "Pad Thai" },
        { id: "206", value: "Massaman beef" },
      ],
      // third group of radio-buttons
      [
        { id: "301", value: "Peanut sauce" },
        { id: "302", value: "Oyster sauce" },
        { id: "303", value: "Vegetable spring rolls" },
        { id: "304", value: "Steamed rice" },
      ],
    ],
  };

  const rules = {
    101: ["201", "202", "206", "302"],
    102: ["201", "301"],
    103: ["202"],
    204: ["304"],
    205: ["304"],
  };

  const onOptionChange = (e) => {
    setTop(e.target.id); setMid(""); setShowingBottom(false); setBottom(""); setShowingButton(false);
    setOrder("");
    
    if (e.target.id !== null) {
      setShowingMid(true);
    }
  };
  const onMidOptionChange = (e) => {
    setMid(e.target.id); setShowingBottom(true); setBottom(""); setShowingButton(false);
    setOrder("");

    if (rules[top] && rules[top].includes(e.target.id) === true) {
      setShowingBottom(false);
    }
  };

  const onBottomOptionChange = (e) => {
    setBottom(e.target.id); setShowingButton(true);
    setOrder("Your order is: "+ items.menus[1].find(element => element.id == mid).value + " with " + items.menus[2].find(element => element.id == e.target.id).value + " (" + items.menus[0].find(element => element.id == top).value + ")" );

    if (rules[mid] && rules[mid].includes(e.target.id) === true) {
      setShowingButton(false);
      setOrder("");
    }
    if (rules[top] && rules[top].includes(e.target.id) === true) {
      setShowingButton(false);
      setOrder("");
    }    
  };

  let firstMenu = [];
  items.menus[0].forEach((item, index) => {
    firstMenu.push(
      <div className="radio-group">
        <input
          type="radio"
          name="top"
          id={item.id}
          checked={top === item.id}
          onChange={onOptionChange}
        />{" "}
        <label for={item.id}>{item.value}</label>
      </div>
    );
  });

  let secondMenu = [];
  items.menus[1].forEach((item, index) => {
    secondMenu.push(
      <div className="radio-group">
        <input
          type="radio"
          name="mid"
          id={item.id}
          checked={mid === item.id}
          onChange={onMidOptionChange}
        />{" "}
        <label for={item.id}>{item.value}</label>
      </div>
    );
  });

  let thirdMenu = [];
  items.menus[2].forEach((item, index) => {
    thirdMenu.push(
      <div className="radio-group">
        <input
          type="radio"
          name="bottom"
          id={item.id}
          checked={bottom === item.id}
          onChange={onBottomOptionChange}
        />{" "}
        <label for={item.id}>{item.value}</label>
      </div>
    );
  });

  return (
    <div className="App">
        <div className="title">
            <h1>Paulo Feliciano's</h1>
            <h5>TEST FOR ADACA (FRONTEND)</h5>
            <h5>About Me:</h5>
            <p>Paulo has 6+ years of experience in Web Development, using the ff:</p>
            <ul>
                <li>Laravel</li>
                <li>Wordpress</li>
                <li>Shopify</li>
                <li>CodeIgniter</li>
                <li>Slim</li>
            </ul>
            <p>But wait, there's more!
            He can also use the ff:</p>

            <ul>
                <li>React.js</li>
                <li>Vue.js</li>
                <li>Angular.js</li>
            </ul>

            {order}
        </div>
      
      <div className="container">
        <div className="first-group">
          <h4>Do you have any of the ff:</h4>
          {firstMenu}
        </div>

        <div
          className="second-group"
          style={{ display: showingMid ? "block" : "none" }}
        >
          <h4>Select your main course:</h4>
          {secondMenu}
        </div>

        <div
          className="third-group"
          style={{ display: showingBottom ? "block" : "none" }}
        >
          <h4>Additional:</h4>
          {thirdMenu}

        </div>

        <div
          className="submit-button"
          style={{ display: showingButton ? "block" : "none" }}
        >
          <a href="mailto:paulofeliciano.work@gmail.com"><input type="submit" value="SUBMIT JOB OFFER" /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
