import "./globals.css";
import SessionProviderWrapper from "./SessionProviderWrapper";
import StoreProvider from "./StoreProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><SessionProviderWrapper><StoreProvider>{children}</StoreProvider></SessionProviderWrapper></body>
    </html>
  );
}
