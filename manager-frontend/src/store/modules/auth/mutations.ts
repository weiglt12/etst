import { MutationTree } from 'vuex';
import { AuthState } from './types';

export const mutations: MutationTree<AuthState> = {
    login(state) {
        state.error = undefined;
        state.isLoggedIn = true;
    },
    loginError(state, message) {
        state.error = message;
        state.isLoggedIn = false;
    },
};
