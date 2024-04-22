export interface MediaTv {
  adult: boolean;
  backdrop_path: string | null; // Adjust if backdrop_path can be null
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string | null; // Adjust if homepage can be null
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string | null; // Adjust if last_air_date can be null
  last_episode_to_air: LastEpisodeToAir | null; // Adjust if last_episode_to_air can be null
  name: string;
  next_episode_to_air: NextEpisodeToAir | null; // Adjust if next_episode_to_air can be null
  networks: Networks[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string; // Adjust if poster_path can be null
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: TvSeasons[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null; // Adjust if tagline can be null
  type: string;
  vote_average: number;
  vote_count: number;
  images?: TvImages;
  credits: Credits;
  recommendations?: Recommendations;
  similar?: Similar;
}

interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number | null; // Adjust if gender can be null
  profile_path: string | null; // Adjust if profile_path can be null
}

interface Genre {
  id: number;
  name: string;
}

interface LastEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  air_date: string;
  episode_number: number;
  production_code: string | null; // Adjust if production_code can be null
  season_number: number;
  still_path: string | null; // Adjust if still_path can be null
  vote_average: number;
  vote_count: number;
  episode_type: string;
  runtime: number;
  show_id: number;
}

interface Networks {
  id: number;
  logo_path: string | null; // Adjust if logo_path can be null
  name: string;
  origin_country: string;
}

export interface TvSeasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null; // Adjust if logo_path can be null
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface NextEpisodeToAir {
  air_date: string | null; // Adjust if air_date can be null
  episode_number: number | null; // Adjust if episode_number can be null
  name: string | null; // Adjust if name can be null
  overview: string | null; // Adjust if overview can be null
  production_code: string | null; // Adjust if production_code can be null
  season_number: number | null; // Adjust if season_number can be null
  still_path: string | null; // Adjust if still_path can be null
}

interface TvImages {
  id?: number;
  backdrops: ImageObject[];
  logos: ImageObject[];
  posters: ImageObject[];
}

interface ImageObject {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
  id?: number;
}

export interface Credits {
  id?: number;
  cast: CastMember[];
  crew: CrewMember[];
}

export interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id?: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface CrewMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

export interface Recommendations {
  page: number;
  results: RecommendationMedia[];
  total_pages: number;
  total_results: number;
}

export interface Similar {
  page: number;
  results: RecommendationMedia[];
  total_pages: number;
  total_results: number;
}

export interface RecommendationMedia {
  adult: boolean;
  backdrop_path: string | null; // Adjust if backdrop_path can be null
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string | null; // Adjust if poster_path can be null
  genre_ids: number[];
  popularity: number;
  first_air_date: string | null; // Adjust if first_air_date can be null
  vote_average: number;
  vote_count: number;
  origin_country: string[];
  media_type?: 'movie' | 'tv';
}
