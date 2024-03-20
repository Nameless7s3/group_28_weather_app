import TempAtTime from "./TempAtTime";
import styles from "./ScrollBar.module.css"

// Component to display temperature at a particular time
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