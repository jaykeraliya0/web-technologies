const form = document.querySelector("form");
form.onsubmit = function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const flag = document.getElementById("flag");
  flag.src = `https://countryflagsapi.com/svg/${data.country}`;
  flag.crossOrigin = "anonymous";
  document.body.appendChild(flag);
  console.log(data);
};
