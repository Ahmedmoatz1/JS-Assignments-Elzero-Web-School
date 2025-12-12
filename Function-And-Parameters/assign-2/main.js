function calculate(firstNum, secondNum, operation) {
  // التحقق من وجود الرقم الثاني
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
    return;
  }

  // تنفيذ العملية الحسابية بناءً على نوع العملية
  switch (operation) {
    case "add":
      console.log(firstNum + secondNum);
      break;
    case "subtract":
      console.log(firstNum - secondNum);
      break;
    case "multiply":
      console.log(firstNum * secondNum);
      break;
    default:
      // إذا لم يتم تحديد نوع العملية أو كانت غير معروفة، قم بالجمع
      console.log(firstNum + secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
