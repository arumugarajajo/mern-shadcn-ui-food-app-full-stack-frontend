import hero from "../assets/herofood.jpg";
function Hero() {
  return (
    <div>
      <img
        src={hero}
        className="w-full max-h-[400px] object-cover"
        alt="hero img"
      />
    </div>
  );
}

export default Hero;
