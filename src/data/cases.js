import rim from "../assets/images/cases/rim.png"
import kai from "../assets/images/cases/kai.png"
const cases = [
  {
    id: 1,
    title: "RIM media group",
    image: rim,
    description: "\"RIM\" media groupManaging 18859 partners in 103 cities. One of top-3 DOOH companies in Russia.",
    task: "automating business processes inside media group.Creating platform to manage billboards and automating outdoor advertising management processes",
    solutions: [
      "create product for DOOH market based on RIM's business processes. Product that will meet requirements of the most outdoor advertising providers.",
      "deploy DLH to create single database of all advertising surfaces"
    ],
    effects: {
      desc: "Implemented and deployed",
      list: [
        "DLH.Data Catalog",
        "DLH.Model Optimizer",
        "DLH.Data Analyzer",
        "Camunda BPM"
      ]
    },
    company_site: "https://rim-group.ru/",
  },
  {
    id: 2,
    title: "kazan state technical university",
    image: kai,
    description: "Kazan State Technical University named after A.N. Tupolev",
    task: "creating prototype of KAI DATA system. Platform goal is to collect and store data and provide access to aircraft industry data",
    solutions: [
      "create a single point of assembly for the aircraft industry cluster",
      "develop information support for the activities of the startup studio of Technopark KAI and other similar elements of the development infrastructure",
      "enable real-time data-driven management and modeling of industry development",
      "create the necessary conditions for implementing a digital twin of the aerospace industry"
    ],
    effects: {
      desc: "implemented and deployed",
      list: [
        "DLH.Data Catalog prototype",
        "DLH.Model Optimizer prototype",
        "obtained a grant from Yandex.Cloud",
      ]
    },
    company_site: "https://kai.ru/",
  },
];

export default cases;