import styles from '../../../../styles/sectionStyle/sectionStyle.module.css';

import Co_Node from '../../../../myProps/Node/Node';

import cutedog from '../../../../assets/Samples/cutedog.jpg';



function Co_Beta() {

    return(
        <div className={styles.main}>
            
            <div className={styles.section_Top}>
                <p>Section Beta</p>
            </div>

            {/* nodes goes here */}
            <div className={styles.section_Body}>
                <Co_Node nodeTitle="???" />

                <Co_Node 
                    nodeTitle="???" 
                    nodeIconPath={cutedog}
                    nodeDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a volutpat mi. Etiam vulputate nulla vitae dolor egestas, vel pretium nibh fermentum. Donec dignissim sollicitudin aliquam. Integer interdum ipsum ac semper malesuada."
                />

                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="ayo chill" />
                <Co_Node nodeTitle="???" />




            </div>


        </div>
    );

}



export default Co_Beta