const { query } = require('../db/dbConnect');

module.exports = {
    getTopTenScores: async (game) => {
        const sqlTopTen = "SELECT * FROM scores WHERE gametype = $1 ORDER BY score DESC LIMIT 10";
        const topTenScores = await query(sqlTopTen, [game]);
        return topTenScores.rows;
    },
    getUniqueGameTypes: async _ => {
        const sqlUniqueGameTypes = "SELECT DISTINCT(gametype) FROM scores";
        const gameTypes = await query(sqlUniqueGameTypes);
        return gameTypes.rows;
    },
    addNewPlayerScores: async (newScores) => {
        const sqlAddNewScores = "INSERT INTO scores (playername, score, gametype) VALUES ($1, $2, $3)";
        newScores.forEach(async (value) => {
            const response = await query(sqlAddNewScores, [value.playername, value.score, value.gametype]);
            return { success: true };
        })
    },
    getUniquePlayerNames: async _ => {
        const sqlUniquePlayerNames = "SELECT DISTINCT(playername) FROM scores";
        const playerNames = await query(sqlUniquePlayerNames);
        return playerNames.rows;
    },
    deleteGametype: async (gametype) => {
        const sqlGameType = "DELETE FROM scores WHERE gametype = $1"; 
        await query(sqlGameType, [gametype]);
        return { success : true };
    },
    
 }