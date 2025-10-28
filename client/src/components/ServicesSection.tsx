import { motion } from 'framer-motion';
import { Search, Share2, FileText, Target, Code, BarChart3, Hand } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface ServicesSectionProps {
  darkMode?: boolean;
}

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your visibility with data-driven SEO strategies that rank.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Engage your audience with compelling social media campaigns.',
  },
  {
    icon: FileText,
    title: 'Content Creation',
    description: 'Captivating content that tells your brand story effectively.',
  },
  {
    icon: Target,
    title: 'Brand Strategy',
    description: 'Strategic positioning that makes your brand stand out.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites that convert visitors to customers.',
  },
  {
    icon: BarChart3,
    title: 'Training & Analytics',
    description: 'Data-driven insights to optimize your digital performance.',
  },
  {
    icon: Hand,
    title: 'Reputation Management',
    description: 'Protect and enhance your online image with ease. We monitor, manage, and improve brand reputation. Gain trust and credibility through positive visibility.',
  },
{
    icon: Target,
    title: 'Consulting Services',
    description: 'Expert guidance tailored to your business goals. We analyze, plan, and optimize your digital strategies. Achieve growth with proven consulting expertise.',
  },
];

export default function ServicesSection({ darkMode }: ServicesSectionProps) {
  return (
    <section className={`py-20 lg:py-32 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Our{' '}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className={`mt-4 text-lg ${darkMode ? 'text-gray-400' : 'text-black'} max-w-2xl mx-auto`}>
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`h-full hover-elevate active-elevate-2 transition-all duration-300 ${
                  darkMode ? 'bg-black/50 border-gray-700' : 'bg-card/50 border-primary/20'
                } backdrop-blur-sm`}
                data-testid={`service-card-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className={`text-base ${darkMode ? 'text-gray-300' : 'text-black'}`}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
