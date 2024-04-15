export type MediaType = 'movie' | 'tv' | 'all';

// Movie Types: START

export interface MediaMovie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection?: string | null;
  budget?: number;
  genres: Genre[];
  homepage: string;
  id: string | number;
  imdb_id?: string;
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
  credits?: Credits;
  recommendations?: Recommendations;
  similar?: Similar;
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

export interface Recommendations {
  page: number;
  results: RecommendationMedia[];
}

export interface Similar {
  page: number;
  results: RecommendationMedia[];
}

export interface RecommendationMedia {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type: 'movie' | 'tv';
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
}

export interface MoviesImages {
  id: number;
  backdrops: ImageObject[];
  logos: ImageObject[];
  posters: ImageObject[];
}

export interface ImageObject {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
  id?: number;
}

// Movie Types: END

// TV Shows Types: START

interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string | null;
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
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
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

export interface Season {
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
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
  backdrop_path: string | null;
  created_by?: CreatedBy[];
  episode_run_time?: number[];
  first_air_date?: string;
  genres: Genre[];
  homepage: string;
  id: string | number;
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

export interface Media extends MediaMovie, MediaTv {}

export interface TrendingMedia {
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
  origin_country?: string[];
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

export interface People {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name?: string;
  profile_path: string;
  popularity: number;
  cast_id?: number;
  media_type?: 'person';
  job?: string;
  character?: string;
  credit_id?: string;
  order?: number;
  imdb_id: string;
  deathday?: string | null;
  // details
  also_known_as?: string[];
  birthday?: string;
  place_of_birth?: string;
  homepage?: string | null;
  biography?: string;
  external_ids?: ExternalIds;
  combined_credits?: CombinedCredits;
  images?: {
    profiles: Image[];
  };
}

interface Episode {
  air_date?: string;
  crew: People[];
  episode_number: number;
  guest_stars: People[];
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

export interface Image {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface ExternalIds {
  id?: number;
  imdb_id?: string;
  facebook_id?: string | null;
  instagram_id?: string;
  twitter_id?: string;
  linkedin_id?: string;
  github_id?: string;
  email?: string;
  homepage?: string;
  freebase_mid?: string;
  freebase_id?: string | null;
  tvrage_id?: string | number | null;
  wikidata_id?: string;
  tiktok_id?: string | null;
  youtube_id?: string | null;
}

export interface PageResult<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface ProviderResult {
  id: string;
  results: {
    [key: string]: ProviderItem;
  };
}

export interface GenreList {
  genres: Genre[];
}

interface Genre {
  id: number;
  name: string;
}

export type Query = 'top_rated' | 'on_the_air' | 'airing_today' | 'popular' | 'now_playing' | 'upcoming' | 'trending';

export interface QueryItem {
  type: MediaType;
  title: string;
  query: string;
}

// Credits
export interface Credits {
  id: number;
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
  cast_id: number;
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

export interface Region {
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

export interface CombinedCreditsCast {
  adult: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  character?: string;
  credit_id?: string;
  order?: number;
  media_type: MediaType;
  origin_country?: string[];
  original_name?: string;
  first_air_date?: string;
  namets?: number;
  name?: string;
  episode_count?: number;
  orders?: number;
}

export interface CombinedCreditsCrew {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  credit_id: string;
  department: string;
  job: string;
  media_type: MediaType;
  origin_country?: string[];
  original_name?: string;
  first_air_date?: string;
  name?: string;
  episode_count?: number;
  character?: string;
}

export interface CombinedCredits {
  cast: CombinedCreditsCast[];
  crew: CombinedCreditsCrew[];
  id?: number;
}

export type ImageSizes =
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
  | 'h632'
  | 'w600_and_h900_bestv2'
  | 'w138_and_h175_face'
  | 'w1066_and_h600_bestv2'
  | 'w150_and_h225_bestv2'
  | 'w440_and_h660_face'
  | 'w130_and_h195_bestv2';
