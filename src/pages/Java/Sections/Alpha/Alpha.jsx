import styles from '../../../../styles/sectionStyle/sectionStyle.module.css';

import Co_Node from '../../../../myProps/Node/Node';

import p1 from '../../../../assets/Images/Java/p1.png'



function Co_Alpha() {

    return(
        <div className={styles.main}>
            
            <div className={styles.section_Top}>
                <p>10 Projects</p>
            </div>

            {/* nodes goes here */}
            <div className={styles.section_Body}>
                <Co_Node nodeTitle="2D Farming"
                    nodeDescription="A farming game, made within 1 day, inspired by untitled farming game by _create on Roblox"
                    nodeIconPath={p1}
                    nodeLink="https://github.com/Boima12/2D_Farming.git"
                />
                
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />

            </div>


        </div>
    );

}



export default Co_Alpha