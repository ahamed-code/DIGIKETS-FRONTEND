import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const stats = [
    { icon: TrendingUp, value: '500+', label: 'Projects Delivered' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Award, value: '10+', label: 'Years Experience' },
  ];

  return (
    <section id="company" className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Elevating Brands Through{' '}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-chart-2 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Digikets Marketing transforms businesses with creative digital strategies, 
              innovative campaigns, and data-driven results that matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => onNavigate('projects')}
                className="bg-gradient-to-r from-primary to-chart-2 hover-elevate"
                data-testid="button-view-work"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('contact')}
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center lg:text-left"
                  data-testid={`stat-${index}`}
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto lg:mx-0 mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/20 to-chart-2/20 backdrop-blur-sm p-8 border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-2xl animate-pulse"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center mb-6">
                    <span className="text-6xl font-display font-bold text-white">D</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    Digital Marketing Excellence
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Creative • Strategic • Results-Driven
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
