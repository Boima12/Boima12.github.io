import styles from './PageNavigationBar.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



function Co_PageNavigationBar(props) {

    return(
        <div className={styles.main}>

            <Link to="/">
                <p className={styles.Topbar_TurnBack}>&lt;&lt;</p>
            </Link>

            <p className={styles.Topbar_Title}>{props.title}</p>

            <div></div>

        </div>
    );

}



Co_PageNavigationBar.propTypes = {
    title: PropTypes.string,
}



export default Co_PageNavigationBar