document.getElementById("form1").onsubmit = (e) => {
  e.preventDefault();
  document.getElementById("result").innerText = `Sum = ${
    Number(document.getElementById("form1").num1.value) +
    Number(document.getElementById("form1").num2.value)
  }`;
};
