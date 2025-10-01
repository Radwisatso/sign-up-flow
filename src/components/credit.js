import styles from "@/styles/Credit.module.css"

export default function Credit() {
    return (
        <div className={styles.credit}>
            <h5>Credits:</h5>
            <ul className={styles["credit-list"]}>
                <li>
                    <a href="https://www.flaticon.com/free-icons/eye" title="eye icons">Eye icons created by Kiranshastry - Flaticon</a>
                </li>
                <li>
                    <a href="https://www.flaticon.com/free-icons/password" title="password icons">Password icons created by th studio - Flaticon</a>
                </li>
            </ul>
        </div>
    )
}       