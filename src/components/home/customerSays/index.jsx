import React from 'react';
import * as styles from './index.css';
import customer1 from '../../../images/customer1.png';
import customer2 from '../../../images/customer2.png';


const Customer = () => {
    return (
        <React.Fragment>

            <div className={styles.heaidng}>
                <h2>Our Brand</h2>
            </div>
            <div className={styles.mainRow}>
                <div className={styles.col6}>
                    <div className={styles.mainRow2}>
                        <div className={styles.col4}>
                            <img src={customer1} />
                        </div>
                        <div className={styles.col8}>
                            <p>Sed ut perspiciatis </p>
                            <p>unde omnis iste natus error sit </p>
                            <p>voluptatem accusantium doloremque </p>
                            <h2>Sandra Dewi</h2>
                            <p><span>FASHION STYLISH</span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.col6}>
                    <div className={styles.mainRow2}>
                        <div className={styles.col7}>
                            <p>Sed ut perspiciatis </p>
                            <p>unde omnis iste natus error sit </p>
                            <p>voluptatem accusantium doloremque </p>
                            <h2>Sandra Dewi</h2>
                            <p><span>FASHION STYLISH</span></p>
                        </div>
                        <div className={styles.col5}>
                            <img src={customer2} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Customer;