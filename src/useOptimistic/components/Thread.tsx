import { useOptimistic, useRef } from "react";
import type { Message } from "../useOptimistic_1";

type Props = {
  messages: Message[];
  sendMessage: (formData: FormData) => Promise<void>;
};
const Thread = ({ messages, sendMessage }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async () => {
    const formData = new FormData(formRef.current!);

    addOptimisticMessage(formData.get("message") as string);

    await sendMessage(formData);

    formRef.current?.reset();
  };

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state: Message[], newMessage: Message["text"]) => [
      ...state,
      {
        id: state.length + 1,
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <div>
      <form action={handleSubmit} ref={formRef}>
        <input
          type="text"
          name="message"
          placeholder="Type your message..."
          className="border rounded p-2 mr-5"
        />
        <button
          type="submit"
          className="border border-blue-300 bg-blue-300 rounded hover:bg-blue-400 p-2"
        >
          submit
        </button>
      </form>
      <div className="flex flex-col items-center mt-5">
        <h1>Current Messages</h1>
        <ul>
          {optimisticMessages.map((message) => (
            <li key={String(message.id)} className="list-decimal">
              {message.text}
              {message.sending && <small>(Sending...)</small>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Thread;
