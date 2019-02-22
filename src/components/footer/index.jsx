import React from 'react';
import * as styles from './index.css';
import FooterText from './ulLi';
import Paymentimage from '../../images/footer-bottom.png';

const Footer = () => {
    return (
        <React.Fragment>
            <div className={styles.MainRow}>
                <div className={styles.col3}>
                    <FooterText />
                </div>
                <div className={styles.col3}><FooterText /></div>
                <div className={styles.col3}><FooterText /></div>
                <div className={styles.col3}><FooterText /></div>
                <div className={styles.paymentSection}>
                    <img src={Paymentimage} className={styles.footerimage} />
                    <p>© 2015  Shopia  Fashion Store Shopify. </p>
                    <p>All Rights Reserved. Ecommerce Software by Shopify.</p>
                    <p>Designed by  MoccaLabs.com</p>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Footer;