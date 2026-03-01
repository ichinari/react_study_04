import { useRef } from "react";

function UseRef_2() {
  const listRef = useRef<HTMLUListElement>(null);

  const handleClick = (index: number) => {
    const listNode = listRef.current;
    const imgNodes = listNode?.querySelectorAll("li > img")[index];

    imgNodes?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <div>
      <nav className="flex gap-2 mb-5">
        <button
          type="button"
          className="border p-2 rounded-md bg-gray-200"
          onClick={() => handleClick(0)}
        >
          img_1
        </button>
        <button
          type="button"
          className="border p-2 rounded-md bg-gray-200"
          onClick={() => handleClick(1)}
        >
          img_2
        </button>
        <button
          type="button"
          className="border p-2 rounded-md bg-gray-200"
          onClick={() => handleClick(2)}
        >
          img_3
        </button>
      </nav>
      <div style={{ overflowX: "auto", maxWidth: "700px", margin: "0 auto" }}>
        <ul
          style={{ minWidth: "1300px" }}
          className="flex items-center justify-between"
          ref={listRef}
        >
          <li>
            <img src="https://picsum.photos/id/16/200/200" alt="img_1" />
          </li>
          <li>
            <img src="https://picsum.photos/id/19/300/200" alt="img_2" />
          </li>
          <li>
            <img src="https://picsum.photos/id/28/250/200" alt="img_3" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UseRef_2;
