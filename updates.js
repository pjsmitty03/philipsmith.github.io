fetch("updates.json")
  .then(r => {
    if (!r.ok) throw Error();
    return r.json();
  })
  .then(items => {

    const c = document.getElementById("updates-container");

    items.forEach(u => {

      let photos = "";

      if (u.images && Array.isArray(u.images)) {

        photos = `
          <div class="update-gallery">
            ${u.images.map(img => `
              <img
                src="${img.src}"
                alt="${img.alt || ""}"
              >
            `).join("")}
          </div>
        `;

      } else if (u.image) {

        photos = `
          <div class="update-gallery">
            <img
              src="${u.image}"
              alt="${u.alt || ""}"
            >
          </div>
        `;

      }

      c.innerHTML += `
        <article class="card">

          ${photos}

          <div>
            <p class="date">${u.date}</p>

            <h2>${u.title}</h2>

            <p>${u.text}</p>

            <a
              class="text-link"
              href="posts/001.html"
            >
              Read the full journal entry →
            </a>

          </div>

        </article>
      `;

    });

  })
  .catch(() => {

    document.getElementById("updates-container").innerHTML =
      "<p>Updates could not be loaded right now.</p>";

  });
