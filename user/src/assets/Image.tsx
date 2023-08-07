export const Images = {
  get NotFound() {
    return new URL("./images/notfound.jpg", import.meta.url).href;
  },
  get Logo() {
    return new URL("./images/logo.png", import.meta.url).href;
  },
};
