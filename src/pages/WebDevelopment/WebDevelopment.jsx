import styles from '../../styles/pageStyle/pageStyle.module.css';

import Co_PageNavigationBar from "../../myProps/PageNavigationBar/PageNavigationBar";
import Co_Alpha from './Sections/Alpha/Alpha';
// import Co_Beta from './Sections/Beta/Beta';



function Page_WebDevelopment() {

    return(
        <div className={styles.main}>
            <div className={styles.navSpace} />
            <Co_PageNavigationBar title="Web Development" />

            <Co_Alpha />
            {/* <Co_Beta /> */}

        </div>
    );

}



export default Page_WebDevelopment