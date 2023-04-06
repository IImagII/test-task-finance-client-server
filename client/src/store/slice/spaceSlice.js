import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { paths } from '../../utils/paths'

export const axiosData = createAsyncThunk(
  'space/axiosData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${paths.urlNews}`)
      return data.slice(0, 6)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const axiosDataOne = createAsyncThunk(
  'space/axiosDataOne',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${paths.urlNews}/${id}`)
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  items: [],
  item: [],
  status: false,
  error: null
}

export const spaceSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(axiosData.pending, (state) => {
        state.status = false
        state.error = null
      })
      .addCase(axiosData.fulfilled, (state, action) => {
        state.status = true
        state.items = action.payload
      })
      .addCase(axiosData.rejected, (state, action) => {
        state.status = true
        state.error = action.payload
        state.items = []
      })
    builder
      .addCase(axiosDataOne.pending, (state) => {
        state.status = false
        state.error = null
      })
      .addCase(axiosDataOne.fulfilled, (state, action) => {
        state.status = true
        state.item = action.payload
      })
      .addCase(axiosDataOne.rejected, (state, action) => {
        state.status = true
        state.error = action.payload
        state.item = null
      })
  }
})

export default spaceSlice.reducer
