import styles from '../../../../styles/sectionStyle/sectionStyle.module.css';
import { useState } from 'react';

import Co_Node from '../../../../myProps/Node/Node';



function Co_Basic() {

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
                >Basic</p>
            </div>

            <div className={styles.section_top_collapse}>
                <select>
                    <option onClick={() => togglePanel(1)}>Basic</option>
                </select>
            </div>            

            {/* nodes goes here */}
            <div className={`${styles.section_body} ${activePanel === 1 ? styles.section_body_active : ''}`}>
                <Co_Node nodeTitle="Simple Calculator" />
                <Co_Node nodeTitle="Music Player" />
                <Co_Node nodeTitle="Reflex Game" />
                <Co_Node nodeTitle="Flashlight" />
                <Co_Node nodeTitle="QR Code Reader" />
            </div>

        </div>
    );

}



export default Co_Basic