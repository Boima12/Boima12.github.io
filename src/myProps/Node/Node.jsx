import styles from './Node.module.css';
import PropTypes from 'prop-types';



function Co_Node(props) {

    const iconstyle = {
        backgroundImage: `url(${props.nodeIconPath})`
    }


    const titlestyle = {
        color: `${props.nodeDescriptionColor}`
    }


    return(
        <a href={props.nodeLink}>
            <div className={styles.main}>
                
                <div className={styles.nodeIcon} style={iconstyle}></div>

                <p>{props.nodeTitle}</p>

                <div className={styles.nodeDescription}>
                    <p style={titlestyle}>{props.nodeDescription}</p>
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
}



Co_Node.defaultProps = {
    nodeLink: "#",
    nodeDescriptionColor: "#000",
}


export default Co_Node