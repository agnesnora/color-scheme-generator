const colorschemeContainer = document.getElementById("container");
let pickedColor = document.getElementById("colorPicker");
let hexWithoutHashtag = "";
let mode = document.getElementById("colorMode");
let modeSet = "";

pickedColor.addEventListener("input", function () {
  console.log(pickedColor.value);
  let hex = pickedColor.value;
  hexWithoutHashtag = hex.split("#").join("");
});

mode.addEventListener("input", function () {
  modeSet = mode.value.toLowerCase();
});

function renderDefault() {
  fetch(`https://www.thecolorapi.com/scheme?hex=D30342&mode=monochrome&count=5`)
    .then((res) => res.json())
    .then((data) => {
      let defaultHtml = "";
      data.colors.forEach(function (color) {
        defaultHtml += `<div id="colorscheme">
    <div>
      <p style="background-color:${color.hex.value}"></p>
      <p id="hexvalue">${color.hex.value}</p>
      
      </div>
      <div>

`;
      });
      colorschemeContainer.innerHTML = defaultHtml;
    });
}
renderDefault();

document.getElementById("getColorBtn").addEventListener("click", function () {
  console.log("fetchben picked:", pickedColor.value);
  console.log("fetchben hex");

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexWithoutHashtag}&mode=${modeSet}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.colors);

      let html = "";

      data.colors.forEach(function (color) {
        html += `<div id="colorscheme">
                       <div>
                         <p style="background-color:${color.hex.value}"></p>
                         <p id="hexvalue">${color.hex.value}</p>
                         
                         </div>
                         <div>

         `;

        console.log(color.hex.value);

        colorschemeContainer.innerHTML = html;
      });
    });
});
