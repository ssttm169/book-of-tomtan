import{_ as e,o as n,c as a,e as s}from"./app-b28ea471.js";const i={},t=s(`<br><p>我们不想在页面的下面 展示编辑此页链接.</p><h2 id="侧边栏排除" tabindex="-1"><a class="header-anchor" href="#侧边栏排除" aria-hidden="true">#</a> 侧边栏排除</h2><p>这个表示是否在侧边栏中索引当前页面, 在的要改排除md文件里边 把YAML front matter的 index 属性设置为false即可。</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>---
index: false
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时间线排除" tabindex="-1"><a class="header-anchor" href="#时间线排除" aria-hidden="true">#</a> 时间线排除</h2><p>这个表示是否将该文章添加至时间线中, 在的要改排除md文件里边 把YAML front matter的 timeline 属性设置为false即可。</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>---
timeline: false
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常规文章列表排除" tabindex="-1"><a class="header-anchor" href="#常规文章列表排除" aria-hidden="true">#</a> 常规文章列表排除</h2><p>这个表示是否将该文章添加至文章列表中, 在的要改排除md文件里边 把YAML front matter的 article 属性设置为false即可。</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>---
article: false
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="首页文章列表排除" tabindex="-1"><a class="header-anchor" href="#首页文章列表排除" aria-hidden="true">#</a> 首页文章列表排除</h2><p>这个需要修改 XXX/.vuepress/theme.ts 这个主题文件的blog.filter</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  blog<span class="token operator">:</span> <span class="token punctuation">{</span>
    filter<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;/xxxx&#39;</span> <span class="token comment">// 相关对径 例 /buy-me-a-coffee</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[t];function d(c,r){return n(),a("div",null,l)}const p=e(i,[["render",d],["__file","exclude-article-in-blog.html.vue"]]);export{p as default};
