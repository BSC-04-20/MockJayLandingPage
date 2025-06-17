import youngSyntax from "../../assets/images/Young syntax.webp";
import sera from "../../assets/images/Sera.webp";
import Scholar from "../../assets/images/Scholar.webp";
import lyrikah from "../../assets/images/Lyrikah.webp";
import verseOne from "../../assets/images/VerseOne.webp";
import jayPhantom from "../../assets/images/JayPhantom.webp";
import nayDrip from "../../assets/images/NayDrip.webp";
import hypersonik from "../../assets/images/Hypersonik.webp";
import yungRelik from "../../assets/images/Yung Relik.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./ArtistsStyle.css"

export default function Artists() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slides",
        nextArrow: <NextArrow to="Next"/>,
        prevArrow: <PrevArrow to="prev"/>,
    };

    const artistCard = (img, name) => (
        <div className="relative h-[350px] overflow-hidden rounded-xl">
            <img src={img} alt={name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-gray-800/60 to-transparent" />
            <span className="absolute bottom-4 left-4 font-inter text-gray-200 text-xl font-semibold z-10">{name}</span>
        </div>
    );

    return (
        <div className="relative mx-auto px-[10%] mt-20">
            <span className="text-xl md:text-3xl text-red-400 font-bold">ARTISTS</span>
            <div className="hidden  md:block">
              <Slider {...settings} className="mt-6">
                  {/* Slide 1 */}
                  <div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {artistCard(youngSyntax, "Young Syntax")}
                          {artistCard(sera, "Sera")}
                          {artistCard(Scholar, "Scholar")}
                      </div>
                  </div>

                  {/* Slide 2 */}
                  <div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {artistCard(jayPhantom, "JayPhantom")}
                          {artistCard(lyrikah, "Lyrikah")}
                          {artistCard(verseOne, "VerseOne")}
                      </div>
                  </div>

                  {/* Slide 3 */}
                  <div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {artistCard(hypersonik, "Hypersonkik")}
                          {artistCard(nayDrip, "NayFrip")}
                          {artistCard(yungRelik, "Yung Relik")}
                      </div>
                  </div>
              </Slider>
            </div>

            <div className="md:hidden">
            {/* Mobile Slider */}
              <Slider {...settings} className="mt-6">
                  {artistCard(youngSyntax, "Young Syntax")}
                  {artistCard(sera, "Sera")}
                  {artistCard(Scholar, "Scholar")}
                  {artistCard(jayPhantom, "JayPhantom")}
                  {artistCard(lyrikah, "Lyrikah")}
                  {artistCard(verseOne, "VerseOne")}
                  {artistCard(hypersonik, "Hypersonkik")}
                  {artistCard(nayDrip, "NayFrip")}
                  {artistCard(yungRelik, "Yung Relik")}
              </Slider>
            </div>
        </div>
    );
}


const NextArrow = ({ className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} !absolute !top-1/2 !-translate-y-1/2 !right-[-40px]
      !z-40 !bg-[#ff4245] hover:!bg-[#f84848]
      !rounded-full !w-[45px] !h-[45px]
      !flex !items-center !justify-center`}
    >
      <IoIosArrowForward className="text-gray-100 text-[24px]" />
    </div>
  );
};

const PrevArrow = ({ className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} !absolute !top-1/2 !-translate-y-1/2 !left-[-40px]
      !z-40 !bg-[#ff4245] hover:!bg-[#f84848]
      !rounded-full !w-[45px] !h-[45px]
      !flex !items-center !justify-center`}
    >
      <IoIosArrowBack className="text-gray-100 text-[24px]" />
    </div>
  );
};

