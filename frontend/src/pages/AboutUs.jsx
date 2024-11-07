import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import aboutimg from "../assets/aboutus.png";
import dev1 from "../assets/dev1.jpg";
import dev2 from "../assets/dev2.jpg";
import dev3 from "../assets/dev3.jpg";
import dev4 from "../assets/dev4.jpg";
import CreateEarnHome from "../components/home/CreateEarnHome";

const AboutUs = () => {
  const devs = [
    {
      id: 1,
      src: dev1,
      name: "Chimata Poojitha",
      skill: "Full-stack web Developer",
      link1: "https://www.linkedin.com/in/poojitha-chimata-4313b2312/",
      link2: "https://github.com/221FA04356",
    },
    {
      id: 2,
      src: dev2,
      name: "Alluri Krishna Keerthi",
      skill: "Full-Stack web Developer",
      link1: "https://www.linkedin.com/in/alluri-krishna-keerthi-59612632a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      link2: "https://github.com/Krish-357",
    },
    {
      id: 3,
      src: dev3,
      name: "Vajja Lakshmi Sravya",
      skill: "Full-stack web Developer",
        link1: "https://www.linkedin.com/in/sravya-vajja-294118317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        link2: "https://github.com/hassaancode",
    },
    {
      id: 4,
      src: dev4,
      name: "Katari Kusuma",
      skill: "Full-stack web Developer",
      link1: "https://www.linkedin.com/in/katari-kusuma-32b97b318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      link2: "h",
    },
  ];

  return (
    <>
      <div className="text-white flex items-center justify-center flex-col h-[280px] bg-cover bg-hero-img">
        <h1 id="home" className="text-center font-bold text-3xl">
          About Us
        </h1>
        <div className="flex gap-2 font-medium pt-2">
          <Link
            to={"/"}
            className=" no-underline hover:text-theme-color transition-all"
          >
            Home
          </Link>
          <span>/</span>
          <span className="text-theme-color">About Us</span>
        </div>
      </div>
      {/* About US PARENT */}
      <div className="text-white flex flex-col gap-20 pt-20 px-6 lg:px-11 ">
        {/* ABOUT US Section */}
        <div className="flex items-center gap-4 flex-wrap lg:flex-nowrap">
          <img className="min-w-48 " src={aboutimg} alt="arthavenimage" />
          <div className="flex flex-col gap-4 lg:min-w-[50%] lg:w-1/2">
            <div className="mb-4">
              <span className="text-lg tracking-[5px] uppercase text-theme-color font-semibold">
                About Us
              </span>
              <h2 className="mt-2 text-4xl font-medium">
                Largest Marketplace To Collect, Buy And Sell Creative Digital
                Assets
              </h2>
            </div>
            <div className="text-body-text-color">
            <p className="mb-2">
              Welcome to our premier online auction hub for digital art and assets! 
              Our platform brings together artists, designers, and creators worldwide 
              to explore, buy, and sell unique digital creations in a vibrant, competitive 
              marketplace.
            </p>
            <p className="mb-2">
              Looking for the ideal video clip to enhance your project? Or perhaps a unique 
              logo that perfectly embodies your brand’s vision? Browse our constantly growing 
              library filled with exclusive fonts, graphics, 3D models, sound effects, and much more – 
              each piece available through the excitement of live auctions.
            </p>
            <p>
              Join as a seller and showcase your creativity! Auction your work to a global 
              community eager to bring fresh inspiration into their projects and make your 
              innovative ideas part of their journey.
            </p>

            </div>
          </div>
        </div>
        {/* OUR TEAM SECTION*/}
        <div className="m-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-lg tracking-[5px] uppercase text-theme-color font-semibold">
              Our Team
            </span>
            <h2 className="mt-2 text-4xl font-medium">Meet With Our Experts</h2>
          </div>
          <div className=" grid  md:grid-cols-3 items-center justify-center gap-5 max-w-[1500px]">
            {/* dev component */}
            {devs.map(({ id, src, name, skill, link1, link2 }) => (
              <div
                key={id}
                className="border border-border-info-color bg-theme-bg p-5 flex flex-col items-center gap-3 text-center rounded-[20px]"
              >
                <div className="rounded-[20px] overflow-hidden">
                  <img
                    className="rounded-[20px] hover:scale-105 transition-all duration-300"
                    src={src}
                    alt="creatorimg"
                  />
                </div>
                <div>
                  <span className="text-xl font-medium">{name}</span>
                  <br />
                  <span className="text-body-text-color">{skill}</span>
                </div>
                <div className="flex gap-2">
                  <a
                    className="rounded-full bg-theme-color p-2 hover:bg-hover transition-all duration-300"
                    href={link2}
                    target="_blank"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    className="rounded-full bg-theme-color p-2 hover:bg-hover transition-all duration-300"
                    href={link1}
                    target="_blank"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[1500px] m-auto">
  <div className="mb-10 text-center">
    <span className="text-lg tracking-[5px] uppercase text-theme-color font-semibold">
      How It Works
    </span>
    <h2 className="mt-2 text-4xl font-medium">
      Launch and Sell{" "}
      <span className="text-color-primary">Your Creations</span>
    </h2>
  </div>
  <div className="grid grid-cols-1 m-auto gap-5 w-full md:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col text-white gap-4 justify-start p-8 rounded-2xl bg-theme-bg ">
      <h2 className="text-5xl font-bold text-stroke">01</h2>
      <h3 className="text-2xl font-bold">Set Up Your Account</h3>
      <p className="text-body-text-color">
        Sign up quickly and access all the tools you need to start selling.
      </p>
    </div>
    <div className="flex flex-col text-white gap-4 justify-start p-8 rounded-2xl bg-theme-bg ">
      <h2 className="text-5xl font-bold text-stroke">02</h2>
      <h3 className="text-2xl font-bold">Create a Unique Listing</h3>
      <p className="text-body-text-color">
        Design a captivating listing that highlights your product’s best features.
      </p>
    </div>
    <div className="flex flex-col text-white gap-4 justify-start p-8 rounded-2xl bg-theme-bg ">
      <h2 className="text-5xl font-bold text-stroke">03</h2>
      <h3 className="text-2xl font-bold">Set an Initial Bid</h3>
      <p className="text-body-text-color">
        Choose a starting price that appeals to buyers, with the option to set a reserve.
      </p>
    </div>
    <div className="flex flex-col text-white gap-4 justify-start p-8 rounded-2xl bg-theme-bg ">
      <h2 className="text-5xl font-bold text-stroke">04</h2>
      <h3 className="text-2xl font-bold">Launch Your Auction</h3>
      <p className="text-body-text-color">
        Publish your product and let the bidding begin, turning your creativity into profit.
      </p>
    </div>
  </div>
</div>

        <CreateEarnHome />
      </div>
    </>
  );
};

export default AboutUs;
