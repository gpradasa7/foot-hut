const GetData = async url => {
  let { data } = await axios.get(url);
  console.log(data);
  return data;
};

export default GetData;
