import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MBeanInfo, $DynamicMBean, $AttributeList, $Attribute } from "@package/javax/management";
import { $Object } from "@package/java/lang";

declare module "@package/net/minecraft/util/monitoring/jmx" {
    export class $MinecraftServerStatistics implements $DynamicMBean {
        setAttribute(attribute: $Attribute): void;
        getAttributes(attributes: string[]): $AttributeList;
        getMBeanInfo(): $MBeanInfo;
        setAttributes(attributes: $AttributeList): $AttributeList;
        getAttribute(name: string): $Object;
        invoke(actionName: string, params: $Object[], signature: string[]): $Object;
        static registerJmxMonitoring(server: $MinecraftServer): void;
        get MBeanInfo(): $MBeanInfo;
    }
    export class $MinecraftServerStatistics$AttributeDescription {
    }
}
