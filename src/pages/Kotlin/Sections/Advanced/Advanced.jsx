import styles from '../../../../styles/sectionStyle/sectionStyle.module.css';
import { useState } from 'react';

import Co_Node from '../../../../myProps/Node/Node';
import textCryptorImg from '~/src/assets/Images/Kotlin/textCryptor.png';



function Co_Advanced() {

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
                >Advanced</p>
            </div>

            <div className={styles.section_top_collapse}>
                <select>
                    <option onClick={() => togglePanel(1)}>Advanced</option>
                </select>
            </div>            

            {/* nodes goes here */}
            <div className={`${styles.section_body} ${activePanel === 1 ? styles.section_body_active : ''}`}>
                <Co_Node nodeTitle="Text Cryptor" 
                    nodeDescription="This app is a Text En/Decryptor."
                    nodeIconPath={textCryptorImg}
                    nodeLink="https://github.com/Boima12/AndroidStudio_TextCryptor"
                />

                <Co_Node nodeTitle="Google Lens" />
                <Co_Node nodeTitle="Chatbot" />
            </div>

        </div>
    );

}



export default Co_Advanced