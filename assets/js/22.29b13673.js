(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{92:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"coordinator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coordinator"}},[e._v("#")]),e._v(" Coordinator")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Why does the Broker provide the important coordination of the entire cluster?")]),e._v(" "),a("ul",[a("li",[e._v("Broker is actually a compute node which executes the reading and writing operations. Because the Broker needs to know the status information of all Storage nodes, so it performs the coordination tasks;")]),e._v(" "),a("li",[e._v("Metadata changes are not very frequent and are lightweight.")]),e._v(" "),a("li",[e._v("Storage nodes status changes are frequent, Broker picks the available shards by those information, so it's not necessary to let Storage managing the statues and then synchronize to the Broker. The advantage is that Storage can focus on storage things.")]),e._v(" "),a("li",[e._v("Computing ability of a certain database is required across multi IDCs.")])]),e._v(" "),a("p",[e._v("What information needs to be processes?")]),e._v(" "),a("ul",[a("li",[e._v("database DDL operations;")]),e._v(" "),a("li",[e._v("Storage node management;")]),e._v(" "),a("li",[e._v("runtime parameter adjustment;")]),e._v(" "),a("li",[e._v("Storage/Broker state management;")])]),e._v(" "),a("p",[e._v("All coordination and scheduling operations are done based on ETCD.\nAll scheduling messages require a version number to track whether the data on each node is consistent anymore after each node changes in Metadata.")]),e._v(" "),a("h2",{attrs:{id:"master"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master"}},[e._v("#")]),e._v(" Master")]),e._v(" "),a("p",[e._v("The master node is responsible for the main Metadata changes. Master is elected from current surviving Broker nodes preemptively. Each Broker node registers the Master Key at the same time, then whoever registers firstly becomes the Master.")]),e._v(" "),a("p",[e._v("At the same time, each Broker will also watch Master Key, If the information on Master Key is lost, the election will be re-elected, so that every Broker node will knows who is Master.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("- Master Key: /master/node\n- Registered Key: /master/node/{broker node}\n")])])]),a("h2",{attrs:{id:"task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task"}},[e._v("#")]),e._v(" Task")]),e._v(" "),a("p",[e._v("The task mentioned here mainly refers to the Storage node's received tasks which are sent by Master(Broker). It mainly includes the following two roles:")]),e._v(" "),a("ul",[a("li",[e._v("Controller;")]),e._v(" "),a("li",[e._v("Executor;")])]),e._v(" "),a("p",[e._v("The ETCD related Keys are as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("- Task Key: /task-coordinator/v1/executor/{storage node id}/kinds/{task kind}/names/{task name}\n- Task Status Key: /task-coordinator/v1/status/kinds/{task kind}/names/{task name}\n")])])]),a("h4",{attrs:{id:"controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[e._v("#")]),e._v(" Controller:")]),e._v(" "),a("p",[e._v("The controller runs at the Broker layer:")]),e._v(" "),a("ul",[a("li",[e._v("Task generation(Task Key): The controller accepts the task submitted by the Master(Broker), then generates a specific Task and send it to the Storage node. The delivery operation is done by ETCD;")]),e._v(" "),a("li",[e._v("Task status Tracker(Task status Key): A Task status tracker is generated while task is delivered to track specific Task execution status;")])]),e._v(" "),a("h4",{attrs:{id:"executor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executor"}},[e._v("#")]),e._v(" Executor")]),e._v(" "),a("p",[e._v("Executor runs on the Storage layer:")]),e._v(" "),a("ul",[a("li",[e._v("Executing the task: Executor will execute the task by watching corresponding Task Key modification;")]),e._v(" "),a("li",[e._v("Task status update: Executor will update the report of execution result to the corresponding Task Status Key;")])]),e._v(" "),a("h2",{attrs:{id:"state-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-machine"}},[e._v("#")]),e._v(" State Machine")]),e._v(" "),a("p",[e._v("All of these operations are done by a variety of different state machines, each of which is described below. Different State Machines will watch the Keys on different ETCDs to perform the corresponding operations.")]),e._v(" "),a("h3",{attrs:{id:"broker-node-state-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker-node-state-machine"}},[e._v("#")]),e._v(" Broker Node State Machine")]),e._v(" "),a("p",[e._v("The State Machine runs on each Broker node, it performs the discovery of the Broker Node.")]),e._v(" "),a("p",[a("code",[e._v("Watch Key: /active/nodes")])]),e._v(" "),a("ul",[a("li",[e._v("When the broker starts, it will register its information to the Watched Key(/active/nodes/{broker node});")]),e._v(" "),a("li",[e._v("When watched Key changed, every Broker knows which nodes are still alive;")])]),e._v(" "),a("h3",{attrs:{id:"storage-cluster-status-state-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-cluster-status-state-machine"}},[e._v("#")]),e._v(" Storage Cluster Status State Machine")]),e._v(" "),a("p",[e._v("This State Machine runs on each Broker node, it performs the tracking of the survival status of each node in the Storage Cluster.")]),e._v(" "),a("p",[a("code",[e._v("Watch Key: /state/storage/cluster")])]),e._v(" "),a("ul",[a("li",[e._v("The information of Watch Key is written by the Master. The Master will watch the survival of each node in Storage Cluster and write the final information to the corresponding Key(/state/storage/cluster/{cluster name}). For details see "),a("router-link",{attrs:{to:"/docs/design/coordinator.html#storage-cluster-state-machine"}},[e._v("Storage Cluster State Machine")]),e._v(";")],1),e._v(" "),a("li",[e._v("Status information of each Storage Cluster is available by Broker watched Key change;")]),e._v(" "),a("li",[e._v("Broker will create a copy channel to Storage according to the situation of the Storage Cluster node and the information of the current Broker WAL. Once the channel is established, the data can be copied. For details see "),a("router-link",{attrs:{to:"/docs/design/replication.html"}},[e._v("Replication")]),e._v(" ；")],1)]),e._v(" "),a("h3",{attrs:{id:"db-admin-state-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#db-admin-state-machine"}},[e._v("#")]),e._v(" DB Admin State Machine")]),e._v(" "),a("p",[e._v("The State Machine runs on each Master, it will primarily performs the database-related DDL.")]),e._v(" "),a("p",[a("code",[e._v("Watch Key: /database/config")])]),e._v(" "),a("ul",[a("li",[e._v('User can submits the database DDL to any Broker node, then the node does not generate a specific Task for Storage but just write the configuration to "/database/config/{db name}";')]),e._v(" "),a("li",[e._v("Shard assignment is created by current Storage cluster status by watching the Master Key;")]),e._v(" "),a("li",[e._v("Task is generated by shard assignment which will be delivered to the corresponding Storage node to perform DDL operation;")])]),e._v(" "),a("p",[e._v("Shard Assignment is information about each Shard which contains these details:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Name: database name\nNodes: Shard Replica of the located Storage Nodes\nShards: Information about each Shard\n\n\nEach shard contains the following information:\nShardID: ID of the corresponding Shard:\nReplicas: Information about all Replicas to the Shard, which corresponds to the information of the Nodes above. \n")])])]),a("h3",{attrs:{id:"storage-cluster-state-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-cluster-state-machine"}},[e._v("#")]),e._v(" Storage Cluster State Machine")]),e._v(" "),a("p",[e._v("This State Machine runs on the Master, it performs the operation of configuration of Storage Cluster.")]),e._v(" "),a("p",[a("code",[e._v("Watch Key: /storage/cluster/config")])]),e._v(" "),a("ul",[a("li",[e._v('User can submits configuration to each Broker node which will simply writes the configuration to "/storage/cluster/config/{cluster name}";')]),e._v(" "),a("li",[e._v("A Storage Cluster Watch mechanism is established for each cluster to track the survival status of each node;")]),e._v(" "),a("li",[e._v('The survival or the Storage Node is watched and the status of the entire Storage will be wrote to "/state/storage/cluster/{cluster name}" for '),a("router-link",{attrs:{to:"/docs/design/coordinator.html#storage-cluster-status-state-machine"}},[e._v("Storage Cluster Status State Machine")]),e._v("'s usage;")],1)]),e._v(" "),a("p",[e._v("The watch mechanism of each cluster is as follows:")]),e._v(" "),a("ul",[a("li",[e._v("Establish a relationship with the Storage Cluster ETCD based on the configuration;")]),e._v(" "),a("li",[e._v("Watch alive key of Storage nodes: "),a("code",[e._v("/active/nodes(note that it's different from the broker)")]),e._v(";")]),e._v(" "),a("li",[e._v("Node information is registered to "),a("code",[e._v("/active/nodes/{storage node id}")]),e._v(" when Storage node starts;")])]),e._v(" "),a("h3",{attrs:{id:"replicator-state-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replicator-state-machine"}},[e._v("#")]),e._v(" Replicator State Machine")]),e._v(" "),a("p",[e._v("This State Machine runs on the Broker, it primarily performs the replication of shard WAL for each database.")]),e._v(" "),a("p",[a("code",[e._v("Watch Key: /database/assign")])]),e._v(" "),a("ul",[a("li",[e._v("Watch Key change: Relationship of each Shard WAL of the database and the target Storage node is generated according to Shard Assignment. For details see "),a("router-link",{attrs:{to:"/docs/design/coordinator.html#db-admin-state-machine"}},[e._v("DB Admin State Machine")]),e._v(";")],1),e._v(" "),a("li",[e._v("Note that it's just establishing a relationship instead of creating a copy channel;")])]),e._v(" "),a("h3",{attrs:{id:"replica-status-state-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replica-status-state-machine"}},[e._v("#")]),e._v(" Replica Status State Machine")]),e._v(" "),a("p",[e._v("This State Machine runs on the Broker, it primarily performs monitoring the replication status of each Replicas;")]),e._v(" "),a("p",[a("code",[e._v("Watch Key: /state/replica")])]),e._v(" "),a("ul",[a("li",[e._v('WAL replication periodically reports current replication status to the corresponding key ("/state/replica/{storage node id}");')]),e._v(" "),a("li",[e._v("The status of each copy channel is available by watching "),a("code",[e._v("Broker Watch Key")]),e._v(", then the latest Storage node will be chosen when executing the query;")]),e._v(" "),a("li",[e._v("The status of all replicas under Broker Nodes to Storage nodes peer may include the replication status of multiple different database copies;")])]),e._v(" "),a("h2",{attrs:{id:"fault-tolerance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fault-tolerance"}},[e._v("#")]),e._v(" Fault tolerance")]),e._v(" "),a("ul",[a("li",[e._v("ETCD is a very central component during the process, as all coordination and scheduling information is done by it;")]),e._v(" "),a("li",[e._v("Metadata is also stored in ETCD;")])]),e._v(" "),a("p",[e._v("So if the ETCD is down, there will be a big impact on the whole system, then how to minimize the impact is critical:")]),e._v(" "),a("ol",[a("li",[e._v("Firstly, if ETCD is down,. In the extreme case, the data corruption in the ETCD won't be recovered. Therefore, the relevant node need to perform local backup operations after each Metadata change, and have the ability to restore the new data to new ETCD cluster;")]),e._v(" "),a("li",[e._v("ETCD failures should not affect the availability of the entire system;")]),e._v(" "),a("li",[e._v("Generally, the Metadata change is low frequency operation, so it's acceptable;")]),e._v(" "),a("li",[e._v("If replication of Leader is corrupt, the replication data may be inconsistent;")])])])}),[],!1,null,null,null);t.default=s.exports}}]);