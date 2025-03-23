import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState("dark");
  return (
    <button
      onClick={() => setDarkMode(darkMode === "dark" ? "light" : "dark")}
      className="p-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
    >
      {darkMode === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
