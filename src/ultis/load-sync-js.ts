export const LoadSyncJs = () => {
  const script = document.createElement("script");
  script.src = "js/designesia.js";
  console.log(script);
  return document.body.append(script);
};
