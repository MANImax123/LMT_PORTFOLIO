import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'design';
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'design'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'BlogWebsite',
      description: 'A dynamic blog platform with role-based access control and global state management, featuring real-time content updates and optimized loading.',
      image: '/blogappimg.jpg',
      tags: ['React', 'Node.js', 'Express'],
      githubUrl: 'https://github.com/MANImax123/bloogapp',
      liveUrl: 'https://bloogapp-six.vercel.app/',
      category: 'web'
    },
    {
      id: 2,
      title: 'Chat App',
      description: 'A real-time chat application with modern UI and seamless communication features.',
      image: '/chatappimg.jpg',
      tags: ['React', 'Node.js', 'Socket.io'],
      githubUrl: 'https://github.com/MANImax123/chat-app',
      liveUrl: '#',
      category: 'web'
    },
    {
      id: 3,
      title: 'SENSAI',
      description: 'An AI-powered application built with Next.js, featuring modern UI and advanced functionality.',
      image: '/sensaiimg.jpg',
      tags: ['Next.js', 'JavaScript', 'AI'],
      githubUrl: 'https://github.com/MANImax123/ai-career-coach',
      liveUrl: 'https://ai-career-coach-chi-six.vercel.app/',
      category: 'web'
    },
    {
      id: 4,
      title: 'CodeReviewer',
      description: 'A code review platform that helps developers review and improve their code quality with AI assistance.',
      image: '/codereviewerimg.jpg',
      tags: ['Next.js', 'TypeScript', 'AI'],
      githubUrl: 'https://github.com/MANImax123/CodeReviewer',
      liveUrl: '#',
      category: 'web'
    },
    {
      id: 5,
      title: 'AI_FINANCE_TRACKER',
      description: 'Developed an AI-powered personal finance platform with automated email summaries, receipt scanning, analytics dashboards, and multi-account support using modern web technologies.',
      image: '/aifinanceimg.jpg',
      tags: ['React', 'Node.js', 'AI', 'Finance'],
      githubUrl: 'https://github.com/MANImax123/ai-finance-tracker',
      liveUrl: 'https://ai-finance-tracker-ecru.vercel.app/',
      category: 'web'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some of my recent projects that showcase my skills and passion for building
            modern web applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'all' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'web' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'mobile' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </button>
          <button
            className={cn(
              "px-5 py-2 rounded-full transition-colors",
              filter === 'design' 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 hover:bg-muted"
            )}
            onClick={() => setFilter('design')}
          >
            Design
          </button>
        </div>

        {/* Projects Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "glass rounded-xl overflow-hidden",
                "transition-all duration-300 hover:shadow-glass-lg animate-slide-in",
                "opacity-0"
              )}
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  
                  {project.liveUrl && (
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
