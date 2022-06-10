import users from "./users"

const male = users.filter(user => user.gender === "Male");

const female = users.filter(user => user.gender === "Female");

export {male, female}