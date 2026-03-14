import { useState } from "react";
import TabButton from "./components/TabButton";
import AboutTab from "./components/AboutTab";
import PostsTab from "./components/PostsTab";
import ContactTab from "./components/ContactTab";

type Tab = "about" | "posts" | "contact";

const UseTransition_1 = () => {
  const [tab, setTab] = useState<Tab>("about");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-5 mb-5">
        <TabButton isActive={tab === "about"} onClick={() => setTab("about")}>
          About
        </TabButton>
        <TabButton isActive={tab === "posts"} onClick={() => setTab("posts")}>
          Posts
        </TabButton>
        <TabButton isActive={tab === "contact"} onClick={() => setTab("contact")}>
          Contact
        </TabButton>
      </div>
      <div>
        {tab === "about" && <AboutTab />}
        {tab === "posts" && <PostsTab />}
        {tab === "contact" && <ContactTab />}
      </div>
    </div>
  );
};

export default UseTransition_1;
