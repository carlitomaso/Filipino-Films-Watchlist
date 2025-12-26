import { Essay } from '../data/essaysData';
import { Calendar, BookText } from 'lucide-react';

interface EssaySectionProps {
  essay: Essay;
}

export function EssaySection({ essay }: EssaySectionProps) {
  const formattedDate = new Date(essay.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="bg-slate-900/30 border border-amber-900/20 rounded-lg p-8 backdrop-blur-sm">
      {/* Header */}
      <div className="mb-6 pb-6 border-b border-amber-900/20">
        <div className="flex items-center gap-2 mb-3">
          <BookText className="w-5 h-5 text-amber-600" />
          <span className="text-amber-600 uppercase tracking-wider text-sm">Essay</span>
        </div>
        <h2 className="text-amber-50 mb-3">{essay.title}</h2>
        <div className="flex items-center gap-2 text-slate-400">
          <Calendar className="w-4 h-4" />
          <time dateTime={essay.date}>{formattedDate}</time>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        {essay.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-slate-300 mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Decorative line */}
      <div className="mt-8 pt-6 border-t border-amber-900/20">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-50"></div>
      </div>
    </article>
  );
}
