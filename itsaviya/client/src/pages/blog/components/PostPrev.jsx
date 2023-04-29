import React from "react";
import { Link } from "react-router-dom";

import blogImg from "../../../general/images/1x.jpg";

const PostPrev = ({ blogSummary }) => {
  const { name, title, intro, content, date, imageUrl } = blogSummary;
  return (
    <Link to={`/blog/${name}`}>
      <section className="md:pl-10 transition-all flex md:flex-row flex-col md:justify-end md:gap-16 gap-4 border-2 border-fourthy rounded-lg hover:-translate-y-1 hover:cursor-pointer shadow-md hover:shadow-xl md:h-64">
        <div className="flex flex-col gap-4 md:items-stretch items-center order-1 md:order-2 py-4">
          <h1 className="header md:text-3xl text-xl md:text-right text-center">
            {title}
          </h1>
          <div className="hidden md:inline">
            <p className="text-xl post-prev-text">{intro}</p>
          </div>
        </div>

        <img
          src={imageUrl}
          alt="post-image"
          className=" md:w-64 h-auto w-full md:rounded-r-lg rounded-b-lg order-2"
        />
      </section>
    </Link>
  );
};

export default PostPrev;
