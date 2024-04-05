// Start Details
export interface MoviesDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: MovieGenres[];
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: MovieProductionCompanies[];
  production_countries: MovieProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: MovieSpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieGenres {
  id: number;
  name: string;
  homepage: string;
}

export interface MovieProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface MovieProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface MovieSpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}
// End Details

// Start Credits
export interface MoviesCredits {
  id: number;
  cast: MoviesCast[];
  crew: MoviesCrew[];
}

export interface MoviesCast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface MoviesCrew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}
// End Credits

// Start Images
interface MoviesImages {
  backdrops: MoviesBackdrops[];
  logos: MoviesLogos[];
  posters: MoviesPosters[];
}

export interface MoviesBackdrops {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
  id: number;
}

export interface MoviesLogos {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface MoviesPosters {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}
// End Images
