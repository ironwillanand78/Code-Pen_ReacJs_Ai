export const SET_PROJECTS = (projects) => {
  return {
    type: "SET_PROJECTS",
    projects: projects,
  };
};

export const SET_PROJECT_NULL = () => {
  return {
    type: "SET_PROJECTS_NULL",
  };
};
