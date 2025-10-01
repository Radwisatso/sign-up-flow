import { useEffect } from 'react'
import { usePopup } from '../contexts/popup'
import styles from '../styles/Popup.module.css'

export default function Popup() {
    const { value, clearPopup } = usePopup()

    useEffect(() => {
        const timer = setTimeout(() => {
            clearPopup()
        }, 3000)
        return () => clearTimeout(timer)
    }, [value])

    return value ? <div className={styles.popup}>{value}</div> : null
}

