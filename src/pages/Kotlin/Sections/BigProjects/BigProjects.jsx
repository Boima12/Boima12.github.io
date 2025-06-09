import styles from '../../../../styles/sectionStyle/sectionStyle.module.css';
import { useState } from 'react';

import Co_Node from '../../../../myProps/Node/Node';

import A2DfarmingImg from '~/src/assets/Images/Kotlin/2DFarming.png';
import boChatImg from '~/src/assets/Images/Kotlin/boChat.png';


function Co_BigProjects() {

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
                >Big Projects</p>
            </div>

            <div className={styles.section_top_collapse}>
                <select>
                    <option onClick={() => togglePanel(1)}>Big Projects</option>
                </select>
            </div>            

            {/* nodes goes here */}
            <div className={`${styles.section_body} ${activePanel === 1 ? styles.section_body_active : ''}`}>
                <Co_Node nodeTitle="2D Farming" 
                    nodeDescription="2DFarming Kotlin Edition - A chill farming game with 2 endings"
                    nodeIconPath={A2DfarmingImg}
                    nodeLink="https://github.com/Boima12/AndroidStudio_2DFarming"
                />  

                <Co_Node nodeTitle="ChatAI DACS3" 
                    nodeDescription="A ChatAI app, use free tier Gemini 1.5 model"
                    nodeIconPath={boChatImg}
                    nodeLink="https://github.com/Boima12/DACS3_BoChat"
                />  
            </div>

        </div>
    );

}



export default Co_BigProjects