async function loadUpdates() {
  const feed = document.getElementById('updates-feed');
  try {
    const response = await fetch('updates.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Could not load updates');
    const updates = await response.json();

    if (!updates.length) {
      feed.innerHTML = '<p class="future-note">No updates yet. Check back soon.</p>';
      return;
    }

    feed.innerHTML = updates.map((update, index) => `
      <article class="update ${index === 0 ? 'update-first' : ''}">
        <div class="update-meta">
          <span>${escapeHtml(update.date || '')}</span>
          ${update.tag ? `<span>${escapeHtml(update.tag)}</span>` : ''}
        </div>
        ${update.image ? `<img src="${escapeAttr(update.image)}" alt="${escapeAttr(update.alt || '')}" loading="lazy">` : ''}
        <div class="update-body">
          <h2>${escapeHtml(update.title || 'Update')}</h2>
          <p>${escapeHtml(update.text || '')}</p>
        </div>
      </article>
    `).join('');
  } catch (error) {
    feed.innerHTML = '<p class="future-note">Updates could not be loaded. If you are viewing the files on your computer, open the site through GitHub Pages to see the live feed.</p>';
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[char]));
}

function escapeAttr(value) {
  return escapeHtml(value);
}

loadUpdates();
