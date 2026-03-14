import useSWR from "swr";
import Issue from "./Issue";

type Props = {
  page: number;
};

const fetcher = (args: string) => fetch(args).then((res) => res.json());

const Issues = ({ page }: Props) => {
  const { data: issues } = useSWR(
    `https://api.github.com/repos/facebook/react/issues?per_page=10&state=all&page=${page}`,
    fetcher
  );

  return (
    <div className="flex flex-col gap-5">
      {issues?.map((issue: any) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default Issues;
