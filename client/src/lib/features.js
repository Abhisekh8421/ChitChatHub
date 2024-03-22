const Fileformat = (url = "") => {
  const fileExt = url.split(".").pop();
  if (fileExt === "mp4" || fileExt === "ogg" || fileExt === "webm") {
    return "video";
  }
  if (fileExt === "mp3" || fileExt === "wav") {
    return "audio";
  }
  if (
    fileExt === "png" ||
    fileExt === "jpg" ||
    fileExt === "jpeg" ||
    fileExt === "gif"
  ) {
    return "image";
  }

  return "file";
};

const TransformImage = (url = "", width = 100) => url;

export { Fileformat, TransformImage };
