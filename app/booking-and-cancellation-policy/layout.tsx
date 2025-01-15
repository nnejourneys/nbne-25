import HeroPage from "@/components/page-sections/hero-page";

export const metadata = {
  title: "North by North East",
  description:
    "We specialize in adventure, nature and culture tours across the little-known Northeast region of India. | ${CMS_NAME}.",
};

export default function PageLayout({ children }: { children: React.ReactNode}) {
  return ( 
      <main>
      <HeroPage/>
        {children}
      </main> 
    );
}
