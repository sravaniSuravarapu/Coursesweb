import {
  BackendWithPython,
  DataAnalytics,
  DSA,
  Mern,
  SoftwareAutomation,
} from "../assets/images/index";

const prerequisitesList = ['Basic JavaScript knowledge', 'Familiarity with React'];
const syllabusData = [
  {
    week: 1,
    topic: 'Introduction to React Native',
    content: 'Overview of React Native, setting up your development environment.'
  },
  {
    week: 2,
    topic: 'Building Your First App',
    content: 'Creating a simple mobile app using React Native components.'
  },
  {
    week: 3,
    topic: 'Building Your First App',
    content: 'Creating a simple mobile app using React Native components.'
  },
  {
    week: 4,
    topic: 'Building Your First App',
    content: 'Creating a simple mobile app using React Native components.'
  },
  {
    week: 5,
    topic: 'Building Your First App',
    content: 'Creating a simple mobile app using React Native components.'
  },
  {
    week: 6,
    topic: 'Building Your First App',
    content: 'Creating a simple mobile app using React Native components.'
  },
];

// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
  {
    _id: 1005,
    title: "Journal",
    link: "/journal",
  },
];


export const paginationItems = [
  {
    _id: 1001,
    img: SoftwareAutomation,
    productName: "Software Testing and Automation",
    price:"199.00",
    InstructorName:"By Sandeep Jain",
    des:"This course provides an overview of software testing methodologies and automation techniques. It covers various aspects including manual testing, test automation frameworks, scripting, and introductory concepts of continuous integration/continuous deployment (CI/CD) pipelines.",
    enrollment_status:"Open",
    course_duration:"8 weeks",
    schedule:"Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    status:"open",
    location:"Online (Zoom sessions)",
    prerequisites:prerequisitesList,
    Syllabus:syllabusData,
      
  },
    {
    _id: "1002",
    img: BackendWithPython,
    productName: "Complete Backend With Python",
    price: "699.00",
    InstructorName: "Ankush Agarwal",
    des: "Backend With Python focuses on leveraging Python for server-side development, handling databases, and building scalable and efficient web applications.",
    enrollment_status: "closed",
    course_duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online (Zoom sessions)",
    prerequisites: ["Basic Python knowledge", "Understanding of databases"],
    Syllabus:syllabusData,
  },
    {
    _id: "1003",
    img: DataAnalytics,
    productName: "Data Anayltics",
    price: "499.00",
    InstructorName: "Sita Mehar",
    des: "DataAnalytics involves interpreting, visualizing, and deriving insights from vast datasets to inform decision-making and drive business strategies.",
    enrollmentStatus: "in progress",
    courseDuration: "6 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online (Zoom sessions)",
    prerequisites: ["Basic Statistics", "Data Visualization"],
    Syllabus:syllabusData
  },
    {
        _id: "1004",
        img: DSA,
        productName: "Complete Dsa With Python",
        price: "199.00",
        InstructorName: "Sal Khan",
        des: "Complete DSA With Python covers comprehensive data structures and algorithms implementation using Python, enhancing problem-solving skills and algorithmic thinking.",
        enrollment_status: "Open",
        course_duration: "20 weeks",
        schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
        location: "Online (Zoom sessions)",
        prerequisites: ["Basic Python knowledge", "Algorithmic Thinking"],
        Syllabus:syllabusData
      },
      {
        _id: "1005",
        img: Mern,
        productName: "Mern Stack",
        price: "399.00",
        InstructorName: "Dr. Andrew Ng",
        des: "MERN is a full-stack framework utilizing MongoDB, Express.js, React, and Node.js, enabling end-to-end JavaScript-based web development.",
        enrollment_status: "closed",
        course_duration: "10 weeks",
        schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
        location: "Online (Zoom sessions)",
        prerequisites: ["Basic JavaScript", "React Fundamentals"]
      }

];
 

