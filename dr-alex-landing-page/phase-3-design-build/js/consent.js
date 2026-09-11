/* ==========================================================================
   Cookie consent + gated Google Analytics 4
   --------------------------------------------------------------------------
   GA4 is NOT loaded until the visitor actively accepts. Nothing is written to
   their device before that — which is the point of the banner. Loading GA
   first and showing a banner afterwards is the common implementation and is
   not compliant, so the order here is deliberate.

   The banner markup is built in JavaScript rather than duplicated across the
   four HTML pages, so there is one place to change it.
   ========================================================================== */
(function () {
  "use strict";

  // ---- SET THIS ----------------------------------------------------------
  // Replace with the Measurement ID from Google Analytics (Admin → Data
  // Streams → your web stream). It looks like "G-ABC1234567".
  // While it stays as the placeholder, no analytics load at all and the
  // banner is not shown — so the site is safe to deploy before GA is set up.
  var GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
  // ------------------------------------------------------------------------

  var STORAGE_KEY = "apc-cookie-consent";
  var PLACEHOLDER_ID = "G-XXXXXXXXXX";
  // The placeholder is all letters, so it satisfies the shape test on its own —
  // it has to be excluded by name, or an unconfigured site shows a cookie
  // banner that consents to nothing.
  var configured = GA_MEASUREMENT_ID !== PLACEHOLDER_ID &&
                   /^G-[A-Z0-9]{6,}$/i.test(GA_MEASUREMENT_ID);

  function readChoice() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function saveChoice(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* private mode */ }
  }

  function loadAnalytics() {
    if (!configured || window.__apcAnalyticsLoaded) return;
    window.__apcAnalyticsLoaded = true;

    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    // IP anonymisation is the default in GA4, but stated explicitly so the
    // behaviour is visible to whoever reads this next.
    gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function removeBanner(banner) {
    if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
  }

  function buildBanner() {
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-live", "polite");
    banner.setAttribute("aria-label", "Cookie choice");

    banner.innerHTML =
      '<div class="cookie-banner-inner">' +
        '<p class="cookie-banner-text">We would like to use Google Analytics to understand how ' +
        'this site is used. It sets cookies on your device. Nothing is stored unless you accept. ' +
        '<a href="cookies.html">Read our Cookie Policy</a>.</p>' +
        '<div class="cookie-banner-actions">' +
          '<button type="button" class="btn btn-ghost" data-consent="declined">Decline</button>' +
          '<button type="button" class="btn btn-primary" data-consent="accepted">Accept</button>' +
        '</div>' +
      '</div>';

    banner.addEventListener("click", function (event) {
      var choice = event.target.getAttribute && event.target.getAttribute("data-consent");
      if (!choice) return;
      saveChoice(choice);
      if (choice === "accepted") loadAnalytics();
      removeBanner(banner);
    });

    document.body.appendChild(banner);
    // Move focus to the banner so keyboard and screen-reader users meet it.
    var firstButton = banner.querySelector("button");
    if (firstButton) firstButton.focus();
  }

  // Exposed so the Cookie Policy page can offer "change your choice".
  window.apcResetCookieChoice = function () {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    location.reload();
  };

  var choice = readChoice();

  if (choice === "accepted") {
    loadAnalytics();
  } else if (choice !== "declined" && configured) {
    // No decision yet, and analytics are actually configured — ask.
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", buildBanner);
    } else {
      buildBanner();
    }
  }
})();
