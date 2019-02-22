import React from 'react';
import * as styles from './index.css';
import newgallerFirst from '../../images/newgallery1.png';
import newgallerSecond from '../../images/newgallery2.png';
import newgallerThird from '../../images/newgallery3.png';
import newgallerForth from '../../images/newgallery4.png';
import newgallerFive from '../../images/newgallery5.png';
import newgallerSix from '../../images/newgallery6.png';
import newgallerSeven from '../../images/newgallery7.png';
import newgallerEight from '../../images/newgallery8.png';
import Brand from '../brndSection';


export default class Gallery2 extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.heaidng}>
                    <h2>Summer Collection</h2>
                </div>
                <div className={styles.itemsCenter}>

                    <div className={styles.mainRow}>
                        <div className={styles.col4}>
                            <img src={newgallerFirst} />
                            <p className={styles.addCart}>Add To Cart</p>
                        </div>
                        <div className={styles.col4}>
                            <img src={newgallerSecond} />
                            <p className={styles.addCart}>Add To Cart</p>
                        </div>
                        <div className={styles.col4}>
                            <img src={newgallerThird} />
                            <p className={styles.addCart}>Add To Cart</p>
                        </div>
                        <div className={styles.col4}>
                            <img src={newgallerForth} />
                            <p className={styles.addCart}>Add To Cart</p>
                        </div>
                        <div className={styles.col4}>
                            <img src={newgallerFive} />
                            <p className={styles.addCart}>Add To Cart</p>
                        </div>
                        <div className={styles.col4}>
                            <img src={newgallerSix} />
                            <p className={styles.addCart}>Add To Cart</p>
                        </div>
                        <div className={styles.col4}>
                            <img src={newgallerSeven} />
                            <p className={styles.addCart}>Add To Cart</p>
                        </div>
                        <div className={styles.col4}>
                            <img src={newgallerEight} />
                            <p className={styles.addCart}>Add To Cart</p>
                        </div>
                    </div>

                </div>
                <Brand />
            </div>
        );
    }
}