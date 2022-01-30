import { useInView } from "react-intersection-observer";

export function useScrollReveal() {
  const [element, view] = useInView({ threshold: 0.3, triggerOnce: true });
  return [element, view];
}
