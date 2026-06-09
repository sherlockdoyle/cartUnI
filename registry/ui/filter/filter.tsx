import type { FC } from 'react';
import styles from './filter.module.css';

const Filter: FC = () => (
  <svg className={styles.filter}>
    <filter id='noise' width='140%' height='140%' x='-20%' y='-20%'>
      <feTurbulence type='fractalNoise' result='noise' baseFrequency='0.04' numOctaves='3' />
      <feDisplacementMap scale='3' in='SourceGraphic' in2='noise' xChannelSelector='R' yChannelSelector='G' />
    </filter>
  </svg>
);
export default Filter;
