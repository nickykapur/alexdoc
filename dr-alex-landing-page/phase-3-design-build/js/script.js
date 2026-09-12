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

  /* ------------------------------------------------------------------------
     Contact form — submits to Formspree.

     The single rule here: never tell a patient their enquiry was received
     unless the server confirmed it. Someone in pain who is told "the clinic
     will be in touch" and then hears nothing does not phone — they wait. So
     every path that is not a confirmed success shows the phone numbers
     instead, including an unset endpoint, a network failure and a rejection
     from Formspree.
     ------------------------------------------------------------------------ */

  // Formspree endpoint ID — the part after /f/ in the URL Formspree gives you
  // when you create the form. Replace the placeholder below with it.
  var FORMSPREE_ID = "FORMSPREE_ID_HERE";

  var FORMSPREE_PLACEHOLDER = "FORMSPREE_ID_HERE";
  var formspreeConfigured = FORMSPREE_ID !== FORMSPREE_PLACEHOLDER &&
                            /^[a-zA-Z0-9]{6,}$/.test(FORMSPREE_ID);

  // Shown whenever the enquiry did not get through. Kept as one string so the
  // fallback advice cannot drift between the different failure paths.
  var CALL_INSTEAD =
    "Please phone the clinic instead — Sasha (secretary) on 085 713 3548, " +
    "Dr Mudrakouski on 086 823 9362, or reception on 01 837 5400.";

  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    var submitButton = form.querySelector('button[type="submit"]');
    var submitLabel = submitButton ? submitButton.textContent : "";

    function setStatus(message, state) {
      status.textContent = message;
      status.className = "form-status " + state;
    }

    function setBusy(busy) {
      if (!submitButton) return;
      submitButton.disabled = busy;
      submitButton.textContent = busy ? "Sending…" : submitLabel;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        setStatus("Please complete all required fields.", "error");
        return;
      }

      if (!formspreeConfigured) {
        // The form is live but has no destination. Say so plainly rather than
        // accepting the enquiry into nothing.
        setStatus("This form is not yet accepting enquiries. " + CALL_INSTEAD, "error");
        return;
      }

      setBusy(true);
      setStatus("Sending your enquiry…", "");

      fetch("https://formspree.io/f/" + FORMSPREE_ID, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Formspree responded " + response.status);
          setStatus(
            "Thank you — your enquiry has been sent. The clinic will be in touch shortly.",
            "success"
          );
          form.reset();
        })
        .catch(function () {
          setStatus("Sorry — your enquiry could not be sent. " + CALL_INSTEAD, "error");
        })
        .then(function () {
          setBusy(false);
        });
    });
  }
})();
