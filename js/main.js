/* AM/NS India — site interactions: mobile nav, scroll reveal, counters, form */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("open");
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        toggle.classList.remove("open");
        links.classList.remove("open");
      }
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // Animated counters
  var counters = document.querySelectorAll("[data-count]");
  function animate(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var decimals = (el.getAttribute("data-decimals") || "0") | 0;
    var dur = 1400, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animate(en.target); co.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  // Contact form (demo only — no backend)
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-result");
      if (note) {
        note.textContent = "Thank you — your enquiry has been recorded. Our team will be in touch shortly. (Demo form: no data is transmitted.)";
        note.style.color = "#2e9e6b";
      }
      form.reset();
    });
  }

  // Current year in footer
  var y = document.querySelectorAll(".year");
  y.forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
