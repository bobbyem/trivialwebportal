import axios from "axios";

const API_URL = "/api/questions/";

//create new question
const createQuestion = async (questionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, questionData, config);

  return response.data;
};

//Get questions
const getQuestions = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

//Update questions
const updateQuestion = async (updateData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    API_URL + updateData._id,
    updateData,
    config
  );

  return response.data;
};

//Delete question
const deleteQuestion = async (questionId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + questionId, config);

  return response.data;
};

//Get latest question
const getLatest = async () => {
  const response = await axios.get(API_URL + "/latest");

  return response.data;
};

//Get stats
const getStats = async () => {
  const response = await axios.get(API_URL + "/stats");

  return response.data;
};

const questionService = {
  createQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
  getLatest,
  getStats,
};

export default questionService;
