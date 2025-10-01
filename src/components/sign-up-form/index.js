import styles from '../../styles/SignUpForm.module.css';
import Checkbox from './checkbox';
import InputForm from './input-form';
import SubmitButton from './submit-button';

export default function SignUpForm({ inputForm, setInputForm, onSubmit, isLoading, errors }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sign Up</h1>
            <form onSubmit={onSubmit}>
                <InputForm
                    value={inputForm.fullName}
                    onChange={e => setInputForm((prev) => {
                        return { ...prev, fullName: e.target.value }
                    })}
                    label='Full Name'
                    type='text'
                    placeholder='Enter your full name here'
                    errorMessage={errors.fullName}
                />
                <InputForm
                    value={inputForm.email}
                    onChange={e => setInputForm((prev) => {
                        return { ...prev, email: e.target.value }
                    })}
                    label='Email'
                    type='email'
                    placeholder='Enter your email here'
                    errorMessage={errors.email}
                />
                <InputForm
                    value={inputForm.password}
                    onChange={e => setInputForm((prev) => {
                        return { ...prev, password: e.target.value }
                    })}
                    label='Password'
                    type='password' placeholder='Enter your password here'
                    errorMessage={errors.password}
                />
                <InputForm
                    value={inputForm.confirmPassword}
                    onChange={e => setInputForm((prev) => {
                        return { ...prev, confirmPassword: e.target.value }
                    })}
                    label='Confirm Password'
                    type='password'
                    placeholder='Confirm your password here'
                    errorMessage={errors.confirmPassword}
                />
                <Checkbox
                    checked={inputForm.isChecked}
                    onChange={checked => setInputForm((prev) => {
                        return { ...prev, isChecked: checked }
                    }
                    )}
                    errorMessage={errors.terms}
                    required={true}
                />
                <SubmitButton isLoading={isLoading} />
            </form>
        </div>
    );
}