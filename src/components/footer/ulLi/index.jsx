import React from 'react';
import * as styles from './index.css';
// import FooterSmall from './headingUlli';

const FooterText = () => {
    return (
        <React.Fragment>
            <h2 className={styles.headingFooter}>SHOPS</h2>
            <ul className={styles.listtext}>
                <li>New In</li>
                <li>Women</li>
                <li>Men</li>
                <li>Shoes</li>
                <li>Bags & Accessories</li>
                <li>Top Brands</li>
                <li>Sale & Special Offers</li>
                <li>Lookbook</li>
            </ul>
        </React.Fragment>
    )
}

export default FooterText;