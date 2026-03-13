import { useState } from "react";
import Thread from "./components/Thread";
import { delaySetMessage } from "./action";

export type Message = {
  id: number;
  text: string;
  sending: boolean;
};

const UseOptimistic_1 = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello, how are you?", sending: false },
  ]);

  const sendMessage = async (formData: FormData) => {
    const text = await delaySetMessage(formData.get("message") as string);
    setMessages((messages) => [
      ...messages,
      {
        id: messages.length + 1,
        text,
        sending: false,
      },
    ]);
  };

  return (
    <div className="flex justify-center items-center">
      <Thread messages={messages} sendMessage={sendMessage} />
    </div>
  );
};

export default UseOptimistic_1;
