$(document).ready(function() {
    // Function to add/remove the fixed-nav class based on scroll position
    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) { // Adjust the scroll position as needed
            $('#nav').addClass('fixed-nav');
        } else {
            $('#nav').removeClass('fixed-nav');
        }
    });

    // Open slideshow function
    function openSlideshow() {
        $("#slideshow-modal").css("display", "block");
    }

    // Close slideshow function
    function closeSlideshow() {
        $("#slideshow-modal").css("display", "none");
    }

    // When the user clicks on <span> (x), close the slideshow
    $(".close-button").click(function() {
        closeSlideshow();
    });

    // When the user clicks anywhere outside of the slideshow, close it
    $(window).click(function(event) {
        if (event.target == $("#slideshow-modal")[0]) {
            closeSlideshow();
        }
    });

    // Set initial slide index
    var slideIndex = 0;

    // Function to show a specific slide
    function showSlide(index) {
        var slides = $(".mySlides");

        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex = index;
        }

        // Hide all slides
        slides.css("display", "none");

        // Display the current slide
        slides.eq(slideIndex).css("display", "block");
    }

    // Show the first slide when the modal is opened
    openSlideshow();

    // Event listeners for the modal (click outside the modal to close it)
    $("#slideshow-modal").click(function(event) {
        if (event.target == this) {
            closeSlideshow();
        }
    });

    // Event listeners for the next and previous buttons
    $(".prev").click(function() {
        showSlide(slideIndex - 1);
    }).css('cursor', 'pointer'); // Change mouse cursor to pointer

    $(".next").click(function() {
        showSlide(slideIndex + 1);
    }).css('cursor', 'pointer'); // Change mouse cursor to pointer
});
