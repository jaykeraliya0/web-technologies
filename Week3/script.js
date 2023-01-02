"use strict";
document.getElementById("btn").onclick = () => {
  const div = document.createElement("div");
  div.style.border = "red solid 2px";
  const ele = document.createElement("h1");
  ele.innerHTML = "CHARUSAT";
  div.append(ele);
  document.body.append(div);
};
