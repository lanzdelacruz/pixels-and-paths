# Pixels and Paths

Digital Media midterm, Option C: Raster vs Vector Graphics & Compression.
Lanz Dela Cruz, Web Systems and Technologies, UA&P.

## Files

    index.html        the page
    style.css         all styling, including the Module 2 typography rules
    script.js         the zoom comparison widget
    assets/images/    hero-photo.webp, hero-photo.png (baseline), scene-48.png, scene-480.webp, path-diagram.svg
    assets/audio/     narration.mp3 (64 kbps)
    assets/video/     empty, kept to match the required folder structure

## Still to do

1. Deploy (see below) and submit the live URL.
2. Optional: swap hero-photo for a photo you took yourself.
   Re-export it as PNG and WebP, then update the first spec row.

## Measured sizes currently in the table

These are the sizes of the deployed files.

    hero-photo.png     672,402 bytes   (657 KB)
    hero-photo.webp     28,874 bytes   (28.2 KB)
    path-diagram.svg     8,496 bytes   (8.3 KB)
    path-diagram.svgz    2,369 bytes   (gzip -9)
    scene-48.png         6,826 bytes   (hero raster half, 48 x 27)
    scene-480.webp       9,850 bytes   (zoom widget raster pane, 480 x 270)
    narration.wav    1,506,126 bytes   (16-bit PCM, 24 kHz mono, 31.4 s, not shipped)
    narration.mp3      257,559 bytes   (64 kbps CBR)

## Running it locally

    python3 -m http.server 8000

Then open http://localhost:8000

## Deploying

Push this folder to a GitHub repo, then Settings > Pages > deploy from
the main branch root.
