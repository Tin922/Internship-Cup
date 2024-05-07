import styles from "./FormInput.module.css";

const FormInput = (props) => {
  const { type, placeholder } = props;

  return (
    <>
      <input
        className={styles.formInput}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default FormInput;
