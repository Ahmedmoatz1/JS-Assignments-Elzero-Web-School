function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let parts = zName.split(" ");
    let firstName = parts[0];
    let lastInitial = parts[1].charAt(0).toUpperCase();
    return `${firstName} ${lastInitial}.`;
  }

  function ageWithMessage(zAge) {
    let age = zAge.match(/\d+/)[0]; 
    return `Your Age Is ${age}`;
  }

  function countryTwoLetters(zCountry) {
    let twoLetters = zCountry.slice(0, 2).toUpperCase();
    return `You Live In ${twoLetters}`;
  }

  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }

  return fullDetails(); 
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
