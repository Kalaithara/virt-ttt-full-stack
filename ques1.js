{
    var user = { name: "Kalai", role: "user" };
    {
        user.role = "admin"; // modify role inside block
    }
    console.log("Name: ".concat(user.name, ", Role: ").concat(user.role)); // name unchanged, role updated
}
