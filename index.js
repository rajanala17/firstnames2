const people = require('../country/state/city/index')
const getFirstNames = list => {
  return list.map(eachPerson => eachPerson.firstName)
}
module.exports = getFirstNames
let name = require('../names/index')
console.log(name(people))
