import styles from '../../../../styles/sectionStyle/sectionStyle.module.css';
import { useState } from 'react';


import Co_Node from '../../../../myProps/Node/Node';

import bandimg from '~/src/assets/Images/WebDevelopment/band.png';
import artimg from '~/src/assets/Images/WebDevelopment/art.png';
import cutedog from '../../../../assets/Samples/cutedog.jpg';



function Co_Static_Websites_React_version() {

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
                    Static Websites(React version)
                </p>

                <p
                    className={activePanel === 2 ? styles.section_active : ''}
                    onClick={() => togglePanel(2)}
                >
                    Static Websites(Plain version)
                </p>
            </div>

            <div className={styles.section_top_collapse}>
                <select>
                    <option onClick={() => togglePanel(1)}>Static Websites(React version)</option>
                    <option onClick={() => togglePanel(2)}>Static Websites(Plain version)</option>
                </select>
            </div>

            {/* nodes go here */}
            <div className={`${styles.section_body} ${activePanel === 1 ? styles.section_body_active : ''}`}>
                <Co_Node nodeTitle="Band"
                    nodeDescription="A simple band website page"
                    nodeDescriptionColor="#001f24"
                    nodeIconPath={bandimg}
                    nodeLink="https://boima12.github.io/StaticWebsites_React_Band/"
                />

                <Co_Node nodeTitle="Art"
                    nodeDescription="A website page with customize picture size? amazing."
                    // nodeDescriptionColor="#001f24"
                    nodeIconPath={artimg}
                    nodeLink="https://boima12.github.io/StaticWebsites_React_Art/"
                />

                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="ayo chill" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />

                <Co_Node 
                    nodeTitle="???" 
                    nodeIconPath={cutedog}
                    nodeDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a volutpat mi. Etiam vulputate nulla vitae dolor egestas, vel pretium nibh fermentum. Donec dignissim sollicitudin aliquam. Integer interdum ipsum ac semper malesuada."
                />

                <Co_Node nodeTitle="???" />
            </div>

            <div className={`${styles.section_body} ${activePanel === 2 ? styles.section_body_active : ''}`}>
                <Co_Node nodeTitle="Band"
                    nodeDescription="A simple band website page, this one is just html, css and JavaScript. I made it to just see the differences between React and normal HTML."
                    nodeDescriptionColor="#001f24"
                    nodeIconPath={bandimg}
                    nodeLink="https://boima12.github.io/StaticWebsites_Plain_Band/"
                />
            </div>

        </div>
    );

}



export default Co_Static_Websites_React_version