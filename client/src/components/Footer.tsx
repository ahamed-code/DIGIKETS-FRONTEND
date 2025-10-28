import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  darkMode?: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#company' },
      { name: 'Our Team', href: '#about-ceo' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Social Media', href: 'https://www.youtube.com/@digikettsmarketingads' },
      { name: 'Content', href: 'https://www.youtube.com/@digikettsmarketingads' },
      { name: 'Web Dev', href: 'https://portfolio-x-psi.vercel.app/' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Digikets-Marketing/61578026420410/#', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/digiketsmarketing/?fbclid=IwY2xjawNohjtleHRuA2FlbQIxMQBicmlkETBNbG00cTdJRDlRWG5vYnNVAR59mtai7trZmSJMblXYDb7GWHY6K7PiEvaliFuRk5JJmc8hmKNsrbIXDImJlQ_aem_nE8rEP1TNf7h_bUGxxnZOw', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@digikettsmarketingads', label: 'YouTube' },
  ];

  // Footer background, border, and text
  const footerBg =
    darkMode
      ? 'bg-black text-white border-t border-gray-800'
      : 'bg-white text-gray-900 border-t border-gray-200';

  // Muted subtitle text
  const mutedText =
    darkMode
      ? 'text-gray-400'
      : 'text-gray-600';

  // Link color for lists
  const linkText =
    darkMode
      ? 'text-gray-400 hover:text-white'
      : 'text-gray-600 hover:text-gray-900';

  // Social icon background and text
  const socialBg =
    darkMode
      ? 'bg-gray-800 hover:bg-gray-700'
      : 'bg-gray-200 hover:bg-gray-300';

  const socialIconColor =
    darkMode
      ? 'text-gray-400'
      : 'text-gray-600';

  const accentGradient = 'bg-gradient-to-br from-primary to-chart-2';
  const accentText = 'bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent';

  const borderList = darkMode ? 'border-gray-800' : 'border-gray-200';

  return (
    <footer className={`${footerBg} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-10 h-10 rounded-lg ${accentGradient} flex items-center justify-center`}>
                <span className="text-xl font-display font-bold text-white">D</span>
              </div>
              <span className={`text-xl font-display font-bold ${accentText}`}>
                Digikets
              </span>
            </div>
            <p className={`text-sm ${mutedText} mb-6 max-w-sm`}>
              Empowering businesses with innovative digital marketing strategies that drive growth and create lasting impact.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg ${socialBg} active-elevate-2 flex items-center justify-center transition-all`}
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className={`h-5 w-5 ${socialIconColor}`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-sm ${linkText} transition-colors`}
                    data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-sm ${linkText} transition-colors`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t ${borderList} text-center`}>
          <p className={`text-sm ${mutedText}`}>
            © {new Date().getFullYear()} Digikets Marketing. All rights reserved. | Made with{' '}
            <span className="text-primary">♥</span> by Digikets
          </p>
        </div>
      </div>
    </footer>
  );
}
