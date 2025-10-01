import styles from '../../styles/SignUpForm.module.css';

export default function SubmitButton() {
    return (
        <button className={styles['submit-button']} type="submit">Sign Up</button>
    );
}