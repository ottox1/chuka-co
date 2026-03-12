document.addEventListener('DOMContentLoaded', () => {
  // Fade-in sections on scroll
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  sections.forEach((section) => observer.observe(section));

  // See More videos
  const seeMore = document.getElementById('seeMore');
  const videoGrid = document.getElementById('videoGrid');
  const videoFade = document.getElementById('videoFade');

  if (seeMore) {
    seeMore.addEventListener('click', () => {
      videoGrid.classList.add('expanded');
      seeMore.classList.add('hidden');
      videoFade.classList.add('hidden');
    });
  }
});
