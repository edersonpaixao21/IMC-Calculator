import styles from './styles.module.scss';

import logoImg from '../../assets/logo.png';

export const Header = () => (
  <header>
    <div className={styles.headerContainer}>
      <img src={logoImg} alt="IMC Logomarca" />

      <span>Calculadora IMC</span>
    </div>
  </header>
);
