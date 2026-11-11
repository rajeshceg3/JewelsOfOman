# Verify JewelsOfOman
Jewels of Oman - cinematic Oman travelogue (vite + React 19, app lives in oman-travelogue/).
## Launch
cd oman-travelogue && npm install, then npm run dev or npm run build && npm run preview.
## Doctor
`python3 .cursor/skills/verify-jewels-of-oman/verify.py`
## Drive
Builds the app in oman-travelogue/ with vite and renders the built app in headless Chromium asserting the boot marker and zero JS console errors.
## Evidence
`.cursor/skills/verify-jewels-of-oman/evidence.json`
## Cleanup
Static/production server terminated after the render.
## Known boundaries
Render smoke only; scene quality unverified.
