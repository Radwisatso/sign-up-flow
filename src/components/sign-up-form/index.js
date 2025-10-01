import styles from '../../styles/SignUpForm.module.css';
import InputForm from './input-form';
import SubmitButton from './submit-button';

export default function SignUpForm() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sign Up</h1>
            <form>
                <InputForm label='Username' placeholder='Enter your username here' />
                <InputForm label='Password' type='password' placeholder='Enter your password here' />
                <InputForm label='Confirm Password' type='password' placeholder='Confirm your password here' />
                <SubmitButton />
            </form>
        </div>
    );
}