
// Nav scroll 
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        navbar.classList.add('nav-scrolled');
        logoDark.src = 'assets/img/logo-dark.png'
        
      } else {
        navbar.classList.remove('nav-scrolled');
      }
    });
  });


// Qoutes style
document.addEventListener('DOMContentLoaded', function () {
    // object
    const testimonials = [
      { quote: "Per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari fiant sollemnes in futurum quarta decima. Lorem ipsum dolorum have a great day.", author: "John Smith", company: "Microsoft" },
      { quote: "Lorem ipsum dolorum have a great day.", author: "Jane Doe", company: "Google" },
      // Add more testimonials as needed
    ];

    let currentIndex = 0;

    function updateTestimonial() {
      const currentTestimonial = testimonials[currentIndex];
      document.getElementById('quote').innerHTML = `<i class="fa-solid fa-quote-left"></i> ${currentTestimonial.quote} <i class="fa-solid fa-quote-right"></i>`;
      document.getElementById('author').textContent = currentTestimonial.author;
      document.getElementById('company').textContent = currentTestimonial.company;
    }

    function showNextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateTestimonial();
    }

    function showPreviousTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial();
    }

    document.getElementById('nextBtn').addEventListener('click', showNextTestimonial);
    document.getElementById('prevBtn').addEventListener('click', showPreviousTestimonial);

    // Initial update
    updateTestimonial();
  });