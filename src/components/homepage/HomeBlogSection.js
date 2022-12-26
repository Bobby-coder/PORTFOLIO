import HighlightblogApi from "../../api/highlightBlogApi";
import HomeHighlightBlog from "./HomeHighlightBlog";

const HomeBlogSection = () => {
  return (
    <>
      <div className="flex flex-col gap-16 mt-16 sm:mt-20 lg:w-[50%]">
        {
          HighlightblogApi.map(
            currEle => <HomeHighlightBlog title = {currEle.title} liveLink = {currEle.liveLink} date = {currEle.dateString} description={currEle.description} />
          )
        }
      </div>
    </>
  );
};

export default HomeBlogSection;
