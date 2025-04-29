import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection.jsx";


function App() {
  const [bots, setBots] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then(setBots)
      .catch(console.error);
  }, []);

  const enlistBot = (bot) => {
    if (!myArmy.find((b) => b.id === bot.id)) {
      setMyArmy([...myArmy, bot]);
    }
  };

 

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{textAlign:"center"}}>Bot Battler</h1>
      
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default App;

