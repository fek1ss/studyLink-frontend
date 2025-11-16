import styles from './styles.module.css';

const Input = ({ value, onChange, label, type, name }) => {
  return (
    <div className={styles.input_container}>
      <input
        className={styles.inp}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder=" "
        name={name}
      />
      <label className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Input;
