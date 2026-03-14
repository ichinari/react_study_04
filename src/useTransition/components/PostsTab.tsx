const PostsTab = () => {
  const items = [];
  for (let i = 0; i < 5; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul className="items">{items}</ul>;
};

const SlowPost = ({ index }: { index: number }) => {
  const startTime = performance.now();
  while (performance.now() - startTime < 600) {
    // 600msかかる処理
  }
  return <li className="item">Post #{index + 1}</li>;
};

export default PostsTab;
