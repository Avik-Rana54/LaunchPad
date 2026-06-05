Launchpad 2k26 🚀
Launchpad 2k26 is the official, interactive web platform designed for events, hackathons, and start-up bootcamps organized by the clubs at Jadavpur University. The platform aims to ignite the entrepreneurial spirit of students by connecting them with mentors, industry professionals, and critical resources to transform raw ideas into viable startup models.

🌟 Features
Interactive Hero Section: Dynamic landing area with quick navigation to explore events or register.

Immersive Intro Animation: Integrated with a custom loading sequence (intro_animation.js) for an engaging initial experience.

Feature Showcase: A responsive, glassmorphism-styled grid outlining core values: Innovate, Connect, Grow, and Critical Thinking.

Infinite Scrolling Partner Marquee: A smooth, continuous horizontal scrolling banner featuring tech partners and sponsors.

Responsive Navigation & Detailed Footer: Mobile-friendly layouts complete with campus location tracking, official contacts, and animated social links.

🛠️ Tech Stack
Frontend: HTML5 (Semantic markup)

Styling: CSS3 (Glassmorphism layouts, custom variables, responsive grids)

Scripting: JavaScript (ES6+ for animations and state handling)

Fonts & Icons: Google Fonts (Inter, Outfit) and dynamic Font Awesome icon kits (fa-beat, fa-bounce).

📁 Project Structure
Plaintext
Launchpad-2k26/
├── CSS/
│   ├── style.css             # Global styles (Hero section, feature grid, partner marquee, footer)
│   └── profile.css           # Custom UI component styling for the user dashboard
├── HTML/
│   ├── index.html            # Main landing page & landing sequence entry point
│   ├── competitions.html     # Portal listing campus events, hackathons, and bootcamps
│   ├── login.html            # User authentication interface (Sign-up / Sign-in)
│   └── profile.html          # Dynamic post-login user dashboard and session panel
├── HTML/ (or Images/)        # (Note: Ensure your images match the pathing used in your HTML)
└── Javascript/
    ├── intro_animation.js    # Controls the core splash screen entry sequences
    ├── login_transition.js   # Manages smooth visual transitions on the login forms
    ├── login_auth.js         # Oversees credential verification and state checks
    ├── auth.js               # Tab-switching glue code, form manipulation, and connectivity
    └── profile.js            # Handles session data storage and renders dynamic dashboard
    
🤖 Use of AI Tools
AI assistance was used as a final "touch-up" and debugging partner to streamline development:

Asset Generation: Used to quickly generate modern tech graphics and icons matching the portal's aesthetic.

Debugging: Assisted in rapid troubleshooting, fixing minor CSS alignment bugs, and ensuring cross-browser responsiveness.

Profile Integration & Touch-ups: Used to quickly bridge login_auth.js and profile.js, ensuring that user session data smoothly carries over to render the user profile dashboard immediately after a successful login confirmation.

Documentation: This README.md file was structured and formatted with the help of AI.
