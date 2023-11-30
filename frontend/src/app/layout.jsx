import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/global.css";
import Circle from "../../components/Circle";
import Circle2 from "../../components/Circle2";

export const metadata = {
  title: "MEK Blog",
  description: "blog des.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;800&family=Rowdies:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        ></link>
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
        <Circle />
        <Circle2 />

        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
          integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
