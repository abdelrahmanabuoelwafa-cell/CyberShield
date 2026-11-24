/* ============================================================
   CyberShield - Cybersecurity Awareness Website
   Team 6 · G5/CS · MTI Faculty of Computers & AI
   Multimedia Course Mini Project - site scripts
   ============================================================ */

/* ---------- 1. Mobile navigation toggle ---------- */
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // close the menu after choosing a link (small screens)
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* ---------- 2. Contact form validation ---------- */
(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;

  var success = document.getElementById('formSuccess');

  function fieldGroup(name) {
    var input = form.querySelector('[name="' + name + '"]');
    // radio groups live on the .form-group wrapper
    if (input && input.type === 'radio') {
      return input.closest('.form-group');
    }
    return input ? input.closest('.form-group') : null;
  }

  function markInvalid(group, invalid) {
    if (group) group.classList.toggle('invalid', invalid);
  }

  function validateField(input) {
    var group = input.closest('.form-group');
    var valid = input.checkValidity();
    markInvalid(group, !valid);
    return valid;
  }

  // live validation once a field was touched
  form.querySelectorAll('input, select, textarea').forEach(function (el) {
    el.addEventListener('blur', function () {
      if (el.type === 'radio' || el.type === 'checkbox') return;
      validateField(el);
    });
  });

  // radios: validate the group on change
  form.querySelectorAll('input[type="radio"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
      var group = radio.closest('.form-group');
      markInvalid(group, false);
    });
  });

  // the privacy checkbox lives outside a .form-group
  var privacy = form.querySelector('#privacy');
  var privacyRow = privacy ? privacy.closest('.form-check').nextElementSibling : null;

  if (privacy) {
    privacy.addEventListener('change', function () {
      if (privacy.checked && privacyRow) privacyRow.classList.remove('invalid');
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var allValid = true;

    form.querySelectorAll('input:not([type="radio"]):not([type="checkbox"]), select, textarea')
      .forEach(function (el) {
        if (!validateField(el)) allValid = false;
      });

    // radio group (student yes/no)
    var radios = form.querySelectorAll('input[name="student"]');
    var radioChosen = Array.prototype.some.call(radios, function (r) { return r.checked; });
    var radioGroup = radios.length ? radios[0].closest('.form-group') : null;
    markInvalid(radioGroup, !radioChosen);
    if (!radioChosen) allValid = false;

    // privacy checkbox
    if (privacy && !privacy.checked) {
      allValid = false;
      if (privacyRow) privacyRow.classList.add('invalid');
    }

    if (allValid) {
      form.reset();
      form.querySelectorAll('.invalid').forEach(function (g) { g.classList.remove('invalid'); });
      if (success) success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      if (success) success.hidden = true;
      var firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
})();

/* ---------- 3. Footer year ---------- */
(function () {
  var year = document.querySelector('.footer-bottom p');
  if (year && year.textContent.indexOf('2026') !== -1) return; // static text already fine
})();
