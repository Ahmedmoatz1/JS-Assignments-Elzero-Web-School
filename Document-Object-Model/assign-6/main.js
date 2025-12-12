let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// نجمع آخر عنصر من arr2 (pop) => 'Y'
// نضيف آخر عنصر من arr1 (pop) => 'X'
// نضيف قبل الأخير من arr2: نستخدم pop مرتين لآخر عنصرين ثم نحتفظ بالقبل الأخير

allArrs.push(arr2.pop().toLowerCase()); // 'Y'
allArrs.push(arr1.pop().toLowerCase()); // 'X'
allArrs.push(arr2.pop().toLowerCase()); // 'F'

// لكن الناتج الآن ['y', 'x', 'f'] وهو بالعكس => نحتاج نعكسها

allArrs = allArrs.reverse();

console.log(allArrs.join('')); // fxy
