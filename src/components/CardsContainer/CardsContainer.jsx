import React from "react";
import "./CardsContainer.css";
import Cards from "../Cards/Cards";

const CardsContainer = () => {
  const data = [
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
    {
      name: "Elisabeth Johnson",
      email: "tim.jennings@example.com",
      company: "Cater and company, LLC",
      phone1: "9871 555 987",
      phone2: "9871 555 987",
      role: "Member",
    },
  ];
  return (
    <div className="cards-container">
      {data.map((data, index) => (
        <Cards
          key={index}
          name={data.name}
          email={data.email}
          company={data.company}
          phone1={data.phone1}
          phone2={data.phone2}
          role={data.role}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
