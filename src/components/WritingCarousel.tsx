import { Writing } from '../data/writingsData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { User, Calendar } from 'lucide-react';

interface WritingCarouselProps {
  writings: Writing[];
  onWritingClick: (writing: Writing) => void;
}

export function WritingCarousel({ writings, onWritingClick }: WritingCarouselProps) {
  return (
    <div className="relative">
      {/* Film strip holes decoration */}
      <div className="absolute -top-4 left-0 right-0 flex gap-4 px-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-3 h-3 bg-amber-900/20 rounded-sm flex-shrink-0" />
        ))}
      </div>

      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-slate-900/50 pb-4">
        <div className="flex gap-4 px-4 min-w-min">
          {writings.map((writing) => {
            const formattedDate = new Date(writing.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });

            return (
              <div
                key={writing.id}
                onClick={() => onWritingClick(writing)}
                className="group cursor-pointer flex-shrink-0 w-80 bg-slate-900/50 rounded-lg overflow-hidden border border-amber-900/20 hover:border-amber-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-600/20"
              >
                {writing.imageUrl && (
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={writing.imageUrl}
                      alt={writing.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-amber-50 mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                    {writing.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-3 line-clamp-2">
                    {writing.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-slate-500">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span className="text-xs">{writing.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{formattedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Film strip holes decoration */}
      <div className="absolute -bottom-4 left-0 right-0 flex gap-4 px-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-3 h-3 bg-amber-900/20 rounded-sm flex-shrink-0" />
        ))}
      </div>
    </div>
  );
}
