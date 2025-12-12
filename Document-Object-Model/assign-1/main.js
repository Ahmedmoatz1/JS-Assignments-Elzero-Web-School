// 1. By ID
console.log(document.getElementById("elzero"));

// 2. By class name (first item)
console.log(document.getElementsByClassName("element")[0]);

// 3. By tag name (assuming it's the only <div>)
console.log(document.getElementsByTagName("div")[0]);

// 4. By name attribute
console.log(document.getElementsByName("js")[0]);

// 5. querySelector by ID
console.log(document.querySelector("#elzero"));

// 6. querySelector by class
console.log(document.querySelector(".element"));

// 7. querySelector by attribute
console.log(document.querySelector('[name="js"]'));

// 8. querySelector by tag (again, assuming it's the only one)
console.log(document.querySelector("div"));

// 9. querySelectorAll by ID
console.log(document.querySelectorAll("#elzero")[0]);

// 10. querySelectorAll by class
console.log(document.querySelectorAll(".element")[0]);

// 11. querySelectorAll by tag
console.log(document.querySelectorAll("div")[0]);

// 12. querySelectorAll by attribute
console.log(document.querySelectorAll('[name="js"]')[0]);

// 13. Using childNodes (assuming it's the first element in body)
console.log(document.body.childNodes[1]); // Might be affected by whitespace

// 14. Using document.body.children
console.log(document.body.children[0]);

// 15. Using closest (on a known element)
let el = document.getElementById("elzero");
console.log(el.closest("#elzero"));
