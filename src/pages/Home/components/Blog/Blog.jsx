import "./Blog.scss";
import { mockData } from "constants/mockData";
import BlogItem from "./BlogItem/BlogItem";
import { blogIcon } from "assets/images";

const Blog = () => {
  const { blogs } = mockData;
  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="section__title">
          <h4 className="text__uppercase text__center">
            <img src={blogIcon} alt="demo" />
            Blog
          </h4>
        </div>
        <div className="blog">
          <div className="blog__wrap ">
            {blogs &&
              blogs.map((data, index) => (
                <BlogItem
                  flip={index % 2 == 0 ? "" : "flip"}
                  data={data}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
