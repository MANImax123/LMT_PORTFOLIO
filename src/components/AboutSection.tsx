import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 flex justify-center order-2 md:order-1">
            <div className="relative">
              {/* Image frame with glassmorphism effect */}
              <div className="w-full h-full absolute -top-4 -left-4 border-2 border-accent/50 rounded-xl" />
              
              <div className={cn(
                "glass w-72 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden",
                "relative z-10 transition-transform hover:scale-[1.02] duration-300"
              )}>
                {/* Placeholder image */}
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
                  alt="Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -z-10 w-24 h-24 bg-accent/20 rounded-full -bottom-6 -right-6 blur-xl" />
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-accent mb-6"></div>
            
            <div className="space-y-4">
              <p>
                Hello! I'm Maniteja Lenkalapelly, a passionate software developer from Hyderabad, India. I'm currently pursuing a Bachelor of Technology in Computer Science and Engineering at VNR Vignana Jyothi Institute of Engineering and Technology, maintaining a CGPA of 9.1.
              </p>
              
              <p>
                I specialize in full-stack development, with strong proficiency in Python, C++, Java, and modern web technologies. My expertise includes React.js, Next.js, Node.js, and databases like MongoDB and MySQL. I also have a solid understanding of Machine Learning concepts and Database Management Systems (DBMS), which complement my development and data-handling capabilities. Additionally, I'm familiar with data visualization tools like Tableau.
              </p>
              
              <div className="pt-6">
                <a href="/LMT_resume(6).pdf" download className="inline-flex items-center gap-2 px-4 py-2 border rounded-md border-accent/50 bg-background hover:bg-muted transition-colors">
                  <FileText className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
