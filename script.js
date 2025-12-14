document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('menu-close');
  const overlay = document.getElementById('menu-overlay');
  const nav = document.querySelector('nav.nav');
  function openMenu() {
    nav.classList.add('open');
    overlay.classList.add('open');
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    nav.classList.remove('open');
    overlay.classList.remove('open');
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    document.body.style.overflow = '';
  }
  if (menuBtn && nav && closeBtn && overlay) {
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    menuBtn.addEventListener('click', function (e) {
      openMenu();
      e.stopPropagation();
    });
    closeBtn.addEventListener('click', function (e) {
      closeMenu();
      e.stopPropagation();
    });
    overlay.addEventListener('click', function () {
      closeMenu();
    });
    nav.addEventListener('click', function (e) {
      e.stopPropagation();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) closeMenu();
    });
  }
  document.querySelectorAll('.nav-links > li').forEach(function (item) {
    item.addEventListener('click', function (e) {
      const dropdown = item.querySelector('.dropdown');
      if (dropdown) {
        document.querySelectorAll('.dropdown.open').forEach(function (openDropdown) {
          if (openDropdown !== dropdown) {
            openDropdown.classList.remove('open');
            openDropdown.style.display = 'none';
          }
        });
        dropdown.classList.toggle('open');
        dropdown.style.display = dropdown.classList.contains('open') ? 'block' : 'none';
        e.stopPropagation();
      }
    });
  });
  document.body.addEventListener('click', function () {
    document.querySelectorAll('.dropdown.open').forEach(function (dropdown) {
      dropdown.classList.remove('open');
      dropdown.style.display = 'none';
    });
  });
});
