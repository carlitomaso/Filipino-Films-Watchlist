import { Film } from '../types/film';
import { filmsCSV } from '../data/filmsData';

export function loadFilmsFromCSV(): Film[] {
  try {
    const csvText = filmsCSV;
    
    const lines = csvText.split('\n').filter(line => line.trim());
    if (lines.length === 0) return [];
    
    const headers = lines[0].split(',').map(h => h.trim());
    
    const films: Film[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      
      // Skip if not enough values
      if (values.length < 5) continue;
      
      const film: Film = {
        id: values[0] || '',
        title: values[1] || '',
        year: parseInt(values[2]) || 0,
        director: values[3] || '',
        dateWatched: values[4] || '',
        notes: values[5] || undefined,
        imageUrl: values[6] || undefined,
      };
      
      // Only add if title exists
      if (film.title) {
        films.push(film);
      }
    }
    
    return films;
  } catch (error) {
    console.error('Error loading films from CSV:', error);
    return [];
  }
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}