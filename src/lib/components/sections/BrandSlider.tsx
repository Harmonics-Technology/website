import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function BrandSliders({ item }: { item: any }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      showDots={false}
      arrows
      removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      autoPlay
      infinite
    >
      {item}
    </Carousel>
  );
}

export default BrandSliders;
