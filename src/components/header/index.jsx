import React from 'react';
import * as styles from './index.css';
import sampleImage from '../../images/sample.png';
import social from '../../images/social.png';



export default class Header extends React.Component {


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.menubar}>
                    <div className={styles.leftmenuitems}>
                        <ul >
                            <li>Home</li>
                            <li>Gallery</li>
                            <li>Categories</li>
                            <li>Pages</li>
                        </ul>
                    </div>

                    <div className={styles.rightmenuitems}>
                        <ul >
                            <li><img src={social} /></li>
                            <li><img src={social} /></li>
                            <li><img src={social} /></li>
                            <li><img src={social} /></li>
                        </ul>
                    </div>

                </div>

                <img src={sampleImage} className={styles.headerimage} />

            </div>
        );
    }
}

