import { fetchData } from "../data";

type Props = {
  artistId: string;
};

const Albums = ({ artistId }: Props) => {
  const albums = use(fetchData(`/${artistId}/albums`));
  return (
    <ul className="border-2 px-2 py-3 border-orange-300">
      {albums.map((album: any) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
};

const use = (promise: any) => {
  if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else if (promise.status === "pending") {
    throw promise;
  } else {
    promise.status = "pending";
    promise.then(
      (result: any) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason: any) => {
        promise.status = "rejected";
        promise.reason = reason;
      }
    );
    throw promise;
  }
};

export default Albums;
