import React from "react";

const BlogItem = ({ data, flip }) => {
  const { image, fieldWork, jobName, work, workTitle, workDescription } = data;
  return (
    <div className={`blog__item ${flip}`}>
      <div className="item__image">
        <figure>
          <img src={image} alt="Blog Images" />
          <div className="image__infos">
            <div className="user">
              <i className="fa fa-user"></i> John Doe
            </div>
            <div className="time">
              <i className="fa-solid fa-clock"></i> August 7, 2020
            </div>
            <div className="talk">
              <i className="fa-solid fa-comments"></i> 168
            </div>
          </div>
        </figure>
      </div>
      <div className="item__content">
        <div className="job">
          s
          <p>
            <a className="job__field" href="#/" rel="noreferrer">
              {fieldWork}
            </a>{" "}
            /{" "}
            <a className="job__name" href="#/" rel="noreferrer">
              {jobName}
            </a>{" "}
            / <span className="job__working">{work}</span>
          </p>
        </div>
        <div className="description">
          <p>{workTitle}</p>
          <p>{workDescription}</p>
        </div>
        <div className="readMore">
          <a href="/more-information" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
