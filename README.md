# Pixels and Paths

Digital Media midterm, Option C: Raster vs Vector Graphics & Compression.
Lanz Dela Cruz, Web Systems and Technologies, UA&P.

## Files

    index.html        the page
    style.css         all styling, including the Module 2 typography rules
    script.js         the zoom comparison widget
    assets/images/    hero-photo.webp, hero-photo.png (baseline), scene-48.png, scene-480.webp, path-diagram.svg
    assets/audio/     narration.mp3 (synthesized voice, 64 kbps)
    assets/video/     empty, kept to match the required folder structure

## Still to do

1. Deploy (see below) and submit the live URL.
2. Optional: swap hero-photo for a photo you took yourself.
   Re-export it as PNG and WebP, then update the first spec row.

## Measured sizes currently in the table

    hero-photo.png     666,632 bytes   (651 KB)
    hero-photo.webp     23,106 bytes   (22.6 KB)
    path-diagram.svg       722 bytes
    path-diagram.svgz      345 bytes   (gzip -9)
    scene-48.png         1,056 bytes   (hero raster half, 48 x 27)
    scene-480.webp       4,082 bytes   (zoom widget raster pane, 480 x 270)
    narration.wav    1,616,752 bytes   (16-bit PCM, 22.05 kHz mono, 36.7 s, not shipped)
    narration.mp3      294,078 bytes   (64 kbps CBR)

## Running it locally

    python3 -m http.server 8000

Then open http://localhost:8000

## Deploying

Push this folder to a GitHub repo, then Settings > Pages > deploy from
the main branch root.
