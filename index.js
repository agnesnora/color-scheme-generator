let pickedColor = document.getElementById("colorPicker");
let mode = document.getElementById("colorMode");
let hexWithoutHashtag = "D30342";
let hex = "";
let colorModePicked = "";
let colorScheme = document.getElementById("colorpalette");

pickedColor.addEventListener("input", function () {
  hex = pickedColor.value;
  console.log(hex);
  hexWithoutHashtag = hex.slice(1);
  console.log(hexWithoutHashtag);
});

document.getElementById("colorMode").addEventListener("input", function () {
  console.log(mode.value);
  colorModePicked = mode.value.toLowerCase();
});

document.getElementById("getColorBtn").addEventListener("click", render);

render();
function render() {
  let html = "";

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexWithoutHashtag}&mode=${colorModePicked}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.colors);

      let html = "";
      data.colors.forEach(function (color) {
        let hexValue = color.hex.value;

        html += `<div class ="colorColumn">
        <p class="colorCell" style="background-color:${hexValue}"></p>
        <p class="hexNumber" "onclick="copy() data-color="${hexValue}">${hexValue}</p>
      </div>`;
      });

      colorScheme.innerHTML = html;
    });
}

function dayNight() {
  const bodyEl = document.body;
  bodyEl.classList.toggle("dark-mode");
}

document.getElementById("moon").addEventListener("click", dayNight);
