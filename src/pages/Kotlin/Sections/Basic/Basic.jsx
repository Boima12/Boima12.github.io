import styles from '../../../../styles/sectionStyle/sectionStyle.module.css';
import { useState } from 'react';

import Co_Node from '../../../../myProps/Node/Node';

import simpleCalculatorImg from '~/src/assets/Images/Kotlin/simpleCalculator.png';
import musicPlayerImg from '~/src/assets/Images/Kotlin/musicPlayer.png';
import reflexGameImg from '~/src/assets/Images/Kotlin/reflexGame.png';
import torchLightImg from '~/src/assets/Images/Kotlin/torchLight.png';
import zxingQRImg from '~/src/assets/Images/Kotlin/zxingQR.png';



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
                    nodeLink="https://github.com/Boima12/AndroidStudio_ReflexGame"
                />

                <Co_Node nodeTitle="Torch Light" 
                    nodeDescription="this app is a simple flashlight app that toggle the flashlight on your device."
                    nodeIconPath={torchLightImg}
                    nodeLink="https://github.com/Boima12/AndroidStudio_TorchLight"
                />

                <Co_Node nodeTitle="Zxing QR" 
                    nodeDescription="this app is a QR code reader app, use Zxing QR."
                    nodeIconPath={zxingQRImg}
                    nodeLink="https://github.com/Boima12/AndroidStudio_ZxingQR"
                />
            </div>

        </div>
    );

}



export default Co_Basic