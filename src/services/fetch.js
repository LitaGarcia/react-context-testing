const getDataApi = () => {
  return fetch('hhttps.ponunaUrl.com')
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.results.map((user) => {
        return {
          name: `${user.name.first}``${user.name.last}`,
        };
      });
      return dataClean;
    });
};

export default getDataApi;
