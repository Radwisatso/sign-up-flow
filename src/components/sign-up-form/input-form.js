import styles from '../../styles/SignUpForm.module.css';

export default function InputForm({ label = "label here", type = "text", placeholder = "insert placeholder here" }) {
    return (
        <div className={styles['input-container']}>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} type={type} placeholder={placeholder} required />
        </div >
    )
}