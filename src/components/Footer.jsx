import LogoImg from "../assets/logo.svg";
import DribbleSvg from "./icons/dribbleSvg";
import FacebookSvg from "./icons/facebookSvg";
import GithubSvg2 from "./icons/githubSvg2";
import InstaSvg from "./icons/instaSvg";
import TwitterSvg from "./icons/twitterSvg";

function ChildFooter({ features = [], title, link = "#" }) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h3>
      <ul className="text-gray-500 dark:text-gray-400">
        {features.map((item, index) => (
          <li key={index} className="mb-4">
            <a href={link} className=" hover:underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Svg({ children }) {
  return (
    <li>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
      >
        {children}
      </a>
    </li>
  );
}

export default function Footer() {
  const companyFeatures = ["About", "Careers", "Brand Center", "Blog"];
  const helpCenterFeatures = [
    "Discord Server",
    "Twitter",
    "Facebook",
    "Contact Us",
  ];
  const legalFeatures = ["Privacy Policy", "Licensing", "Terms"];
  const companyFeatures1 = ["About", "Careers", "Brand Center", "Blog"];
  const downloadFeatures = ["iOS", "Android", "Windows", "MacOS"];
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        {/* Sub Footer-1 */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <ChildFooter title="COMPANY" features={companyFeatures}></ChildFooter>
          <ChildFooter
            title="HELP CENTER"
            features={helpCenterFeatures}
          ></ChildFooter>
          <ChildFooter title="LEGAL" features={legalFeatures}></ChildFooter>
          <ChildFooter
            title="COMPANY"
            features={companyFeatures1}
          ></ChildFooter>
          <ChildFooter
            title="DOWNLOAD"
            features={downloadFeatures}
          ></ChildFooter>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Sub Footer-2 */}
        <div className="text-center">
          <a
            href="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              src={LogoImg}
              className="h-6 mr-3 sm:h-9"
              alt="Learn with Sumit Logo"
            />
            Learn with Sumit{" "}
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
            <a
              href="#"
              target="_blank"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Flowbite
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </a>
            .
          </span>
          <ul class="flex justify-center mt-5 space-x-5">
            {" "}
            <Svg>
              <FacebookSvg></FacebookSvg>
            </Svg>
            <Svg>
              {" "}
              <InstaSvg></InstaSvg>
            </Svg>
            <Svg>
              <TwitterSvg></TwitterSvg>
            </Svg>
            <Svg>
              {" "}
              <GithubSvg2> </GithubSvg2>
            </Svg>
            <Svg>
              <DribbleSvg></DribbleSvg>
            </Svg>
          </ul>
        </div>
      </div>
    </footer>
  );
}
