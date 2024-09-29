const accountId = 12345 // in const value cannot be changed
let accountEmail = "daaimkhan@gmail.com"
var accountPassword = "1234567"

accountCity = "Jaipur"
let accountState;
// accountId = 2 not allowed if const is already is given
accountEmail = "daaim@gmail.com"
accountPassword = "1234"
accountCity = "kashipur"

console.log(accountId);

console.table([accountId, accountEmail,accountPassword, accountCity, accountState])