import { motion } from 'framer-motion';
import { Quote, Award, Briefcase } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import owner from '../../../../../assets/owner.jpg';

interface AboutCEOSectionProps {
  darkMode?: boolean;
}

export default function AboutCEOSection({ darkMode }: AboutCEOSectionProps) {
  const achievements = [
    { icon: Award, label: 'Best Alumni Award by IFET in 2024' },
    { icon: Briefcase, label: 'Successfully launched 500+ campaigns of all projects' },
  ];

  // Section background and text (adapts to darkMode)
  const sectionBg =
    darkMode
      ? 'bg-black text-white'
      : 'bg-white text-gray-900';

  // Avatar glow adapts to mode
  const avatarBg =
    darkMode
      ? 'bg-black opacity-30'
      : 'bg-gray-200 opacity-40';

  // Navigation helper: tries to scroll to an element with the given id, falls back to setting the hash
  const onNavigate = (target: string) => {
    if (typeof document !== 'undefined') {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (typeof window !== 'undefined') {
      window.location.hash = target;
    }
  };

  return (
    <section
      id="about-ceo"
      className={`py-20 lg:py-32 transition-colors duration-500 ${sectionBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Meet the{' '}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Visionary
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Avatar glow conditional on mode */}
              <div className={`absolute inset-0 rounded-full blur-2xl ${avatarBg}`}></div>
              <Avatar className="w-64 h-64 border-4 border-primary/30 relative" data-testid="ceo-avatar">
                <img
                  src={owner}
                  alt="Mr. Surya N"
                  className="w-full h-full object-cover rounded-full"
                />
              </Avatar>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary/30" />
              <p className="text-2xl md:text-3xl font-display font-semibold italic pl-8">
                "Digital marketing isn’t just visibility; it’s about connecting, engaging, and turning clicks into loyal customers.
                Don't watch the clock; do what it does… Keep going!
                Positive Mind | Positive Life | Digital Growth 👍"
                <span className="text-primary font-bold block mt-2">— Mr. Suriya I</span>
              </p>
            </div>

            <div>
            <h3 className="text-2xl font-display font-bold mb-2" data-testid="ceo-name">
  Founder & Creative Director of DIGIKETS
</h3>
<p className={`text-lg ${darkMode ? 'text-muted-foreground' : 'text-gray-600'}`}>
  In the two years since I founded DIGIKETS, I have drawn on over a year of experience in digital marketing to help businesses grow and thrive. I am passionate about creating innovative strategies and meaningful campaigns, and I am dedicated to supporting my clients in achieving sustainable growth and building lasting value. Feel free to{' '}
  <span
    onClick={() => onNavigate('contact')}
    className="cursor-pointer text-purple-500 font-bold italic glow-effect"
    role="button"
    tabIndex={0}
    onKeyPress={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onNavigate('contact');
      }
    }}
  >
    Reach us
  </span>
  .
</p>

            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-lg font-semibold">Key Achievements</h4>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm pt-2">{achievement.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <p className={`text-sm italic ${darkMode ? '' : 'text-gray-700'}`}>
                "Our mission at Digikets is to empower businesses with digital strategies that not only boost visibility but also create lasting impact in their industries."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
