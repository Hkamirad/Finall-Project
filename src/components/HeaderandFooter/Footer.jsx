import facebookLogo from "../../assets/facebookLogo.png";
import twitterLogo from "../../assets/twitterLogo.png";
import linkedinLogo from "../../assets/LinkedinLogo.png";
export default function Footer() {
  const footerFeatureCreator = (feature = "", subFeatures = []) => {
    return (
      <>
        <div className="text-neutral-400">
          <h4 className="text-white mb-3 lg:mb-4 2xl:mb-5">{feature}</h4>
          {subFeatures.map((subFeature) => (
            <div key={subFeature}>
              <p className="inline-block mb-1 lg:mb-2 2xl:mb-3 cursor-pointer hover:scale-110 hover:text-neutral-300">
                {subFeature}
              </p>
            </div>
          ))}
        </div>
      </>
    );
  };
  const footerLogoCreator = (logoSrc) => {
    return (
      <>
        <div className=" p-2 bg-zinc-900 border border-neutral-800 rounded-lg w-11 lg:w-12 2xl:w-12 cursor-pointer hover:scale-110 ">
          <img src={logoSrc} alt={logoSrc} />
        </div>
      </>
    );
  };

  return (
    <div className="bg-stone-950">
      <div className="mx-6 lg:mx-12 2xl:mx-20 pt-12 pb-8 grid grid-cols-2 lg:grid-cols-5 gap-4 mb-3 lg:mb-8">
        {footerFeatureCreator("Home", [
          "Categories",
          "Devices",
          "Pricing",
          "FAQ",
        ])}
        {footerFeatureCreator("Movies", [
          "Gernes",
          "Trending",
          "New Release",
          "Popular",
        ])}
        {footerFeatureCreator("Support", ["Contact Us"])}
        {footerFeatureCreator("Subscription", ["Plans", "Features"])}
        <div className="text-white">
          <h4>Connect With Us</h4>
          <div className="flex gap-2 lg:gap-3 mt-4">
            {footerLogoCreator(facebookLogo)}
            {footerLogoCreator(twitterLogo)}
            {footerLogoCreator(linkedinLogo)}
          </div>
        </div>
      </div>
      <div className="mx-6 lg:mx-12 2xl:mx-20 pt-2 pb-6 border-t border-neutral-800 text-neutral-400 text-xs lg:flex justify-between">
        <div>
          <p>@2024 Hkamirad, All Rights Reserved</p>
        </div>
        <div className="flex gap-3 mt-3 lg:mt-0">
          <p className="hover:cursor-pointer hover:text-neutral-300">
            Terms of Use
          </p>
          <p>|</p>
          <p className="hover:cursor-pointer hover:text-neutral-300">
            Privacy Policy
          </p>
          <p>|</p>
          <p className="hover:cursor-pointer hover:text-neutral-300">
            Cookie Policy
          </p>
        </div>
      </div>
    </div>
  );
}
