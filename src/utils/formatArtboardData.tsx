const formatArtboardData = (arr: any) => {
  const formattedData = arr.map((item: any) => {
    const newItem = {
      name: item.name,
      urlScale1: item.files[0].url,
      urlScale2: item.files[1].url,
      urlThumbImg: item.files[0].thumbnails[1].url,
    };
    return newItem;
  });
  return formattedData;
};

export default formatArtboardData;
