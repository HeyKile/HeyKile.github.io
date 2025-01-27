export const toAssetUrl = (urls) => {
  if (!urls) {
    return [];
  }
  return urls.map((url) => `${process.env.PUBLIC_URL}/assets/images/${url}`)
};

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};