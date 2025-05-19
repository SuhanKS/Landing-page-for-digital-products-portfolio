import AirbnbSvg from "./icon/airbnbSVG";
import GoogleSvg from "./icon/googleSVG";
import MalichimpSvg from "./icon/malichimpSvg";
import MashableSvg from "./icon/mashableSvg";
import MicrosoftSvg from "./icon/microsoftSVG";
import SpotifySvg from "./icon/spotifySvg";

export default function CompanyLogo() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" class="flex items-center lg:justify-center">
            <AirbnbSvg></AirbnbSvg>
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <GoogleSvg></GoogleSvg>
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <MicrosoftSvg></MicrosoftSvg>
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <SpotifySvg></SpotifySvg>
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <MalichimpSvg></MalichimpSvg>
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <MashableSvg></MashableSvg>
          </a>
        </div>
      </div>
    </section>
  );
}
