import PriceRightSvg from "./icons/priceRightSvg";

function PriceCard({
  title,
  description,
  price,
  billingPeriod,
  features = [],
  buttonText = "Get started",
  buttonLink = "#",
}) {
  return (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {description}
      </p>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
        <span className="text-gray-500 dark:text-gray-400">
          /{billingPeriod}
        </span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((item, index) => (
          <li key={index} className="flex items-center space-x-3">
            <PriceRightSvg></PriceRightSvg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={buttonLink}
        className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
      >
        {buttonText}
      </a>
    </div>
  );
}

export default function Pricing() {
  const starterFeatures = [
    "Individual configuration",
    "No setup, or hidden fees",
    "Team size: 1 developer",
    "Premium support: 6 months",
    "Free updates: 6 months",
  ];
  const companyFeatures = [
    "Individual configuration",
    "No setup, or hidden fees",
    "Team size: 10 developer",
    "Premium support: 24 months",
    "Free updates: 24 months",
  ];
  const enterpriseFeatures = [
    "Individual configuration",
    "No setup, or hidden fees",
    "Team size: 100+ developer",
    "Premium support: 36 months",
    "Free updates: 36 months",
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <PriceCard
            title="Starter"
            description="Best option for personal use & for your next project."
            price="29"
            billingPeriod="month"
            features={starterFeatures}
          ></PriceCard>
          <PriceCard
            title="Company"
            description="Relevant for multiple users, extended & premium support."
            price="99"
            billingPeriod="month"
            features={companyFeatures}
          ></PriceCard>
          <PriceCard
            title="Enterprise"
            description="Best for large scale uses and extended redistribution rights."
            price="499"
            billingPeriod="month"
            features={enterpriseFeatures}
          ></PriceCard>
        </div>
      </div>
    </section>
  );
}
