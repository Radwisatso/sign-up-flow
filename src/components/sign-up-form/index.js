import styles from '../../styles/SignUpForm.module.css';

export default function SignUpForm() {
    return (
        <div className={styles.container}>
            <h1>Sign Up Flow</h1>
            <form>
                <input type="email" placeholder="Email" required />
                <br />
                <input type="password" placeholder="Password" required />
                <br />
                <input type="password" placeholder="Confirm Password" required />
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}