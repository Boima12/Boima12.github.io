import styles from '../../../../styles/sectionStyle/sectionStyle.module.css';
import { useState } from 'react';

import Co_Node from '../../../../myProps/Node/Node';

import p1 from '../../../../assets/Images/Java/p1.png'



function Co_Alpha() {

    const [activePanel, setActivePanel] = useState(1);

    const togglePanel = (panelNumber) => {
        setActivePanel(panelNumber);
    };

    return(
        <div className={styles.main}>
            
            <div className={styles.section_top}>
                <p
                    className={activePanel === 1 ? styles.section_active : ''}
                    onClick={() => togglePanel(1)}
                >3 Projects</p>
            </div>

            <div className={styles.section_top_collapse}>
                <select>
                    <option onClick={() => togglePanel(1)}>3 Projects</option>
                </select>
            </div>            

            <div className={`${styles.section_body} ${activePanel === 1 ? styles.section_body_active : ''}`}>
                <Co_Node nodeTitle="2D Farming"
                    nodeDescription="A farming game, made within 1 day, inspired by untitled farming game by _create on Roblox"
                    nodeDescriptionColor="#4b7299"
                    nodeIconPath={p1}
                    nodeLink="https://github.com/Boima12/2D_Farming.git"
                />
                
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
            </div>

        </div>
    );

}



export default Co_Alpha