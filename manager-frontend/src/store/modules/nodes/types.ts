
export type NodeDetails = {
    key: string
    last_ack_time: number
    reckv_bytes: number
    send_bytes: number
    start_time: number
    type: string
};

export type Node = {
    key: string
    last_ack_time: number
    reckv_bytes: number
    send_bytes: number
    start_time: number
    type: string
};

export type NodesState = {
    nodes: Node[] | undefined,
    currentNode: NodeDetails | undefined;
};
