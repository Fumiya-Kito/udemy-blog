import React, { useEffect, useState } from "react";
import Notification from "@/components/ui/notification";
import { Message, NotificationInfo, ResponseError } from "@/types";

async function sendContactData(contactDetails: Message) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredMessage, setEnteredMessage] = useState<string>("");
  const [requestStatus, setRequestStatus] = useState<string|null>("");
  const [requestError, setRequestError] = useState<string|null>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setRequestStatus(null);
      setRequestError(null);
    })
    return () => clearTimeout(timer);
  }, [requestStatus])

  const sendMessageHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (err) {
      if (err instanceof ResponseError) {
        setRequestError(err.message);
      }
      setRequestStatus("error");
    }
  };

  let notification: NotificationInfo | undefined;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "sending message...",
      message: "Your message is on its way!",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Your message sent successfully!",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "Error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section>
      <h1>How Cai I help you?</h1>
      <form onSubmit={sendMessageHandler}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            required
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
