function features() {
  const featuresList = [
    {
      fontAwesomeClasses: "fas fa-user",
      featureHead: "Simplified Client Intake",
      featureBody:
        "Transform client onboarding with custom forms and seamless digital intake. Wakili CRM helps your firm capture client details effortlessly while keeping your operations organized.",
    },
    {
      fontAwesomeClasses: "fas fa-briefcase",
      featureHead: "Effortless Case Management",
      featureBody:
        "Stay on top of every case with intuitive matter management. From client meetings to document storage, Wakili CRM centralizes everything, giving you a complete view of your ongoing cases.",
    },
    {
      fontAwesomeClasses: "fas fa-comments",
      featureHead: "Streamlined Communication",
      featureBody:
        "Ensure timely follow-ups and never miss an important client message. Wakili CRM’s automated reminders and communication tools keep you connected with your clients at all times.",
    },
    {
      fontAwesomeClasses: "fas fa-file-alt",
      featureHead: "Secure Document Storage",
      featureBody:
        "Store all your case documents securely in one place. Wakili CRM offers encrypted document management that ensures your clients' sensitive data remains protected.",
    },
    {
      fontAwesomeClasses: "fas fa-chart-line",
      featureHead: "Actionable Insights",
      featureBody:
        "Track the performance of your practice with in-depth analytics. Wakili CRM helps you measure case progress, client engagement, and overall business health.",
    },
    {
      fontAwesomeClasses: "fas fa-user-shield",
      featureHead: "Client Self-Service Portal",
      featureBody:
        "Empowering clients to have a personalized portal to enable them to access case updates, upload documents, and communicate directly with their lawyers and law firm — all at their convenience.",
    },
    {
      fontAwesomeClasses: "fas fa-user-check",
      featureHead: "Lead & Client Tracking",
      featureBody:
        "Track leads from initial contact to final conversion. With Wakili CRM, keep a full record of each client interaction and ensure you’re always a step ahead.",
    },
    {
      fontAwesomeClasses: "fas fa-file-invoice-dollar",
      featureHead: "Billing & Payment Tracking",
      featureBody:
        "Effortlessly manage billing, payments, and invoicing for your clients. Wakili CRM integrates accounting tools that keep you on top of financials, ensuring a smoother workflow.",
    },
    {
      fontAwesomeClasses: "fas fa-lock",
      featureHead: "Ultimate Privacy",
      featureBody:
        "We understand how sensitive and legal practice is, and we help you continue that. Apart from encrypting and storing messages, case documents, and case details, we also go further to ensuring that files can only be accessed by those you choose to share with, ensuring you have ultimate control of your files.",
    },
  ];

  const featuresContainer = document.querySelector(".featuresContainer");
  featuresList.forEach((feature) => {
    //Creating The Container For A single Feature
    const featureNode = document.createElement("div");
    featureNode.classList.add("featureNode");
    //Creating The FontAwesome Icon
    const icon = document.createElement("i");
    icon.classList = feature.fontAwesomeClasses;
    //
    const featureHead = document.createElement("h1");
    const headText = document.createTextNode(feature.featureHead);
    featureHead.appendChild(headText);
    //
    const featureBody = document.createElement("p");
    const bodyText = document.createTextNode(feature.featureBody);
    featureBody.appendChild(bodyText);

    featureNode.appendChild(icon);
    featureNode.appendChild(featureHead);
    featureNode.appendChild(featureBody);
    featuresContainer.appendChild(featureNode);
  });
}
features();
