import styles from '../../styles/pageStyle/pageStyle.module.css';

import Co_PageNavigationBar from "../../myProps/PageNavigationBar/PageNavigationBar";
import Co_Basic from './Sections/Basic/Basic';
import Co_Intermediate from './Sections/intermediate/Intermediate';
import Co_Advanced from './Sections/Advanced/Advanced';
import Co_BigProjects from './Sections/BigProjects/BigProjects';



function Page_Kotlin() {

    return(
        <div className={styles.main}>
            <div className={styles.navSpace} />
            <Co_PageNavigationBar title="Kotlin" />

            <Co_Basic />
            <Co_Intermediate />
            <Co_Advanced />
            <Co_BigProjects />

        </div>
    );

}



export default Page_Kotlin