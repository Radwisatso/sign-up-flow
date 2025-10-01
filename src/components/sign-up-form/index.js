import styles from '../../styles/SignUpForm.module.css';
import InputForm from './input-form';
import SubmitButton from './submit-button';

export default function SignUpForm({ inputForm, setInputForm }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sign Up</h1>
            <form>
                <InputForm
                    value={inputForm.username}
                    onChange={e => setInputForm((prev) => {
                        return { ...prev, username: e.target.value }
                    })}
                    label='Username'
                    placeholder='Enter your username here' />
                <InputForm
                    value={inputForm.password}
                    onChange={e => setInputForm((prev) => {
                        return { ...prev, password: e.target.value }
                    })}
                    label='Password'
                    type='password' placeholder='Enter your password here' />
                <InputForm
                    value={inputForm.confirmPassword}
                    onChange={e => setInputForm((prev) => {
                        return { ...prev, confirmPassword: e.target.value }
                    })}
                    label='Confirm Password'
                    type='password'
                    placeholder='Confirm your password here' />
                <SubmitButton />
            </form>
        </div>
    );
}