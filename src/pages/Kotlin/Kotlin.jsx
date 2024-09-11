import styles from '../../styles/pageStyle/pageStyle.module.css';

import Co_PageNavigationBar from "../../myProps/PageNavigationBar/PageNavigationBar";
import Co_Alpha from './Sections/Alpha/Alpha';



function Page_Kotlin() {

    return(
        <div className={styles.main}>
            <div className={styles.navSpace} />
            <Co_PageNavigationBar title="Kotlin" />

            <Co_Alpha />

        </div>
    );

}



export default Page_Kotlin