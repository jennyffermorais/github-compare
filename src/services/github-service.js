import api from "./api";

export default function getRepository(repository) {
  return api.get("repos/" + repository);
}

// export default function getRepository(repository) {
//   const requestOptions = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   return fetch(`${api}repos/${repository}`, requestOptions).then((response) => {
//     return response;
//   });
// }
