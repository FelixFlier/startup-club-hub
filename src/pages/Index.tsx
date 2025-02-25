
import { UserPlus, Mail, Users, BookOpen, Building, Linkedin, Instagram, Send, ArrowUp, CalendarCheck, Calendar, Sun, Moon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContact = () => {
    toast({
      title: "Thank you for your interest!",
      description: "We will get back to you soon.",
    });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Newsletter subscription successful!",
      description: "You will receive our updates soon.",
    });
    setEmail("");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sv" : "en");
    toast({
      description: `Language switched to ${language === "en" ? "Swedish" : "English"}.`,
    });
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const openPositions = [
    {
      title: "Event Manager",
      description: "Organize and coordinate our events and workshops",
      type: "Board Position"
    },
    {
      title: "Marketing Lead",
      description: "Handle our social media and marketing campaigns",
      type: "Committee Position"
    },
    {
      title: "Partnership Coordinator",
      description: "Manage relationships with our partners",
      type: "Board Position"
    }
  ];

  const partners = [
    {
      name: "Uppsala Innovation Centre",
      logo: "/lovable-uploads/60b99da1-9e67-4c03-897b-4c99b5e6f456.png",
      url: "https://www.uic.se"
    },
    {
      name: "Uppsala Teknolog- och Naturvetarkår",
      logo: "/lovable-uploads/098d11bd-bf39-43b7-9917-23208294c15d.png",
      url: "https://www.utn.se"
    },
    {
      name: "Drivhuset",
      logo: "/path-to-drivhuset-logo.png",
      url: "https://drivhuset.se/uppsala"
    }
  ];

  const upcomingEvents = [
    {
      date: "2024-03-15",
      title: "Startup Workshop",
      description: "Learn the basics of starting your own company"
    },
    {
      date: "2024-03-20",
      title: "Networking Event",
      description: "Connect with fellow entrepreneurs"
    },
    {
      date: "2024-03-25",
      title: "Pitch Training",
      description: "Perfect your pitch with expert feedback"
    }
  ];

  const faqItems = [
    {
      question: "How can I become a member?",
      answer: "You can become a member by filling out our online application form. Membership is free for all students at Uppsala University."
    },
    {
      question: "What kind of events do you organize?",
      answer: "We organize workshops, networking events, founder talks, and mentoring sessions. All events are designed to support aspiring entrepreneurs."
    },
    {
      question: "Do I need to have a business idea to join?",
      answer: "No, you don't need to have a business idea. We welcome all students interested in entrepreneurship and innovation."
    }
  ];

  const blogPosts = [
    {
      title: "Success Story: From Student to Startup Founder",
      date: "March 1, 2024",
      excerpt: "Read about how one of our members turned their idea into a successful business."
    },
    {
      title: "5 Tips for Student Entrepreneurs",
      date: "February 25, 2024",
      excerpt: "Essential advice for balancing studies and startup life."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-createu-orange text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp size={24} />
      </button>

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl glass-effect z-50 rounded-full shadow-lg">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 md:gap-8 w-full justify-center">
              <a href="#vision" className="text-foreground hover:text-createu-orange transition-all hover:scale-105">Vision</a>
              <a href="#activities" className="text-foreground hover:text-createu-orange transition-all hover:scale-105">Activities</a>
              <a href="#contact" className="text-foreground hover:text-createu-orange transition-all hover:scale-105">Contact</a>
            </div>
            <div className="flex items-center space-x-4 ml-4">
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 rounded-md hover:bg-secondary transition-colors text-sm text-foreground"
              >
                {language === "en" ? "EN" : "SV"}
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-secondary transition-colors text-foreground"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-background">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 font-montserrat text-foreground">
            Welcome to <span className="font-extrabold text-5xl">CREATE<span className="text-createu-orange">U</span></span>
            <div className="text-lg mt-1 font-hind-hunter">Uppsala</div>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We support innovative minds and promote entrepreneurial thinking in the university city of Uppsala.
          </p>
          <button className="bg-createu-orange text-white px-8 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-all flex items-center gap-2 mx-auto">
            <UserPlus size={20} />
            Become a Member
          </button>
        </div>
      </section>

      <section id="vision" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 font-montserrat text-foreground">Our Vision</h2>
            <div className="flex items-center justify-center mb-8">
              <BookOpen size={40} className="text-createu-orange" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CreateU Uppsala strives to be the leading platform for student entrepreneurs and innovative thinkers.
              We create an ecosystem that connects inspiration, knowledge, and networks.
            </p>
          </div>
        </div>
      </section>

      <section id="activities" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-montserrat">Our Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Workshops",
                icon: <Users className="text-createu-orange" size={24} />,
                description: "Practical workshops on various aspects of starting a business."
              },
              {
                title: "Founder Talks",
                icon: <BookOpen className="text-createu-orange" size={24} />,
                description: "Inspiring talks from successful founders and entrepreneurs."
              },
              {
                title: "Networking Events",
                icon: <Users className="text-createu-orange" size={24} />,
                description: "Regular meetings for exchange and networking."
              }
            ].map((activity, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all dark:bg-secondary">
                <div className="flex items-center gap-3 mb-4">
                  {activity.icon}
                  <h3 className="text-xl font-semibold text-foreground font-montserrat">{activity.title}</h3>
                </div>
                <p className="text-muted-foreground">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-montserrat">Contact</h2>
          <div className="max-w-lg mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md dark:bg-secondary">
              <div className="flex items-center gap-3 mb-6">
                <Building size={24} className="text-createu-orange" />
                <h3 className="text-xl font-semibold font-montserrat text-foreground">For Companies</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Would you like to work with motivated students? Contact us for cooperation opportunities.
              </p>
              <button
                onClick={handleContact}
                className="w-full bg-createu-orange text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-montserrat">Join Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all dark:bg-secondary">
                <h3 className="text-xl font-bold mb-2 text-foreground">{position.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{position.type}</p>
                <p className="text-muted-foreground mb-4">{position.description}</p>
                <button 
                  onClick={() => {
                    toast({
                      title: "Application Info",
                      description: "Please send your application to recruitment@createu-uppsala.se",
                    });
                  }}
                  className="text-createu-orange hover:underline flex items-center gap-2"
                >
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-montserrat">Our Partners</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center h-40 dark:bg-secondary"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-28 max-w-full object-contain dark:brightness-110"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-montserrat">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 dark:bg-secondary">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-createu-orange" size={24} />
                  <div className="text-sm text-gray-600 dark:text-gray-400">{event.date}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 font-montserrat text-foreground">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
                <button className="mt-4 text-createu-orange hover:underline flex items-center gap-2">
                  <CalendarCheck size={20} />
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-montserrat">FAQ</h2>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-6 border-b border-border pb-6 last:border-0">
                <h3 className="text-xl font-semibold mb-2 font-montserrat text-foreground">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-montserrat">Latest News</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 dark:bg-secondary">
                <div className="text-sm text-gray-600 mb-2 dark:text-gray-400">{post.date}</div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat text-foreground">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <button className="text-createu-orange hover:underline">Read More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-montserrat">Stay Connected</h3>
              <p className="text-muted-foreground mb-4">
                Stay up to date with our latest updates and exclusive offers.
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background text-foreground px-4 py-2 rounded-lg flex-grow border border-border"
                />
                <button type="submit" className="bg-createu-orange p-2 rounded-lg hover:scale-105 transition-transform">
                  <Send size={20} className="text-white" />
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Partners</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-createu-orange transition-colors">Uppsala Innovation Centre</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-createu-orange transition-colors">Uppsala Teknolog- och Naturvetarkår</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-createu-orange transition-colors">Drivhuset</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Contact</h3>
              <p className="text-muted-foreground">
                Email: info@createu-uppsala.se<br />
                Address: Uppsala University<br />
                751 05 Uppsala
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-createu-orange hover:scale-110 transition-all">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-createu-orange hover:scale-110 transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} CreateU Uppsala. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
