
const getDataUrl = (url, table, action) => {
    const formdata = new FormData();
    formdata.append("table", table);
    fetch(url, { method: "POST", body: formdata}).then(data => data.text())
      .then(json => action(json.split("||").slice(0 ,-1)))
}
  
export default getDataUrl