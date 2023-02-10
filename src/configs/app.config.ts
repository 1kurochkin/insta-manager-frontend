export const appConfig = {
  api: {
    url: Number(process.env.REACT_APP_IS_PROD) ? "https://insta-manager.ikurochkin.com/api" : "http://localhost:5000/api",
  },
};
