num1 = document.getElementById("num1");
num2 = document.getElementById("num2");

document.getElementById("form1").onsubmit = (e) => {
  e.preventDefault();
  document.getElementById("result").innerText = `Sum = ${Number(num1.value) + Number(num2.value)}`;
};
