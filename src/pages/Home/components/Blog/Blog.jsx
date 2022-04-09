import "./Blog.scss";
import { mockData } from "constants/mockData";
import BlogItem from "./BlogItem/BlogItem";
import { blogIcon } from "assets/images";
import { SectionTitle } from "components";

const Blog = () => {
  const { blogs } = mockData;
  return (
    <section id="blog" className="section">
      <div className="container">
        <SectionTitle title="blog" icon={blogIcon} />
        <div className="blog">
          <div className="blog__wrap ">
            {blogs &&
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
