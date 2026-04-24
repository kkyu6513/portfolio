/* ============================================
   Portfolio — Main JavaScript
   ============================================ */

// ─── NAV SCROLL EFFECT ───
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});


// ─── MOBILE MENU TOGGLE ───
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('open');
  hamburger.classList.toggle('active');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}


// ─── SCROLL REVEAL ───
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));


// ─── GITHUB INTEGRATION ───
const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Vue: '#41b883',
  Shell: '#89e051',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
};

function createProjectCard(repo) {
  const langColor = LANG_COLORS[repo.language] || '#A8A3B3';

  return `
    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-card">
      <div class="project-card-top">
        <div class="project-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 7l9-4 9 4v10l-9 4-9-4V7z"/>
            <path d="M3 7l9 4m0 0l9-4m-9 4v10"/>
          </svg>
        </div>
        <div class="project-arrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </div>
      </div>
      <h3>${repo.name}</h3>
      <p>${repo.description || '설명이 없습니다.'}</p>
      <div class="project-meta">
        ${repo.language
          ? `<span><span class="lang-dot" style="background:${langColor}"></span>${repo.language}</span>`
          : ''
        }
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          ${repo.stargazers_count}
        </span>
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="6" y1="3" x2="6" y2="15"/>
            <circle cx="18" cy="6" r="3"/>
            <circle cx="6" cy="18" r="3"/>
            <path d="M18 9a9 9 0 01-9 9"/>
          </svg>
          ${repo.forks_count}
        </span>
      </div>
    </a>
  `;
}

async function fetchGitHubRepos() {
  const username = document.getElementById('githubUsername').value.trim();
  const grid = document.getElementById('projectsGrid');

  if (!username) {
    grid.innerHTML = '<div class="project-placeholder"><p>유저네임을 입력해 주세요.</p></div>';
    return;
  }

  grid.innerHTML =
    '<div class="project-placeholder"><div class="loading-spinner"></div><p>저장소를 불러오는 중...</p></div>';

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=12&type=owner`
    );

    if (!response.ok) throw new Error('User not found');

    const repos = await response.json();

    if (!repos.length) {
      grid.innerHTML = '<div class="project-placeholder"><p>공개 저장소가 없습니다.</p></div>';
      return;
    }

    // Update GitHub link in contact socials
    const githubLink = document.querySelector('.contact-socials a:first-child');
    if (githubLink) githubLink.href = `https://github.com/${username}`;

    // Render project cards (exclude forks)
    grid.innerHTML = repos
      .filter((repo) => !repo.fork)
      .map(createProjectCard)
      .join('');
  } catch (error) {
    grid.innerHTML =
      '<div class="project-placeholder"><p>사용자를 찾을 수 없습니다. 유저네임을 확인해 주세요.</p></div>';
  }
}

// Enter key support for GitHub input
document.getElementById('githubUsername').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') fetchGitHubRepos();

   document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('githubUsername');
  if (input.value) fetchGitHubRepos();
});
});
