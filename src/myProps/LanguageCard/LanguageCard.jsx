import PropTypes from 'prop-types';
import styles from './LanguageCard.module.css';

function Co_LanguageCard(props) {

    const imgstyle = {
        backgroundImage: `url(${props.imagePath})`
    }



    return (
      <div className={styles.main_languageCard}>

          <div className={styles.bgImage} style={imgstyle}></div>
          <p>{props.title}</p>

      </div>
    );
}


// propTypes
Co_LanguageCard.propTypes = {
    title: PropTypes.string,
    imagePath: PropTypes.string,
}


export default Co_LanguageCard
