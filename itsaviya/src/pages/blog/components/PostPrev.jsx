import React from "react";
import { Link } from "react-router-dom";

const PostPrev = ({ blogSummary }) => {
  const { engName, name, intro, content, date, imageSrc } = blogSummary;
  return (
    <Link to={`/blog/${engName}`}>
      <section className="transition-all flex justify-end gap-16 border-2 border-thirdy rounded-lg hover:-translate-y-1 hover:cursor-pointer shadow-md hover:shadow-xl">
        <div className="flex flex-col gap-4">
          <h1 className="header text-3xl">{name}</h1>
          <div>
            <h1 className="header2 text-2xl ">{content[0].header}</h1>
            <p className="text-xl overflow-ellipsis overflow-hidden max-w-xl">
              {intro}
            </p>
          </div>
          {/* {content.map((e) => (
            <div className="md:text-xl text-lg overflow-ellipsis overflow-hidden max-w-xl">
              <h1 с>{e.header}</h1>
              <p>{e.text}</p>
            </div>
          ))} */}
        </div>
        <img
          src={imageSrc}
          alt="post-image"
          className="md:h-64 md:w-64 h-56 w-56 rounded-r-lg"
        />
      </section>
    </Link>
  );
};

export default PostPrev;
