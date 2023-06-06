import rim from "../assets/images/cases/media.png"
import kai from "../assets/images/cases/university.png"
import airplane from "../assets/images/cases/airplane.png"

const cases = [
  {
    id: 1,
    title: "major media group",
    image: rim,
    description: "media group managing 18859 partners in 103 cities.",
    task: "automating business processes inside media group.Creating platform to manage billboards and automating outdoor advertising management processes",
    solutions: [
      "create product for DOOH market based on media group's business processes. Product that will meet requirements of the most outdoor advertising providers.",
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
  },
  {
    id: 2,
    title: "state technical university",
    image: kai,
    description: "a large technical university with 4 branches and 12,000 students in 2022",
    task: "creating prototype of University’s DATA system. Platform goal is to collect and store data and provide access to aircraft industry data",
    solutions: [
      "create a single point of assembly for the aircraft industry cluster",
      "develop information support for the activities of the startup studio of University’s Technopark and other similar elements of the development infrastructure",
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
  },
  {
    id: 3,
    title: "airport",
    image: airplane,
    description: "airport (serving more than 28 million people a year)",
    task: "10% reduction in flight delays (reducing the number of negative events at the airport). A negative event is any flight delay of more than 15 minutes",
    solutions: [
      "creatе a system for modeling negative events",
      "creatе a correlation model for the parameters of negative events and their number",
      "create negative event cards",
      "create dashboards with visual display of dependencies"
    ],
    effects: {
      desc: "implemented and deployed",
      list: [
        "aggregation of all 80+ parameters influencing negative events in one place (DWH)",
        "reducing the impact of the human factor on flight delays",
        "evaluation of event parameters for the number of negative outcomes",
        "decrease in the time of investigation of negative events by 10 times",
      ]
    },
  },
];

export default cases;