import { usePageNumber } from "./hook/usePageNumber";
import Issues from "./components/Issues";

const UseTransiton_2 = () => {
  const { page, incrementPage, decrementPage, isPending } = usePageNumber();

  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <div className="flex gap-5">
        <button
          type="button"
          className="border-blue-300 bg-blue-300 hover:bg-blue-400 p-2 rounded"
          onClick={incrementPage}
        >
          Back
        </button>
        <button
          type="button"
          className="border-blue-300 bg-blue-300 hover:bg-blue-400 p-2 rounded"
          onClick={decrementPage}
        >
          Next
        </button>
      </div>
      {isPending && <p>Loading...</p>}
      <Issues page={page} />
    </div>
  );
};

export default UseTransiton_2;
