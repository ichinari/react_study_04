import { Suspense } from "react";
import Albums from "./Albums";
import Biography from "./Biography";
import Panel from "./Panel";

const ArtistPage = ({ artist }: any) => {
  return (
    <div>
      <h1>{artist.name}</h1>
      <Biography artistId={artist.id} />
      <Suspense fallback={<AlbumsGlimmer />}>
        <Panel>
          <Albums artistId={artist.id} />
        </Panel>
      </Suspense>
    </div>
  );
};

const AlbumsGlimmer = () => {
  return (
    <div className="bg-slate-300">
      <p>ArtistPage Loading...</p>
    </div>
  );
};

export default ArtistPage;
