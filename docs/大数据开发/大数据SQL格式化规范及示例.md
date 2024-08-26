
无论是数据仓库开发还是数据分析，编写清晰易读的SQL是一项基本的技能。本文将分享几个SQL格式的规范和示例，旨在提高SQL的可读性和可维护性。

虽然这些规范没有严格的标准，但统一的格式可以帮助减少理解和维护SQL代码的时间。不管团队其他人怎样，自己写的要有规范！

![image.png](https://piggo5.oss-cn-shenzhen.aliyuncs.com/ob/202406162321789.png)

## 大小写保持一致

SQL关键字的大小写可以自由选择，但应保持一致。例如：

```sql
SELECT customer_city, COUNT(*)
FROM dim_customer
WHERE customer_province = '上海'
GROUP BY customer_city;
```

### 示例：

不规范的SQL语句：

```sql
SELECT customer_city,count(*) from dim_customer WHERE customerProvince = '上海' Group by customer_city;
```

规范后的SQL语句：

```sql
SELECT customer_city, COUNT(*)
FROM dim_customer
WHERE customer_province = '上海'
GROUP BY customer_city;
```

注意点：
- SQL关键字的大小写保持一致。
- 字段命名风格保持一致，避免混用下划线和驼峰命名法。

## 使用缩进

合理的缩进能使SQL语句结构更加清晰。以下是两种常见的缩进方式：

### 示例1：

```sql
SELECT dp.region_name, COUNT(*)
FROM user_behavior_log ubl
JOIN dim_province dp ON ubl.province = dp.province_name
WHERE ubl.province = '上海市'
GROUP BY dp.region_name;
```

### 示例2：

```sql
SELECT
    dp.region_name,
    COUNT(*)
FROM user_behavior_log ubl
JOIN dim_province dp ON ubl.province = dp.province_name
WHERE ubl.province = '上海市'
GROUP BY
    dp.region_name;
```

### 示例3：

```sql
SELECT
    dp.region_name,
    COUNT(*)
FROM user_behavior_log ubl
JOIN dim_province dp ON ubl.province = dp.province_name
WHERE ubl.province = '上海市'
GROUP BY
    dp.region_name;
```

建议使用4个字符或2个字符缩进，根据团队习惯选择。

## 在GROUP BY和ORDER BY之后使用字段的排列序号

这种方式可以简化代码，特别是对于包含多个字段的分组和排序：

### 示例：

```sql
SELECT
    dp.region_name,
    dp.province_name,
    COUNT(*)
FROM user_behavior_log ubl
JOIN dim_province dp ON ubl.province = dp.province_name
GROUP BY 1, 2
ORDER BY 3;
```

这样写有如下好处：
- 节省行数：避免在GROUP BY和ORDER BY子句中重复列名。
- 可维护性：更改分组字段时，只需修改SELECT子句。

## 使用Common Table表达式(CTE)

CTE可以简化复杂查询，将查询逻辑拆分为多个部分，使代码更具可读性和可维护性：

### 示例：

```sql
WITH employee_by_title_count AS (
    SELECT t.name AS job_title, COUNT(e.id) AS amount_of_employees
    FROM employees e
    JOIN job_titles t ON e.job_title_id = t.id
    GROUP BY 1
),
salaries_by_title AS (
    SELECT name AS job_title, salary
    FROM job_titles
)
SELECT *
FROM employee_by_title_count e
JOIN salaries_by_title s ON s.job_title = e.job_title;
```

## 使用具有描述性的别名

为查询列加上易于理解的别名，可以增加脚本的可维护性：

### 示例：

```sql
SELECT
    dp.region_name AS region,
    COUNT(*) AS user_count
FROM user_behavior_log ubl
JOIN dim_province dp ON ubl.province = dp.province_name
WHERE ubl.province = '上海市'
GROUP BY dp.region_name;
```

## 总结

文中提到的一些规范，有些是必须遵守的，有些是个人习惯。无论你是开发人员、数据分析师，还是数据仓库开发人员，遵循这些规范可以避免不必要的麻烦。

SQL格式没有标准的约定，需要与团队成员达成共识，一起按照相同的约定进行开发，提高SQL代码的可读性和可维护性。