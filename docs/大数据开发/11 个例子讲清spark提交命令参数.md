![image.png](https://piggo5.oss-cn-shenzhen.aliyuncs.com/ob/202407081500854.png)

## 提交命名参数详情

Spark提交命令的主要参数如下。这些参数用于配置Spark应用程序的运行环境和资源分配。以下是一些常用参数的详细说明:

1. `--master`: 指定Spark集群的主节点URL
   例如: `--master spark://host:7077`

2. `--deploy-mode`: 部署模式，可以是client或cluster
   例如: `--deploy-mode cluster`

3. `--class`: 主类的全限定名称
   例如: `--class org.example.MySparkApp`

4. `--name`: 应用程序名称
   例如: `--name "My Spark Application"`
![image.png](https://piggo5.oss-cn-shenzhen.aliyuncs.com/ob/202407081501824.png)


5. `--jars`: 包含应用程序依赖的JAR文件
   例如: `--jars dep1.jar,dep2.jar`

6. `--files`: 需要放置在每个执行器的工作目录中的文件
   例如: `--files config.properties`

7. `--conf`: Spark配置属性
   例如: `--conf spark.executor.memory=4g`
![image.png](https://piggo5.oss-cn-shenzhen.aliyuncs.com/ob/202407081501473.png)


8. `--driver-memory`: 驱动程序使用的内存量
   例如: `--driver-memory 4g`

9. `--executor-memory`: 每个执行器使用的内存量
   例如: `--executor-memory 4g`

10. `--num-executors`: 启动的执行器数量
    例如: `--num-executors 5`

11. `--executor-cores`: 每个执行器使用的核心数
    例如: `--executor-cores 4`

## 为什么有这么多参数

Spark提交命令有如此多的参数主要是为了满足不同场景下的需求，并提供足够的灵活性来优化应用程序的性能。解释一下为什么需要这么多参数：

![image.png](https://piggo5.oss-cn-shenzhen.aliyuncs.com/ob/202407081501394.png)


1. 适应不同的部署环境
   Spark可以在多种环境中运行，如单机、集群、云等。不同的参数允许用户针对特定环境进行配置。

2. 资源管理和优化
   参数如`--executor-memory`和`--num-executors`允许用户根据可用资源和任务需求精细调整资源分配。

3. 应用程序配置
   参数如`--class`和`--jars`允许用户指定应用程序的入口点和依赖，使Spark能够正确加载和运行用户的代码。

4. 性能调优
   许多参数（如`--conf`）允许用户调整Spark的内部设置，以优化特定工作负载的性能。
![image.png](https://piggo5.oss-cn-shenzhen.aliyuncs.com/ob/202407081502667.png)


5. 安全性和访问控制
   某些参数用于配置安全设置，如身份验证和加密。

6. 日志和监控
   参数可以用来配置日志级别和监控设置，有助于调试和性能分析。

7. 兼容性和版本控制
   一些参数允许用户指定兼容性设置或使用特定版本的组件。

8. 灵活性和可扩展性
   丰富的参数集使Spark能够适应各种复杂的数据处理场景和工作流程。

虽然参数众多可能看起来复杂，但这实际上是Spark强大和灵活的体现。在实际使用中，您通常不需要设置所有参数。大多数情况下，您可以从一些基本参数开始，然后根据需要逐步调整和优化。
![image.png](https://piggo5.oss-cn-shenzhen.aliyuncs.com/ob/202407081503394.png)


## 如何开始学习

1. 常用参数集

在日常使用中，有一些参数是最常用的，掌握这些可以满足大部分基本需求：

- `--master`: 指定集群管理器
- `--deploy-mode`: 选择部署模式
- `--class`: 指定主类
- `--executor-memory`: 设置执行器内存
- `--num-executors`: 设置执行器数量
- `--executor-cores`: 设置每个执行器的核心数

2. 使用配置文件

为了简化命令行，您可以将常用参数放在配置文件中，例如`spark-defaults.conf`。这样可以避免每次都要输入长命令。

3. 创建脚本或别名

您可以创建shell脚本或别名，封装常用的Spark提交命令和参数，以便快速启动应用程序。

4. 使用环境变量

某些参数可以通过设置环境变量来指定，这样可以避免在命令行中重复输入。

5. 利用Spark UI

Spark提供了Web UI，可以帮助您监控应用程序并了解资源使用情况，这有助于您优化参数设置。

6. 渐进式优化

从基本配置开始，然后根据应用程序的性能和资源使用情况逐步调整参数。

7. 了解默认值

熟悉Spark的默认参数值，这样您就知道在哪些情况下需要进行自定义设置。

8. 使用高级资源管理器

如果您在大型集群上运行Spark，考虑使用像Kubernetes或Yarn这样的资源管理器，它们可以帮助自动化一些资源分配过程。

9. 参数模板

为不同类型的作业（如ETL、机器学习等）创建参数模板，可以快速启动特定类型的任务。

10. 持续学习

Spark生态系统在不断发展，定期查看文档和最佳实践可以帮助您更有效地使用和配置Spark。

记住，虽然参数很多，但您不需要一次掌握所有的参数。随着您使用Spark的经验增加，您会逐渐熟悉更多的参数和它们的用途。
![image.png](https://piggo5.oss-cn-shenzhen.aliyuncs.com/ob/202407081502993.png)


## 一些具体的例子

### 1. 基本的Spark应用提交

这是一个简单的Spark应用提交命令：

```bash
spark-submit \
  --class org.example.MySparkApp \
  --master spark://master:7077 \
  --deploy-mode cluster \
  --executor-memory 4G \
  --num-executors 5 \
  myapp.jar
```

这个命令在集群模式下提交一个Spark应用，分配5个执行器，每个有4GB内存。

### 2. 提交带有依赖的Python脚本

如果您正在使用PySpark并需要额外的Python包：

```bash
spark-submit \
  --master yarn \
  --deploy-mode client \
  --executor-memory 2G \
  --executor-cores 2 \
  --num-executors 3 \
  --py-files dependencies.zip \
  --conf spark.yarn.appMasterEnv.PYSPARK_PYTHON=./environment/bin/python \
  my_pyspark_script.py
```

这个命令在YARN上以客户端模式运行PySpark脚本，包含了额外的Python依赖。

### 3. 运行Spark SQL作业

对于Spark SQL作业，您可能需要更多的驱动器内存：

```bash
spark-submit \
  --class org.apache.spark.sql.hive.thriftserver.HiveThriftServer2 \
  --master yarn \
  --deploy-mode client \
  --driver-memory 8G \
  --executor-memory 4G \
  --num-executors 10 \
  --conf spark.sql.hive.thriftServer.singleSession=true \
  spark-internal
```

这个命令启动一个Hive ThriftServer，为Spark SQL提供服务。

### 4. 提交Spark Streaming作业

对于流处理作业，您可能需要配置检查点和恢复选项：

```bash
spark-submit \
  --class com.example.StreamingJob \
  --master yarn \
  --deploy-mode cluster \
  --driver-memory 4G \
  --executor-memory 2G \
  --executor-cores 2 \
  --num-executors 5 \
  --conf spark.streaming.backpressure.enabled=true \
  --conf spark.streaming.kafka.maxRatePerPartition=100 \
  --conf spark.streaming.receiver.writeAheadLog.enable=true \
  streaming-job.jar
```

这个命令配置了一个Spark Streaming作业，启用了背压和预写日志。

### 5. 使用外部包运行Spark作业

如果您的作业依赖于外部库，例如连接到数据库：

```bash
spark-submit \
  --class com.example.DataProcessingJob \
  --master spark://master:7077 \
  --deploy-mode client \
  --driver-memory 4G \
  --executor-memory 2G \
  --num-executors 3 \
  --packages org.postgresql:postgresql:42.2.18 \
  --conf spark.executor.extraJavaOptions=-Dcom.amazonaws.services.s3.enableV4=true \
  data-processing-job.jar
```

这个命令包含了PostgreSQL JDBC驱动，并设置了一个Java系统属性。

一些更复杂的例子和使用技巧：

### 6. 动态资源分配

Spark支持动态资源分配，这对于长时间运行的作业特别有用：

```bash
spark-submit \
  --class com.example.LongRunningJob \
  --master yarn \
  --deploy-mode cluster \
  --executor-memory 4G \
  --conf spark.dynamicAllocation.enabled=true \
  --conf spark.shuffle.service.enabled=true \
  --conf spark.dynamicAllocation.initialExecutors=5 \
  --conf spark.dynamicAllocation.minExecutors=2 \
  --conf spark.dynamicAllocation.maxExecutors=20 \
  long-running-job.jar
```

这个配置允许Spark根据工作负载动态增加或减少执行器的数量。

### 7. 使用多个配置文件

您可以使用多个配置文件来管理不同环境的设置：

```bash
spark-submit \
  --properties-file prod-spark-defaults.conf \
  --files app-config.properties \
  --class com.example.ConfigurableJob \
  --master yarn \
  configurable-job.jar
```

这里，`prod-spark-defaults.conf`包含Spark的配置，而`app-config.properties`包含应用程序特定的配置。

### 8. GPU 支持

如果您的集群有GPU，您可以这样配置Spark以使用GPU：

```bash
spark-submit \
  --master yarn \
  --deploy-mode cluster \
  --num-executors 4 \
  --executor-memory 20G \
  --executor-cores 5 \
  --conf spark.task.resource.gpu.amount=1 \
  --conf spark.executor.resource.gpu.amount=1 \
  --conf spark.executor.resource.gpu.discoveryScript=/usr/lib/spark/gpu_discovery.sh \
  gpu-job.py
```

这个配置告诉Spark每个执行器使用一个GPU。

### 9. 自定义日志配置

您可以自定义Spark的日志配置：

```bash
spark-submit \
  --class com.example.LoggingJob \
  --master yarn \
  --deploy-mode cluster \
  --files log4j.properties \
  --conf spark.executor.extraJavaOptions="-Dlog4j.configuration=file:log4j.properties" \
  --conf spark.driver.extraJavaOptions="-Dlog4j.configuration=file:log4j.properties" \
  logging-job.jar
```

这个配置使用自定义的`log4j.properties`文件来控制日志输出。

### 10. 使用Kubernetes作为集群管理器

如果您使用Kubernetes来管理Spark集群：

```bash
spark-submit \
  --master k8s://https://k8s-apiserver-host:443 \
  --deploy-mode cluster \
  --name spark-pi \
  --class org.apache.spark.examples.SparkPi \
  --conf spark.executor.instances=5 \
  --conf spark.kubernetes.container.image=spark:v3.1.1 \
  --conf spark.kubernetes.authenticate.driver.serviceAccountName=spark \
  local:///path/to/examples.jar
```

这个命令在Kubernetes集群上提交Spark作业。

### 11 使用外部shuffle服务

对于大规模洗牌操作，使用外部洗牌服务可以提高性能：

```bash
spark-submit \
  --class com.example.ShuffleIntensiveJob \
  --master yarn \
  --deploy-mode cluster \
  --conf spark.shuffle.service.enabled=true \
  --conf spark.dynamicAllocation.enabled=true \
  --conf spark.shuffle.service.port=7337 \
  shuffle-intensive-job.jar
```

这个配置启用了外部洗牌服务，这可以提高大规模数据洗牌的效率。

这些高级示例展示了Spark提交命令的强大功能和灵活性。通过这些配置，您可以精细地控制Spark作业的执行方式，优化资源使用，并适应各种复杂的计算环境。

## 如何根据集群配置调整参数

根据集群配置调整Spark参数是优化性能的关键。这个过程需要考虑多个因素，并且通常需要一些实验和调优。以下是一些指导原则和步骤，根据集群配置调整Spark参数：

1. 了解集群资源

首先，您需要清楚地了解您的集群资源：

- 节点数量
- 每个节点的CPU核心数
- 每个节点的内存大小
- 网络带宽
- 存储类型和容量（HDD、SSD、NVMe等）

2. 设置执行器数量（--num-executors）

通常，你会希望每个节点运行少量执行器，以充分利用资源：

```
--num-executors = (节点数 * 每节点核心数) / 每执行器核心数 - 1
```

减1是为了给ApplicationMaster预留资源。

3. 设置执行器内存（--executor-memory）

考虑到系统和Hadoop守护进程的开销，通常将每个节点75-80%的内存分配给Spark：

```
--executor-memory = (节点内存 * 0.75) / 每节点执行器数
```

4. 设置执行器核心数（--executor-cores）

一般建议每个执行器使用5个核心左右：

```
--executor-cores 5
```

5. 调整驱动程序内存（--driver-memory）

对于驱动程序密集型作业，可能需要增加驱动程序内存：

```
--driver-memory 4g
```

6. 配置分区数

分区数通常设置为执行器核心总数的2-3倍：

```
--conf spark.default.parallelism=(--num-executors * --executor-cores) * 2
```

7. 调整 shuffle 分区

对于大数据集，可能需要增加 shuffle 分区数：

```
--conf spark.sql.shuffle.partitions=1000
```

8. 启用动态资源分配

对于工作负载变化的场景，启用动态资源分配可以提高资源利用率：

```
--conf spark.dynamicAllocation.enabled=true
--conf spark.shuffle.service.enabled=true
```

9. 根据存储类型优化

如果使用SSD，可以增加 `spark.shuffle.file.buffer`：

```
--conf spark.shuffle.file.buffer=64k
```

10. 网络配置

对于网络密集型任务，可以调整以下参数：

```
--conf spark.reducer.maxSizeInFlight=96m
--conf spark.shuffle.io.maxRetries=10
--conf spark.shuffle.io.retryWait=60s
```

11. 序列化

使用Kryo序列化可以提高性能：

```
--conf spark.serializer=org.apache.spark.serializer.KryoSerializer
```

示例配置：

假设我们有一个10节点的集群，每个节点有16核和64GB内存：

```bash
spark-submit \
  --class com.example.BigDataJob \
  --master yarn \
  --deploy-mode cluster \
  --num-executors 30 \
  --executor-cores 5 \
  --executor-memory 17g \
  --driver-memory 4g \
  --conf spark.default.parallelism=300 \
  --conf spark.sql.shuffle.partitions=1000 \
  --conf spark.dynamicAllocation.enabled=true \
  --conf spark.shuffle.service.enabled=true \
  --conf spark.serializer=org.apache.spark.serializer.KryoSerializer \
  big-data-job.jar
```

这只是一个起点。您需要根据实际工作负载和数据特征进行进一步的调整和测试。使用Spark UI和日志来监控性能，并根据观察结果逐步优化参数。

![image.png](https://piggo5.oss-cn-shenzhen.aliyuncs.com/ob/202407081503167.png)

## 总结

Apache Spark提供了大量参数来优化其性能和资源使用。本文概述了Spark参数配置的关键方面。

### 参数多样性的原因
1. 适应不同部署环境（单机、集群、云）
2. 精细化资源管理和性能优化
3. 应用程序配置灵活性
4. 安全性和访问控制
5. 日志和监控定制

### 常用参数
- `--master`: 指定集群管理器
- `--deploy-mode`: 选择部署模式
- `--class`: 指定主类
- `--executor-memory`: 设置执行器内存
- `--num-executors`: 设置执行器数量
- `--executor-cores`: 设置每个执行器的核心数

### 高级配置示例
1. 动态资源分配
2. 多配置文件使用
3. GPU支持
4. 自定义日志配置
5. Kubernetes集成
6. 外部洗牌服务

### 根据集群配置调整参数
1. 了解集群资源（节点数、CPU、内存、网络、存储）
2. 计算合适的执行器数量和内存
3. 优化分区数和shuffle操作
4. 启用动态资源分配
5. 根据存储类型和网络特性进行优化
6. 考虑序列化方式

### 最佳实践
- 从基本配置开始，逐步优化
- 利用Spark UI监控性能
- 创建常用配置的脚本或别名
- 定期查看文档和最新最佳实践

调整Spark参数是一个迭代过程，需要根据具体工作负载和集群特性不断优化。