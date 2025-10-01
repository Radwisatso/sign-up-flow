import { useState } from 'react';
import styles from '../../styles/SignUpForm.module.css';
import Image from 'next/image';

export default function InputForm({
    label = "label here",
    type = "text",
    placeholder = "insert placeholder here",
    value = "",
    onChange
}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Condition to check if it's a password field
    const isPasswordField = type === "password";
    // Determine the actual input type to use
    const inputType = isPasswordField ? (isPasswordVisible ? "text" : "password") : type;

    return (
        <div className={styles['input-container']}>
            <label className={styles.label}>{label}</label>
            <div style={{ position: "relative" }}>
                <input
                    className={styles.input}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {isPasswordField &&
                    <button onClick={() => setIsPasswordVisible(!isPasswordVisible)} className={styles['password-visibility-toggle']} type='button'>
                        {isPasswordVisible ?
                            <Image src="/hide.png" width="20" height="20" alt='hide password' />
                            :
                            <Image src="/view.png" width="20" height="20" alt='view password' />
                        }
                    </button>}
            </div>


        </div >
    )
}