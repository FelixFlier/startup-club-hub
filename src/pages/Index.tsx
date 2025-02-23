import { UserPlus, Mail, Users, BookOpen, Building, Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleContact = () => {
    toast({
      title: "Danke für Ihr Interesse!",
      description: "Wir werden uns bald bei Ihnen melden.",
    });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Newsletter Anmeldung erfolgreich!",
      description: "Sie erhalten bald unsere Updates.",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-createu-beige">
      {/* Floating Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white/90 backdrop-blur-md z-50 rounded-full shadow-lg">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <img 
              src="/lovable-uploads/8d7791d1-0b23-450a-b4db-6770d9a554a5.png" 
              alt="CreateU Logo" 
              className="h-10 hover:scale-105 transition-transform"
            />
            <div className="flex gap-8">
              <a href="#vision" className="text-createu-black hover:text-createu-orange transition-all hover:scale-105">Vision</a>
              <a href="#aktivitaeten" className="text-createu-black hover:text-createu-orange transition-all hover:scale-105">Aktivitäten</a>
              <a href="#kontakt" className="text-createu-black hover:text-createu-orange transition-all hover:scale-105">Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <img 
            src="/lovable-uploads/8d7791d1-0b23-450a-b4db-6770d9a554a5.png" 
            alt="CreateU Logo Large" 
            className="h-24 mx-auto mb-8 animate-fade-in"
          />
          <h1 className="text-5xl font-bold text-createu-black mb-6">Willkommen bei CreateU Uppsala</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Wir unterstützen innovative Köpfe und fördern unternehmerisches Denken in der Universitätsstadt Uppsala.
          </p>
          <button className="bg-createu-orange text-white px-8 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-all flex items-center gap-2 mx-auto">
            <UserPlus size={20} />
            Mitglied werden
          </button>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-createu-black mb-8">Unsere Vision</h2>
            <div className="flex items-center justify-center mb-8">
              <BookOpen size={40} className="text-createu-orange" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              CreateU Uppsala strebt danach, die führende Plattform für studentische Unternehmer und innovative Denker zu sein. 
              Wir schaffen ein Ökosystem, das Inspiration, Wissen und Netzwerke verbindet.
            </p>
          </div>
        </div>
      </section>

      {/* Aktivitäten Section - Updated hover effects */}
      <section id="aktivitaeten" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-createu-black mb-12">Unsere Aktivitäten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Workshops",
                icon: <Users className="text-createu-orange" size={24} />,
                description: "Praktische Workshops zu verschiedenen Themen der Unternehmensgründung."
              },
              {
                title: "Founder Talks",
                icon: <BookOpen className="text-createu-orange" size={24} />,
                description: "Inspirierende Vorträge von erfolgreichen Gründern und Unternehmern."
              },
              {
                title: "Networking Events",
                icon: <Users className="text-createu-orange" size={24} />,
                description: "Regelmäßige Treffen zum Austausch und Netzwerken."
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

      {/* Kontakt Section */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-createu-black mb-12">Kontakt</h2>
          <div className="max-w-lg mx-auto">
            <div className="bg-createu-beige p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Building size={24} className="text-createu-orange" />
                <h3 className="text-xl font-semibold">Für Unternehmen</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Sie möchten mit motivierten Studenten zusammenarbeiten? Kontaktieren Sie uns für Kooperationsmöglichkeiten.
              </p>
              <button 
                onClick={handleContact}
                className="w-full bg-createu-orange text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-createu-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Stay Connected</h3>
              <p className="text-gray-300 mb-4">
                Bleiben Sie auf dem Laufenden mit unseren neuesten Updates und exklusiven Angeboten.
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Ihre Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
                />
                <button type="submit" className="bg-createu-orange p-2 rounded-lg hover:scale-105 transition-transform">
                  <Send size={20} />
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#vision" className="text-gray-300 hover:text-createu-orange transition-colors">Vision</a></li>
                <li><a href="#aktivitaeten" className="text-gray-300 hover:text-createu-orange transition-colors">Aktivitäten</a></li>
                <li><a href="#kontakt" className="text-gray-300 hover:text-createu-orange transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
              <p className="text-gray-300">
                Email: info@createu-uppsala.se<br />
                Adresse: Uppsala Universitet<br />
                751 05 Uppsala
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Folgen Sie uns</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-createu-orange hover:scale-110 transition-all">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-createu-orange hover:scale-110 transition-all">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-createu-orange hover:scale-110 transition-all">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-createu-orange hover:scale-110 transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CreateU Uppsala. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
