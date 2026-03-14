import { useState, useTransition } from "react";
import Indexpage from "./Indexpage";
import ArtistPage from "./ArtistPage";
import { Layout } from "./Layout";

const Router = () => {
  const [page, setPage] = useState("/");
  const [isPending, startTransition] = useTransition();

  const navigate = (url: string) => {
    startTransition(() => {
      setPage(url);
    });
  };

  let content;
  if (page === "/") {
    content = <Indexpage navigate={navigate} />;
  } else if (page === "/the-beatles") {
    content = <ArtistPage artist={{ id: "the-beatles", name: "The Beatles" }} />;
  }

  return <Layout isPending={isPending}>{content}</Layout>;
};

export default Router;
