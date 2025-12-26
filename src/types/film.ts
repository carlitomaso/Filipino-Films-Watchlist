export interface Film {
  id: string;
  title: string;
  year: number;
  director: string;
  dateWatched: string;
  notes?: string;
  imageUrl?: string;
  imagePath?: string;
}
