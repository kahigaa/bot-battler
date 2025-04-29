import BotCard from "./BotCard";

function MyBotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div>
      <h2 style={{textAlign:"center"}}>My Bot Army</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => releaseBot(bot)}
            handleDischarge={() => dischargeBot(bot)}
            showDischarge={true}
          />
        ))}
      </div>
    </div>
  );
}

export default MyBotArmy;
