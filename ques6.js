var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var Movie = /** @class */ (function () {
    function Movie(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }
    return Movie;
}());
var fetchMovieDetails = function (id) { return new Promise(function (resolve) {
    setTimeout(function () { return resolve(new Movie("Inception", "Nolan", 2010)); }, 2000);
}); };
fetchMovieDetails(1).then(function (_a) {
    var title = _a.title, rest = __rest(_a, ["title"]);
    console.log("Movie: ".concat(title, ", Details:"), rest);
});
