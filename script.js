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


  // =======================
// ZOOM CONTROLS
// =======================

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const zoomButtons = document.querySelectorAll(".zoom-btn");

  // Default-Schriftgröße
  const BASE_SIZE = 100; // entspricht 16px
  let currentZoom = parseInt(localStorage.getItem("clear4-zoom")) || BASE_SIZE;

  // Anwenden beim Laden
  root.style.fontSize = currentZoom + "%";

  zoomButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      zoomButtons.forEach(z => z.classList.remove("zoom-btn--active"));

      const mode = btn.dataset.zoom;

      if (mode === "small") currentZoom = Math.max(70, currentZoom - 10);
      if (mode === "large") currentZoom = Math.min(160, currentZoom + 10);
      if (mode === "reset") currentZoom = BASE_SIZE;

      btn.classList.add("zoom-btn--active");

      root.style.fontSize = currentZoom + "%";
      localStorage.setItem("clear4-zoom", currentZoom);
    });
  });
});

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
