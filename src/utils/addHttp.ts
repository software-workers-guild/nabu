const addhttp = (url: string) => {
  if (!/^(ht)tps?:\/\//i.test(url)) {
    url = "http://" + url;
  }
  return url;
};

export default addhttp;
