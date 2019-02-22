import React from 'react';
import * as styles from './index.css';
import brandImage1 from '../../images/brand1.png';
import brandImage2 from '../../images/brand2.png';
import brandImage3 from '../../images/brand3.png';
import brandImage4 from '../../images/brand4.png';
import brandImage5 from '../../images/brand5.png';
import brandImage6 from '../../images/brand6.png';

const Brand = () => {
    return (
        <React.Fragment>
            <div>
                <div className={styles.heaidng}>
                    <h2>Our Brand</h2>
                </div>
                <div className={styles.itemsCenter}>

                    <div className={styles.mainRow}>
                        <div className={styles.col2}>
                            <img src={brandImage1} />
                        </div>
                        <div className={styles.col2}>
                            <img src={brandImage2} />
                        </div>
                        <div className={styles.col2}>
                            <img src={brandImage3} />
                        </div>
                        <div className={styles.col2}>
                            <img src={brandImage4} />
                        </div>
                        <div className={styles.col2}>
                            <img src={brandImage5} />
                        </div>
                        <div className={styles.col2}>
                            <img src={brandImage6} />
                        </div>
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}

export default Brand;