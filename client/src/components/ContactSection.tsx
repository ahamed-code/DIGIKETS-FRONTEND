import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";   // ✅ Correct package
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactSectionProps {
  darkMode?: boolean;
}

export default function ContactSection({ darkMode }: ContactSectionProps) {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // ---------- EMAILJS SUBMIT ----------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed",
        description: "Could not send your message. Try again later.",
      });
    }
  };

  // Contact Methods
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 63818 11157",
      action: () => window.open("https://wa.me/6381811157", "_blank"),
      buttonText: "Chat on WhatsApp",
    },
    {
      icon: Mail,
      title: "Email",
      value: "digikettsmarketting@gmail.com",
      action: () =>
        (window.location.href = "mailto:digikettsmarketting@gmail.com"),
      buttonText: "Send Email",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9500145665",
      action: () => (window.location.href = "tel:+919500145665"),
      buttonText: "Call Now",
    },
  ];

  // Themes
  const sectionBg = darkMode
    ? "bg-black text-white border-t border-gray-800"
    : "bg-white text-gray-900 border-t border-gray-200";

  const cardBg = darkMode
    ? "bg-neutral-900/80 text-white border border-gray-800 backdrop-blur-sm"
    : "bg-white text-gray-900 border border-gray-200";

  const mutedText = darkMode ? "text-gray-400" : "text-gray-600";
  const accentGradient = "bg-gradient-to-br from-primary to-chart-2";
  const accentText =
    "bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent";

  return (
    <section
      id="contact"
      className={`relative z-10 overflow-hidden py-20 lg:py-32 transition-colors duration-500 ${sectionBg}`}
    >
      <div className={`absolute inset-0 ${sectionBg} z-0`} />

      <div className="relative z-10 flex justify-center">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Let’s <span className={accentText}>Connect</span>
            </h2>
            <p
              className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto ${mutedText}`}
            >
              Ready to transform your digital presence? Reach out and let’s
              create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start justify-items-center">

            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-lg"
            >
              <Card className={`${cardBg} transition-all duration-500`}>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">
                    Send us a message
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />

                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />

                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />

                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="seo">SEO Optimization</SelectItem>
                        <SelectItem value="social">
                          Social Media Marketing
                        </SelectItem>
                        <SelectItem value="content">
                          Content Creation
                        </SelectItem>
                        <SelectItem value="brand">Brand Strategy</SelectItem>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="analytics">
                          Analytics & Insights
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <Textarea
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={4}
                    />

                    <Button type="submit" className={`w-full ${accentGradient}`}>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right: Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 w-full max-w-lg"
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-center lg:text-left">
                Get in touch directly
              </h3>

              <div className="flex flex-col gap-5">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className={`${cardBg} hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
                  >
                    <CardContent className="p-5 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                      <div
                        className={`w-12 h-12 rounded-lg ${accentGradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <method.icon className="h-6 w-6 text-white" />
                      </div>

                      <div className="flex-1 text-center sm:text-left">
                        <h4 className="font-semibold">{method.title}</h4>
                        <p className={`text-sm ${mutedText}`}>{method.value}</p>
                      </div>

                      <Button
                        variant="outline"
                        className={`border ${
                          darkMode
                            ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                            : "border-gray-200 text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={method.action}
                      >
                        {method.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className={`${cardBg}`}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Office Location</h4>
                  <p className={`text-sm ${mutedText}`}>
                    <b>Address:</b> Mudaliarpet, Pondicherry
                  </p>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
