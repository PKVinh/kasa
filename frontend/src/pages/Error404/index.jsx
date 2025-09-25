import { Link } from 'react-router' 
import styles from "./Error404.module.css"
import error_banner from "../../assets/404.png"

function Error404() {
    return (
        <div className={styles.error_container}>
            <img src={error_banner} alt="error-404"></img>
            <p>Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link to="/kasa" className={styles.link}>Retourner sur la page d&apos;acceuil</Link>
        </div>
    )
}

export default Error404