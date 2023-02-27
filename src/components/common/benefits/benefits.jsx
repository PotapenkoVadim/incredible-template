import React from 'react';
import styles from './benefits.module.scss';
import Title from '@/components/ui-kit/title/title';
import Subtitle from '@/components/ui-kit/subtitle/subtitle';
import FadeContainer from '@/components/common/fade-container/fade-container';
import BenefitsItem from './_item';

const benefits = [
  {
    id: 1,
    icon: 'video',
    title: 'Style 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    id: 2,
    icon: 'layout',
    title: 'Style 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    id: 3,
    icon: 'settings',
    title: 'Style 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    id: 4,
    icon: 'cloud',
    title: 'Style 4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
];

export default function Benefits() {
  return (
    <section className={styles['benefits']}>
      <FadeContainer>
        <Title>Section Heading</Title>
      </FadeContainer>

      <FadeContainer>
        <Subtitle>This is some text inside of a div block.</Subtitle>
      </FadeContainer>

      <div className={styles['benefits__list']}>
        {benefits.length > 0 &&
          benefits.map((item) => (
            <FadeContainer key={item.id}>
              <BenefitsItem benefit={item} />
            </FadeContainer>
          ))}
      </div>
    </section>
  );
}
