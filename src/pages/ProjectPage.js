import ProjectHeroSection from "../components/projectpage/ProjectHeroSection";
import ProjectList from "../components/projectpage/ProjectList";

const ProjectPage = () => {
  return (
    <>
      <div class="sm:px-8 mt-16 sm:mt-20">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <ProjectHeroSection />
              <ProjectList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
