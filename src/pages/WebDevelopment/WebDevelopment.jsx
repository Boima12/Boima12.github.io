import styles from '../../styles/pageStyle/pageStyle.module.css';

import Co_PageNavigationBar from "../../myProps/PageNavigationBar/PageNavigationBar";
import Co_Static_Websites_React_version from './Sections/Static_Websites(React_version)/Static_Websites(React_version)';
import Co_Onboarding from './Sections/Onboarding/Onboarding';
import Co_full_stack_basic from './Sections/Full_stack_basic/Full_stack_basic';


function Page_WebDevelopment() {

    return(
        <div className={styles.main}>

            <Co_PageNavigationBar title="Web Development" />

            <Co_Onboarding />
            <Co_Static_Websites_React_version />
            <Co_full_stack_basic />

        </div>
    );

}



export default Page_WebDevelopment