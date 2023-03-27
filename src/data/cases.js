import rim from "../assets/images/cases/rim.png"
import kai from "../assets/images/cases/kai.png"
const cases = [
  {
    id: 1,
    title: "RIM media group",
    image: rim,
    url: "/rim-group",
    description: "\"RIM\" media groupManaging 18859 partners in 103 cities. One of top-3 DOOH companies in Russia.",
    task: "Automating business processes inside media group.Creating platform to manage billboards and automating outdoor advertising management processes",
    solution: [
      "Create product for DOOH market based on RIM's business processes. Product that will meet requirements of the most outdoor advertising providers.",
      "Deploy DLH to create single database of all advertising surfaces"
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
    url: "/kai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil qui unde architecto consequuntur temporibus odio fugiat, repellat ullam excepturi optio ipsam non esse voluptate saepe doloribus modi dignissimos reprehenderit.",
    task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil qui unde architecto consequuntur temporibus odio fugiat, repellat ullam excepturi optio ipsam non esse voluptate saepe doloribus modi dignissimos reprehenderit.",
    solution: [
      "ipsum dolor sit amet consectetur adipisicing elit.",
      "am nihil qui unde architecto consequunt"
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
    company_site: "https://kai.ru/",
  },
];

export default cases;