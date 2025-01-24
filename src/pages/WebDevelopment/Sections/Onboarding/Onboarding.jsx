import styles from '~/src/styles/sectionStyle/sectionStyle.module.css';
import { useState } from 'react';

import Co_Node from '~/src/myProps/Node/Node';

// import cutedog from '~/src/assets/Samples/cutedog.jpg';
import toDoList from '~/src/assets/Images/WebDevelopment/toDoList.png';
import digitalClock from '~/src/assets/Images/WebDevelopment/digitalClock.png';
import stopWatch from '~/src/assets/Images/WebDevelopment/stopWatch.png';


function Co_Onboarding() {

    // State to track the active panel
    const [activePanel, setActivePanel] = useState(1);

    // Function to handle panel toggling
    const togglePanel = (panelNumber) => {
        setActivePanel(panelNumber); // Set the active panel dynamically
    };

    return(
        <div className={styles.main}>
            
            <div className={styles.section_top}>
                <p
                    className={activePanel === 1 ? styles.section_active : ''}
                    onClick={() => togglePanel(1)}
                >
                    Onboarding
                </p>
            </div>

            <div className={styles.section_top_collapse}>
                <select>
                    <option onClick={() => togglePanel(1)}>Onboarding</option>
                </select>
            </div>            

            {/* nodes goes here */}
            <div className={`${styles.section_body} ${activePanel === 1 ? styles.section_body_active : ''}`}>
                <Co_Node nodeTitle="To do list" 
                    nodeDescription="a simple to do list web app."
                    nodeIconPath={toDoList}
                    nodeLink="https://boima12.github.io/Onboarding_ToDoList/"
                />

                <Co_Node nodeTitle="Digital clock" 
                    nodeDescription="a simple digital clock web app, cute dogs included!."
                    nodeIconPath={digitalClock}
                    nodeLink="https://boima12.github.io/Onboarding_DigitalClock/"
                />                

                <Co_Node nodeTitle="Stop watch" 
                    nodeDescription="a simple stop watch app."
                    nodeIconPath={stopWatch}
                    nodeLink="https://boima12.github.io/Onboarding_StopWatch/"
                />    
            </div>

        </div>
    );

}



export default Co_Onboarding