import { Film } from '../types/film';
import { User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FilmCardProps {
  film: Film;
}

export function FilmCard({ film }: FilmCardProps) {
  // Use imageUrl if available, otherwise use imagePath (local file)
  const imageSource = film.imageUrl || film.imagePath;

  return (
    <div className="group bg-slate-900/50 rounded-lg overflow-hidden border border-amber-900/20 hover:border-amber-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-600/10 backdrop-blur-sm">
      {/* Film Image */}
      {imageSource && (
        <div className="relative h-80 overflow-hidden">
          <ImageWithFallback
            src={imageSource}
            alt={film.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80"></div>
          
          {/* Year badge */}
          <div className="absolute top-4 right-4 bg-amber-600/90 backdrop-blur-sm px-3 py-1 rounded text-slate-950">
            {film.year}
          </div>
        </div>
      )}

      {/* Film Details */}
      <div className="p-6">
        <h3 className="text-amber-50 mb-3 group-hover:text-amber-400 transition-colors">
          {film.title}
        </h3>
        
        <div className="flex items-center gap-2 text-slate-400 mb-4">
          <User className="w-4 h-4 text-amber-600" />
          <span>{film.director}</span>
        </div>
        
        {film.notes && (
          <p className="text-slate-500 leading-relaxed line-clamp-3">
            {film.notes}
          </p>
        )}
      </div>

      {/* Film strip decoration */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}