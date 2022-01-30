// Dokumentace Swiper JS - `https://swiperjs.com/swiper-api`

// Odkaz na různá dema kde si lze u konkrétního slideru rozkliknout react v
// CodeSandboxu a snadno vykopírovat potřebný kód - `https://swiperjs.com/demos`

// !!! Není nutné importovat styl podle API, je již přizpůsobený pro Framework v adresáři `styles/components/swiper`

// Ukazatel navigace (tečky) lze snadno posunout pod slider přidáním spidního marginu na každý slide

import SwiperCore, { Pagination, Navigation, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DemoSlider() {
  SwiperCore.use([Pagination, Navigation, Autoplay, A11y]);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      navigation
      pagination={{ clickable: false }}
      loop="false"
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      className="h-auto my-6"
    >
      {/* Main slides */}
      <SwiperSlide className="py-28 overflow-hidden flex flex-col items-center justify-center text-center bg-green-500 dark:bg-green-900">
        <h3 className="ui-heading text-white mb-0">Slide 1</h3>
      </SwiperSlide>

      <SwiperSlide className="py-28 overflow-hidden flex flex-col items-center justify-center text-center bg-amber-500 dark:bg-amber-900">
        <h3 className="ui-heading text-white mb-0">Slide 2</h3>
      </SwiperSlide>

      <SwiperSlide className="py-28 overflow-hidden flex flex-col items-center justify-center text-center bg-violet-500 dark:bg-violet-900">
        <h3 className="ui-heading text-white mb-0">Slide 3</h3>
      </SwiperSlide>
    </Swiper>
  );
}
