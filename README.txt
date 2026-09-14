KOSOVO JOURNAL — FIRST VERSION + QUICK UPDATES

This is a free, static website designed for GitHub Pages. It now has two kinds of content:

- JOURNAL: longer newsletters / blog posts that live in the archive.
- UPDATES: quick photos and short notes that feel more like a simple photo journal.

FILES
- index.html          Home page
- updates.html        Quick-updates feed
- updates.json        The short updates you add
- updates.js          Displays updates automatically
- archive.html        Journal archive
- posts/001.html      August 2026, Edition #001
- images/updates/     Photos used by quick updates
- images/             Photos from the newsletter
- August-2026-001.pdf Original PDF newsletter
- style.css           Site design
- README.txt          These instructions

HOW TO PUT IT ONLINE FOR FREE
1. Create/sign into a GitHub account.
2. Create a new PUBLIC repository named:
   YOUR-GITHUB-USERNAME.github.io
3. Upload everything inside this folder to that repository.
4. In GitHub, open Settings → Pages.
5. Choose the main branch (usually "main") and the root folder, then save.
6. Your site will be available at:
   https://YOUR-GITHUB-USERNAME.github.io/

ADDING A QUICK UPDATE
This is the easiest part of the site to maintain. You do NOT need to make a new HTML page.

1. Upload the new photo to the GitHub folder: images/updates/
   Example filename: september-5-coffee.png
2. Open updates.json in GitHub and click the pencil/edit button.
3. Add a new update object at the TOP of the list, following this pattern:

  {
    "date": "SEPTEMBER 5, 2026",
    "title": "A quick afternoon in Prishtina",
    "text": "Write a few sentences here.",
    "image": "images/updates/september-5-coffee.png",
    "alt": "A coffee shop in Prishtina",
    "tag": "LIFE IN KOSOVO"
  },

4. Commit/save the change. GitHub Pages will rebuild the site automatically.

If you do not have a photo for an update, simply leave out the "image" and "alt" lines.

ADDING A FUTURE JOURNAL EDITION
The easiest pattern is:
- Copy posts/001.html to posts/002.html
- Replace the title, date, text, and images
- Add a new entry to archive.html
- Put new images in the images folder
- Keep the original PDF if you want a "Read original PDF" button.

A SIMPLE WORKFLOW WITH CHATGPT
You can also send me a few photos and a rough note such as:
"Had my first day teaching. The kids were great. We played basketball after class."
I can turn that into the exact update block for updates.json and tell you where to put the photo.

The site intentionally has no database or paid service. It is just HTML/CSS/JavaScript, images, JSON, and PDF files, which keeps it simple and portable.
