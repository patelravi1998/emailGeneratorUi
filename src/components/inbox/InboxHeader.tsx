
import { RefreshCw, Copy, Trash2, Mail, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface InboxHeaderProps {
  currentEmail: string;
  loading: boolean;
  isRefreshing: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  refreshInbox: () => void;
  deleteAllEmails: () => void;
}

export const InboxHeader = ({
  currentEmail,
  loading,
  isRefreshing,
  searchTerm,
  setSearchTerm,
  refreshInbox,
  deleteAllEmails,
}: InboxHeaderProps) => {
  const copyEmail = async () => {
    if (!currentEmail) {
      toast.error('No email address to copy');
      return;
    }
    
    try {
      await navigator.clipboard.writeText(currentEmail);
      toast.success('Email copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy email address');
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 border-b">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 animate-fade-in">
          <Mail className="text-primary animate-scale-in" /> Your Inbox
        </h2>
        <div className="flex gap-2">
          <button
            onClick={refreshInbox}
            disabled={loading}
            className={cn(
              "p-2 text-gray-600 hover:text-primary transition-all duration-300 rounded-full hover:bg-white/80 transform hover:scale-110",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              isRefreshing && "animate-spin"
            )}
          >
            <RefreshCw className="w-5 h-5" />
          </button>
          <button
            onClick={copyEmail}
            className="p-2 text-gray-600 hover:text-primary transition-all duration-300 rounded-full hover:bg-white/80 transform hover:scale-110"
          >
            <Copy className="w-5 h-5" />
          </button>
          <button
            onClick={deleteAllEmails}
            className="p-2 text-gray-600 hover:text-primary transition-all duration-300 rounded-full hover:bg-white/80 transform hover:scale-110"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search emails..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
        />
      </div>
    </div>
  );
};
