import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { RiInstagramLine } from "@react-icons/all-files/ri/RiInstagramLine";
import { RiTwitterFill } from "@react-icons/all-files/ri/RiTwitterFill";
import { RiFacebookCircleFill } from "@react-icons/all-files/ri/RiFacebookCircleFill";
import { FaGoogleWallet } from "@react-icons/all-files/fa/FaGoogleWallet";
import "./styles.css";

const Card = (props) => {

  return (
    <div className="cardContainer">
      
      {props.filterName.length < 0 ? props.sortData === false
        ? props.users.map((response) => (
            <Fragment key={response.id}>
              <div className="cardWrapper">
                <div className="cardTop">
                  <img src={response.image} alt="" className="userImage" />
                  <div>{response.name}</div>
                  <div>{response.description}</div>
                </div>
                <div className="cardButtons">
                  <div className="socialIcons">
                    {response.socialMedia.map((res) => (
                      <Fragment key={res}>
                        <a target="_blank" href={res.instagram}>
                          <RiInstagramLine />
                        </a>
                        <a target="_blank" href={res.facebook}>
                          <RiFacebookCircleFill />
                        </a>
                        <a target="_blank" href={res.twitter}>
                          <RiTwitterFill />
                        </a>
                        <a target="_blank" href={res.page}>
                          <FaGoogleWallet />
                        </a>
                      </Fragment>
                    ))}
                  </div>
                  <Link to={`/user/${response.id}`}>
                    <button>View More</button>
                  </Link>
                </div>
              </div>
            </Fragment>
          ))
        : props.sortedUsers.map((response) => (
            <Fragment key={response.id}>
              <div className="cardWrapper">
                <div className="cardTop">
                  <img src={response.image} alt="" className="userImage" />
                  <div>{response.name}</div>
                  <div>{response.description}</div>
                </div>
                <div className="cardButtons">
                  {/* <div className="socialIcons">
                  {response.socialMedia.map(res => <Fragment key={res}><a target='_blank' href={res.instagram}>
                    <RiInstagramLine />
                  </a>
                  <a target='_blank' href={res.facebook}>
                    <RiFacebookCircleFill />
                  </a>
                  <a target='_blank' href={res.twitter}>
                    <RiTwitterFill />
                  </a>
                  <a target='_blank' href={res.page}>
                    <FaGoogleWallet />
                  </a></Fragment>)}
                </div> */}
                  <Link to={`/user/${response.id}`}>
                    <button>View More</button>
                  </Link>
                </div>
              </div>
            </Fragment>
          )): props.users.filter((itm) => {
            if (!props.filterName) return true
            if (itm.name.includes(props.filterName) || itm.description.includes(props.filterName)) {
              return true;
            }
          }).map(item => (
            <Fragment key={item.id}>
                  <div className="cardWrapper">
                    <div className="cardTop">
                      <img src={item.image} alt="" className="userImage" />
                      <div className="fullName">{item.name} {item.lastname}</div>
                      <div>{item.description}</div>
                    </div>
                    <div className="cardButtons">
                      <div className="socialIcons">
                        {item.socialMedia.map((res) => (
                          <Fragment key={res}>
                            <a target="_blank" href={res.instagram}>
                              <RiInstagramLine />
                            </a>
                            <a target="_blank" href={res.facebook}>
                              <RiFacebookCircleFill />
                            </a>
                            <a target="_blank" href={res.twitter}>
                              <RiTwitterFill />
                            </a>
                            <a target="_blank" href={res.page}>
                              <FaGoogleWallet />
                            </a>
                          </Fragment>
                        ))}
                      </div>
                      <Link to={`/user/${item.id}`}>
                        <button>View More</button>
                      </Link>
                    </div>
                  </div>
                </Fragment>
          ))}
    </div>
  );
};

export default Card;
