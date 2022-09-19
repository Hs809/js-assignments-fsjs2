const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators."
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses"
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!"
  }
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq() {
  faqData.map((faqText) => {
    return createFaq(faqText);
  });
}
showFaq();

function createFaq(faq) {
  const parent = document.createElement("div");
  const header = document.createElement("div");
  const h3 = document.createElement("h3");
  const paragraph = document.createElement("p");
  const button = document.createElement("button");
  let open = false;

  header.classList.add("faq_header");
  button.classList.add("show_btn");
  parent.classList.add("faq");
  paragraph.classList.add("hidden");

  h3.innerText = faq.question;
  paragraph.innerText = faq.answer;
  button.innerText = "+";

  header.appendChild(h3);
  header.appendChild(button);
  parent.appendChild(header);
  parent.appendChild(paragraph);
  accordianBody.appendChild(parent);
  button.addEventListener("click", () => {
    open = !open;
    btnStatusUpdate(paragraph, open);
  });

  // const faq = document.createElement("div");
  // const header = document.createElement("h3");
  // let open = false;
  // const faqp = document.createElement("p");
  // const drawer = document.createElement("div");
  // const button = document.createElement("button");

  // faq.classList.add("faq");
  // drawer.classList.add("faq_header");
  // button.classList.add("show_btn");

  // faqp.innerText = faqText.answer;
  // header.innerText = faqText.question;
  // button.innerText = "+";

  // faq.append(header);
  // faq.appendChild(drawer);
  // drawer.append(faqp);
  // drawer.append(button);
  // accordianBody.appendChild(faq);
  // button.addEventListener("click", () => {
  //   open = !open;
  //   btnStatusUpdate(drawer, open);
  // });
}

function btnStatusUpdate(drawer, open) {
  if (open) {
    drawer.classList.remove("hidden");
  } else {
    drawer.classList.add("hidden");
  }
}
