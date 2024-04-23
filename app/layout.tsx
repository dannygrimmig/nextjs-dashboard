import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout(props: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{props.children}</body>
    </html>
  );
}
