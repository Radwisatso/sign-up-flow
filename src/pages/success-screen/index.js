import { useRouter } from 'next/router';
import { Poppins } from "next/font/google";
import styles from '../../styles/SuccessScreen.module.css';

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function SuccessScreen() {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <div className={`${styles.container} ${poppins.variable}`}>
            <div className={styles.card}>
                <div className={styles.icon}>
                    ✓
                </div>

                <h1 className={styles.title}>Success!</h1>

                <p className={styles.message}>
                    Your account has been successfully created. Welcome aboard!
                </p>

                <button
                    className={styles.button}
                    onClick={handleGoHome}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}