export interface Season {
  _id: string;
  air_date: string;
  episodes: SeasonEpisode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
  vote_average: number;
  images?: SeasonImages;
}

export interface SeasonEpisode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: Crew[];
  guest_stars: GuestStar[];
  episode_type: string;
}

interface Crew {
  department: string;
  job: string;
  credit_id: string;
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

interface GuestStar {
  character: string;
  credit_id: string;
  order: number;
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

interface SeasonImages {
  id?: number;
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
