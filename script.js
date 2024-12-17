const colorInput = document.getElementById("colorInput");
const previewBox = document.getElementById("previewBox");
const hexValueDisplay = document.getElementById("hexValue");
const rgbValueDisplay = document.getElementById("rgbValue");

// Convert HEX to RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

// Update color preview and values
function updateColor() {
  const selectedColor = colorInput.value; // HEX value
  previewBox.style.backgroundColor = selectedColor;
  hexValueDisplay.textContent = selectedColor;
  rgbValueDisplay.textContent = hexToRgb(selectedColor);
}

// Attach event listener to the color input
colorInput.addEventListener("input", updateColor);

// Initialize with the default color
updateColor();
