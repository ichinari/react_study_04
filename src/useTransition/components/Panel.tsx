type Props = {
  children: React.ReactNode;
};

const Panel = ({ children }: Props) => {
  return <section className="panel">{children}</section>;
};

export default Panel;
