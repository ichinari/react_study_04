type Props = {
  children: React.ReactNode;
  isPending?: boolean;
};

export const Layout = ({ children, isPending }: Props) => {
  return (
    <div className="w-md m-auto">
      <section className="w-full bg-slate-300 text-center">Music Browser</section>
      {isPending && "Layout Loading..."}
      <main className="w-full">{children}</main>
    </div>
  );
};
