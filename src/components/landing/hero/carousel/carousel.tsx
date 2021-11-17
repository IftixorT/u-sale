import { FC, useState } from 'react';
import Slide from './slide/slide';
import CarouselStyle from './carousel.e';
import CarouselProps from './carousel.t';
import { slides } from './data';
import left from '../../../../assets/images/carusel/left.svg';
import right from '../../../../assets/images/carusel/right.svg';

const Carousel: FC<CarouselProps> = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <CarouselStyle>
      <div className='slide' onClick={prevSlide}>
        <img src={left} alt='' />
      </div>
      <div className='slide' onClick={nextSlide}>
        <img src={right} alt='' />
      </div>
      {slides.map((slide, idx) => {
        return (
          <div
            className={idx === current ? 'slides active' : 'slides'}
            key={idx}>
            {idx === current && <Slide {...slide} />}
          </div>
        );
      })}
    </CarouselStyle>
  );
};

export default Carousel;
