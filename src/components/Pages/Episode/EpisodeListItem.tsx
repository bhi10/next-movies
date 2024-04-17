import { SeasonEpisode } from "@lib/features/Tv/Season/types";

export interface EpisodeListItemProps {
  episode: SeasonEpisode
}

function EpisodeListItem({episode}: EpisodeListItemProps) {
  return 'EpisodeListItem'
}

export default EpisodeListItem;