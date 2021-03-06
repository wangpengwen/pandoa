const localhost = "https://pandoa.wirewire.de/api/v1/";
const production = "https://pandoa.wirewire.de/api/v1/";

const ENV = {
  dev: {
    apiUrl: localhost,
    axiosConfig: {
      headers: {}
    }
  },
  staging: {
    apiUrl: production,
    axiosConfig: {
      headers: {}
    }
  },
  prod: {
    apiUrl: production,
    axiosConfig: {
      headers: {}
    }
  }
};

const getEnvVars = (
  env = window.constants
    ? window.constants.manifest.releaseChannel
    : process.env.NODE_ENV
    ? process.env.NODE_ENV
    : null
) => {
  if (window.__DEV__) {
    return ENV.dev;
  } else if (env === "staging") {
    return ENV.staging;
  } else if (env === "prod" || env === "production") {
    return ENV.prod;
  }
  return ENV.dev;
};

export default getEnvVars;
