import { $ProtocolFamily_ } from "@package/java/net";
import { $Selector, $Pipe, $ServerSocketChannel, $DatagramChannel, $Channel, $SocketChannel, $SelectableChannel, $InterruptibleChannel } from "@package/java/nio/channels";

declare module "@package/java/nio/channels/spi" {
    export class $AbstractSelector extends $Selector {
    }
    export class $AbstractSelectableChannel extends $SelectableChannel {
    }
    export class $AbstractInterruptibleChannel implements $Channel, $InterruptibleChannel {
        isOpen(): boolean;
        close(): void;
        get open(): boolean;
    }
    export class $SelectorProvider {
        static provider(): $SelectorProvider;
        inheritedChannel(): $Channel;
        openServerSocketChannel(): $ServerSocketChannel;
        openServerSocketChannel(arg0: $ProtocolFamily_): $ServerSocketChannel;
        openDatagramChannel(): $DatagramChannel;
        openDatagramChannel(arg0: $ProtocolFamily_): $DatagramChannel;
        openPipe(): $Pipe;
        openSelector(): $AbstractSelector;
        openSocketChannel(arg0: $ProtocolFamily_): $SocketChannel;
        openSocketChannel(): $SocketChannel;
    }
}
