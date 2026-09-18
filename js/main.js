(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "Close" : "Menu";
    });

    // Close the mobile nav if the viewport grows past the breakpoint
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760 && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }

  // Footer copyright year
  var yearEl = document.getElementById("copyright-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
