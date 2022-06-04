import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

function EmailForm() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pending, setPending] = useState(false);
  const [cats, setCats] = useState([]);
  const [catsAnswer, setCatsAnswer] = useState(0);
  const cat = "🐈";

  useEffect(() => {
    if (cats.length === 0) {
      //Set a random number of cats
      const randNum = Math.floor(Math.random() * 9) + 1;
      const arr = [];
      for (let i = 0; i < randNum; i++) {
        arr.push(cat);
      }
      setCats(arr);
    }
  }, [cats]);

  console.log(process.env.EMAIL_KEY);

  //Handle the submit
  function onSubmit(e) {
    e.preventDefault();

    //Check if filled
    if (!name || !email || !message) {
      return toast(
        `Please fill in ${!name ? "Your name" : ""} ${
          !email ? "Your email" : ""
        } ${!message ? "a message" : ""}`
      );
    }

    //Check if answer is correct
    if (catsAnswer !== cats.length.toString()) {
      console.log(catsAnswer, cats.length);
      setCats([]);
      return toast("Incorrect amount of cats");
    }

    //Set the email params
    const templateParams = {
      name,
      email,
      message,
    };
    //Show Spinner
    setPending(true);
    //Send email
    emailjs
      .send(
        "service_6q7cfbs",
        "template_apd1nkp",
        templateParams,
        process.env.EMAIL_KEY
      )
      .then(
        (result) => {
          toast(result.text);
          if (result.status === 200) {
            setName(
              "Thanks for the message, I will get back to you as soon as I can 😍"
            );
            setEmail(
              "Thanks for the message, I will get back to you as soon as I can 😍"
            );
            setMessage(
              "Thanks for the message, I will get back to you as soon as I can 😍"
            );
            setPending(false);
            setCats([]);
          }
        },
        (error) => {
          toast(error.text);
          setPending(false);
          setCats([]);
        }
      );
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <h1>Contact</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            disabled={pending}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={pending}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={pending}
          />
        </div>
        <div className="form-group">{cats}</div>
        <div className="form-group">
          <label htmlFor="cats">How many cats?</label>
          <input
            type="number"
            name="cats"
            id="cats"
            onChange={(e) => {
              setCatsAnswer(e.target.value);
            }}
            value={catsAnswer}
          />
        </div>
        <div className="form-group">
          <button disabled={pending} className="btn" onClick={onSubmit}>
            <FaEnvelope />
            Send
          </button>
        </div>
        {pending ? <Spinner /> : null}
      </form>
    </section>
  );
}

export default EmailForm;
