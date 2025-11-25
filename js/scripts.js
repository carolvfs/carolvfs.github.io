// scripts.js
import { profile, research, papers, education, experience, projects, gallery } from './data.js';

// Populate profile
document.getElementById('profile-name').textContent = profile.name;
document.getElementById('profile-bio').textContent = profile.bio;
document.getElementById('email').textContent = profile.email;
document.getElementById('email').href = `mailto:${profile.email}`;
document.getElementById('linkedin').href = profile.linkedin;
document.getElementById('scholar').href = profile.scholar;
document.getElementById('cv').href = profile.cv;
document.getElementById('profile-photo').src = profile.photo;

// Populate papers
const papersList = document.getElementById('papers-list');
papers.forEach(p => {
  const li = document.createElement('li');
  li.className = 'paper-item';
  li.innerHTML = `
    <img src='${p.img}' alt='${p.title} teaser' class='paper-thumb'>
    <div class='paper-info'>
      <a href='${p.link}' target='_blank'><strong>${p.title}</strong></a>
      <p>${p.authors}</p>
      <p>${p.venue}, ${p.year}</p>
    </div>
  `;
  papersList.appendChild(li);
});

// Populate research interests
const researchList = document.getElementById('research-list');
research.forEach(e => {
  const entry = document.createElement('div');
  entry.className = 'entry';
  entry.innerHTML = `<div class='content'><h3>${e.topic}</h3><p>${e.details}</p></div>`;
  researchList.appendChild(entry);
});

// Populate education
const eduTimeline = document.getElementById('edu-timeline');
education.forEach(e => {
  const entry = document.createElement('div');
  entry.className = 'entry';
  entry.innerHTML = `<div class='logo-placeholder'><img src='${e.logo}' alt='${e.institution} logo' style='width:100%; height:100%; object-fit:cover; border-radius:6px;'></div>
                     <div class='content'><h3>${e.degree}</h3><p>${e.institution} (${e.year})</p></div>`;
  eduTimeline.appendChild(entry);
});

// Populate experience
const expTimeline = document.getElementById('exp-timeline');
experience.forEach(ex => {
  const entry = document.createElement('div');
  entry.className = 'entry';
  entry.innerHTML = `<div class='logo-placeholder'><img src='${ex.logo}' alt='${ex.company} logo' style='width:100%; height:100%; object-fit:cover; border-radius:6px;'></div>
                     <div class='content'><h3>${ex.title}</h3><p>${ex.company} — (${ex.years})</p><p class='details'>${ex.description}</p></div>`;
  expTimeline.appendChild(entry);
});

// Populate projects
const projectsGrid = document.getElementById('projects-grid');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `<img src='${p.img}' alt='${p.title}' class='project-thumb'><h3>${p.title}</h3><p>${p.description}</p>`;
  projectsGrid.appendChild(card);
});

// Populate gallery
const galleryGrid = document.getElementById('gallery-grid');
gallery.forEach(img => {
  const image = document.createElement('img');
  image.src = img;
  image.alt = 'Gallery image';
  image.className = 'gallery-img';
  galleryGrid.appendChild(image);
});

// Lightbox for gallery
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.innerHTML = `<img src='${img.src}' class='lightbox-img'>`;
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});