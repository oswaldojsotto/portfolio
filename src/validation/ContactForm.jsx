import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  languageName,
  languageNameInvalid,
  languageEmailInvalid,
  languageMessage,
  languageMessageInvalid,
  languageSendButton,
  languageFormTitle,
} from "../hooks/FormTraductions";
import {
  nameValidation,
  emailValidation,
  messageValidation,
} from "./inputValidations";

const ContactForm = () => {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [name, setName] = useState("");
  const [nameClicked, setNameClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [emailClicked, setEmailClicked] = useState(false);
  const [message, setMessage] = useState("");
  const [messageClicked, setMessageClicked] = useState(false);
  const [startAnimation, setStartAnimation] = useState("button error");

  const formNameValidation =
    nameClicked && nameValidation.safeParse(name).error; // chequea si esta clickeado y tiene errores
  const formEmailValidation =
    emailClicked && emailValidation.safeParse(email).error; // chequea si esta clickeado y tiene errores
  const formMessageValidation =
    messageClicked && messageValidation.safeParse(message).error; // chequea si esta clickeado y tiene errores

  const submitForm = e => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    const nameSuccess = nameValidation.safeParse(formData.name).success;
    const emailSuccess = emailValidation.safeParse(formData.email).success;
    const messageSuccess = messageValidation.safeParse(
      formData.message
    ).success;

    //acciones a ejecutar cuando todo sea correcto-----------------------------

    if (emailSuccess && nameSuccess && messageSuccess) {
      emailjs
        .sendForm(
          "service_q4j1941",
          "template_3yh8rzn",
          formRef.current,
          "aouyRvJaDUT94UrQh"
        )
        .then(
          result => {
            console.log(result.text);
            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
          },
          error => {
            console.log(error.text);
          }
        );

      setNameClicked(false);
      setEmailClicked(false);
      setMessageClicked(false);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      //acciones a ejecutar cuando todo sea INcorrecto-------------------------

      console.log("llena los campos correctamente");
      setNameClicked(true);
      setEmailClicked(true);
      setMessageClicked(true);

      if (!nameSuccess) {
        nameRef.current.focus();
        nameRef.current.select();
      } else if (!emailSuccess) {
        emailRef.current.focus();
        emailRef.current.select();
      } else if (!messageSuccess) {
        messageRef.current.focus();
        messageRef.current.select();
      }
    }
  };

  const nameChangeEvent = e => {
    setName(e.target.value);
    setStartAnimation("button error");
  };

  const emailChangeEvent = e => {
    setEmail(e.target.value);
    setStartAnimation("button error");
  };

  const messageChangeEvent = e => {
    setMessage(e.target.value);
    setStartAnimation("button error");
  };

  return (
    <>
      <p className="form_title">{languageFormTitle()}</p>
      <form ref={formRef} onSubmit={submitForm}>
        <div className="form__group field">
          <input
            type="text"
            placeholder="Name"
            ref={nameRef}
            autoComplete="off"
            value={name}
            maxLength="20"
            className={formNameValidation ? "form__field-error" : "form__field"}
            name="user_name"
            onChange={e => nameChangeEvent(e)}
            onClick={() => setNameClicked(true)}
          />
          <label
            className={
              formNameValidation ? "form__label" : "form__label_invalid"
            }
            htmlFor="user_name">
            {languageName()}
          </label>
          {formNameValidation ? (
            <p className="name-error">{languageNameInvalid()}</p>
          ) : (
            <p className="name-error-valid">{languageNameInvalid()}</p>
          )}
        </div>

        <div className="form__group field">
          <input
            type="text"
            placeholder="Email"
            ref={emailRef}
            autoComplete="off"
            value={email}
            maxLength="30"
            className={
              formEmailValidation ? "form__field-error" : "form__field"
            }
            name="user_email"
            onChange={e => emailChangeEvent(e)}
            onClick={() => setEmailClicked(true)}
          />
          <label
            className={
              formEmailValidation ? "form__label" : "form__label_invalid"
            }
            htmlFor="user_email">
            E-mail *
          </label>
          {formEmailValidation ? (
            <p className="name-error">{languageEmailInvalid()}</p>
          ) : (
            <p className="name-error-valid">{languageEmailInvalid()}</p>
          )}
        </div>
        <div className="form__group field">
          <textarea
            type="text"
            style={{
              resize: "vertical",
              maxHeight: "10rem",
              minHeight: "2rem",
            }}
            placeholder="Subject"
            autoComplete="off"
            value={message}
            ref={messageRef}
            maxLength="500  "
            className={
              formMessageValidation ? "form__field-error" : "form__field"
            }
            name="message"
            onChange={e => messageChangeEvent(e)}
            onClick={() => setMessageClicked(true)}
          />
          <label
            className={
              formMessageValidation ? "form__label" : "form__label_invalid"
            }
            htmlFor="message">
            {languageMessage()}
          </label>
          {formMessageValidation ? (
            <p className="name-error">{languageMessageInvalid()}</p>
          ) : (
            <p className="name-error-valid">{languageMessageInvalid()}</p>
          )}
        </div>
        {nameValidation.safeParse(name).success &&
        emailValidation.safeParse(email).success &&
        messageValidation.safeParse(message).success ? (
          <button
            className="button success"
            onClick={() => setStartAnimation("button success animate")}>
            {languageSendButton()}
          </button>
        ) : (
          <button
            className={startAnimation}
            onClick={() => setStartAnimation("button error animate")}>
            {languageSendButton()}
          </button>
        )}
      </form>
    </>
  );
};

export default ContactForm;

// const sendEmail = e => {
//   e.preventDefault();

//   emailjs
//     .sendForm(
//       "service_q4j1941",
//       "template_3yh8rzn",
//       form.current,
//       "aouyRvJaDUT94UrQh"
//     )
//     .then(
//       result => {
//         console.log(result.text);
//         nameRef.current.value = "";
//         emailRef.current.value = "";
//         messageRef.current.value = "";
//       },
//       error => {
//         console.log(error.text);
//       }
//     );
// };
