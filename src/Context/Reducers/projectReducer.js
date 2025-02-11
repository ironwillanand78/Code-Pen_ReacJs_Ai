const initialState = {
  projects: [],
};

const projectReducer = (state = initialState, action) => {
  console.log("🚀 Redux Action Received:", action);
  switch (action.type) {
    case "SET_PROJECTS":
      console.log("✅ Redux Storing Projects:", action.projects);
      return {
        ...state,
        projects: action.projects,
      };

    case "SET_PROJECTS_NULL":
      return {
        ...state,
        projects: [],
      };

    default:
      return state;
  }
};

export default projectReducer;
