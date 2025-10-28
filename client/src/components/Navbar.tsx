import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

export default function Navbar({ onNavigate, darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About Company', id: 'company' },
    { name: 'About CEO', id: 'about-ceo' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Approach us', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  // Conditional nav background and text
  const navBg = darkMode
    ? 'bg-black/80 text-white border-b border-gray-800'
    : 'bg-white/80 text-gray-900 border-b border-gray-200';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-xl transition-colors duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
              <span className="text-xl font-display font-bold text-white">S</span>
            </div>
            <span className="text-xl font-display font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              SURYA DEVA
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors
                  ${darkMode ? 'text-white hover:bg-gray-900/40' : 'text-gray-900 hover:bg-gray-100/60'}`}
              >
                {item.name}
              </button>
            ))}

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
            >
              {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu + dark mode toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-2 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
            >
              {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className={`md:hidden border-t backdrop-blur-xl ${darkMode ? 'bg-black/90 border-gray-800' : 'bg-white/95 border-gray-200'}`}>
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md
                  ${darkMode ? 'text-white hover:bg-gray-900/40' : 'text-gray-900 hover:bg-gray-100/60'}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
