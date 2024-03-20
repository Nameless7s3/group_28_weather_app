import styles from './Location.module.css'

function Location(props) {
    return (
        <>
            <div>
                <h1 className={styles.uni}>{props.uniName}</h1><br/>
                <h2 className={styles.city}>{props.cityName}</h2>
            </div>
        </>
    )
}

export default Location;