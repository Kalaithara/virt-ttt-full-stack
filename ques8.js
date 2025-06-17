var userScores = {
    alice: 950,
    bob: 120,
    charlie: 3400,
    daniel: 78,
    evelyn: 605
};
// Polyfill-like padding functions
function padRight(str, length) {
    return str + " ".repeat(Math.max(0, length - str.length));
}
function padLeft(str, length, padChar) {
    if (padChar === void 0) { padChar = "0"; }
    return padChar.repeat(Math.max(0, length - str.length)) + str;
}
// Simulate async fetch without async/await
function fetchLeaderboard() {
    console.log("Fetching leaderboard...");
    setTimeout(function () {
        console.log("\nLeaderboard:");
        console.log("============================");
        Object.entries(userScores).forEach(function (_a) {
            var username = _a[0], score = _a[1];
            var paddedUser = padRight(username, 15);
            var paddedScore = padLeft(score.toString(), 5);
            console.log("".concat(paddedUser, " : ").concat(paddedScore));
        });
    }, 2000);
}
fetchLeaderboard();
