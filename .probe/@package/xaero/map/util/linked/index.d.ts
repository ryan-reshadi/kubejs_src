
declare module "@package/xaero/map/util/linked" {
    export class $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
    }
    export interface $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
        getNext(): V;
        getPrevious(): V;
        isDestroyed(): boolean;
        setNext(arg0: V): void;
        setPrevious(arg0: V): void;
        onDestroyed(): void;
        get destroyed(): boolean;
    }
}
