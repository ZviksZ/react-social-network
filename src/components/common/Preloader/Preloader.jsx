import preloader from '../../../assets/images/rolling.gif';
import React     from 'react'
import s         from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <img className={s.loaderGif} src={preloader} alt=""/>
    )
}

export default Preloader;
