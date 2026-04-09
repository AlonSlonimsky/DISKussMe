// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

// Close nav on link click
links && links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('.doc-section');
const navAs    = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAs.forEach(a => {
        a.style.color = '';
        a.style.background = '';
        if (a.getAttribute('href') === '#' + entry.target.id) {
          a.style.color = 'var(--accent)';
          a.style.background = 'var(--accent-glow)';
        }
      });
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('demo-video');
  modal.classList.remove('open');
  video.pause();
}

function closeLoginVideoModal() {
  const modal = document.getElementById('login-video-modal');
  const video = document.getElementById('login-demo-video');
  modal.classList.remove('open');
  video.pause();
}

function closeEditProfileVideoModal() {
  const modal = document.getElementById('edit-profile-video-modal');
  const video = document.getElementById('edit-profile-demo-video');
  modal.classList.remove('open');
  video.pause();
}
function closePostViewVideoModal() {
  const modal = document.getElementById('post-view-video-modal');
  const video = document.getElementById('post-view-demo-video');
  modal.classList.remove('open');
  video.pause();
}
function closePostEditVideoModal() {
  const modal = document.getElementById('post-edit-video-modal');
  const video = document.getElementById('post-edit-demo-video');
  modal.classList.remove('open');
  video.pause();
}
function openImageModal(src) {
  document.getElementById('image-modal-img').src = src;
  document.getElementById('image-modal').classList.add('open');
}

function closeImageModal() {
  document.getElementById('image-modal').classList.remove('open');
  document.getElementById('image-modal-img').src = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeVideoModal();
    closeLoginVideoModal();
    closeEditProfileVideoModal();
    closePostViewVideoModal();
    closePostEditVideoModal();
    closeImageModal();
  }
});