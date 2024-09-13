# 🌐 Personal Portfolio

🛠️ Technologies Used
React: A JavaScript library for building user interfaces.
Vite: A fast build tool for modern web projects.
CSS Modules: For scoped and modular CSS styling.
Git: Version control for code collaboration and history.
Node.js: For development environment setup.

📂 Project Structure
The project is organized as follows:

├── src
│   ├── assets          # Images, icons, and other assets
│   ├── components      # Reusable components like buttons, headers, etc.
│   ├── sections        # Different sections of the portfolio (About, Projects, etc.)
│   ├── common          # Shared utilities (ThemeContext, helpers, etc.)
│   ├── App.jsx         # Main application file
│   └── index.jsx       # Entry point for React
├── public              # Public assets like favicons
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation (this file)


🌑 Dark Mode Implementation
The dark mode toggle feature is implemented using React's Context API (ThemeContext). The theme preference is stored in localStorage, and users can toggle between light and dark modes by clicking on an icon.

const { theme, toggleTheme } = useTheme();
