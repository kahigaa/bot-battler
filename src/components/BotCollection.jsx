import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot }) {
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Available Bots</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={() => enlistBot(bot)} showDischarge={false} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
