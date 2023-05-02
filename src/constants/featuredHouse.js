import House1 from "../images/house/house1.jpg";
import House2 from "../images/house/house2.jpg";
import House3 from "../images/house/house3.jpg";
import House4 from "../images/house/house4.jpg";

import Villa1 from "../images/villa/villa1.jpg";
import Villa2 from "../images/villa/villa2.jpg";
import Villa3 from "../images/villa/villa3.jpg";
import Villa4 from "../images/villa/villa4.jpg";

import Apartment1 from "../images/apartment/apartment1.jpg";
import Apartment2 from "../images/apartment/apartment2.jpg";
import Apartment3 from "../images/apartment/apartment3.jpg";
import Apartment4 from "../images/apartment/apartment4.jpg";

import Person1 from "../images/persons/dianne.svg";
import Person2 from "../images/persons/robert.svg";
import Person3 from "../images/persons/ronald.svg";
import Person4 from "../images/persons/jenny.svg";

import Fire from "../images/icons/fire.svg";
import Home from "../images/icons/home.svg";
import Wallet from "../images/icons/wallet.svg";

export const house = [
  {
    id: 1,
    foto: House1,
    tags: {
      icon: Fire,
      title: "Popular",
    },
    name: "Roselands House",
    salary: 35000000,
    person: {
      foto: Person1,
      fullName: "Dianne Russell",
      place: "Manchester, Kentucky",
    },
  },
  {
    id: 2,
    foto: House2,
    tags: {
      icon: Home,
      title: "New house",
    },
    name: "Woodlandside",
    salary: 20000000,
    person: {
      foto: Person2,
      fullName: "Robert Fox",
      place: "Dr. San Jose, South Dakota",
    },
  },
  {
    id: 3,
    foto: House3,
    tags: {
      icon: Wallet,
      title: "Best Deals",
    },
    name: "The Old Lighthouse",
    salary: 44000000,
    person: {
      foto: Person3,
      fullName: "Ronald Richards",
      place: "Santa Ana, Illinois",
    },
  },
  {
    id: 4,
    foto: House4,
    tags: {
      icon: Home,
      title: "New house",
    },
    name: "Cosmo's House",
    salary: 22000000,
    person: {
      foto: Person4,
      fullName: "Jenny Wilson",
      place: "Preston Rd. Inglewood, Maine 98380",
    },
  },
];

export const villa = [
  {
    id: 1,
    foto: Villa3,
    tags: {
      icon: Wallet,
      title: "Best Deals",
    },
    name: "Ocean's Edge Villa",
    salary: 43000000,
    person: {
      foto: Person3,
      fullName: "Ronald Richards",
      place: "Santa Ana, Illinois",
    },
  },
  {
    id: 2,
    foto: Villa1,
    tags: {
      icon: Fire,
      title: "Popular",
    },
    name: "Sea Breeze Estate",
    salary: 31000000,
    person: {
      foto: Person1,
      fullName: "Dianne Russell",
      place: "Manchester, Kentucky",
    },
  },
  {
    id: 3,
    foto: Villa2,
    tags: {
      icon: Home,
      title: "New house",
    },
    name: "Coastal Retreat Mansion",
    salary: 26000000,
    person: {
      foto: Person2,
      fullName: "Robert Fox",
      place: "Dr. San Jose, South Dakota",
    },
  },

  {
    id: 4,
    foto: Villa4,
    tags: {
      icon: Fire,
      title: "Popular",
    },
    name: "Shoreline Sanctuary",
    salary: 33000000,
    person: {
      foto: Person4,
      fullName: "Jenny Wilson",
      place: "Preston Rd. Inglewood, Maine 98380",
    },
  },
];

export const apartment = [
  {
    id: 1,
    foto: Apartment2,
    tags: {
      icon: Fire,
      title: "Popular",
    },
    name: "Retreat Apartments",
    salary: 31000000,
    person: {
      foto: Person1,
      fullName: "Dianne Russell",
      place: "Manchester, Kentucky",
    },
  },
  {
    id: 2,
    foto: Apartment1,
    tags: {
      icon: Wallet,
      title: "Best Deals",
    },
    name: "Oasis Apartments",
    salary: 43000000,
    person: {
      foto: Person3,
      fullName: "Ronald Richards",
      place: "Santa Ana, Illinois",
    },
  },

  {
    id: 3,
    foto: Apartment3,
    tags: {
      icon: Home,
      title: "New house",
    },
    name: "Coastal Breeze Suites",
    salary: 26000000,
    person: {
      foto: Person2,
      fullName: "Robert Fox",
      place: "Dr. San Jose, South Dakota",
    },
  },

  {
    id: 4,
    foto: Apartment4,
    tags: {
      icon: Fire,
      title: "Popular",
    },
    name: "Ocean View Residences",
    salary: 33000000,
    person: {
      foto: Person4,
      fullName: "Jenny Wilson",
      place: "Preston Rd. Inglewood, Maine 98380",
    },
  },
];
