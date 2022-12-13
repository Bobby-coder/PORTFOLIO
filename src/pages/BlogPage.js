import BlogHeroSection from "../components/blogpage/BlogHeroSection";
import BlogList from "../components/blogpage/BlogList";

const BlogPage = () => {
  return (
    <>
      <div class="sm:px-8 mt-16 sm:mt-20">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <BlogHeroSection />
              <BlogList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
