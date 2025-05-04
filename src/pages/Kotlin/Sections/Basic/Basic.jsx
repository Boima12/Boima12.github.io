import styles from '../../../../styles/sectionStyle/sectionStyle.module.css';
import { useState } from 'react';

import Co_Node from '../../../../myProps/Node/Node';

import simpleCalculatorImg from '~/src/assets/Images/Kotlin/simpleCalculator.png';
import musicPlayerImg from '~/src/assets/Images/Kotlin/musicPlayer.png';
import reflexGameImg from '~/src/assets/Images/Kotlin/reflexGame.png';



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
                <Co_Node nodeTitle="Simple Calculator" 
                    nodeDescription="A simple calculator that can help you calculate adding, subtracting, multiplying, and dividing."
                    nodeIconPath={simpleCalculatorImg}
                    nodeLink="https://github.com/Boima12/AndroidStudio_SimpleCalculator"
                />

                <Co_Node nodeTitle="Music Player" 
                    nodeDescription="this app is a simple music player app that contains a very chill lofi song."
                    nodeIconPath={musicPlayerImg}
                    nodeLink="https://github.com/Boima12/AndroidStudio_MusicPlayer"
                />

                <Co_Node nodeTitle="Reflex Game" 
                    nodeDescription="this app is a simple reflex game app that test your reflection."
                    nodeIconPath={reflexGameImg}
                    nodeLink="https://github.com/Boima12/AndroidStudio_ReflexGame.git"
                />

                <Co_Node nodeTitle="Flashlight" />
                <Co_Node nodeTitle="QR Code Reader" />
            </div>

        </div>
    );

}



export default Co_Basic