import { getCurrentProjectId } from './activeState';

// Utility for handling section observation
export function initializeSectionObserver() {
  const sections = document.querySelectorAll('.project-section');
  const navLinks = document.querySelectorAll('.project-link');
  const projectLinks = document.querySelectorAll('.nav-item[href^="/projects/"]');

  const options = {
    threshold: 0.5,
    rootMargin: '-100px 0px -50% 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id;
        updateActiveLink(activeId);
        highlightCurrentProject();
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));

  function updateActiveLink(activeId: string) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const sectionId = href?.split('#')[1];
      
      if (sectionId === activeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function highlightCurrentProject() {
    const currentProjectId = getCurrentProjectId();
    if (!currentProjectId) return;

    projectLinks.forEach(link => {
      const href = link.getAttribute('href');
      const projectMatch = href?.match(/^\/projects\/(\d+)$/);
      if (projectMatch && projectMatch[1] === currentProjectId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Initial highlight
  highlightCurrentProject();
}