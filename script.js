document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const paletteSelect = document.getElementById("palette-select");

  const btnLight = document.getElementById("mode-light");
  const btnDark = document.getElementById("mode-dark");

  // gespeicherte Werte
  const savedPalette = localStorage.getItem("clear4-palette");
  const savedMode = localStorage.getItem("clear4-mode");

  if (savedPalette) paletteSelect.value = savedPalette;
  if (savedMode) html.setAttribute("data-color-mode", savedMode);

  // Palette anwenden
  function applyPalette(name) {
    html.setAttribute("data-palette", name);
    localStorage.setItem("clear4-palette", name);
  }

  // Mode anwenden
  function applyMode(mode) {
    html.setAttribute("data-color-mode", mode);
    btnLight.classList.toggle("current", mode === "light");
    btnDark.classList.toggle("current", mode === "dark");
    localStorage.setItem("clear4-mode", mode);
  }

  paletteSelect.addEventListener("change", () => {
    applyPalette(paletteSelect.value);
  });

  btnLight.addEventListener("click", () => applyMode("light"));
  btnDark.addEventListener("click", () => applyMode("dark"));

  // Initial anwenden
  applyPalette(paletteSelect.value);
  applyMode(savedMode || "light");
});
