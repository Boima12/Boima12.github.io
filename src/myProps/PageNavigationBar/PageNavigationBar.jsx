import styles from './PageNavigationBar.module.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Co_PageNavigationBar(props) {

    const navigate = useNavigate();

    return(
        <div className={styles.main}>

            <div className={styles.normal}>
                <FontAwesomeIcon icon="fa-solid fa-angles-left" className={styles.ic} onClick={() => navigate('/')} />
                <p className={styles.Topbar_Title}>{props.title}</p>
            </div>

        </div>
    );

}



Co_PageNavigationBar.propTypes = {
    title: PropTypes.string,
}



export default Co_PageNavigationBar