import { motion } from "framer-motion";
import { Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectsSectionProps {
  darkMode?: boolean;
}

const projects = [
  {
    title: 'NM METAL ROOFINGS',
    client: 'Roofing Company',
    description:
      'A reputed roofing company in Chennai offering end-to-end residential and commercial roofing solutions. Our digital strategy boosted their brand visibility and generated consistent high-quality leads.',
    category: 'LEAD GENERATION',
    results: '+300% Sales',
    website: 'https://nmmetalroofing.in',
    social: 'https://www.youtube.com/@nmmetalroofing9018/',
  },
  {
    title: 'SRI THIRUMALAI ROOFINGS',
    client: 'Roofing Company',
    description:
      'One of Chennai’s most trusted roofing solution providers. Our tailored marketing and design approach significantly enhanced their social reach and customer engagement.',
    category: 'LEAD GENERATION',
    results: '290K Reach',
    website: 'https://srithirumalairoofings.in',
    social: 'https://www.youtube.com/@srithirumalairoofings2056',
  },
  {
    title: 'KHS STERILE SOLUTIONS',
    client: 'Clinical-Grade Solutions',
    description:
      'A fast-growing manufacturer of sterile liquid preparations for medical and pharmaceutical use. We are currently developing their digital brand identity and lead-generation system.',
    category: 'LEADGEN',
    results: 'Ongoing Project',
    website: 'https://www.khssterilesolutions.com/',
    social: 'https://www.youtube.com/@KHSSTERILESOLUTION',
  },
  {
    title: 'DHANAM ROOFINGS',
    client: 'Western Style Roofings',
    description:
      'Specialists in western-style roofing solutions. We designed and developed their responsive website showcasing modern roofing designs and expertise.',
    category: 'WEBCLIENT',
    results: 'Website Developed',
    website: 'https://dhanamroofings.com/',
  },
  {
    title: 'SMART ROOFINGS',
    client: 'Southern Style Roofings',
    description:
      'Providing advanced roofing services tailored to southern architecture. Our lead generation and SEO strategies increased inquiries and conversions exponentially.',
    category: 'Roofing',
    results: '+350% Leads in 2024',
    website: 'https://www.smartroofings.com',
  },
  {
    title: 'APEX CREATIVE',
    client: 'Social Media Marketing Company',
    description:
      'A forward-thinking marketing agency. We developed a visually dynamic website that highlights their creative services and client success stories.',
    category: 'WEBSITE',
    results: 'Website Developed',
    website: 'https://www.apexcreative.in',
  },
  {
    title: 'AMIZHTHINI FOODS',
    client: 'Spice and Malt Manufacturing Company',
    description:
      'Producers of premium spice and malt products catering to both local and international markets. We built a strong digital presence with a professional brand website.',
    category: 'WEBSITE',
    results: 'Website Developed',
    website: 'https://www.amizhthinifoods.com',
  },
  {
    title: 'LOOKS EXPORTS',
    client: 'Beauty and Cosmetics Exporting Company',
    description:
      'An exporter of high-quality cosmetic products across global markets. Our digital strategy enhanced their international brand recognition and boosted sales.',
    category: 'LEAD GEN',
    results: '+240% Global Sales',
    website: 'https://www.looksexports.com',
  },
  {
    title: 'MIKAY WHOLESALES',
    client: 'Ecommerce Company',
    description:
      'A wholesale e-commerce platform offering fast-moving consumer goods. We built their complete online store and optimized it for seamless transactions.',
    category: 'Ecommerce',
    results: 'Website Developed',
    website: 'https://www.mikaylawholesale.com',
  },
  {
    title: 'AURA PROPERTY SPECIALISTS',
    client: 'Property Management Company',
    description:
      'Delivering efficient property management solutions for homes and businesses. We created their digital platform to showcase services and enable client communication.',
    category: 'Real Estate',
    results: 'Website Developed',
    website: 'https://www.aurapropertyspecialist.in',
  },
  {
    title: 'ROUGEROAD LOGISTIC SERVICES',
    client: 'Transporting and Logistics Company',
    description:
      'A logistics firm offering nationwide and international transport services. Our web design project helped them establish a credible and strong online presence.',
    category: 'Logistics',
    results: 'Website Developed',
    website: 'https://www.rougeroad.com',
  },
  {
    title: 'KB DENTAL CLINIC',
    client: 'Tooth Care Clinic',
    description:
      'A modern dental clinic providing advanced oral and cosmetic dentistry solutions. We designed and launched their website for patient accessibility and branding.',
    category: 'Healthcare',
    results: 'Website Developed',
    website: 'https://www.kbdentalclinic.in',
  },
  {
    title: 'RVS AGRO COMMODITIES',
    client: 'Agro-based Raw Material Supplier',
    description:
      'Suppliers of top-quality agricultural raw materials. Our team developed their digital catalog and professional website to enhance visibility and business reach.',
    category: 'Agriculture',
    results: 'Website Developed',
    website: 'http://www.rvsagro.in',
  },
  {
    title: 'ROSELYNE LEATHERS',
    client: 'Leather Manufacturing Company',
    description:
      'Manufacturers and exporters of fine leather products. Our marketing efforts expanded their market exposure and increased sales growth.',
    category: 'Manufacturing',
    results: '+200% Sales Growth',
    website: 'http://www.roselyneleathers.com',
  },
  {
    title: 'SMART ROOFINGS',
    client: 'Southern Style Roofings',
    description:
      'Offering durable and stylish roofing solutions across southern regions. We implemented digital campaigns that increased leads substantially.',
    category: 'Roofing',
    results: '+250% Leads in 2024',
    website: 'https://www.smartroofings.com',
  },
  {
    title: 'URBAN HOME FACILITY SERVICES',
    client: 'Home Cleaning and Maintenance Company',
    description:
      'A professional home cleaning and maintenance company. We created their complete web presence to attract new customers through digital reach.',
    category: 'WEB CLIENT',
    results: 'Website Developed',
    website: 'http://www.urbanhomefs.com',
  },
  {
    title: 'DIGIMAN MARKETING',
    client: 'DIGI Marketing Company',
    description:
      'A digital marketing agency specializing in branding and lead generation. We developed their website to showcase services and boost conversions.',
    category: 'WEB CLIENT',
    results: 'Website Developed',
    website: 'https://www.digimanmarketing.com/',
  },
  {
    title: 'SN METAL BUILDING PRODUCTS',
    client: 'Raw Material Supplier for Roofing',
    description:
      'A Chennai-based supplier of roofing materials. Our ongoing marketing campaign is focused on expanding their regional supply network through digital outreach.',
    category: 'DIGIMAR',
    results: '+150% Raw Material Supply',
  },
  {
    title: 'LEO TAXI',
    client: 'Travel Company',
    description:
      'A developing travel brand offering safe and reliable taxi services for tourists. Our upcoming digital marketing strategy aims to expand their visibility and attract new customers.',
    category: 'LEADS GEN',
    results: 'Upcoming',
    social: 'https://www.instagram.com/leo_taxi?igsh=NXNzN3VjZHExd2ly',
  },
  {
    title: 'CONTACT SOLUTIONS',
    client: 'App and Website Development Company',
    description:
      'A rising tech company specializing in custom software, app, and web solutions. We are currently working on their brand website and preparing for a major digital launch.',
    category: 'DIGIMARKETING',
    results: 'Upcoming',
  },
  {
    title: 'MANJU MAGIC COMPANY',
    client: 'Bridal Makeup Company',
    description:
      'An emerging bridal makeup brand. Our upcoming lead generation campaign is set to connect them with high-quality bridal clients across Tamil Nadu.',
    category: 'DigiMarketing',
    results: 'Upcoming',
  },
];

export default function ProjectsSection({ darkMode }: ProjectsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const mainProjects = projects.slice(0, 3);
  const extraProjects = projects.slice(3);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className={`py-16 sm:py-20 lg:py-32 transition-all ${
        darkMode ? "bg-[#0B0B0F] text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display">
            Our Marketing{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <p
            className={`mt-3 text-base sm:text-lg max-w-2xl mx-auto ${
              darkMode ? "text-yellow-200" : "text-black"
            }`}
          >
            Explore our latest marketing and branding projects that fuse
            creativity, performance, and digital excellence.
          </p>
        </motion.div>

        {/* Desktop / Tablet */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              darkMode={darkMode}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* Mobile View */}
        <div className="block sm:hidden mt-10">
          <div className="grid grid-cols-1 gap-6 mb-6">
            {mainProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                darkMode={darkMode}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            >
              {extraProjects.map((project, index) => (
                <div
                  key={index}
                  className="snap-center flex-shrink-0 w-[90%] sm:w-[45%]"
                >
                  <ProjectCard
                    project={project}
                    darkMode={darkMode}
                    delay={index * 0.07}
                  />
                </div>
              ))}
            </div>

            {/* Scroll Buttons */}
            <div className="flex justify-center mt-4 gap-4">
              <Button
                size="sm"
                variant="outline"
                onClick={() => scroll("left")}
                className="flex items-center gap-1 border-yellow-400 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                <ChevronLeft className="h-4 w-4" /> Prev
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => scroll("right")}
                className="flex items-center gap-1 border-yellow-400 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  darkMode,
  delay,
}: {
  project: any;
  darkMode?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <Card
        className={`relative flex flex-col justify-between rounded-2xl border shadow-lg p-6 h-[420px] sm:h-auto min-h-[400px] backdrop-blur-md transition-all duration-300 ${
          darkMode
            ? "bg-indigo-900 border-indigo-600 text-white"
            : "bg-purple-600 border-purple-700 text-white"
        }`}
      >
        <div className="flex flex-col flex-grow">
          <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
            <Badge
              variant="secondary"
              className={`text-xs font-semibold px-2 py-1 whitespace-nowrap ${
                darkMode
                  ? "bg-indigo-700/80 text-yellow-300"
                  : "bg-purple-500/90 text-yellow-100"
              }`}
            >
              {project.category}
            </Badge>
            <Badge className="text-xs whitespace-nowrap bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
              {project.results}
            </Badge>
          </div>

          <CardHeader className="p-0 mb-3">
            <CardTitle className="text-lg font-bold tracking-tight leading-snug">
              {project.title}
            </CardTitle>
            <CardDescription className="text-sm text-yellow-200 font-medium mt-1">
              {project.client}
            </CardDescription>
          </CardHeader>

          <CardContent className="p-0 flex-grow">
            <p className="text-sm leading-relaxed text-white line-clamp-5">
              {project.description}
            </p>
          </CardContent>
        </div>

        {project.website && (
          <Button
            asChild
            size="sm"
            className="mt-4 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 transition-all rounded-xl py-2 font-medium shadow-md"
          >
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <Globe className="h-4 w-4 mr-2" />
              Visit Website
            </a>
          </Button>
        )}
      </Card>
    </motion.div>
  );
}
