import { motion } from 'framer-motion';
import { Quote, Award, Users, Briefcase } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function AboutCEOSection() {
  const achievements = [
    { icon: Award, label: 'Digital Marketing Excellence Award 2023' },
    { icon: Users, label: 'Certified Google Partner' },
    { icon: Briefcase, label: 'Successfully launched 500+ campaigns' },
  ];

  return (
    <section id="about-ceo" className="py-20 lg:py-32">
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-2 rounded-full blur-2xl opacity-30"></div>
              <Avatar className="w-64 h-64 border-4 border-primary/30 relative" data-testid="ceo-avatar">
                <AvatarFallback className="text-6xl font-display font-bold bg-gradient-to-br from-primary to-chart-2 text-white">
                  DM
                </AvatarFallback>
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
              <p className="text-2xl md:text-3xl font-display font-semibold text-foreground italic pl-8">
                "Digital marketing is not just about visibility; it's about creating meaningful connections that drive real business growth."
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-2" data-testid="ceo-name">
                Founder & Creative Director
              </h3>
              <p className="text-lg text-muted-foreground">
                With over a decade of experience in digital marketing, our founder has transformed 
                hundreds of businesses through innovative strategies and creative campaigns. 
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-lg font-semibold text-foreground">Key Achievements</h4>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`achievement-${index}`}>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">{achievement.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground italic">
                "Our mission at Digikets is to empower businesses with digital strategies that not only 
                boost visibility but also create lasting impact in their industries."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
