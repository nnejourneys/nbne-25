export const metadata = {
  title: "Tours | North by North East",
  description:
    "We specialize in adventure, nature and culture tours across the little-known Northeast region of India.",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
