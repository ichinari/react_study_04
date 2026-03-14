const Indexpage = ({ navigate }: any) => {
  return (
    <button
      onClick={() => navigate("/the-beatles")}
      className="border-2 px-4 py-4 rounded-md w-full"
    >
      Open The Beatles artist page
    </button>
  );
};

export default Indexpage;
