export default function SkipNavLinks() {
  return (
    <a
      href="#start"
      className="fixed z-[120] top-0 left-[5%] translate-y-[-120%] opacity-0
      focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:a11y-primary
      px-4 pt-1.5 pb-1 bg-primary text-white font-semibold 
      transition duration-default transform-gpu
      hidden lg:block"
    >
      Přeskočit navigaci
    </a>
  );
}
