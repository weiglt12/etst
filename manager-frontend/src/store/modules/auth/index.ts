import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { AuthState } from './types';
import { RootState } from '../../types';

export const state: AuthState = {
    isLoggedIn: false,
    error: undefined,
};

const namespaced: boolean = true;

export const auth: Module<AuthState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
