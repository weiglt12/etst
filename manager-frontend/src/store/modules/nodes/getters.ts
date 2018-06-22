
import { GetterTree } from 'vuex';
import { NodesState, Node, NodeDetails } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<NodesState, RootState> = {
    getCurrentNode(state): NodeDetails | Object {
       return state.currentNode ? state.currentNode : {};
    },
    getAllNodes(state): Node[] {
        return state.nodes ? state.nodes : [];
    },
};
