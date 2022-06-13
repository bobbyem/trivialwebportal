import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import questionService from "./questionService";
const initialState = {
  questions: [],
  filtered: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  latest: null,
  stats: null,
};

//Create new Question
export const createQuestion = createAsyncThunk(
  "questions/create",
  async (questionData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await questionService.createQuestion(questionData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get Questions
export const getQuestions = createAsyncThunk(
  "questions/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await questionService.getQuestions(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//update Question
export const updateQuestion = createAsyncThunk(
  "questions/update",
  async (updateData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await questionService.updateQuestion(updateData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Delete Question
export const deleteQuestion = createAsyncThunk(
  "questions/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await questionService.deleteQuestion(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get Latest Question
export const getLatest = createAsyncThunk(
  "questions/getLatest",
  async (_, thunkAPI) => {
    try {
      return await questionService.getLatest();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get Stats
export const getStats = createAsyncThunk(
  "questions/getStats",
  async (_, thunkAPI) => {
    try {
      return await questionService.getStats();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setFiltered: (state, action) => {
      state.filtered = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQuestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.questions.push(action.payload);
      })
      .addCase(createQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.questions = action.payload;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateQuestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteQuestion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteQuestion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.questions = state.questions.filter(
          (question) => question._id !== action.payload.id
        );
      })
      .addCase(deleteQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getLatest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLatest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.latest = action.payload;
      })
      .addCase(getLatest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.stats = action.payload;
      })
      .addCase(getStats.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setFiltered } = questionSlice.actions;
export default questionSlice.reducer;
