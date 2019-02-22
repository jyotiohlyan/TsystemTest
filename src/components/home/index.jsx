import React from 'react';
import * as styles from './index.css';
import sampleImage from '../../images/sample.png';
import Header from '../header';
import flightImage from '../../images/flight.png';
import Gallery from '../gallery';
import Gallery2 from '../gallery2';
import Customer from './customerSays';
import Footer from '../footer';


const Home = () => {
    return (
        <React.Fragment>
            <div className={styles.container}>

                <Header />
                <div className={styles.boxes}>
                    <div className={styles.innerbox}>
                        <div className={styles.innerfirsttext}>
                            {/* <img src={flightImage} className={styles.iconimage} /> */}
                            <h2>FREE SHIPPING</h2>
                            <p>In Order Min $200</p>
                        </div>
                    </div>
                    <div className={styles.innerbox}>
                        <div className={styles.innersecondtest}>
                            {/* <img src={flightImage} className={styles.iconimage} /> */}
                            <h2>FREE SHIPPING</h2>
                            <p>In Order Min $200</p>
                        </div>
                    </div>
                    <div className={styles.innerbox}>
                        <div className={styles.innerthirdtext}>
                            {/* <img src={flightImage} className={styles.iconimage} /> */}
                            <h2>FREE SHIPPING</h2>
                            <p>In Order Min $200</p>
                        </div>
                    </div>
                </div>
                <Gallery />
                <Gallery2 />
                <Customer />
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Home;