import styles from '~/src/styles/sectionStyle/sectionStyle.module.css';
import { useState } from 'react';

import Co_Node from '~/src/myProps/Node/Node';

// import cutedog from '~/src/assets/Samples/cutedog.jpg';



function Co_full_stack_basic() {

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
                    Full-stack basic
                </p>

                {/* <p
                    className={activePanel === 2 ? styles.section_active : ''}
                    onClick={() => togglePanel(2)}
                >
                    Homepage
                </p>                 */}
            </div>

            <div className={styles.section_top_collapse}>
                <select>
                    <option onClick={() => togglePanel(1)}>Onboarding</option>
                    {/* <option onClick={() => togglePanel(2)}>Homepage</option> */}
                </select>
            </div>            

            {/* nodes goes here */}
            <div className={`${styles.section_body} ${activePanel === 1 ? styles.section_body_active : ''}`}>
                <Co_Node nodeTitle="Tower battles recommendation" 
                />

                <Co_Node nodeTitle="Commercial app" 
                />                

                <Co_Node nodeTitle="Prollo" 
                />    
            </div>

            {/* <div className={`${styles.section_body} ${activePanel === 2 ? styles.section_body_active : ''}`}>
                <Co_Node nodeTitle="Home page"
                    nodeDescription="A home page website i build for my browser, intergration pomodoro clock, quick links and themes for personal like."
                    nodeIconPath={HomepageImg}
                    nodeLink="https://boima12.github.io/Homepage/"
                />
            </div>             */}

        </div>
    );

}



export default Co_full_stack_basic