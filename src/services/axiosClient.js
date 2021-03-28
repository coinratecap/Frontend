import axios from "axios";
// import { getUserToken,  } from "../utils/auth";

const requestClient = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
	headers: {},
	// timeout: 5000,
});

// Request Interceptor
requestClient.interceptors.request.use(
	(config) => {
		const reConfig = config;
		// const token = getUserToken();

		// console.log("TOKEN", token);

		// if (token) {
		// 	reConfig.headers.Authorization = `Bearer ${token}`;
		// }
		reConfig.headers["Content-Type"] = "application/json";
		return reConfig;
	},
	(error) => Promise.reject(error)
);

// Response Interceptor
requestClient.interceptors.response.use(
	(response) => response,
	(error) => {
		// if (error.response && error.response.status === 401) {
		// 	clearStorage();
		// 	window.location.href = "/login";
		// 	// return true;
		// }

		if (error.message === "Network Error") {
			return Promise.reject({
				response: {
					data: { message: "No internet connection" },
				},
			});
		}

		return Promise.reject(error);
	}
);

export default requestClient;
