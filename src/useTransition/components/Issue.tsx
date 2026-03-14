const Issue = ({ issue }: any) => {
  return (
    <div className="border border-gray-300 rounded p-2 bg-gray-100">
      <a href={issue.html_url}>{issue.title}</a>
    </div>
  );
};

export default Issue;
