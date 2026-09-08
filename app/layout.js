import "./globals.css";

export const metadata = {
  title: "Mardan | Luxury Landscape Design & Gardening Works Dubai",
  description: "Bespoke landscape design, construction, irrigation and garden care for exceptional properties across Dubai.",
};

export default function RootLayout({children}) {
  return <html lang="en"><body>{children}</body></html>;
}