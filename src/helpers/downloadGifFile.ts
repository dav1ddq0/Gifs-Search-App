export const downloadGifFile = (url: string, filename: string) => {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${filename}.gif`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
};
