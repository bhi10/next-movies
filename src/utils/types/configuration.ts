export interface ConfigDetail {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
  change_keys: string[];
}

export interface Country {
  iso_3166_1: string;
  english_name: string;
  native_name: string;
}

export interface Job {
  department: string;
  jobs: string[];
}

export interface Language {
  iso_639_1: string;
  english_name: string;
  name: string;
}

export interface Timezone {
  iso_3166_1: string;
  zones: string[];
}
