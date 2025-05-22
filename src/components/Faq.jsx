import DownArrowSvg from "./icon/downArrowSvg";
import UpArrowSvg from "./icon/upArrowSvg";
function ChildFaq({ ques, ans, serial }) {
  return (
    <>
      {" "}
      <h3 id="accordion-flush-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-3"
          aria-expanded="false"
          aria-controls="accordion-flush-body-3"
        >
          <span>{ques}</span>
          {serial == 0 ? (
            <UpArrowSvg></UpArrowSvg>
          ) : (
            <DownArrowSvg></DownArrowSvg>
          )}
        </button>
      </h3>
      <div
        id="accordion-flush-body-3"
        className={serial == 0 ? "" : "hidden"}
        aria-labelledby="accordion-flush-heading-3"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{ans}</p>
        </div>
      </div>
    </>
  );
}
export default function Faq() {
  const faqData = [
    {
      question: "What are the differences between Landwind and Tailwind UI?",
      answer:
        "The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
    },
    {
      question: "Is there a Figma file available?",
      answer:
        "Landwind is first conceptualized and designed using the Figmasoftware so everything you see in the library has a design  equivalent in our Figma file",
    },
    {
      question: "  What are the differences between Landwind and Tailwind UI?",
      answer:
        "The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
    },
    {
      question: "What about browser support?",
      answer:
        "The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-className="text-gray-500 dark:text-gray-400"
          >
            {faqData.map((item, index) => (
              <ChildFaq
                key={index}
                ques={item.question}
                ans={item.answer}
                serial={index}
              ></ChildFaq>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
