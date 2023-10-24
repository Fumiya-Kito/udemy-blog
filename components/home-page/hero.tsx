import Image from "next/image";

function Hero() {
  return (
    <section>
      <div>
        <Image
          src="/images/site/next.svg"
          alt="My Image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Kito</h1>
      <p>I blog about web development.</p>
    </section>
  );
}

export default Hero;
