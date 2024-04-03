document.addEventListener('DOMContentLoaded', function(){
  const parallax = document.querySelector('.parallax');
  let scrolled = window.pageYOffset;

  window.addEventListener('scroll', function(){
    const offsetY = parallax.getBoundingClientRect().top;
    const offsetTop = parallax.offsetTop;
    const height = parallax.offsetHeight;

    if (offsetY > 0 && offsetY < window.innerHeight) {
      scrolled = window.pageYOffset;
      const translate = (offsetY - window.innerHeight) * 0.4 + 'px';
      parallax.style.transform = 'translate3d(0, ' + translate + ', 0)';
    }
  });
});
