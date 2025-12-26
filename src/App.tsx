import { useState, useEffect } from 'react';
import { FilmCarousel } from './components/FilmCarousel';
import { WritingCarousel } from './components/WritingCarousel';
import { FilmModal } from './components/FilmModal';
import { WritingModal } from './components/WritingModal';
import { EssaySection } from './components/EssaySection';
import { Film } from './types/film';
import { Writing, writings } from './data/writingsData';
import { essays } from './data/essaysData';
import { Search, Film as FilmIcon, BookOpen, PenTool } from 'lucide-react';
import { loadFilmsFromCSV } from './utils/csvParser';

export default function App() {
  const [films, setFilms] = useState<Film[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [selectedWriting, setSelectedWriting] = useState<Writing | null>(null);

  useEffect(() => {
    const loadedFilms = loadFilmsFromCSV();
    setFilms(loadedFilms);
    setLoading(false);
  }, []);

  const filteredFilms = films.filter(film =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    film.director.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredWritings = writings.filter(writing =>
    writing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    writing.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalFilms = films.length;

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-amber-400">Loading films...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Film grain overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg==')]" />
      
      <div className="max-w-7xl mx-auto px-4 py-12 relative">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <FilmIcon className="w-6 h-6 text-slate-950" />
            </div>
          </div>
          <h1 className="text-amber-400 mb-3 tracking-wide">PELIKULA</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My Personal Collection of Filipino Cinema
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600"></div>
            <span className="text-amber-600">{totalFilms} Films</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600"></div>
          </div>
        </header>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
            <input
              type="text"
              placeholder="Search films or writings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-amber-900/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent text-slate-200 placeholder-slate-500 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Films Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FilmIcon className="w-6 h-6 text-amber-600" />
            <h2 className="text-amber-400">Films I've Watched</h2>
          </div>
          
          <FilmCarousel films={filteredFilms} onFilmClick={setSelectedFilm} />
        </section>

        {/* Writings Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-amber-600" />
            <h2 className="text-amber-400">Writings on Filipino Cinema</h2>
          </div>
          
          <WritingCarousel writings={filteredWritings} onWritingClick={setSelectedWriting} />
        </section>

        {/* Essays Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <PenTool className="w-6 h-6 text-amber-600" />
            <h2 className="text-amber-400">My Essays</h2>
          </div>
          
          <div className="space-y-8">
            {essays.map((essay) => (
              <EssaySection key={essay.id} essay={essay} />
            ))}
          </div>
        </section>
      </div>

      {/* Modals */}
      {selectedFilm && (
        <FilmModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />
      )}
      
      {selectedWriting && (
        <WritingModal writing={selectedWriting} onClose={() => setSelectedWriting(null)} />
      )}
    </div>
  );
}