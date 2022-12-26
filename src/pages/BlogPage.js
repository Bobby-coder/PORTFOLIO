import BlogHeroSection from "../components/blogpage/BlogHeroSection";
import BlogList from "../components/blogpage/BlogList";

const BlogPage = () => {
  return (
    <>
      <div className="flex flex-col mx-auto pt-6 px-4 sm:px-16 md:px-0 md:max-w-2xl lg:px-28 lg:max-w-7xl xl:px-32 mt-16 sm:mt-20">
        <BlogHeroSection />
        <BlogList />
      </div>
    </>
  );
};

export default BlogPage;
