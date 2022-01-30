// Dokumentace Swiper JS - `https://swiperjs.com/swiper-api`

// Odkaz na různá dema kde si lze u konkrétního slideru rozkliknout react v
// CodeSandboxu a snadno vykopírovat potřebný kód - `https://swiperjs.com/demos`

// !!! Není nutné importovat styl podle API, je již přizpůsobený pro Framework v adresáři `styles/components/swiper`

// Ukazatel navigace (tečky) lze snadno posunout pod slider přidáním spidního marginu na každý slide

import SwiperCore, { Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DemoCarousel() {
  SwiperCore.use([Pagination, Autoplay, A11y]);

  return (
    <Swiper
      slidesPerView={1}
      breakpoints={{
        // when window width is >= 576px
        576: {
          slidesPerView: 2,
        },
        // when window width is >= 960px
        960: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={30}
      pagination={{ clickable: true }}
      loop="true"
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      className="h-auto my-6"
    >
      {/* Main slides */}
      <SwiperSlide className="py-16 mb-16 rounded-default overflow-hidden flex flex-col items-center justify-center text-center bg-primary">
        <h3 className="ui-heading text-white mb-0">Slide 1</h3>
      </SwiperSlide>

      <SwiperSlide className="py-16 mb-16 rounded-default overflow-hidden flex flex-col items-center justify-center text-center bg-secondary">
        <h3 className="ui-heading text-white mb-0">Slide 2</h3>
      </SwiperSlide>

      <SwiperSlide className="py-16 mb-16 rounded-default overflow-hidden flex flex-col items-center justify-center text-center bg-primary">
        <h3 className="ui-heading text-white mb-0">Slide 3</h3>
      </SwiperSlide>

      <SwiperSlide className="py-16 mb-16 rounded-default overflow-hidden flex flex-col items-center justify-center text-center bg-secondary">
        <h3 className="ui-heading text-white mb-0">Slide 4</h3>
      </SwiperSlide>

      <SwiperSlide className="py-16 mb-16 rounded-default overflow-hidden flex flex-col items-center justify-center text-center bg-primary">
        <h3 className="ui-heading text-white mb-0">Slide 5</h3>
      </SwiperSlide>

      <SwiperSlide className="py-16 mb-16 rounded-default overflow-hidden flex flex-col items-center justify-center text-center bg-secondary">
        <h3 className="ui-heading text-white mb-0">Slide 6</h3>
      </SwiperSlide>
    </Swiper>
  );
}
