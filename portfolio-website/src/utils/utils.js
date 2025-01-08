export const toAssetUrl = (urls) => {
  if (!urls) {
    return [];
  }
  return urls.map((url) => `${process.env.PUBLIC_URL}/assets/images/${url}`)
};
