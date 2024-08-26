import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.C94oF1kp.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"大数据开发/大数据SQL格式化规范及示例.md","filePath":"大数据开发/大数据SQL格式化规范及示例.md"}'),h={name:"大数据开发/大数据SQL格式化规范及示例.md"},l=n(`<p>无论是数据仓库开发还是数据分析，编写清晰易读的SQL是一项基本的技能。本文将分享几个SQL格式的规范和示例，旨在提高SQL的可读性和可维护性。</p><p>虽然这些规范没有严格的标准，但统一的格式可以帮助减少理解和维护SQL代码的时间。不管团队其他人怎样，自己写的要有规范！</p><p><img src="https://piggo5.oss-cn-shenzhen.aliyuncs.com/ob/202406162321789.png" alt="image.png"></p><h2 id="大小写保持一致" tabindex="-1">大小写保持一致 <a class="header-anchor" href="#大小写保持一致" aria-label="Permalink to &quot;大小写保持一致&quot;">​</a></h2><p>SQL关键字的大小写可以自由选择，但应保持一致。例如：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> customer_city, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">COUNT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dim_customer</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> customer_province </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;上海&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GROUP BY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> customer_city;</span></span></code></pre></div><h3 id="示例" tabindex="-1">示例： <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例：&quot;">​</a></h3><p>不规范的SQL语句：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> customer_city,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dim_customer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> customerProvince </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;上海&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> Group by</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> customer_city;</span></span></code></pre></div><p>规范后的SQL语句：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> customer_city, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">COUNT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dim_customer</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> customer_province </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;上海&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GROUP BY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> customer_city;</span></span></code></pre></div><p>注意点：</p><ul><li>SQL关键字的大小写保持一致。</li><li>字段命名风格保持一致，避免混用下划线和驼峰命名法。</li></ul><h2 id="使用缩进" tabindex="-1">使用缩进 <a class="header-anchor" href="#使用缩进" aria-label="Permalink to &quot;使用缩进&quot;">​</a></h2><p>合理的缩进能使SQL语句结构更加清晰。以下是两种常见的缩进方式：</p><h3 id="示例1" tabindex="-1">示例1： <a class="header-anchor" href="#示例1" aria-label="Permalink to &quot;示例1：&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">region_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">COUNT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user_behavior_log ubl</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dim_province dp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ubl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province_name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ubl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;上海市&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GROUP BY</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">region_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="示例2" tabindex="-1">示例2： <a class="header-anchor" href="#示例2" aria-label="Permalink to &quot;示例2：&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">region_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    COUNT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user_behavior_log ubl</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dim_province dp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ubl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province_name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ubl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;上海市&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GROUP BY</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">region_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="示例3" tabindex="-1">示例3： <a class="header-anchor" href="#示例3" aria-label="Permalink to &quot;示例3：&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">region_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    COUNT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user_behavior_log ubl</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dim_province dp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ubl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province_name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ubl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;上海市&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GROUP BY</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">region_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>建议使用4个字符或2个字符缩进，根据团队习惯选择。</p><h2 id="在group-by和order-by之后使用字段的排列序号" tabindex="-1">在GROUP BY和ORDER BY之后使用字段的排列序号 <a class="header-anchor" href="#在group-by和order-by之后使用字段的排列序号" aria-label="Permalink to &quot;在GROUP BY和ORDER BY之后使用字段的排列序号&quot;">​</a></h2><p>这种方式可以简化代码，特别是对于包含多个字段的分组和排序：</p><h3 id="示例-1" tabindex="-1">示例： <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例：&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">region_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    COUNT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user_behavior_log ubl</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dim_province dp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ubl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province_name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GROUP BY</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ORDER BY</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>这样写有如下好处：</p><ul><li>节省行数：避免在GROUP BY和ORDER BY子句中重复列名。</li><li>可维护性：更改分组字段时，只需修改SELECT子句。</li></ul><h2 id="使用common-table表达式-cte" tabindex="-1">使用Common Table表达式(CTE) <a class="header-anchor" href="#使用common-table表达式-cte" aria-label="Permalink to &quot;使用Common Table表达式(CTE)&quot;">​</a></h2><p>CTE可以简化复杂查询，将查询逻辑拆分为多个部分，使代码更具可读性和可维护性：</p><h3 id="示例-2" tabindex="-1">示例： <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例：&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WITH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> employee_by_title_count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> AS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> job_title, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">COUNT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> amount_of_employees</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> employees e</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> job_titles t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">job_title_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    GROUP BY</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">salaries_by_title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> AS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> job_title, salary</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> job_titles</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> employee_by_title_count e</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> salaries_by_title s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">job_title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">job_title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="使用具有描述性的别名" tabindex="-1">使用具有描述性的别名 <a class="header-anchor" href="#使用具有描述性的别名" aria-label="Permalink to &quot;使用具有描述性的别名&quot;">​</a></h2><p>为查询列加上易于理解的别名，可以增加脚本的可维护性：</p><h3 id="示例-3" tabindex="-1">示例： <a class="header-anchor" href="#示例-3" aria-label="Permalink to &quot;示例：&quot;">​</a></h3><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SELECT</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">region_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> AS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> region,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    COUNT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user_count</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user_behavior_log ubl</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dim_province dp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ubl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province_name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WHERE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ubl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">province</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;上海市&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GROUP BY</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">region_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>文中提到的一些规范，有些是必须遵守的，有些是个人习惯。无论你是开发人员、数据分析师，还是数据仓库开发人员，遵循这些规范可以避免不必要的麻烦。</p><p>SQL格式没有标准的约定，需要与团队成员达成共识，一起按照相同的约定进行开发，提高SQL代码的可读性和可维护性。</p>`,39),k=[l];function p(t,e,E,r,d,g){return a(),i("div",null,k)}const o=s(h,[["render",p]]);export{F as __pageData,o as default};
