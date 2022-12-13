import SingleProject from "./SingleProject";
import projectApi from "../../api/projectApi";

const ProjectList = () => {
  return (
    <>
      <div class="mt-16 sm:mt-20">
        <div class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projectApi.map((currEle) => (
            <SingleProject
              title={currEle.title}
              liveLink={currEle.liveLink}
              githubLink={currEle.githubLink}
              imgSrc={currEle.imgSrc}
              description={currEle.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
