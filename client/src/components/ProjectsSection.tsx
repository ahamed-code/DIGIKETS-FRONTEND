import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'E-Commerce Revolution',
    client: 'Fashion Retail Brand',
    description: '300% increase in online sales through strategic social media campaigns and SEO optimization.',
    category: 'Digital Marketing',
    results: '+300% Sales',
  },
  {
    title: 'Brand Transformation',
    client: 'Tech Startup',
    description: 'Complete brand identity redesign and digital presence establishment from ground up.',
    category: 'Branding',
    results: '50K+ Followers',
  },
  {
    title: 'Local to Global',
    client: 'Food & Beverage',
    description: 'Expanded market reach from local to international through multilingual content strategy.',
    category: 'Social Media',
    results: '10x Reach',
  },
  {
    title: 'SaaS Growth Engine',
    client: 'Software Company',
    description: 'Lead generation campaign that delivered 500+ qualified leads in 3 months.',
    category: 'Lead Gen',
    results: '500+ Leads',
  },
  {
    title: 'Content Excellence',
    client: 'Educational Platform',
    description: 'Engaging content strategy that boosted user engagement by 250%.',
    category: 'Content',
    results: '+250% Engagement',
  },
  {
    title: 'Web Presence 2.0',
    client: 'Healthcare Provider',
    description: 'Modern, accessible website with 80% improvement in conversion rates.',
    category: 'Web Development',
    results: '+80% Conversion',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Success{' '}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results for real businesses - explore our portfolio of transformative projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300 group" data-testid={`project-card-${index}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="secondary" data-testid={`project-category-${index}`}>{project.category}</Badge>
                    <Badge className="bg-gradient-to-r from-primary to-chart-2 text-white" data-testid={`project-results-${index}`}>
                      {project.results}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <button className="text-sm font-medium text-primary hover:underline flex items-center gap-1" data-testid={`button-view-case-${index}`}>
                    View Case Study
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
