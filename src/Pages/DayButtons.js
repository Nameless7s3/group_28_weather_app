
import styles from './WeatherDays.module.css';
import { useNavigate } from 'react-router-dom';

function WeatherDays() {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('../');
    };


    return (
      <>
      
      <body className={styles.body}>
        <div className={styles.container}>
        
            <div className={styles.prompt}><h1>Select which days you would like to view forecasts for:</h1></div>

            {/* This is a div that leaves space in between the header and the button grid */}
            <div id={styles.empty}></div>

            <form>

                {/* This section contains the buttons for the days of the week to be selected */}
                <section id={styles.buttons}><div id={styles.buttons2}>
                <div><button >Monday</button></div>
                <div><button>Tuesday</button></div>
                <div><button>Wednesday</button></div>
                <div><button>Thursday</button></div>
                <div><button>Friday</button></div>
                <div></div>
                <div><button>Saturday</button></div>
                <div></div>
                <div><button>Sunday</button></div>
                </div></section>

                {/* This is the submit button where the user submits their information for the next page */}
                <button type="button" className={styles.submit} onClick={handleSubmit}>Submit</button>

            </form>

        </div>
          
      </body>
      </>
    );

}

export default WeatherDays;
