import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";

export default function MyCarousel() {
  return (
    <section className={styles.sec}>
      <Carousel>
        <Carousel.Item>
          <div className={styles.imgContainer}>
            <div className={styles.gradientOverlay}>
              <Image
                className={styles.imgg}
                src="http://127.0.0.1:1337/uploads/mekblog_header_1f24745b72.png"
                alt="First slide"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={styles.imgContainer}>
            <div className={styles.gradientOverlay}>
              <Image
                className={styles.imgg}
                src="http://127.0.0.1:1337/uploads/mekblog_header3_5edb86746e.png"
                alt="First slide"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className={styles.imgContainer}>
            <div className={styles.gradientOverlay}>
              <Image
                className={styles.imgg}
                src="http://127.0.0.1:1337/uploads/mekblog_header4_65fa79ae43.png"
                alt="First slide"
                layout="fill"
                objectFit="cover"
              />
              <Carousel.Caption>
                <h5>MEK Blog</h5>
                <p>
                  Teknoloji ve yazılım dünyasına ilgi duyan herkes için MEK
                  Blog.
                </p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
