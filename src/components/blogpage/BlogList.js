import SingleBlog from "./SingleBlog";
import blogApi from "../../api/blogApi";

const BlogList = () => {
  return (
    <>
      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {
              blogApi.map(
                currEle => <SingleBlog title = {currEle.title} liveLink = {currEle.liveLink} date = {currEle.dateString} description = {currEle.description} />
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
