import React from 'react';
import * as styles from './index.css';
import gallerFirst from '../../images/gallery5.png';
import gallerSecond from '../../images/galler2.png';
import gallerThird from '../../images/gallery1.png';
import gallerForth from '../../images/gallery3.png';
import gallerFive from '../../images/gallery4.png';


export default class Gallery extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.heaidng}>
                    <h2>HandPicked</h2>
                </div>
                <div className={styles.itemsCenter}>

                    <div className={styles.mainRow}>
                        <div className={styles.col4}>
                            <img src={gallerFirst} />
                            <img src={gallerForth} />
                        </div>
                        <div className={styles.col4}>
                            <img src={gallerThird} className={styles.middleImage} />
                        </div>
                        <div className={styles.col4}>
                            <img src={gallerSecond} />
                            <img src={gallerFive} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}