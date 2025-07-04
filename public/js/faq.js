function faq() {
  const questionList = [
    {
      question: "How do I upload documents to the platform securely?",
      answer:
        "Navigate to your case and click the “Upload” button on your dashboard. The platform automatically encrypts all uploaded documents to protect against unauthorized access.",
    },
    {
      question: "What types of documents can I upload to the system?",
      answer:
        "You can upload PDFs, Word documents, and text files. Just ensure they’re well‑formatted and free of harmful content like viruses or malware.",
    },
    {
      question:
        "How do I communicate with my clients and colleagues on the platform?",
      answer:
        "The platform provides a secure messaging system where all communications are encrypted and accessible only by authorized users.",
    },
    {
      question: "Can I use AI on the platform?",
      answer:
        "Yes—but only lawyers can access AI tools, which assist with legal research, case management, and document analysis to streamline workflows and boost productivity.",
    },
    {
      question: "How are messages encrypted to ensure confidentiality?",
      answer:
        "Messages are encrypted using AES‑256 encryption, ensuring secure, private communication.",
    },
    {
      question:
        "What happens if a document is accidentally uploaded with sensitive information?",
      answer:
        "If that happens, inform the support team and they’ll assist in resolving the issue with the utmost care for your data.",
    },
    {
      question:
        "Can I modify the case description once it's uploaded to the system?",
      answer:
        "Yes. You can access the case details and update the description as needed; all changes are recorded to ensure transparency and traceability.",
    },
    {
      question:
        "How do I ensure the documents I upload are only accessible by authorized personnel?",
      answer:
        "Wakili CRM uses role‑based access control, allowing you to define who can view or edit specific documents or groups of files.",
    },
    {
      question:
        "Is the platform compliant with legal data protection regulations?",
      answer:
        "Yes. Wakili CRM complies with the Kenya Data Protection Act, GDPR, and CCPA, ensuring data is processed with top‑level privacy and security.",
    },
    {
      question:
        "Can clients upload documents or is that restricted to lawyers only?",
      answer:
        "Both clients and lawyers can upload documents relevant to a case.",
    },
    {
      question: "What is the most suitable CRM for my case?",
      answer:
        "Wakili CRM emphasizes encrypted, secure storage of messages, case files, and details, with full control over who access them—ensuring privacy and peace of mind.",
    },
    {
      question: "Is Wakili CRM suitable for my large firm?",
      answer:
        "Yes. It’s designed with enterprise-grade encryption and access controls to serve firms of all sizes, maintaining sensitivity and control over data.",
    },
  ];
  //   <i class="fa-solid fa-caret-down"></i>
  const questionsContainer = document.querySelector(".questionsContainer");
  questionList.forEach((question) => {
    const faqNode = document.createElement("div");
    faqNode.classList.add("faqNode");

    //Creating The FAQ Head
    const faqHeadNode = document.createElement("div");
    faqHeadNode.classList.add("faqHeadNode");
    //
    const faqHead = document.createElement("h1");
    const headText = document.createTextNode(question.question);

    //
    const icon = document.createElement("span");
    const iconContent = document.createTextNode(">");
    icon.classList.add("icon");
    //
    icon.appendChild(iconContent);
    faqHead.appendChild(headText);
    faqHeadNode.appendChild(faqHead);
    faqHeadNode.appendChild(icon);

    //Creating The FAQ Body
    const faqBody = document.createElement("p");
    const bodyText = document.createTextNode(question.answer);
    faqBody.classList.add("faqBody");
    faqBody.classList.add("hidden");
    faqBody.appendChild(bodyText);

    faqNode.appendChild(faqHeadNode);
    faqNode.appendChild(faqBody);
    questionsContainer.appendChild(faqNode);

    faqHeadNode.addEventListener("click", () => {
      faqBody.classList.toggle("hidden");
    });
  });
}
faq();
