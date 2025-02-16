import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-6 transition-transform group-hover:rotate-12" />
        <div className="relative bg-primary text-white p-2 rounded-lg transform transition-transform group-hover:scale-105">
          <Mail className="w-5 h-5" />
        </div>
      </div>
      <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        TempMail
      </span>
    </Link>
  );
};