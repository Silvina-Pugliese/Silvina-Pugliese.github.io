(function () {

  var groups = [
    '.note',
    '.feature',
    '.work .item',
    '.cols figure',
    '.about > div > .row',
    '.guides-intro'
  ];

  var els = [];


  groups.forEach(function (sel) {

    document.querySelectorAll(sel).forEach(function (el, i) {

      el.classList.add('reveal');

      el.style.setProperty(
        '--i',
        Math.min(i % 5, 4)
      );

      els.push(el);

    });

  });


  if (!('IntersectionObserver' in window)) {

    els.forEach(function (el) {
      el.classList.add('in');
    });

    return;

  }


  var io = new IntersectionObserver(

    function (entries) {

      entries.forEach(function (e) {

        if (e.isIntersecting) {

          e.target.classList.add('in');

          io.unobserve(e.target);

        }

      });

    },

    {
      threshold: 0.12,
      rootMargin: '0px 0px -6% 0px'
    }

  );


  els.forEach(function (el) {
    io.observe(el);
  });


})();
