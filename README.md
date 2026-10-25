# Birthday Surprise — Varshini (Boori) 💗

A responsive, animated birthday website built with plain HTML, CSS, and JavaScript. No build tools or paid hosting required. It can be published with GitHub Pages.

## Project files

- `index.html` — page content and all five screens
- `style.css` — responsive layout, colors, animations, and cake illustration
- `script.js` — navigation, interactive cards, cake candles, and confetti
- `assets/photos/` — put your personal photos here

## Add your photos

Copy your pictures into `assets/photos/` and name them exactly:

1. `photo-1.jpg` — cover photo (your first uploaded image)
2. `photo-2.jpg` — memory card 1
3. `photo-3.jpg` — memory card 2
4. `photo-4.jpg` — memory card 3
5. `photo-5.jpg` — memory card 4 (your fifth uploaded image)

JPG is recommended. If your photo is a PNG, either convert it to JPG or update the corresponding image filename in `index.html`. Use photos you have permission to share. Keep images reasonably compressed (ideally under 1–2 MB each) so the site loads quickly on mobile.

If you replace or remove any photos, missing ones will show gentle placeholders.

## Preview on your computer

1. Download and unzip this folder.
2. Open `index.html` in Chrome, Edge, or Firefox.
3. Click through the screens and test the cake and memory cards.

No installation is required.

## Publish with GitHub Pages (free)

### 1. Create a repository

1. Sign in at https://github.com
2. Click the **+** button in the top-right, then **New repository**.
3. Repository name: `birthday-surprise`
4. Choose **Public** (required for free GitHub Pages on a free account).
5. Select **Add a README file** only if you are comfortable resolving duplicate files; easiest is to leave it unchecked.
6. Click **Create repository**.

### 2. Upload the website

1. Open your new repository.
2. Click **Add file → Upload files**.
3. Open the unzipped `birthday-surprise` folder on your computer.
4. Drag in `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder. Make sure `index.html` is at the repository root, not inside another nested `birthday-surprise` folder.
5. Add a commit message such as `Add birthday website`.
6. Click **Commit changes**.

GitHub's web uploader may not upload empty folders. That's fine; once you add photos, upload the `assets/photos` folder with the images inside.

### 3. Turn on GitHub Pages

1. In the repository, open **Settings**.
2. In the left sidebar, select **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **main** and folder **/(root)**, then click **Save**.
5. Wait a minute or two. Refresh the Pages settings page until the published site link appears.

Your URL will look like:

`https://YOUR-GITHUB-USERNAME.github.io/birthday-surprise/`

Replace `YOUR-GITHUB-USERNAME` with your GitHub username.

## Personalize the message

Open `index.html` in a text editor (Notepad or VS Code) and edit the text inside the sections. The recipient name appears in the title, intro, and final note.

## Troubleshooting

- **Page is blank / 404:** confirm `index.html` is at the repository root and Pages is set to `main` + `/(root)`.
- **Photos are missing:** check spelling, capitalization, and extensions. `photo-1.jpg` is different from `Photo-1.jpg`.
- **Updates don't appear:** wait briefly and refresh the published URL. Try a hard refresh with `Ctrl + Shift + R`.
- **Google Fonts don't load:** the page falls back to system fonts; an internet connection is needed for the chosen web fonts.
- **Privacy:** a public repository makes the source files visible to anyone. GitHub Pages sites are public too. Avoid putting private information in the site or repository.

Official guide: https://docs.github.com/en/pages
