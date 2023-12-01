"use client";

const products = [
  {
    name: "StartUps",
    tagline: "Launch your MVP.",
    price: "$2500 per month",
    action: "Subscribe",
    description:
      "Accelerate your StartUp through the Lexington Pilot Program. Develop a prototype to validate product-market fit.",
    technology: "Prototype Web App built on the Lexington StartUp solution.",
    consultingmanagement: "40hrs of consulting team advisory.",
    projectmanagement: "40hrs of Project team advisory.",
    product: "80hrs technology development of MVP prototype.",
    ai: "AI driven design workflow.",
    web3: "Out the box support for Web3 Authentication & User Management.",
    support: "Discord support.",
    producturl: "/product1.jpg",
  },
  {
    name: "Consulting Management",
    tagline: "Supercharge your business.",
    price: "$5000 per month",
    action: "Subscribe",
    description:
      "Engage the Lexington consulting team to create a business & technology roadmap, strategy, product design & SaaS solution.",
    technology:
      "Custom scalable technology solutions that integrate with yyour existin platform.",
    consultingmanagement: "80hrs of Consulting team advisory.",
    projectmanagement: "40hrs of Project team advisory.",
    product:
      "80hrs technology development of MVP to ideate & test product-market fit.",
    ai: "AI driven design workflow.",
    web3: "Web3 Authentication & User Management. Blockchain ready.",
    support: "Slack support.",
    producturl: "/product2.jpg",
  },
  {
    name: "Project Management",
    tagline: "Scale your business.",
    price: "$10000 per month",
    action: "Subscribe",
    description:
      "Engage the Lexington project team to develop your technology platform. Developing your product & managing the customer experience.",
    technology:
      "Custom scalable technology solutions that integrate with yyour existin platform.",
    consultingmanagement: "40hrs of Consulting team advisory",
    projectmanagement: "80hrs of Project team advisory.",
    product: "80hrs technology development of product roadmap.",
    ai: "AI driven design workflow.",
    web3: "Web3 Authentication & User Management. Blockchain ready.",
    support: "Dedicated business support.",
    producturl: "/product3.jpg",
  },
  {
    name: "Enterprise Team",
    tagline: "Level up.",
    price: "Contact To Discuss",
    action: "Contact",
    description:
      "Embed the Lexington Professional Services team. Leverage prebuilt tech stacks, partner networks & technical capabilities.",
    technology:
      "Access teams with specialized knowledge or skills to address critical.",
    consultingmanagement:
      "Strategic modelling of your organization & future technology requirements.",
    projectmanagement:
      "Our Professional Services team can help your business bring to ideas to market quickly.",
    product: "Integrate the latest technology.",
    ai: "Prebuilt AI models for product development.",
    web3: "Implement Web3 technologies to scale your business.",
    support: "Global 24/7 support.",
    producturl: "/product4.jpg",
  },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto">
      <h1 className="text-5xl uppercase font-bold p-4 text-center">Products</h1>
      <h3 className="text-xl text-center py-4">
        This is a showcase of management consulting business pricing model.
      </h3>
      <div className="m-4 px-8 mx-auto justify-between flex flex-grow flex-wrap gap-4">
        {/*flex flex-wrap gap-4 content-center justify-center*/}
        {products.map((item) => (
          <div
            key={item.id}
            className="grow card card-bordered glass shadow-xl max-w-[300px] max-h-[600px] rounded-xl "
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <h3 className="font-bold italic">{item.tagline}</h3>
              <p className="text-sm">{item.description}</p>
              <ul className="text-xs list-disc list-outside text-left">
                <li>
                  <span>Consulting Management</span> -{" "}
                  {item.consultingmanagement}
                </li>
                <li>
                  <span>Project Management</span> - {item.projectmanagement}
                </li>
                <li>
                  <span>Product Management</span> - {item.product}
                </li>
                <li>
                  <span>Technology</span> - {item.technology}
                </li>
                <li>
                  <span>AI</span> - {item.ai}
                </li>
                <li>
                  <span>Web3</span> - {item.web3}
                </li>
                <li>
                  <span>Support</span> - {item.support}
                </li>
              </ul>
              <p className="font-semibold text-primary">{item.price}</p>
              <div className="card-actions">
                <button className="btn ">{item.action}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
