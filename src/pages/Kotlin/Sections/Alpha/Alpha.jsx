import styles from '../../../../styles/sectionStyle/sectionStyle.module.css';

import Co_Node from '../../../../myProps/Node/Node';



function Co_Alpha() {

    return(
        <div className={styles.main}>
            
            <div className={styles.section_Top}>
                <p>10 Projects</p>
            </div>

            {/* nodes goes here */}
            <div className={styles.section_Body}>
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />


            </div>


        </div>
    );

}



export default Co_Alpha