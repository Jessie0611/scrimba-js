let homeScore = document.getElementById("homeScore")
let awayScore = document.getElementById("awayScore")
let scoreHome = 0
let scoreAway = 0

function home1Plus() {
    scoreHome++;
    homeScore.textContent = scoreHome;
}

function home2Plus() {
    scoreHome = scoreHome + 2;
    homeScore.textContent = scoreHome;

}
function home3Plus() {
    scoreHome = scoreHome + 3;
    homeScore.textContent = scoreHome;

}

function resetScore() {
    let scoreAway = 0;
    let scoreHome = 0;
    homeScore.textContent = scoreHome;
    awayScore.textContent = scoreAway;

}

function away1Plus() {
    scoreAway = scoreAway++;
    awayScore.textContent = scoreAway;
}
function away2Plus() {
    scoreAway = scoreAway + 2;
    awayScore.textContent = scoreAway;
}
function away3Plus() {
    scoreAway = scoreAway + 3;
    awayScore.textContent = scoreAway;
}