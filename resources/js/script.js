function setupTypewriter(t) {
  var HTML = t.innerHTML

  t.innerHTML = ""

  var cursorPosition = 0,
    tag = "",
    writingTag = false,
    tagOpen = false,
    typeSpeed = 10,
    tempTypeSpeed = 0

  var type = function () {
    if (writingTag === true) {
      tag += HTML[cursorPosition]
    }

    if (HTML[cursorPosition] === "<") {
      tempTypeSpeed = 0
      if (tagOpen) {
        tagOpen = false
        writingTag = true
      } else {
        tag = ""
        tagOpen = true
        writingTag = true
        tag += HTML[cursorPosition]
      }
    }
    if (!writingTag && tagOpen) {
      tag.innerHTML += HTML[cursorPosition]
    }
    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === " ") {
        tempTypeSpeed = 0
      } else {
        tempTypeSpeed = Math.random() * typeSpeed + 50
      }
      t.innerHTML += HTML[cursorPosition]
    }
    if (writingTag === true && HTML[cursorPosition] === ">") {
      tempTypeSpeed = Math.random() * typeSpeed + 50
      writingTag = false
      if (tagOpen) {
        var newSpan = document.createElement("span")
        t.appendChild(newSpan)
        newSpan.innerHTML = tag
        tag = newSpan.firstChild
      }
    }

    cursorPosition += 1
    if (cursorPosition < HTML.length - 1) {
      setTimeout(type, tempTypeSpeed)
    }
  }

  return {
    type: type,
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop()
    //>=, not <=
    if (scroll >= 500) {
      $("#book_image__id").removeClass("sticky-image")
      $("#book_image__id").addClass("absolute-image")
    } else {
      $("#book_image__id").addClass("sticky-image")
      $("#book_image__id").removeClass("absolute-image")
    }

    if (scroll >= 500) {
      // $("#particle_phy__image").removeClass("sticky-particle-phy-img")
      // $("#book_image__id").addClass("absolute-image")
      // } else {
      //   $("#book_image__id").addClass("sticky-image")
      //   $("#book_image__id").removeClass("absolute-image")
    }
  })

  /* For the sticky navigation */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky")
      } else {
        $("nav").removeClass("sticky")
      }
    },
    {
      // offset: "60px;",
    }
  )

  /* Navigation scroll */
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash)
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          )
          return false
        }
      }
    })
  })
  /* Scroll on buttons */
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    )
  })
  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    )
  })
  /* Animations on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn")
    },
    {
      offset: "50%",
    }
  )
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeInUp")
    },
    {
      offset: "50%",
    }
  )
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeIn")
    },
    {
      offset: "50%",
    }
  )
  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated pulse")
    },
    {
      offset: "100%",
    }
  )
  /* Mobile navigation */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav")
    var icon = $(".js--nav-icon i")
    nav.slideToggle(200)
    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round")
      icon.removeClass("ion-navicon-round")
    } else {
      icon.addClass("ion-navicon-round")
      icon.removeClass("ion-close-round")
    }
  })
  $(window).scroll(function () {
    $(".hideme").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight()
      var bottom_of_window = $(window).scrollTop() + $(window).height()
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 800)
      }
    })
  })
})

var elements = ["hidden1", "hidden2", "hidden3", "hidden4", "hidden5"]

for (let i = 0; i < elements.length; i++) {
  var thisElement = $("." + elements[i]) //Get the current element based on class
  fadeInElement1(thisElement, i) //Call our "Fade in" function
}

function fadeInElement1(elem, time) {
  //Fade-in function that takes the element to fade-in, and the time it should wait
  setTimeout(function () {
    elem.css("opacity", "1") //Set our element's opacity to 1
  }, 800 * time) //Set the time it should wait
}

var elements = ["hiddenAI1", "hiddenAI2", "hiddenAI3", "hiddenAI4", "hiddenAI5"]

for (let i = 0; i < elements.length; i++) {
  var thisElement = $("." + elements[i]) //Get the current element based on class
  fadeInElement(thisElement, i) //Call our "Fade in" function
}

function fadeInElement(elem, time) {
  //Fade-in function that takes the element to fade-in, and the time it should wait
  setTimeout(function () {
    elem.css("opacity", "1") //Set our element's opacity to 1
  }, 2500 * time) //Set the time it should wait
}

var typewriter1 = document.getElementById("typewriter")
if ($("#typewriter").length) {
  typewriter1 = setupTypewriter(typewriter1)
  typewriter1.type()
}

//var c = document.getElementById("myCanvas");
//var ctx = c.getContext("2d");

//ctx.beginPath();
//ctx.lineWidth = 10;
//ctx.lineCap = "round";
//ctx.moveTo(20, 40);
//ctx.lineTo(20, 600);
//ctx.stroke();
