
import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { EmailGenerator } from '../components/EmailGenerator';
import { Inbox } from '../components/Inbox';
import { AboutSection } from '../components/AboutSection';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';
import { Toaster } from 'sonner';

const Index = () => {
  const [currentEmail, setCurrentEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
      <Toaster position="top-center" />
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <EmailGenerator onEmailGenerated={setCurrentEmail} currentEmail={currentEmail} />
        <Inbox currentEmail={currentEmail} />
      </div>
      <AboutSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
