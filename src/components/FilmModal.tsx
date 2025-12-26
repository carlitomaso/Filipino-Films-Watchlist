import { Film } from '../types/film';
import { X, User, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FilmModalProps {
  film: Film;
  onClose: () => void;
}

export function FilmModal({ film, onClose }: FilmModalProps) {
  const imageSource = film.imageUrl || film.imagePath;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-slate-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden border border-amber-900/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-slate-950/80 hover:bg-amber-600 rounded-full transition-colors border border-amber-900/30"
        >
          <X className="w-5 h-5 text-amber-400" />
        </button>

        <div className="flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
          {/* Image Section */}
          {imageSource && (
            <div className="relative md:w-1/2 h-64 md:h-auto flex-shrink-0">
              <ImageWithFallback
                src={imageSource}
                alt={film.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent"></div>
            </div>
          )}

          {/* Content Section */}
          <div className="p-8 flex-1">
            <div className="mb-6">
              <div className="inline-block bg-amber-600/20 border border-amber-600/50 px-3 py-1 rounded mb-4">
                <span className="text-amber-400">{film.year}</span>
              </div>
              <h2 className="text-amber-50 mb-4">{film.title}</h2>
              
              <div className="flex items-center gap-2 text-slate-400 mb-6">
                <User className="w-5 h-5 text-amber-600" />
                <span>Directed by {film.director}</span>
              </div>
            </div>

            {film.notes && (
              <div className="mb-6">
                <h3 className="text-amber-400 mb-3">About</h3>
                <p className="text-slate-300 leading-relaxed">
                  {film.notes}
                </p>
              </div>
            )}

            <div className="pt-6 border-t border-amber-900/30">
              <div className="text-slate-500">
                Part of my Filipino cinema collection
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
