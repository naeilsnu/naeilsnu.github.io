$(function() {
  try {
    new Rellax('.rellax', {
      center: true
    });
  }
  catch (e) {}
});

$(window).scroll(function() {
  var scaledown = document.getElementById('scaledown'),
      sections = document.querySelectorAll('section:not(.reveal)'),
      fadeouts = document.querySelectorAll('.fadeout[data-fadeout-id]'),
      viewportHeight = document.documentElement.clientHeight,
      i, el, rect, targetEl, targetRect;

  if (scaledown) {
    rect = scaledown.getBoundingClientRect();
    i = Math.max(Math.min((11 * window.pageYOffset + 12 * rect.bottom) / (12 * window.pageYOffset + 12 * rect.bottom), 1), 0);
    scaledown.style.transform = 'scale3d(' + i + ',' + i + ',' + 1 + ')';
    scaledown.style.top = Math.max(Math.min(window.pageYOffset / 6, (window.pageYOffset + rect.bottom) / 6), 0) + 'px';
  }

  for (i = 0; i < sections.length; ++i) {
    el = sections[i];
    rect = el.getBoundingClientRect();
    if (rect.top + 210 <= viewportHeight)
      el.classList.add('reveal');
  }

  for (i = 0; i < fadeouts.length; ++i) {
    el = fadeouts[i]; targetEl = document.getElementById(el.dataset.fadeoutId);
    rect = el.getBoundingClientRect(); targetRect = targetEl.getBoundingClientRect();
    if (rect.bottom >= targetRect.top + 30)
      el.classList.add('fadeout--invisible');
    else
      el.classList.remove('fadeout--invisible');
  }
});
