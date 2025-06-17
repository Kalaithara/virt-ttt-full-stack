// Sample user
var user = {
    name: "Shan",
    roles: ["editor", "moderator", "reviewer"]
};
// Privileged roles
var privilegedRoles = ["admin", "moderator", "superuser"];
// Check for privileged access
var hasAccess = user.roles.some(function (role) { return privilegedRoles.includes(role); });
// Calculate power score (2 ^ number of roles)
var powerScore = Math.pow(2, user.roles.length);
// Print access message
var message = hasAccess
    ? "Access Granted. Power Score: ".concat(powerScore)
    : "Access Denied. Power Score: ".concat(powerScore);
console.log(message);
