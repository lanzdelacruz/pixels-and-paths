/* Pixels and Paths: zoom comparison widget
   Lanz Dela Cruz

   One slider drives both panes. Its value is written to a CSS custom
   property on the widget, so the browser does the scaling and both
   versions of the scene are guaranteed to be magnified by the same
   amount. */

(function () {
  "use strict";

  var widget  = document.querySelector(".widget");
  var slider  = document.getElementById("zoom");
  var readout = document.getElementById("zoomValue");
  var reset   = document.getElementById("reset");
  var verdict = document.getElementById("verdict");

  if (!widget || !slider || !readout) return;

  var DEFAULT_ZOOM = 400;
  var MIN = Number(slider.min);
  var MAX = Number(slider.max);

  function describe(p) {
    if (p < 200)  return "At " + p + "% the two panes look almost the same. Keep dragging.";
    if (p < 600)  return "At " + p + "% the raster sun has a stepped edge. The vector sun is still a circle.";
    if (p < 1100) return "At " + p + "% the raster pane is mostly squares. Its 480 by 270 pixels were fixed when the file was saved.";
    return "At " + p + "% the raster pane holds no detail left to show, while the vector edge is still as sharp as the screen allows.";
  }

  function apply(p) {
    widget.style.setProperty("--zoom", p / 100);
    slider.style.setProperty("--fill", ((p - MIN) / (MAX - MIN)) * 100 + "%");
    readout.value = p + "%";
    if (verdict) verdict.textContent = describe(p);
  }

  slider.addEventListener("input", function () { apply(Number(slider.value)); });

  if (reset) {
    reset.addEventListener("click", function () {
      slider.value = DEFAULT_ZOOM;
      apply(DEFAULT_ZOOM);
      slider.focus();
    });
  }

  apply(Number(slider.value));
})();

/* Vector diagram: hovering or tabbing to a point prints its coordinate pair,
   which shows that the shape is stored as numbers, not pixels. */
(function () {
  "use strict";
  var out = document.getElementById("coordReadout");
  var pts = document.querySelectorAll(".diagram .pt");
  if (!out || !pts.length) return;

  function show(el) {
    out.textContent = el.getAttribute("data-name") + ": (" +
      el.getAttribute("cx") + ", " + el.getAttribute("cy") + ")";
  }
  Array.prototype.forEach.call(pts, function (el) {
    el.addEventListener("mouseenter", function () { show(el); });
    el.addEventListener("focus",      function () { show(el); });
  });
})();
