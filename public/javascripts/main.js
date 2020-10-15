
async function getScoreData(gametype) {
    const response = await fetch(`/scores/${gametype}`);
    const data = await response.json();
    const scoreData = data.result;
    console.log(scoreData);
    setTimeout(createScoreSection(scoreData), 2000)
};

//scoreData.result[0].gametype
// function setScoreData

function createScoreSection(data) {
    let gametype = data[0].gametype
    let mainScoreboard = document.querySelector('#main-scoreboard');
    let section = document.createElement('section');
    let title = document.createElement('h3');
    let article = document.createElement('article');

    section.setAttribute('id', `${gametype}Section`);
    section.className = `game-section-container`;

    article.className = `game-article-container`;

    title.textContent = `${gametype} top 10`;
    mainScoreboard.appendChild(section);
    section.appendChild(title);
    section.appendChild(article);
    article.appendChild(createScoreLi(data));
};

function createScoreLi(scoreData) {
    let ol = document.createElement('ol');
    ol.className = `game-section-ol`;
    scoreData.forEach((value) => {
        let li = document.createElement('li');
        li.className = `game-section-li`;
        li.textContent = `${value.playername} ${value.score}`
        ol.appendChild(li)
    })
    return ol;
};

getScoreData('gartico');
getScoreData('mind');
getScoreData('movie');

