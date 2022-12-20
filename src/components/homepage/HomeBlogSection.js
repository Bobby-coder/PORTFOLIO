import HighlightblogApi from "../../api/highlightBlogApi";
import HomeHighlightBlog from "./HomeHighlightBlog";

const HomeBlogSection = () => {
  return (
    <>
      <div class="flex flex-col gap-16 mt-16 sm:mt-20">
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
