import axios from "axios";

export const ApiCall = async (obj) => {
  //   const options = {
  //     headers: {
  //       "content-type": "application/x-www-form-urlencoded",
  //       "Accept-Encoding": "application/gzip",
  //       "X-RapidAPI-Key": "0e32f7da64mshb566ff3d6f06573p11349bjsn2482b9e2c312",
  //       "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  //     },
  //     data: obj,
  //   };
  //   try {
  //     const response = await axios.post(import.meta.env.VITE_APP_URL, options);
  //     if (response) {
  //       return response.data;
  //     }
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  const encodedParams = new URLSearchParams();
  encodedParams.set("q", obj.q);
  encodedParams.set("target", obj.target);
  encodedParams.set("source", obj.source);

  const options = {
    headers: {
      "content-type": import.meta.env.VITE_APP_CONTENT,
      "Accept-Encoding": import.meta.env.VITE_APP_ACCEPTING_END,
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_APP_HOST,
    },
  };

  try {
    const response = await axios.post(
      import.meta.env.VITE_APP_URL,
      encodedParams,
      options
    );
    return response.data;
    // Handle the response data here
  } catch (error) {
    console.error(error);
    // Handle errors here
  }
};

// const encodedParams = new URLSearchParams();
// encodedParams.set('q', 'Hello, world!');
// encodedParams.set('target', 'es');
// encodedParams.set('source', 'en');

// const options = {
//   method: 'POST',
//   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'Accept-Encoding': 'application/gzip',
//     'X-RapidAPI-Key': '0e32f7da64mshb566ff3d6f06573p11349bjsn2482b9e2c312',
//     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//   },
//   data: encodedParams,
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
