import React from 'react';
import styles from './works.module.scss';
import FadeContainer from '@/components/common/fade-container/fade-container';
import Title from '@/components/ui-kit/title/title';
import Subtitle from '@/components/ui-kit/subtitle/subtitle';
import Slider from '@/components/common/slider/slider';

import work1 from '@/assets/images/work-1.png';
import work2 from '@/assets/images/work-2.png';
import work3 from '@/assets/images/work-3.png';
import work4 from '@/assets/images/work-4.png';
import work5 from '@/assets/images/work-5.png';
import work6 from '@/assets/images/work-6.png';
import work7 from '@/assets/images/work-7.png';
import work8 from '@/assets/images/work-8.png';

const works = [
  { id: 1, image: work1 },
  { id: 2, image: work2 },
  { id: 3, image: work3 },
  { id: 4, image: work4 },
  { id: 5, image: work5 },
  { id: 6, image: work6 },
  { id: 7, image: work7 },
  { id: 8, image: work8 },
];

export default function Works() {
  return (
    <section className={styles['works']}>
      <FadeContainer>
        <Title>Lightbox Section</Title>
      </FadeContainer>

      <FadeContainer>
        <Subtitle>This is some text inside of a div block.</Subtitle>
      </FadeContainer>

      <div className={styles['works__sliders']}>
        <FadeContainer>
          <Slider slides={works} />
        </FadeContainer>

        <FadeContainer>
          <Slider slides={[...works].reverse()} />
        </FadeContainer>
      </div>
    </section>
  );
}
