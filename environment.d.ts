declare namespace NodeJS {
  export interface ProcessEnv {
    readonly TMDB_API_KEY: string;
    readonly TMDB_API_BASE_URL: string;
    readonly TMDB_API_IMAGE_BASE_URL: string;
  }
}
