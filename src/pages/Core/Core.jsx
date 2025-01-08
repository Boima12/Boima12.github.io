import styles from './Core.module.css';
import { useNavigate } from 'react-router-dom';
import Co_LanguageCard from '../../myProps/LanguageCard/LanguageCard.jsx';

import JavaImg from '../../assets/Images/Java/javaimg.png';
import KotlinImg from '../../assets/Images/kotlinimg.png';
import WebDevelopmentImg from '../../assets/Images/WebDevelopment/webdevelopment.png';

function Page_Core() {

  const navigate = useNavigate();

  return (
    <div className={styles.main}>

        <div className={styles.topTitle}>
          <p>Cao Hoàng Phước Bảo</p>
          <p>Boima</p>
        </div>

        <div className={styles.Spaces}>

          <div className={styles.Body1}>
            <div className={styles.horizontalLine}></div>

            <button type="button" onClick={() => navigate('/pages/WebDevelopment')}>
              <Co_LanguageCard
                title="Web Development"
                imagePath={WebDevelopmentImg}
              />
            </button>

            <button type="button" onClick={() => navigate('/pages/Kotlin')}>    
              <Co_LanguageCard
                title="Kotlin"
                imagePath={KotlinImg}
              />
            </button>

            <button type="button" onClick={() => navigate('/pages/Java')}>
              <Co_LanguageCard
                title="Java"
                imagePath={JavaImg}
              />
            </button>
            
          </div>

          <p className={styles.info}>More in progress...</p>
        </div>

    </div>
  );
}

export default Page_Core;
