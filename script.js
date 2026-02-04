const items = document.querySelectorAll(".slide-up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.2 });

items.forEach(i => observer.observe(i));
