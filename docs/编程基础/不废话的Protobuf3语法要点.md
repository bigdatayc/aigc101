![image.png](https://piggo5.oss-cn-shenzhen.aliyuncs.com/ob/202407112315584.png)

## 1. 定义消息

使用 `message` 关键字定义消息结构:

```protobuf
message Person {
  string name = 1;
  int32 age = 2;
  bool is_student = 3;
}
```

## 2. 字段类型

Protobuf3 支持以下数据类型:

- 数值类型: double, float, int32, int64, uint32, uint64, sint32, sint64, fixed32, fixed64, sfixed32, sfixed64
- 布尔类型: bool
- 字符串: string
- 字节数组: bytes
- 枚举: enum
- 其他消息类型

## 3. 字段编号

每个字段都有一个唯一的编号,用于在二进制格式中标识字段:

```protobuf
message Example {
  int32 field1 = 1;
  string field2 = 2;
  bool field3 = 3;
}
```

## 4. 枚举

使用 `enum` 关键字定义枚举类型:

```protobuf
enum Color {
  RED = 0;
  GREEN = 1;
  BLUE = 2;
}
```

## 5. 嵌套类型

可以在消息内部定义其他消息或枚举:

```protobuf
message OuterMessage {
  message InnerMessage {
    string inner_field = 1;
  }
  InnerMessage inner = 1;
}
```

## 6. 导入其他 .proto 文件

使用 `import` 语句导入其他 .proto 文件:

```protobuf
import "other_protos/common.proto";
```

## 7. 包声明

使用 `package` 关键字声明包名,避免名称冲突:

```protobuf
package myproject.models;
```

## 8. 服务定义

使用 `service` 关键字定义 RPC 服务:

```protobuf
service SearchService {
  rpc Search(SearchRequest) returns (SearchResponse);
}
```

## 9. 选项

可以使用 `option` 关键字设置各种选项:

```protobuf
option java_package = "com.example.project";
option go_package = "example.com/project";
```

## 10. 保留字段

使用 `reserved` 关键字保留已删除的字段编号或名称:

```protobuf
message Foo {
  reserved 2, 15, 9 to 11;
  reserved "foo", "bar";
}
```

## 11. map 类型

定义键值对映射:

```protobuf
map<string, Project> projects = 3;
```

## 12. oneof

定义互斥字段:

```protobuf
message SampleMessage {
  oneof test_oneof {
    string name = 4;
    int32 age = 9;
  }
}
```

这个指南涵盖了 Protobuf3 的主要语法特性。在实际使用时,请参考官方文档以获取更详细的信息和最新更新。

## 13. 实际应用示例: 项目管理系统

![image.png](https://piggo5.oss-cn-shenzhen.aliyuncs.com/ob/202407112316135.png)



让我们通过一个项目管理系统的例子来说明 Protobuf3 的各种特性:

```protobuf
syntax = "proto3";

package projectmanagement;

option go_package = "example.com/projectmanagement";
option java_package = "com.example.projectmanagement";

import "google/protobuf/timestamp.proto";

// 项目状态枚举
enum ProjectStatus {
  PLANNING = 0;
  IN_PROGRESS = 1;
  COMPLETED = 2;
  ON_HOLD = 3;
}

// 任务优先级枚举
enum TaskPriority {
  LOW = 0;
  MEDIUM = 1;
  HIGH = 2;
  URGENT = 3;
}

// 用户消息
message User {
  string id = 1;
  string name = 2;
  string email = 3;
}

// 任务消息
message Task {
  string id = 1;
  string title = 2;
  string description = 3;
  TaskPriority priority = 4;
  User assigned_to = 5;
  google.protobuf.Timestamp due_date = 6;
}

// 项目消息
message Project {
  string id = 1;
  string name = 2;
  string description = 3;
  ProjectStatus status = 4;
  User project_manager = 5;
  repeated Task tasks = 6;
  google.protobuf.Timestamp start_date = 7;
  google.protobuf.Timestamp end_date = 8;
  
  message Budget {
    double amount = 1;
    string currency = 2;
  }
  
  Budget budget = 9;
  
  map<string, string> metadata = 10;
}

// 创建项目请求
message CreateProjectRequest {
  Project project = 1;
}

// 创建项目响应
message CreateProjectResponse {
  string project_id = 1;
}

// 获取项目请求
message GetProjectRequest {
  string project_id = 1;
}

// 获取项目响应
message GetProjectResponse {
  Project project = 1;
}

// 项目管理服务
service ProjectManagementService {
  rpc CreateProject(CreateProjectRequest) returns (CreateProjectResponse);
  rpc GetProject(GetProjectRequest) returns (GetProjectResponse);
}
```

这个例子展示了以下 Protobuf3 特性:

1. 包声明和选项设置
2. 导入外部 proto 文件 (google/protobuf/timestamp.proto)
3. 枚举定义 (ProjectStatus, TaskPriority)
4. 消息定义 (User, Task, Project)
5. 嵌套消息 (Project.Budget)
6. 重复字段 (repeated Task tasks)
7. 使用其他消息类型作为字段类型 (User assigned_to)
8. 使用 Google 的 Well-Known Types (google.protobuf.Timestamp)
9. Map 类型 (map<string, string> metadata)
10. 服务定义 (ProjectManagementService)

这个例子定义了一个简单的项目管理系统,包括用户、任务和项目的数据结构,以及创建和获取项目的服务方法。您可以根据实际需求扩展这个示例,添加更多的字段、消息类型或服务方法。

# Protobuf3 语法指南、实例及应用

[前面的内容保持不变]

## 14. 在不同编程语言中使用 Protobuf

### 14.1 Go 语言

在 Go 中使用 protobuf，首先需要安装 protoc 编译器和 Go 插件。然后，可以使用以下命令生成 Go 代码：

```bash
protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    projectmanagement.proto
```

生成的 Go 代码可以这样使用：

```go
package main

import (
    "fmt"
    "log"

    pb "example.com/projectmanagement"
    "google.golang.org/protobuf/proto"
)

func main() {
    project := &pb.Project{
        Id:   "1",
        Name: "New Website",
        Status: pb.ProjectStatus_IN_PROGRESS,
        ProjectManager: &pb.User{
            Id:   "101",
            Name: "Alice Smith",
            Email: "alice@example.com",
        },
        Tasks: []*pb.Task{
            {
                Id:    "1001",
                Title: "Design Homepage",
                Priority: pb.TaskPriority_HIGH,
            },
        },
    }

    // 序列化
    data, err := proto.Marshal(project)
    if err != nil {
        log.Fatal("Marshaling error: ", err)
    }

    // 反序列化
    newProject := &pb.Project{}
    err = proto.Unmarshal(data, newProject)
    if err != nil {
        log.Fatal("Unmarshaling error: ", err)
    }

    fmt.Printf("Project Name: %s\n", newProject.GetName())
}
```

### 14.2 Python

对于 Python，首先安装 `protobuf` 包，然后使用以下命令生成 Python 代码：

```bash
protoc --python_out=. projectmanagement.proto
```

Python 中的使用示例：

```python
from projectmanagement_pb2 import Project, User, Task, ProjectStatus, TaskPriority

# 创建项目
project = Project()
project.id = "1"
project.name = "New Website"
project.status = ProjectStatus.IN_PROGRESS

# 添加项目经理
project.project_manager.id = "101"
project.project_manager.name = "Alice Smith"
project.project_manager.email = "alice@example.com"

# 添加任务
task = project.tasks.add()
task.id = "1001"
task.title = "Design Homepage"
task.priority = TaskPriority.HIGH

# 序列化
serialized = project.SerializeToString()

# 反序列化
new_project = Project()
new_project.ParseFromString(serialized)

print(f"Project Name: {new_project.name}")
```

## 15. 扩展项目管理系统

让我们扩展我们的项目管理系统，添加一些新功能：

1. 评论系统
2. 文件附件
3. 项目标签

更新后的 Protobuf 定义：

```protobuf
syntax = "proto3";

package projectmanagement;

// ... [之前的导入和选项保持不变]

// ... [之前的枚举和消息定义保持不变]

// 新增：评论消息
message Comment {
  string id = 1;
  string content = 2;
  User author = 3;
  google.protobuf.Timestamp created_at = 4;
}

// 新增：文件附件消息
message Attachment {
  string id = 1;
  string filename = 2;
  string url = 3;
  int64 size_bytes = 4;
}

// 更新：项目消息
message Project {
  // ... [之前的字段保持不变]
  
  repeated Comment comments = 11;
  repeated Attachment attachments = 12;
  repeated string tags = 13;
}

// 新增：添加评论请求
message AddCommentRequest {
  string project_id = 1;
  Comment comment = 2;
}

// 新增：添加评论响应
message AddCommentResponse {
  string comment_id = 1;
}

// 更新：项目管理服务
service ProjectManagementService {
  // ... [之前的 RPC 方法保持不变]
  
  rpc AddComment(AddCommentRequest) returns (AddCommentResponse);
  rpc AddAttachment(stream Attachment) returns (Project);
  rpc GetProjectUpdates(GetProjectRequest) returns (stream Project);
}
```

这个扩展版本添加了以下新特性：

1. 评论系统：允许用户对项目添加评论。
2. 文件附件：支持向项目添加文件附件。
3. 项目标签：允许给项目添加标签，便于分类和搜索。
4. 新的 RPC 方法：
   - `AddComment`：添加评论到项目
   - `AddAttachment`：使用流式 RPC 上传文件附件
   - `GetProjectUpdates`：使用服务器端流式 RPC 获取项目更新

这些扩展展示了如何随着需求的变化逐步扩展你的 Protobuf 定义。通过使用 Protobuf，你可以轻松地在不同的语言和系统之间共享这些更新的数据结构和服务定义。