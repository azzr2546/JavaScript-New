const accountId = 121212
let accountEmail = "azzharhussainahar@gmail.com"
var accountPassword = "12345"
accountCity = "Gilgit"
let accountState;

// accountId = 2 not allowed
accountEmail = "apple.com"
accountPassword = "213141"
accountCity = "Danyore"

console.log(accountId);
//  multiple values output method for console
console.log(accountEmail, accountPassword, accountCity, accountState);
//  multiple values output in tables method for console
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])