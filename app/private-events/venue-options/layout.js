import { TwNav } from "@/components/NavBar";
import { Footer } from "@/components/footer";

export default function DashboardLayout({ children }) {
  return (
    <>
      <TwNav />
      <section>{children}</section>
      <Footer />
    </>
  );
}
