import { FC } from "react";
import { NavBar } from "../../components";
import Blog from "../../components/blog/blog";
import Footer from "../../components/common/footer/footer";
import { BlogPageProps } from "./blog-page.t";

const BlogPage: FC<BlogPageProps> = () => {
  return (
    <>
      <NavBar userExist={false} bg="#fafafa" isLanding={true} />
      <Blog />
      <Footer />
    </>
  );
};

export default BlogPage;
