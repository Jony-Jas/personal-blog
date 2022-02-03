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
      <h1>Welcome to my blog 👨‍💻</h1>
      <p>I blog about web &#38; app development and share insights and views on recent advancements in technology.</p>
    </section>
  );
}

export default Hero;
