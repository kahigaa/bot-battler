function BotCard({ bot, handleClick, handleDischarge, showDischarge }) {
    return (
      <div
        onClick={handleClick}
        style={{
          border: "1px solid gray",
          borderRadius: "8px",
          padding: "10px",
          width: "200px",
          cursor: "pointer",
          position: "relative",
          backgroundColor: "#f8f8f8"
        }}
      >
        {showDischarge && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDischarge(bot);
            }}
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "25px",
              height: "25px",
              cursor: "pointer"
            }}
          >
            x
          </button>
        )}
        <img src={bot.avatar_url} alt={bot.name} style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
        <h3>{bot.name}</h3>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
      </div>
    );
  }
  
  export default BotCard;
  