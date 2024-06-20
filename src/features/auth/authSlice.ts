import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
    SerializedError
} from "@reduxjs/toolkit";

import { AuthenticatedUser, AuthCredentials } from "./authTypes";
import { authenticateUser, getCurrentUser, logoutUser } from "./authService";

interface AuthState {
    user: AuthenticatedUser | null;
    loading: boolean;
    error: SerializedError | null;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null
};

export const loginUser = createAsyncThunk('auth/login', async ({ username, password }: AuthCredentials, { rejectWithValue }) => {
    try {
        await authenticateUser({ username, password });
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        } else {
            return rejectWithValue("An error occurred while logging in");
        }
    }
});

export const getLoggedInUser = createAsyncThunk('auth/current', async (_, { rejectWithValue }) => {
    try {
        return await getCurrentUser();
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        } else {
            return rejectWithValue("An error occurred while getting the current user");
        }
    }
});

export const logoutUserAction = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    try {
        await logoutUser();
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        } else {
            return rejectWithValue("An error occurred while logging out");
        }
    }
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetState: (state) => {
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as SerializedError;
            });

        builder
            .addCase(getLoggedInUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLoggedInUser.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.user = action.payload as AuthenticatedUser;
            })
            .addCase(getLoggedInUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as SerializedError;
            });

        builder
            .addCase(logoutUserAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUserAction.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.user = null;
            })
            .addCase(logoutUserAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as SerializedError;
            });
    }
});

export const { resetState } = authSlice.actions;

export default authSlice.reducer;