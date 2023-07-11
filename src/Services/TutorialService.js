import http from "./http-common";

const getAll= () =>{
  //console.log('tutorialservice getall method works!')
    return http.get("http://localhost:8081/endpoint");
};
const get = id => {
    return http.get(`http://localhost:8081/endpoint/get-tutorial/${id}`);
  };
  
  const create = data => {
    return http.post("http://localhost:8081/endpoint/add-tutorial", data);
  };
  
  const update = (id, data) => {
    return http.put(`http://localhost:8081/endpoint/update-tutorial/${id}`, data);
  };
  
  const remove = id => {
    return http.delete(`http://localhost:8081/endpoint/remove-tutorial/${id}`);
  };
  
  const removeAll = () => {
    return http.delete(`http://localhost:8081/endpoint/tutorials`);
  };
  const findByTitle = title => {
    return http.get(`http://localhost:8081/endpoint/get-tutorial/${title}`);
  };
  const TutorialService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
  };
  
  export default TutorialService;
      