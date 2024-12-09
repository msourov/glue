import axios from "axios";
import { useEffect, useState } from "react";

interface Message {
  text: string;
  user: string;
  timestamp: string;
}

const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const fetchSlackMessage = async () => {
    try {
      const res = await axios.get<Message[]>(
        "http://localhost:5000/slack/test-channel/messages"
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSlackMessage();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage("");
    }
    await axios.post(
      "http://localhost:5000/send-to-slack",
      { text: message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex mb-4 w-full">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message"
          className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-3 rounded-r-lg hover:bg-blue-600 transition duration-300"
        >
          Send
        </button>
      </form>
      <div className="w-full">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="bg-white p-3 my-2 rounded-lg shadow-md border border-gray-200"
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
