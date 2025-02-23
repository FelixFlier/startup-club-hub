import { UserPlus, Mail, Users, BookOpen, Building, Linkedin, Instagram, Send, ArrowUp, CalendarCheck, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen bg-createu-beige relative">
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-createu-orange text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp size={24} />
      </button>

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white/90 backdrop-blur-md z-50 rounded-full shadow-lg">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <img 
              src="/lovable-uploads/8d7791d1-0b23-450a-b4db-6770d9a554a5.png" 
              alt="CreateU Logo" 
              className="h-10 hover:scale-105 transition-transform md:block hidden"
            />
            <div className="flex gap-4 md:gap-8 w-full md:w-auto justify-center md:justify-end">
              <a href="#vision" className="text-createu-black hover:text-createu-orange transition-all hover:scale-105">Vision</a>
              <a href="#activities" className="text-createu-black hover:text-createu-orange transition-all hover:scale-105">Activities</a>
              <a href="#contact" className="text-createu-black hover:text-createu-orange transition-all hover:scale-105">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <img 
            src="/lovable-uploads/8d7791d1-0b23-450a-b4db-6770d9a554a5.png" 
            alt="CreateU Logo Large" 
            className="h-24 mx-auto mb-8 animate-fade-in"
          />
          <h1 className="text-5xl font-bold text-createu-black mb-6">Welcome to CreateU Uppsala</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            We support innovative minds and promote entrepreneurial thinking in the university city of Uppsala.
          </p>
          <button className="bg-createu-orange text-white px-8 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-all flex items-center gap-2 mx-auto">
            <UserPlus size={20} />
            Become a Member
          </button>
        </div>
      </section>

      <section id="vision" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-createu-black mb-8">Our Vision</h2>
            <div className="flex items-center justify-center mb-8">
              <BookOpen size={40} className="text-createu-orange" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              CreateU Uppsala strives to be the leading platform for student entrepreneurs and innovative thinkers. 
              We create an ecosystem that connects inspiration, knowledge, and networks.
            </p>
          </div>
        </div>
      </section>

      <section id="activities" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-createu-black mb-12">Our Activities</h2>
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-white to-createu-beige transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {activity.icon}
                  <h3 className="text-xl font-semibold text-createu-black">{activity.title}</h3>
                </div>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-createu-black mb-12">Contact</h2>
          <div className="max-w-lg mx-auto">
            <div className="bg-createu-beige p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Building size={24} className="text-createu-orange" />
                <h3 className="text-xl font-semibold">For Companies</h3>
              </div>
              <p className="text-gray-700 mb-6">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-createu-black mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-createu-beige p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-createu-orange" size={24} />
                  <div className="text-sm text-gray-600">{event.date}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-700">{event.description}</p>
                <button className="mt-4 text-createu-orange hover:underline flex items-center gap-2">
                  <CalendarCheck size={20} />
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-createu-black mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-3 text-createu-black">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-createu-black mb-12">Latest News</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-createu-beige p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
                <div className="text-sm text-gray-600 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <button className="text-createu-orange hover:underline">Read More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Stay Connected</h3>
              <p className="text-gray-600 mb-4">
                Stay up to date with our latest updates and exclusive offers.
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-gray-800 px-4 py-2 rounded-lg flex-grow border border-gray-200"
                />
                <button type="submit" className="bg-createu-orange p-2 rounded-lg hover:scale-105 transition-transform">
                  <Send size={20} className="text-white" />
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#vision" className="text-gray-600 hover:text-createu-orange transition-colors">Vision</a></li>
                <li><a href="#activities" className="text-gray-600 hover:text-createu-orange transition-colors">Activities</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-createu-orange transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-600">
                Email: info@createu-uppsala.se<br />
                Address: Uppsala University<br />
                751 05 Uppsala
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-createu-orange hover:scale-110 transition-all">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-createu-orange hover:scale-110 transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} CreateU Uppsala. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
