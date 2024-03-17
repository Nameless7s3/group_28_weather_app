import TempAtTime from "./TempAtTime";
import styles from "./ScrollBar.module.css"

function TempTimeScroll() {
    return(
        <div className={styles.TempTimeScrollBar}>
            <TempAtTime/>
            <TempAtTime/>
            <TempAtTime/>
            <TempAtTime/>
        </div>
    )
}

export default TempTimeScroll