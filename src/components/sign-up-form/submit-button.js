import styles from '../../styles/SignUpForm.module.css';
import Image from 'next/image';

export default function SubmitButton({ isLoading }) {
    return (
        <button className={styles['submit-button']} disabled={isLoading} type="submit">
            {isLoading ?
                <Image src="/fade-stagger-circles.svg" width="24" height="24" alt='loading' />
                :
                "Sign Up"
            }
        </button>
    );
}