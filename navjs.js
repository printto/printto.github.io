$(document).ready(function() {

  $('#loadnav').html(`<nav class="navbar navbar-expand-sm navbar-dark">
    <a class="navbar-brand" href="index.html">
      <img src="img/whitelogo.png" width="30" height="30" class="d-inline-block align-top" alt="">
  <div id=flip class="d-inline-block align-top">
    Pappim Pipatkasrira
  </div>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
        <div class="dropdown show">
            <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Download Profile
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="pappim-pipatkasira-resume.pdf">PDF file</a>
              <a class="dropdown-item" href="pappim-pipatkasira-resume.zip">JPEG files (ZIP Archive)</a>
            </div>
        </div>
      </ul>
    </div>
  </nav>`);

/*
  var current_title = $(document).attr('title');
  if (current_title.includes("Software Engineer")) {
    $(".pnav-background").addClass("active");
  } else if (current_title.includes("Profile")) {
    $(".pnav-profile").addClass("active");
  } else if (current_title.includes("Projects")) {
    $(".pnav-project").addClass("active");
  } else if (current_title.includes("Contact")) {
    $(".pnav-contact").addClass("active");
  }
  */
  if($(this).scrollTop()>=$('#profile').position().top){
      $(".pnav-background").addClass("active");
      $(".pnav-project").removeClass("active");
      $(".pnav-contact").removeClass("active");
  }
  if($(this).scrollTop()>=$('#projects').position().top){
      $(".pnav-background").removeClass("active");
      $(".pnav-project").addClass("active");
      $(".pnav-contact").removeClass("active");
  }
  if($(this).scrollTop()>=$('#contact').position().top){
      $(".pnav-background").removeClass("active");
      $(".pnav-project").removeClass("active");
      $(".pnav-contact").addClass("active");
  }

  $(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#profile').position().top){
        $(".pnav-background").addClass("active");
        $(".pnav-project").removeClass("active");
        $(".pnav-contact").removeClass("active");
    }
    if($(this).scrollTop()>=$('#projects').position().top){
        $(".pnav-background").removeClass("active");
        $(".pnav-project").addClass("active");
        $(".pnav-contact").removeClass("active");
    }
    if($(this).scrollTop()>=$('#contact').position().top){
        $(".pnav-background").removeClass("active");
        $(".pnav-project").removeClass("active");
        $(".pnav-contact").addClass("active");
    }
  })

  $(".pnav-background").click(function() {
    document.querySelector("#profile").scrollIntoView({ behavior: 'smooth' })
  });

  $(".pnav-project").click(function() {
    document.querySelector("#projects").scrollIntoView({ behavior: 'smooth' })
  });

  $(".pnav-contact").click(function() {
    document.querySelector("#contact-selector").scrollIntoView({ behavior: 'smooth' })
    //$("#contact").get(0).scrollIntoView();
  });

});
