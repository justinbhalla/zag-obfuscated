<script>
  const sections = document.querySelectorAll('.animate-fade');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(section => observer.observe(section));

  async function typeText(id, text, delay = 60) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = '';
    for (let i = 0; i < text.length; i++) {
      el.textContent += text.charAt(i);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  window.addEventListener("DOMContentLoaded", () => {
    typeText("typed-text", "Strategic Thinking. Intelligent Results.");
  });
</script>
