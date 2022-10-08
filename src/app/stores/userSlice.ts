import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPageFilter } from '../../interfaces/page';
import { IUser } from '../../interfaces/user';
import { fetchUsers } from '../../service/user-service';
import { RootState } from './store';

export interface userState {
  userCollection: IUser[];
  total: number;
  isLoading: boolean;
}

const initialState: userState = {
  userCollection: [],
  total: 0,
  isLoading: false,
};

export const fetchUsersAsync = createAsyncThunk('user/fetchUsers', async (request: IPageFilter) => {
  const response = await fetchUsers(request);
  if (response) {
    response.info.result = 100;
  }
  return response;
});

export const userSlice = createSlice({
  name: 'getUserWithPaging',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsersAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
      state.isLoading = true;
      state.userCollection = action.payload.results;
    });
  },
  reducers: {},
});

export const userCollection = (state: RootState) => state.user.userCollection;

export default userSlice.reducer;
