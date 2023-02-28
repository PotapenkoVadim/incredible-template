import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper/core';
import styles from './slider.module.scss';

SwiperCore.use(Mousewheel);

export default forwardRef(function Slider({ slides }, ref) {
  return (
    <>
      {slides.length > 0 && (
        <Swiper
          ref={ref}
          effect="fade"
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={20}
          mousewheel={{
            releaseOnEdges: true,
          }}
          slidesPerView={1}
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                className={styles['slider__image']}
                src={item.image}
                alt="work"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
});
