import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import talkService from './talkService'

const initialState = {
    talks: [],
    isError: false, 
    isSuccess: false, 
    isLoading: false, 
    message: '',
}

// create talk
export const createTalk = createAsyncThunk('talks/create', async (talkData, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await talkService.createTalk(talkData, token)
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

// get talk
export const getTalks = createAsyncThunk('talks/getAll', async (_, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await talkService.getTalks( token)
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

// get talk
export const deleteTalk = createAsyncThunk('talks/delete', async (id, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await talkService.deleteTalk(id, token)
    } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
})

export const talkSlice = createSlice({
    name: 'talk', 
    initialState, 
    reducers: {
        reset: (state) => initialState
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(createTalk.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(createTalk.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.talks.push(action.payload)
        })
        .addCase(createTalk.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getTalks.pending, (state) => {
            state.isLoading = true
        }) 
        .addCase(getTalks.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.talks = action.payload
        })
        .addCase(getTalks.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteTalk.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteTalk.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.talks = state.talks.filter(
                (talk) => talk._id !== action.payload.id
            )
        })
        .addCase(deleteTalk.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = talkSlice.actions
export default talkSlice.reducer