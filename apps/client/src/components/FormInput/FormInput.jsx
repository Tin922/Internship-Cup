import styles from "./FormInput.module.css";

const FormInput = (props) => {
  const { type, placeholder, value, onChange } = props;

  return (
    <>
      <input
        className={styles.formInput}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default FormInput;
