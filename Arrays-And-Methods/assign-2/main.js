let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends = friends.filter((_, i, arr) => arr.indexOf(arr[i]) !== 0 && arr.indexOf(arr[i]) !== arr.length - 1);

console.log(friends); // ["Eman", "Osama"]
