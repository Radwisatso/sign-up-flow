import { useState } from 'react';
import styles from '../../styles/SignUpForm.module.css';

export default function Checkbox({
    label = "I agree to the terms and conditions",
    checked = false,
    onChange,
    errorMessage = ""
}) {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (e) => {
        const newChecked = e.target.checked;
        setIsChecked(newChecked);
        if (onChange) {
            onChange(newChecked);
        }
    };

    return (
        <div className={styles['checkbox-container']}>
            <label className={styles['checkbox-label']}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChange}
                    className={styles['checkbox-input']}
                />
                <span className={styles['checkbox-custom']}></span>
                <span className={styles['checkbox-text']}>{label}</span>
            </label>
            {errorMessage && <p className={styles['input-error-message']}>{errorMessage}</p>}
        </div>
    );
}