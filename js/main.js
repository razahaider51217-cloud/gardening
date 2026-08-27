// Seed to Garden — interactive behavior
(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.getElementById("navToggle");
  var header = document.getElementById("siteHeader");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Image fallback: if a remote photo fails to load, swap to a local inline SVG so the layout never breaks.
  var FALLBACK =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">' +
        '<rect width="800" height="600" fill="#e8f0e8"/>' +
        '<text x="400" y="50%" font-family="Georgia, serif" font-size="46" fill="#51705c" text-anchor="middle">Grow something great</text>' +
        '<circle cx="400" cy="56%" r="70" fill="none" stroke="#3c7250" stroke-width="6"/>' +
        '<path d="M400 485 v90 M400 500 l-28 -18 M400 500 l28 -18 M400 515 l-26 16 M400 515 l26 16" stroke="#3c7250" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      "</svg>"
    );

  var images = document.querySelectorAll("img[data-fallback]");
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("error", function () {
      this.onerror = null;
      this.src = FALLBACK;
    });
  }

  // Contact form: build a mailto draft so the site works without a backend.
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("cname").value;
      var email = document.getElementById("cemail").value;
      var subject = document.getElementById("csubject").value;
      var message = document.getElementById("cmsg").value;
      if (!name || !email || !message) {
        alert("Please fill in your name, email, and message.");
        return;
      }
      var body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
      var href =
        "mailto:hello@seedtogarden.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      window.location.href = href;
    });
  }
})();


