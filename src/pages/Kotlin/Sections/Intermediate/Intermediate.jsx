import styles from '../../../../styles/sectionStyle/sectionStyle.module.css';
import { useState } from 'react';

import Co_Node from '../../../../myProps/Node/Node';

import dynamicAudioPlayerImg from '~/src/assets/Images/Kotlin/dynamicAudioPlayer.png';
import dynamicVideoPlayerImg from '~/src/assets/Images/Kotlin/dynamicVideoPlayer.png';
import weatherAppImg from '~/src/assets/Images/Kotlin/weatherApp.png';
import stickyNotesImg from '~/src/assets/Images/Kotlin/stickyNotes.png';


function Co_Intermediate() {

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
                >Intermediate</p>
            </div>

            <div className={styles.section_top_collapse}>
                <select>
                    <option onClick={() => togglePanel(1)}>Intermediate</option>
                </select>
            </div>            

            {/* nodes goes here */}
            <div className={`${styles.section_body} ${activePanel === 1 ? styles.section_body_active : ''}`}>
                <Co_Node nodeTitle="Dynamic Audio Player" 
                    nodeDescription="This app is an audio player with the help of Firebase."
                    nodeIconPath={dynamicAudioPlayerImg}
                    nodeLink="https://github.com/Boima12/AndroidStudio_DynamicAudioPlayer"
                />

                <Co_Node nodeTitle="Dynamic Video Player" 
                    nodeDescription="This app is a video player with the help of Firebase."
                    nodeIconPath={dynamicVideoPlayerImg}
                    nodeLink="https://github.com/Boima12/AndroidStudio_DynamicVideoPlayer"
                />

                <Co_Node nodeTitle="Weather App" 
                    nodeDescription="This app is a weather app with the help of openWeather API."
                    nodeIconPath={weatherAppImg}
                    nodeLink="https://github.com/Boima12/AndroidStudio_WeatherApp"
                />

                <Co_Node nodeTitle="Sticky Notes" 
                    nodeDescription="This app is a Sticky Note app, you can pin the app widget too."
                    nodeIconPath={stickyNotesImg}
                    nodeLink="https://github.com/Boima12/AndroidStudio_StickyNotes"
                />
            </div>

        </div>
    );

}



export default Co_Intermediate