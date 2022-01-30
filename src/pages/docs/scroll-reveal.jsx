// Layout
import AppLayout from "layouts/AppLayout";

// Global components
import Seo from "components/Seo";
import Hero from "components/Hero";

// Scroll reveal animations
import {
  FadeIn,
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideDown,
  ZoomIn,
  ZoomOut,
  Flip,
} from "components/scroll-reveal-animations";

export default function NewPage() {
  return (
    <AppLayout>
      <Seo title="Scroll animace" />

      <Hero title="Ukázka scroll animací" />

      <section className="py-32">
        <div className="ui-wrapper">
          <FadeIn
            as="h2"
            className="ui-heading text-center mb-20"
            data-heading="xl"
          >
            FadeIn animation
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
            <FadeIn className="w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Fade
            </FadeIn>
            <FadeIn className="reveal-delay-300 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Fade
            </FadeIn>
            <FadeIn className="lg:reveal-delay-600 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Fade
            </FadeIn>
            <FadeIn className="reveal-delay-300 lg:reveal-delay-900 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Fade
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-32 bg-body-200">
        <div className="ui-wrapper">
          <SlideUp
            as="h2"
            className="ui-heading text-center mb-20"
            data-heading="xl"
          >
            Slide animations
          </SlideUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
            <SlideLeft className="w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Left
            </SlideLeft>
            <SlideRight className="reveal-delay-300 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Right
            </SlideRight>
            <SlideUp className="lg:reveal-delay-600 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Up
            </SlideUp>
            <SlideDown className="reveal-delay-300 lg:reveal-delay-1000 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Down
            </SlideDown>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="ui-wrapper">
          <ZoomIn
            as="h2"
            className="ui-heading text-center mb-20"
            data-heading="xl"
          >
            ZoomIn animation
          </ZoomIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
            <ZoomIn className="w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Zoom
            </ZoomIn>
            <ZoomIn className="reveal-delay-300 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Zoom
            </ZoomIn>
            <ZoomIn className="lg:reveal-delay-600 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Zoom
            </ZoomIn>
            <ZoomIn className="reveal-delay-300 lg:reveal-delay-900 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Zoom
            </ZoomIn>
          </div>
        </div>
      </section>

      <section className="py-32 bg-body-200">
        <div className="ui-wrapper">
          <ZoomOut
            as="h2"
            className="ui-heading text-center mb-20"
            data-heading="xl"
          >
            ZoomOut animation
          </ZoomOut>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
            <ZoomOut className="w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Zoom
            </ZoomOut>
            <ZoomOut className="reveal-delay-300 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Zoom
            </ZoomOut>
            <ZoomOut className="lg:reveal-delay-600 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Zoom
            </ZoomOut>
            <ZoomOut className="reveal-delay-300 lg:reveal-delay-900 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Zoom
            </ZoomOut>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="ui-wrapper">
          <Flip
            as="h2"
            className="ui-heading text-center mb-20"
            data-heading="xl"
          >
            Flip animation
          </Flip>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
            <Flip className="w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Flip
            </Flip>
            <Flip className="reveal-delay-300 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Flip
            </Flip>
            <Flip className="lg:reveal-delay-600 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Flip
            </Flip>
            <Flip className="reveal-delay-300 lg:reveal-delay-900 w-36 h-36 rounded-default shadow-xl bg-primary flex items-center justify-center mx-auto text-white font-bold text-3xl">
              Flip
            </Flip>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
