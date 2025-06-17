import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home Page",
  description: "A simple homepage layout using Next.js with hero section.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] px-6 py-10 flex items-center justify-center">
        {children}
      </main>
      <Footer />
    </>
  );
}
