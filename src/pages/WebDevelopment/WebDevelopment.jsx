import styles from '../../styles/pageStyle/pageStyle.module.css';

import Co_PageNavigationBar from "../../myProps/PageNavigationBar/PageNavigationBar";
import Co_Static_Websites from './Sections/Static_Websites/Static_Websites';
import Co_Static_Websites_React_version from './Sections/Static_Websites(React_version)/Static_Websites(React_version)';



function Page_WebDevelopment() {

    return(
        <div className={styles.main}>
            <div className={styles.navSpace} />
            <Co_PageNavigationBar title="Web Development" />

            <Co_Static_Websites_React_version />
            <Co_Static_Websites />

        </div>
    );

}



export default Page_WebDevelopment