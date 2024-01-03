type MediaType = "movie" | "tv" | "all";

// Movie Types: START

interface MediaMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: string | null;
  budget?: number;
  genres: Genre[];
  homepage: string;
  id: string;
  imdb_id?: string ;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
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

// Movie Types: END

// TV Shows Types: START

interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface LastEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string,
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

interface Network {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface MediaTv {
  adult: boolean;
  backdrop_path: string;
  created_by?: CreatedBy[];
  episode_run_time?: number[];
  first_air_date?: string;
  genres: Genre[];
  homepage: string;
  id: string;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  last_episode_to_air?: LastEpisodeToAir;
  name?: string;
  next_episode_to_air?: string | null;
  networks?: Network[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons?: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type?: string;
  vote_average: number;
  vote_count: number;
}

// TV Shows Types: END

interface Media extends MediaMovie, MediaTv {
  
}

interface TrendingMedia {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  name?: string;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: 'movie' | 'tv';
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  original_name?: string;
  first_air_date?: string;
  origin_country?: string[]
}

interface Credit extends Media {
  character: string;
  job: string;
  department: string;
  profile_path: string;
  credit_id: string;
  order: number;
  media_type: MediaType;
  episode_count?: number;
}

interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
  popularity: number;
  cast_id?: number;
  media_type?: "person";
  job?: string;
  character?: string;
  credit_id: string;
  order: number;
  // details
  also_known_as?: string[];
  birthday?: string;
  place_of_birth?: string;
  homepage?: string;
  biography?: string;
  external_ids?: ExternalIds;
  combined_credits?: {
    cast?: Credit[];
    crew?: Credit[];
  };
  images?: {
    profiles: Image[];
  };
}

interface Episode {
  air_date?: string;
  crew: Person[];
  episode_number: number;
  guest_stars: Person[];
  name?: string;
  overview?: string;
  id: number;
  production_code: string;
  season_number: number;
  still_path?: string;
  vote_average?: number;
  vote_count?: number;
}

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

interface Image {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

interface ExternalIds {
  imdb_id?: string;
  facebook_id?: string;
  instagram_id?: string;
  twitter_id?: string;
  linkedin_id?: string;
  github_id?: string;
  email?: string;
  homepage?: string;
}

interface PageResult<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

interface ProviderResult {
  id: string;
  results: {
    [key: string]: ProviderItem;
  };
}

interface GenreList {
  genres: Genre[];
}

interface Genre {
  id: number;
  name: string;
}

type Query =
  | "top_rated"
  | "on_the_air"
  | "airing_today"
  | "popular"
  | "now_playing"
  | "upcoming"
  | "trending";

interface QueryItem {
  type: MediaType;
  title: string;
  query: string;
}

interface Credits {
  cast: Media[];
}

interface Region {
  iso_3166_1: string;
  english_name: string;
  native_name: string;
}

interface Provider {
  logo_path: string | null;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

interface ProviderItem {
  link: string;
  flatrate?: Provider[];
  rent?: Provider[];
  buy?: Provider[];
}

type ImageWidthSizes =
  | 'w500'
  | 'w1920_and_h800_multi_faces'
  | 'original'
  | 'w300'
  | 'w780'
  | 'w1280'
  | 'w45'
  | 'w154'
  | 'w92'
  | 'w185'
  | 'w342'
  | 'h632';
