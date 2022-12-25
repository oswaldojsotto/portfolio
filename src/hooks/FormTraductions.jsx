import { useSelector } from "react-redux";

export const languageName = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return "Your name *";
    case "spanish":
      return "Tu Nombre *";
    case "italian":
      return "Il tuo Nome *";
  }
};

export const languageNameInvalid = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return "please insert a valid name";
    case "spanish":
      return "por favor inserta un nombre válido";
    case "italian":
      return "si prega de inserire un nome valido";
  }
};

export const languageEmailInvalid = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return "please insert a valid email";
    case "spanish":
      return "por favor inserta un email válido";
    case "italian":
      return "si prega di inserire una email valida";
  }
};

export const languageMessageInvalid = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return "message cannot be empty";
    case "spanish":
      return "el mensaje no puede estar vacío";
    case "italian":
      return "il messaggio non può essere vuoto";
  }
};

export const languageMessage = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return "Message *";
    case "spanish":
      return "Mensaje *";
    case "italian":
      return "Messaggio *";
  }
};

export const languageSendButton = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return "Send";
    case "spanish":
      return "Enviar";
    case "italian":
      return "Inviare";
  }
};

export const leftSideText = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return " I am currently looking for new opportunities, my inbox is always open for anything you need. Do not hersitate to contact me though this E-mail, regardless of the subject:";

    case "spanish":
      return "Estoy actualmente buscando nuevas oportunidades, my inbox esta siempre abierto para cualquier cosa que necesites. No dudes en contactarme mediante éste E-mail, sin importar el asunto:";
    case "italian":
      return "Attualmente sono alla ricerca di nuove opportunità, il mio E-mail è sempre aperto per qualche cosa che hai bisogno. Non dubbitare a contattarmi tra questa E-mail, indipendentemente dall'oggetto";
  }
};
export const leftSideTextTwo = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return ", or using the following Form:";

    case "spanish":
      return ", o usando el siguiente Formulario:";
    case "italian":
      return ", anche utilizzando questo modulo:";
  }
};

export const languageFormTitle = () => {
  const language = useSelector(state => state.language.value);
  switch (language) {
    case "english":
      return "If you have other request or question, please use the following form.";
    case "spanish":
      return "Si tienes alguna otra solicitud o pregunta, por favor usa el siguiente formulario";
    case "italian":
      return "Se hai qualche otra richiesta o domanda, per favore usare questo modulo";
  }
};
