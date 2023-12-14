import axios from 'axios';

const BASE_URL = "http://localhost:5050/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// findAll
export const getAllPlanes = async () => {
  try {
    const response = await axiosInstance.get('/planes');
    return response.data;
  } catch (error) {
    console.error("Axios Error: ", error);
    throw error;
  }
};

// findById
export const getPlaneById = async (id) => {
  try {
    const response = await axiosInstance.get(`/planes/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Axios Error: ", error);
    throw error;
  }
};

export const filterPlane = async ({ filterValues, sliderValues }) => {
  try {
    console.log(filterValues, sliderValues);
    const response = await axiosInstance.get('/filtered', {
      params: { filterValues, sliderValues },
    });
    return response.data;
  } catch (error) {
    console.error("Axios Error: ", error);
    throw error;
  }
};

