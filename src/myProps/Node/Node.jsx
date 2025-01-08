import styles from './Node.module.css';
import PropTypes from 'prop-types';

function Co_Node({
    nodeLink = "#", 
    nodeIconPath, 
    nodeTitle, 
    nodeDescription, 
    nodeDescriptionColor = "#000"
}) {
    const iconstyle = {
        backgroundImage: `url(${nodeIconPath})`,
    };

    const titlestyle = {
        color: `${nodeDescriptionColor}`,
    };

    return (
        <a href={nodeLink}>
            <div className={styles.main}>
                <div className={styles.nodeIcon} style={iconstyle}></div>
                <p>{nodeTitle}</p>
                <div className={styles.nodeDescription}>
                    <p style={titlestyle}>{nodeDescription}</p>
                </div>
            </div>
        </a>
    );
}

Co_Node.propTypes = {
    nodeLink: PropTypes.string,
    nodeIconPath: PropTypes.string,
    nodeTitle: PropTypes.string,
    nodeDescription: PropTypes.string,
    nodeDescriptionColor: PropTypes.string,
};

export default Co_Node;
