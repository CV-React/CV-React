import "./Blog.scss";
import { mockData } from "utils/constants/mockData";
import BlogItem from "./BlogItem/BlogItem";
import { blogIcon } from "assets/images";
import { SectionTitle } from "components";

const Blog = () => {
  const { blogs } = mockData;
  return (
    <section id="blog" className="section animated">
      <div className="container">
        <SectionTitle title="blog" icon={blogIcon} />
        <div className="blog">
          <div className="blog__wrap ">
            {blogs &&
              !!blogs.length &&
              blogs.map((blog, index) => (
                <BlogItem
                  flip={index % 2 === 0 ? "" : "flip"}
                  data={blog}
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
