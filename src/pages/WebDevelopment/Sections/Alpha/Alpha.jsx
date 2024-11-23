import styles from '../../../../styles/sectionStyle/sectionStyle.module.css';

import Co_Node from '../../../../myProps/Node/Node';

import cutedog from '../../../../assets/Samples/cutedog.jpg';



function Co_Alpha() {

    return(
        <div className={styles.main}>
            
            <div className={styles.section_Top}>
                <p>Static Websites(React version)</p>
            </div>

            {/* nodes goes here */}
            <div className={styles.section_Body}>
                <Co_Node nodeTitle="???" />

                <Co_Node 
                    nodeTitle="i like dog" 
                    nodeIconPath={cutedog}
                    nodeDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a volutpat mi. Etiam vulputate nulla vitae dolor egestas, vel pretium nibh fermentum. Donec dignissim sollicitudin aliquam. Integer interdum ipsum ac semper malesuada."
                />

                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="???" />
                <Co_Node nodeTitle="of course there is more, next section!" />

            </div>


        </div>
    );

}



export default Co_Alpha