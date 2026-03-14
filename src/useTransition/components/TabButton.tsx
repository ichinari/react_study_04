import { useTransition } from "react";

type Props = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

const TabButton = ({ children, isActive, onClick }: Props) => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isActive}
      className={`border rounded p-2 ${
        isPending
          ? "border-gray-400 bg-gray-200 text-gray-400"
          : isActive
            ? "border-gray-300 bg-gray-300"
            : "border-blue-300 bg-blue-300 hover:bg-blue-400"
      }`}
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
    >
      {children}
    </button>
  );
};

export default TabButton;
