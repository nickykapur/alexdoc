(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  var navToggle = document.getElementById("nav-toggle");
  var primaryNav = document.getElementById("primary-nav");

  function closeNav() {
    if (!primaryNav || !navToggle) return;
    primaryNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  function toggleNav() {
    if (!primaryNav || !navToggle) return;
    var isOpen = primaryNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  }

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", toggleNav);

    // Close menu after choosing a nav link (mobile)
    primaryNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    // Close on Escape
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });

    // Collapse mobile nav automatically when resizing up to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1280) closeNav();
    });
  }

  // Contact form: client-side validation + confirmation.
  // NOTE: this does not send the enquiry anywhere yet — wire it to the
  // clinic's chosen form-handling service (e.g. Formspree, a booking
  // system, or a server-side endpoint) before launch.
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        status.textContent = "Please complete all required fields.";
        status.className = "form-status error";
        return;
      }

      status.textContent = "Thank you — your enquiry has been received. The clinic will be in touch shortly.";
      status.className = "form-status success";
      form.reset();
    });
  }
})();
