import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  BackendWithPython,
  DataAnalytics,
  DSA,
  Mern,
  SoftwareAutomation,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { paginationItems } from "../../../constants";

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
];



const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="Courses We Offer" />
      <Slider {...settings}>
        {paginationItems.map((item) => (
          <div key={item._id} className="px-2">
            <Product
              _id={item._id}
              img={item.img}
              CourseName={item.productName}
              price={item.price}
              InstructorName={item.InstructorName}
              des={item.des}
              enrollment_status={item.enrollment_status}
              course_duration={item.course_duration}
              schedule={item.schedule}
              status={item.status}
              location={item.location}
              prerequisites={item.prerequisites}
              Syllabus={item.Syllabus}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
