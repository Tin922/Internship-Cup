import styles from "./Survey.module.css";
import mascot from "../../../public/mascots/blue.svg";
import { useState } from "react";

const Survery = () => {
  const formFields = [
    {
      name: "question1",
      label: "Osjećate li preopterećenost i stres?",
      photo: "/survey/1stQuestion.svg",
    },
    {
      name: "question2",
      label: "Tražite pomoć za vaše mentalno zdravlje?",
      photo: "/survey/2ndQuestion.svg",
    },
    {
      name: "question3",
      label: "Osjećate se nervozno ili anksiozno?",
      photo: "/survey/3rdQuestion.svg",
    },
    {
      name: "question4",
      label: "Imate nagle promjene rasplooženja?",
      photo: "/survey/4thQuestion.svg",
    },
    {
      name: "question5",
      label: "Poduzimam korake kako bih se osjećao bolje.",
      photo: "/survey/5thQuestion.svg",
    },
    {
      name: "question6",
      label: "Mentalno stanje mi otežava život.",
      photo: "/survey/6thQuestion.svg",
    },
    {
      name: "question7",
      label: "Osjećate se usamljeno?",
      photo: "/survey/7thQuestion.svg",
    },
  ];
  const [step, setStep] = useState(-1);
  const [surveyData, setSurveyData] = useState({
    question1: "",
    question2: "",
  });

  const handleChoice = (choice) => {
    console.log(step);
    if (step === -1) {
      if (choice === "No") {
        handleSubmit();
      } else {
        setStep((prevStep) => prevStep + 1);
      }
    } else {
      setSurveyData((prevState) => ({
        ...prevState,
        [formFields[step].name]: choice,
      }));
      if (step < formFields.length - 1) {
        setStep((prevStep) => prevStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = async () => {
    console.log(surveyData);
  };

  return (
    <div className={styles.mainDiv}>
      {step > -1 ? (
        <div className={styles.questionPhoto}>
          <img src={formFields[step].photo} alt="" />
        </div>
      ) : (
        ""
      )}
      <p className={styles.questionText}>
        {step === -1 ? "Sada slijedi kratki kviz..." : formFields[step].label}
      </p>
      <div className={styles.buttonsYesNo}>
        <button
          className={styles.styledButton}
          onClick={() => handleChoice("Yes")}
        >
          DA
        </button>
        <button
          className={styles.styledButton}
          onClick={() => handleChoice("No")}
        >
          NE
        </button>
      </div>
      {step >= 0 && (
        <button className={styles.skipButton} onClick={handleSubmit}>
          Preskoči kviz
        </button>
      )}
    </div>
  );
};
export default Survery;
