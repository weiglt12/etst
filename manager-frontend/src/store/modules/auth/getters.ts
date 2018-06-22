// profile/getters.ts
import { GetterTree } from 'vuex';
import { AuthState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<AuthState, RootState> = {
    isLoggedIn(state): boolean {
        return state.isLoggedIn;
    },
    loginError(state): string | undefined {
        return state.error;
    },
};
