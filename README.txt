================================================================
 CyberShield - Cybersecurity Awareness Website
 Multimedia Course Mini Project - TEAM 6
================================================================

STUDENT NAMES AND IDs
---------------------
1. Mohamed Gamal Hassan Mohamed            - 114977
2. Abdelrahman Azab Shehata Elghazaly      - 111465
3. Salman Ahmed Samir                      - 115156
4. Ziad Wael Hassan                        - 110005
5. Abdelrahman Abdallah Aboelwafa Abdellah - 109885
6. Ziyad Sherif Mohammed Abdelfattah       - 109889

Group:              G5/CS
Course Instructor:  Tarek Soliman
Teaching Assistants: Aya Saber, Maryam Hany
University:         Modern University for Technology & Information (MTI)
                    Faculty of Computers & AI

PROJECT TITLE
-------------
CyberShield - Cybersecurity Awareness Website (Topic 7)

SHORT PROJECT DESCRIPTION
-------------------------
An educational website that introduces basic cybersecurity concepts and
safe digital practices. The site is built of six pages: Home, About,
Topics (main content), Gallery, Photoshop Before & After, and Contact.
It covers five awareness topics: cybersecurity introduction, password
security, phishing awareness, data protection, and safe internet
practices. The visual identity uses a dark navy theme with cyan
accents. All six images used on the site were edited in Adobe
Photoshop from their original versions; the layered PSD source files
are included in the photoshop/ folder.

HOW TO RUN
----------
Open index.html in any modern browser (Chrome, Edge, Firefox).
No server or build step is required. The site is fully static:
HTML + CSS + a small JavaScript file for the mobile menu and the
contact form validation.

FOLDER STRUCTURE
----------------
Cybersecurity_Awareness_Website_Team6/
|-- index.html ...................... home page (hero, topic cards, threats table, tips)
|-- README.txt ...................... this file
|-- pages/
|   |-- about.html .................. project story + team members table
|   |-- main-content.html ........... the five security topics (main content section)
|   |-- gallery.html ................ security gallery of the edited images
|   |-- before-after.html ........... Photoshop Before & After page (6 pairs)
|   `-- contact.html ................ contact form + direct channels + FAQ
|-- css/
|   `-- style.css ................... single external stylesheet (visual identity)
|-- js/
|   `-- script.js ................... mobile menu toggle + contact form validation
|-- images/
|   |-- original/ ................... the 6 untouched original images (PNG)
|   `-- edited/ ..................... the 6 Photoshop-edited versions used on the site
`-- photoshop/
    |-- hero-cyber-lock.psd ......... layers: original / crop reframe / final
    |-- password-security.psd ....... layers: original / hue-saturation final
    |-- phishing-alert.psd .......... layers: original / crop+levels+sharpen final
    |-- data-protection.psd ......... layers: original / duotone final / vignette (multiply)
    |-- safe-browsing.psd ........... layers: original / curves+color balance final
    `-- security-team.psd ........... layers: original / exposure+grade final

PHOTOSHOP TECHNIQUES USED
-------------------------
1. Crop & reframe ............... hero-cyber-lock (tightened framing 4% each side)
2. Brightness/Contrast .......... hero-cyber-lock (+20% brightness, +25% contrast)
3. Sharpen (unsharp mask) ....... hero-cyber-lock, phishing-alert
4. Hue/Saturation ............... password-security (hue rotation toward teal, +35% sat)
5. Levels (auto contrast) ....... phishing-alert
6. Gradient map (duotone) ....... data-protection (navy-to-cyan)
7. Vignette ..................... data-protection (42% multiply, edges only)
8. Curves ....................... safe-browsing (midtone lift, gamma 0.80)
9. Color balance ................ safe-browsing (green push) and security-team (warm grade)
10. Exposure .................... security-team (+12% lift)
11. Clarity ..................... security-team (large-radius unsharp mask)

Each edited image keeps its original in images/original/, and the
matching layered PSD is in photoshop/, so every editing step can be
inspected layer by layer.

HTML FEATURES DEMONSTRATED
--------------------------
- Semantic structure: header, nav, main, section, article, figure, footer
- Navigation bar with links to all pages (and in-page topic navigation)
- Headings (h1-h4), paragraphs, hyperlinks
- Ordered/unordered lists (checklists, quick links)
- Data tables (threats table, team members table, phishing red flags,
  safe habits checklist) with responsive horizontal scroll on mobile
- Contact form: text, email, select, radio, checkbox, textarea + validation
- Images with meaningful alt text; lazy loading on gallery pages

CSS FEATURES DEMONSTRATED
-------------------------
- Consistent visual identity via CSS custom properties (design tokens)
- Colors, backgrounds (gradients), fonts and text formatting
- Width/height, margin, padding, borders and border-radius throughout
- CSS Flexbox: navigation, hero, card grids, split sections,
  before/after pairs, contact layout, footer columns
- Reusable components: cards, buttons, badges, topic pills
- Image styling and hover effects (cards, gallery items, links)
- Responsive design: media queries at 900px, 760px and 480px;
  mobile hamburger navigation; fluid typography with clamp()

NOTES
-----
- The contact form uses client-side JavaScript validation only and
  does not send data anywhere (no backend in this project).
- Images were produced for this project and edited with the
  techniques listed above.
- Copyright 2026 Team 6 - educational project.
