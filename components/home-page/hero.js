import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/image/site/profile.jpg"
          alt="image showing author"
          width={300}
          height={300}
        />
      </div>
      <h1>Welcome to my page 👨‍💻</h1>
      <p>I blog about web, app development and information about recent advancement in technology.</p>
    </section>
  );
}

export default Hero;
