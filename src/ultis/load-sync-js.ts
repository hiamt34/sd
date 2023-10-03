export const LoadSyncJs = () => {
  const script = document.createElement("script");
  script.src = "js/designesia.js";

  return document.body.append(script);
};
