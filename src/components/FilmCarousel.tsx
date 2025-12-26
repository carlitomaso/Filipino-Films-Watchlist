import { Film } from '../types/film';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FilmCarouselProps {
  films: Film[];
  onFilmClick: (film: Film) => void;
}

export function FilmCarousel({ films, onFilmClick }: FilmCarouselProps) {
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
          {films.map((film) => {
            const imageSource = film.imageUrl || film.imagePath;
            return (
              <div
                key={film.id}
                onClick={() => onFilmClick(film)}
                className="group cursor-pointer flex-shrink-0 w-64 bg-slate-900/50 rounded-lg overflow-hidden border border-amber-900/20 hover:border-amber-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-600/20"
              >
                {imageSource && (
                  <div className="relative h-96 overflow-hidden">
                    <ImageWithFallback
                      src={imageSource}
                      alt={film.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80"></div>
                    
                    <div className="absolute top-3 right-3 bg-amber-600/90 backdrop-blur-sm px-2 py-1 rounded text-slate-950">
                      {film.year}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-amber-50 mb-1 group-hover:text-amber-400 transition-colors line-clamp-2">
                        {film.title}
                      </h3>
                      <p className="text-slate-400">{film.director}</p>
                    </div>
                  </div>
                )}
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
