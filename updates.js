fetch("updates.json")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("Could not load updates.json");
    }
    return response.json();
  })
  .then(function(items) {

    var container = document.getElementById("updates-container");

    // Sort updates from newest to oldest
    items.sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    });

    items.forEach(function(update) {

      var photosHTML = "";

      // Multiple photos
      if (update.images && Array.isArray(update.images)) {

        update.images.forEach(function(photo) {
          photosHTML +=
            '<img src="' +
            photo.src +
            '" alt="' +
            (photo.alt || "") +
            '">';
        });

      }

      // Older single-photo format
      else if (update.image) {

        photosHTML =
          '<img src="' +
          update.image +
          '" alt="' +
          (update.alt || "") +
          '">';

      }

      container.innerHTML +=
        '<article class="card">' +

          '<div class="update-gallery">' +
            photosHTML +
          '</div>' +

          '<div>' +
            '<p class="date">' + update.date + '</p>' +

            '<h2>' +
              update.title +
            '</h2>' +

            '<p>' +
              update.text +
            '</p>' +

          '</div>' +

        '</article>';

    });

  })
  .catch(function(error) {

    document.getElementById("updates-container").innerHTML =
      "<p>Updates could not be loaded right now.</p>";

    console.error(error);

  });
