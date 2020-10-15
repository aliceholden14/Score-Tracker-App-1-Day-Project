const { query } = require('../db/dbConnect');

module.exports = {
    getTopTenScores: async (game) => {
        let sqlTopTen = "SELECT * FROM scores WHERE gametype = $1 ORDER BY score DESC LIMIT 10";
        const topTenScores = await query(sqlTopTen, [game]);
        return topTenScores.rows;
    },
}