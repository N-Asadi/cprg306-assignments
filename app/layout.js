import "./globals.css";



export const metadata = {
  title: "CPRG306 Assignments",
  description: "Assignments for CPRG306",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      </body>
    </html>
  );
}
