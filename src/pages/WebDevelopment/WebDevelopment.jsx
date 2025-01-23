import styles from '../../styles/pageStyle/pageStyle.module.css';

import Co_PageNavigationBar from "../../myProps/PageNavigationBar/PageNavigationBar";
import Co_Static_Websites_React_version from './Sections/Static_Websites(React_version)/Static_Websites(React_version)';
import Co_Onboarding from './Sections/Onboarding/Onboarding';


function Page_WebDevelopment() {

    return(
        <div className={styles.main}>

            <Co_PageNavigationBar title="Web Development" />

            <Co_Onboarding />
            <Co_Static_Websites_React_version />

        </div>
    );

}



export default Page_WebDevelopment