import React, { useEffect } from 'react'
import { usePopup } from '../contexts/popup'

export default function Popup() {
    const { value, clearPopup } = usePopup()

    useEffect(() => {
        const timer = setTimeout(() => {
            clearPopup()
        }, 1500)
        return () => clearTimeout(timer)
    }, [value])

    return value ? <div>{value}</div> : null
}

