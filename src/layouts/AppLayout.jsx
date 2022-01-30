// Layout components
import { Head } from "components/layout/Head";
import { Navbar } from "components/layout/Navbar";
import { Footer } from "components/layout/Footer";
import SkipNavLinks from "components/layout/SkipNavLinks";
import FloatingAction from "components/layout/FloatingAction";

export default function AppLayout({ children }) {
  return (
    <>
      <Head />
      <header>
        <SkipNavLinks />
        <Navbar />
        <FloatingAction />
      </header>
      <main id="start">{children}</main>
      <Footer />
    </>
  );
}
