// $(document).ready(function () {
  // Build nav inside #loadnav, but use the new layout/styling system
  const $nav = $('<nav/>').appendTo('#loadnav');

  $nav.addClass('no-transition');
  $nav
    .addClass('navbar navbar-expand-lg navbar-dark fixed-top')
    .css({
      position: 'fixed',
      'z-index': 99999,
      transition:
        'background-color 0.5s ease, backdrop-filter 0.5s ease, -webkit-backdrop-filter 0.5s ease, left 0.5s ease, right 0.5s ease, top 0.5s ease, border-radius 0.5s ease, outline 0.5s ease'
    })
    .html(`
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img src="img/whitelogo.png" width="30" height="30" class="d-inline-block align-top" alt="">
          <div id="flip" class="d-inline-block align-top">
            Pappim Pipatkasrira
          </div>
        </a>
        <button class="navbar-toggler" type="button"
          data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link pnav-background">Background</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link pnav-profile" href="profile.html">Profile</a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link pnav-project">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link pnav-contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="pappim-pipatkasira-resume.pdf" target="_blank">Download PDF</a>
            </li>
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Download Profile
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="pappim-pipatkasira-resume.pdf">PDF file</a>
                <a class="dropdown-item" href="pappim-pipatkasira-resume.zip">JPEG files (ZIP Archive)</a>
              </div>
            </li> -->
          </ul>
        </div>
      </div>
    `);

  // Start as solid
  $nav.addClass('nav-solid');

  // Spacer so content doesn't jump under fixed nav
  function ensureSpacer() {
    // const id = 'nav-placeholder';
    // if (!document.getElementById(id)) {
    //   $('<div id="nav-placeholder" aria-hidden="true"></div>').insertAfter($nav);
    // }
    // $('#nav-placeholder').height($nav.outerHeight() || 0);
  }

  ensureSpacer();
  setTimeout(ensureSpacer, 0);
  $(window).on('resize', ensureSpacer);
  $(document).on('shown.bs.collapse hidden.bs.collapse', '#navbarNav', ensureSpacer);

  // Glass vs solid behaviour
  function updateGlass() {
    if (window.scrollY > 0) {
      $nav.removeClass('nav-solid').addClass('nav-glass');
    } else {
      $nav.removeClass('nav-glass').addClass('nav-solid');
    }
  }

  updateGlass();
  $(window).on('scroll', updateGlass);

  // Inject styles for nav-glass / nav-solid
  const style = `
    <style>
    nav.no-transition {
      transition: none !important;
    }
    nav.navbar.nav-solid {
      background-color: #000 !important;
      border-radius: 0;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      outline: 0px solid #ffffff55;
    }
    nav.navbar.nav-glass {
      left: 10px !important;
      right: 10px !important;
      top: 10px !important;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.5) !important;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      outline: 0.5px solid #ffffff55;
    }
    nav.navbar {
      background-clip: padding-box;
    }
    </style>
  `;
  $('head').append(style);

  // Enable transitions after first paint
  requestAnimationFrame(() => {
    setTimeout(() => $nav.removeClass('no-transition'), 100);
  });

  // Presentation mode hotkeys (kept from original)
  $(window).keypress(function (e) {
    const ev = e || window.event;
    const key = ev.keyCode || ev.which;

    // Plus
    if (key === 43) {
      $('.card').addClass('expandable');
      console.log('Presentation mode enabled.');
    }
    // Minus
    if (key === 45) {
      $('.card').removeClass('expandable');
      console.log('Presentation mode disabled.');
    }
  });

  // Scroll-based active nav highlighting
  function updateActiveNav() {
    const $win = $(window);
    const scrollTop = $win.scrollTop();
    const viewportHeight = $win.height();
    const scrollMarker = scrollTop + viewportHeight * 0.4;

    const $profile = $('#profile');
    const $projects = $('#projects');
    const $contact = $('#contact');

    const profileTop = $profile.length ? $profile.position().top : 0;
    const projectsTop = $projects.length ? $projects.position().top : Number.MAX_VALUE;
    const contactTop = $contact.length ? $contact.position().top : Number.MAX_VALUE;

    // Default: clear all
    $('.pnav-background, .pnav-project, .pnav-contact').removeClass('active');

    if (scrollMarker >= contactTop) {
      // In or past contact section
      $('.pnav-contact').addClass('active');
    } else if (scrollMarker >= projectsTop) {
      // In project section
      $('.pnav-project').addClass('active');
    } else {
      // Otherwise background/profile
      $('.pnav-background').addClass('active');
    }
  }

  updateActiveNav();
  $(document).on('scroll', updateActiveNav);

  // Click handlers
  $('.pnav-background').click(function () {
    const el = document.querySelector('#profile');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });

  $('.pnav-project').click(function () {
    const el = document.querySelector('#projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });

  $('.pnav-contact').click(function () {
    const el = document.querySelector('#contact-selector');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
// });

// Keep global presentationMode helper
function presentationMode(isOn) {
  if (isOn) {
    $('.card').addClass('expandable');
    console.log('Presentation mode enabled.');
  } else {
    $('.card').removeClass('expandable');
    console.log('Presentation mode disabled.');
  }
}
