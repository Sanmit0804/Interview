import React from "react";
import "./Cards.css";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { GoOrganization } from "react-icons/go";

const Cards = ({ name, email, company, phone1, phone2, role }) => {
  return (
    <div className="card">
      <div className="card-data">
        <div className="card-header">
          Score 0.0
          <input type="checkbox" name="" id="" />
        </div>
        <div className="card-body">
          <span className="initials">EJ</span>
          <div className="details">
            <p>
              <CgProfile /> {name}
            </p>
            <p>
              <MdOutlineEmail />
              {email}
            </p>
            <p>
              <GoOrganization />
              {company}
            </p>
            <p>{phone1}</p>
            <p>{phone2}</p>
            <p>{role}</p>
          </div>
        </div>
      </div>
      <div className="active-hover">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </div>
  );
};

export default Cards;
