import Poster from "@components/Poster/Poster";
import { getMedia } from "@lib/api";
import Header from "./Header";

export default async function Type({ params }: { params: { type: MediaType; id: string } }) {
  const media = await getMedia(params.type, params.id);
  return (
    <>
      <Header mediaType={params.type} media={media}></Header>
    </>
  );
}
