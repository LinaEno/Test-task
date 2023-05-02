import Person1 from "../images/persons/dianne.svg";
import Person2 from "../images/persons/esther.svg";
import Person3 from "../images/persons/ronald.svg";

import House1 from "../images/villa/villa4.jpg";
import House2 from "../images/house/house2.jpg";
import House3 from "../images/review/review.jpg";

export const reviews = [
  {
    id: 1,
    image: House1,
    title: "Best! I got the house I wanted through Hounter",
    desc: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    person: {
      foto: Person1,
      fullName: "Dianne Russell",
      desc: "Manager Director",
      rate: "4.6",
    },
  },
  {
    id: 2,
    image: House3,
    title: "Through the Hounter, I can get a house for my self",
    desc: "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
    person: {
      foto: Person2,
      fullName: "Esther Howard",
      desc: "Head of Marketing",
      rate: "4.6",
    },
  },
  {
    id: 3,
    image: House2,
    title: "My house sold out fast!",
    desc: "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",
    person: {
      foto: Person3,
      fullName: "Courtney Henry",
      desc: "CEO Andarafish",
      rate: "4.3",
    },
  },
];
