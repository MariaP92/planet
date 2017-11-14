import store from "./store";

export async function Showplanet(){

  const url1 = "data/Kepler-22b.json";
  const url2 = "data/Kepler-62f.json";
  const url3 = "data/Kepler-69c.json";
  fetch(url1)
  .then(res => res.json())
  .then(res => {
      let newList = [];
      newList = [...store.getState().items];
      newList.push(res);
      store.setState({
        items: newList
      });
  })
  fetch(url2)
  .then(res => res.json())
  .then(res => {
      let newList = [];
      newList = [...store.getState().items];
      newList.push(res);
      store.setState({
        items: newList
      });
  })
  fetch(url3)
  .then(res => res.json())
  .then(res => {
      let newList = [];
      newList = [...store.getState().items];
      newList.push(res);
      store.setState({
        items: newList
      });
  })
}