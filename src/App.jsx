import { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection.jsx";
import MyBotArmy from "./components/MyBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [myArmy, setMyArmy] = useState([]);

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

  const releaseBot = (bot) => {
    setMyArmy(myArmy.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: "DELETE" })
      .then(() => {
        setBots((prevBots) => prevBots.filter((b) => b.id !== bot.id));
        setMyArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
      })
      .catch(console.error);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{textAlign:"center"}}>Bot Battler</h1>
      <MyBotArmy bots={myArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default App;

