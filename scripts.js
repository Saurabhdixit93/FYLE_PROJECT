$(document).ready(function () {
  $("#contactForm").submit(function (event) {
    event.preventDefault();

    var form = $(this);
    var formData = form.serialize();

    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: formData,
      success: function (response) {
        form[0].reset();
        $("#contactModal").modal("hide");
        window.location.href = "https://getform.io/thank-you?id=pamqovya";
      },
      error: function (error) {
        alert("Oops! There was an error. Please try again.");
      },
    });
  });
});
$(document).ready(function () {
  const slides = $(".slide");
  const dotsContainer = $(".slider-dots");

  const numVisibleSlides = 5;
  const numTotalSlides = slides.length;
  const numDots = Math.ceil(numTotalSlides / numVisibleSlides);

  for (let i = 0; i < numDots; i++) {
    const dot = $("<button>").addClass("dot");
    dotsContainer.append(dot);
  }

  const dots = $(".dot");
  let currentSlideGroup = 0;

  dots.eq(currentSlideGroup).addClass("active");

  function moveToSlideGroup(groupIndex) {
    const targetIndex = groupIndex * numVisibleSlides;
    slides
      .hide()
      .slice(targetIndex, targetIndex + numVisibleSlides)
      .fadeIn(500);
    dots.removeClass("active").eq(groupIndex).addClass("active");
  }

  moveToSlideGroup(currentSlideGroup);

  dots.each(function (index) {
    $(this).on("click", function () {
      currentSlideGroup = index;
      moveToSlideGroup(currentSlideGroup);
    });
  });
});

$(document).ready(function () {
  $(".project-list li").on("click", function () {
    $(".project-list li").removeClass("active");
    $(this).addClass("active");
    const imagePath = $(this).data("image");
    $(".project-image img").attr("src", imagePath);
  });
});
