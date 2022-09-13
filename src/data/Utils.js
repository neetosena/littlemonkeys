import ImageHeroOne from "../images/banner21.jpeg";
import ImageHeroSecond from "../images/banner31.jpeg";

import Alison from "../images/alison.png";

import PlaySchool from "../images/LITTLE-MONKEYS-PLAYSCHOOL-TAB-PIC.jpeg";
import AfterSchool from "../images/AFTERSCHOOL_2.jpeg";
import Ecce from "../images/ecce.png";

import Image1 from "../images/image-1.jpeg";
import Image2 from "../images/image-2.jpeg";
import Image3 from "../images/image-3.jpeg";
import Image4 from "../images/image-4.jpeg";
import Image5 from "../images/image-5.jpeg";
import Image6 from "../images/image-6.jpeg";
import Image7 from "../images/image-7.jpeg";
import Image8 from "../images/image-8.jpeg";
import Image9 from "../images/image-9.jpeg";
import Image10 from "../images/image-10.jpeg";
import Image11 from "../images/image-11.jpeg";
import Image12 from "../images/image-12.jpeg";
import Image13 from "../images/image-13.jpeg";
import Image14 from "../images/image-14.jpeg";
import Image15 from "../images/image-15.jpeg";
import Image16 from "../images/image-16.jpeg";

const heroImages = [
  {
    id: 1,
    image: ImageHeroOne,
    alt: "Child 1",
  },
  {
    id: 2,
    image: ImageHeroSecond,
    alt: "Child 1",
  },
];

const staff = [
  {
    name: "Alison",
    image: Alison,
    department: [
      "Manager",
      "Room Leader 1st Year ECCE Inclusion Coordinator Child Welfare Designated Liaison Person",
    ],
    level: [
      "FETAC LEVEL 6: EARLY CHILDHOOD CARE AND EDUCATIO",
      "FETAC LEVEL 6: LEADERSHIP FOR INCLUSION IN THE EARLY YEARS",
      "LEVEL 8: BATCHELOR OF DESIGN (HONS)",
      "PAEDIATRIC FIRST AID (FAR)",
    ],
  },
  {
    name: "Carol",
    image: Alison,
    department: [
      "Owner And Manager",
      "Inclusion Coordinator Child Welfare Designated Liaison Person Covid-19 Representative",
    ],
    level: [
      "FETAC LEVEL 6: EARLY CHILDHOOD CARE AND EDUCATION",
      "FETAC LEVEL 6:  LEADERSHIP FOR INCLUSION IN THE EARLY YEARS",
      "PAEDIATRIC FIRST AID (FAR)",
      "Currently working towards Level 7 Early Childhood Education",
    ],
  },
  {
    name: "Aisling",
    image: Alison,
    department: ["Aim Support Worker"],
    level: [
      "FETAC LEVEL 5: EARLY CHILDHOOD CARE AND EDUCATION",
      "PAEDIATRIC FIRST AID (FAR)",
      "Currently working towards full Level 6 award in Early Childhood Care and Education",
    ],
  },
  {
    name: "Jade",
    image: Alison,
    department: ["ECCE Assistant  2nd Year"],
    level: [
      "FETAC LEVEL 6: EARLY YEARS CHILDHOOD CARE AND EDUCATION",
      "HND SOCIAL CARE PRACTICE",
      "PAEDIATRIC FIRST AID",
    ],
  },
  {
    name: "Sarah",
    image: Alison,
    department: ["ECCE Assistant 2nd YearAIM Support"],
    level: [
      "FETAC LEVEL 5: EARLY CHILDHOOD CARE AND EDUCATION",
      "PAEDIATRIC FIRST AID",
    ],
  },
  {
    name: "Lyndsey",
    image: Alison,
    department: ["AIM Support Worker", "ECCE Assistant 1st Year"],
    level: [
      "FETAC LEVEL 6: EARLY CHILDHOOD CARE AND EDUCATION",
      "PAEDIATRIC FIRST AID",
    ],
  },
  {
    name: "Kelly",
    image: Alison,
    department: [
      "Manager",
      "Room Leader 2nd Year ECCE Health and Safety Officer",
    ],
    level: [
      "BA EARLY CHILDHOOD EDUCATION(Level 8)",
      "FETAC LEVEL 6: EARLY CHILDHOOD CARE AND EDUCATION",
      "PAEDIATRIC FIRST AID",
      "Currently working towards MA Educational Practise",
    ],
  },
  {
    name: "Chloe",
    image: Alison,
    department: ["Afterschool Assistant", "Ecce Assistant", "Breakfast Club"],
    level: [
      "FETAC LEVEL 6 :EARLY CHILDHOOD CARE AND EDUCATION",
      "FETAC LEVEL 5: EARLY CHILDHOOD CARE AND EDUCATION",
      "PAEDIATRIC FIRST AID",
    ],
  },
  {
    name: "Sarah",
    image: Alison,
    department: ["Afterschool Assistant"],
    level: [
      "LEVEL 5 QQI: EARLY CHILDHOOD CARE AND EDUCATION",
      "PAEDIATRIC FIRST AID",
      "Currently working towards full QQI Level 6 award in Early Childhood Care and Education",
    ],
  },
  {
    name: "Sue",
    image: Alison,
    department: ["Afterschool Assistant", "Ecce Assistant", "Breakfast Club"],
    level: [
      "LEVEL 5 QQI: EARLY CHILDHOOD CARE AND EDUCATION",
      "Currently working towards Full QQI level 6 award in  Early childhood care and education",
    ],
  },
  {
    name: "Ágota",
    image: Alison,
    department: ["Afterschool Assistant"],
    level: [
      "MA ART HISTORY, GERMAN & ROMANCE PHILOLOGY",
      "Currently working towards full QQI Level 6 award in Early Childhood Care and Education",
    ],
  },
  {
    name: "Michelle",
    image: Alison,
    department: ["Afterschool Assistant"],
    level: [
      "FETAC LEVEL 6 :EARLY CHILDHOOD CARE AND EDUCATION",
      "FETAC LEVEL 5: EARLY CHILDHOOD CARE AND EDUCATION",
      "PAEDIATRIC FIRST AID",
    ],
  },
  {
    name: "Rebecca",
    image: Alison,
    department: ["Afterschool Assistant"],
    level: ["QQI LEVEL 5 NURSING STUDIES"],
  },
];

const tabs = [
  {
    title: "Little Monkeys Playschool",
    image: PlaySchool,
    paragraph:
      "Little Monkeys Playschool is a child-centred, play-based environment, where each child is supported and encouraged to have fun as they learn.",
    content: [
      "We are a professional, qualified, and caring team. We aim to provide a safe, secure, and fun environment for your child to grow and develop, in preparation for primary school. We have an open door policy",
      "We follow a child-led emerging curriculum, using a play based approach. This is informed by Aistear the Early Childhood Curriculum Framework.",
      "We understand children develop through play, as this is how children interact and learn about the world around them, both indoors and outdoors.",
      "At Little Monkeys we believe in an inclusive approach to learning, welcoming all children and working in partnership with all families. We believe every child has ability and develops at their own pace.",
      "Our curriculum promotes the holistic development of every child. We aim to foster independence, self-belief, social skills, and problem solving abilities.",
      "Your child’s learning journey is documented through both observations and the compilation of a learning journal which are shared with the child and parents.",
    ],
  },
  {
    title: "Afterschool Service",
    image: AfterSchool,
    paragraph: "",
    content: [
      "Little Monkeys provides breakfast club and early morning drop off to local schools (subject to demand).",
      "We then collect children from school and bring them back to the afterschool service.",
      "A homework club operates, where staff are able to assist and help as necessary.",
      "Nutritious snacks are provided.",
      "Children have the opportunity to relax and socialise, take part in games, enjoy arts and crafts and play in the secure outdoor area.",
    ],
  },
  {
    title: "ECCE Preschool Scheme",
    image: Ecce,
    paragraph: "",
    content: [
      "The Early Childhood Care and Education Programme (ECCE) programme is a universal two-year pre-school programme available to all children within the eligible age range. Children are eligible to start the ECCE scheme in the September of the year that they turn 3 years old.",
      "It provides children with their first formal experience of early learning prior to commencing primary school. The programme is provided from 9.30-12.30, three hours per day, five days per week over 38 weeks per year and the programme year runs from September to June each year.",
    ],
  },
];

const testimonials = [
  {
    message:
      "I go to Little Monkeys afterschool 3 days a week. I have made lots of friends even from different schools. I have lots of fun playing in the outdoor area. They doo fun activities inside and outside. It’s a very nice place to be",
    name: "Jake age 11",
  },
  {
    message:
      "When my daughter joined Little Monkeys she was very shy but the welcoming staff and kindness they possess made her ready for primary school. I would recommend Little Monkeys to anyone looking for a preschool.",
    name: "J.McCourtney",
  },
  {
    message:
      "During my time with Little Monkeys, I have the confidence to say that is one of the best after schools in Dublin. The staff are incredibly friendly, and they made my son feel right at home. The after school itself is clean and the back garden is spacious with lots of things to do. I would thoroughly recommend to any parent looking for afterschool care for their child.",
    name: "William",
  },
];

const gallery = [
  {
    id: 1,
    image: Image1,
  },
  {
    id: 2,
    image: Image2,
  },
  {
    id: 3,
    image: Image3,
  },
  {
    id: 4,
    image: Image4,
  },
  {
    id: 5,
    image: Image5,
  },
  {
    id: 6,
    image: Image6,
  },
  {
    id: 7,
    image: Image7,
  },
  {
    id: 8,
    image: Image8,
  },
  {
    id: 9,
    image: Image9,
  },
  {
    id: 10,
    image: Image10,
  },
  {
    id: 11,
    image: Image11,
  },
  {
    id: 12,
    image: Image12,
  },
  {
    id: 13,
    image: Image13,
  },
  {
    id: 14,
    image: Image14,
  },
  {
    id: 1,
    image: Image1,
  },
  {
    id: 15,
    image: Image15,
  },
  {
    id: 16,
    image: Image16,
  },
];

export { heroImages, staff, tabs, testimonials, gallery };
