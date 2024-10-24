<template><div><h1 id="markdown-extension-examples" tabindex="-1"><a class="header-anchor" href="#markdown-extension-examples"><span>Markdown Extension Examples</span></a></h1>
<p>This page demonstrates some of the built-in markdown extensions provided by VitePress.</p>
<h2 id="syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#syntax-highlighting"><span>Syntax Highlighting</span></a></h2>
<p>VitePress provides Syntax Highlighting powered by <a href="https://github.com/shikijs/shiki" target="_blank" rel="noopener noreferrer">Shiki</a>, with additional features like line-highlighting:</p>
<p><strong>Input</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre><code><span class="line"><span class="token code"><span class="token punctuation">```</span><span class="token code-language">js{4}</span></span>
<span class="line"><span class="token code-block language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'Highlighted!'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span></span>
<span class="line"><span class="token punctuation">```</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'Highlighted!'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="custom-containers" tabindex="-1"><a class="header-anchor" href="#custom-containers"><span>Custom Containers</span></a></h2>
<p><strong>Input</strong></p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre><code><span class="line">::: info</span>
<span class="line">This is an info box.</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: tip</span>
<span class="line">This is a tip.</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: warning</span>
<span class="line">This is a warning.</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: danger</span>
<span class="line">This is a dangerous warning.</span>
<span class="line">:::</span>
<span class="line"></span>
<span class="line">::: details</span>
<span class="line">This is a details block.</span>
<span class="line">:::</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>This is an info box.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This is a tip.</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>This is a warning.</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>This is a dangerous warning.</p>
</div>
<details class="hint-container details"><summary>Details</summary>
<p>This is a details block.</p>
</details>
<h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji"><span>Emoji</span></a></h2>
<p>🎉 💯</p>
<h2 id="more" tabindex="-1"><a class="header-anchor" href="#more"><span>More</span></a></h2>
<p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noopener noreferrer">full list of markdown extensions</a>.</p>
</div></template>


