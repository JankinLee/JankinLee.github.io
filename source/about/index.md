---
title: about
date: 2020-5-01 22:14:36
keywords: 关于
description: 
layout: "about"
comments: false
photos: https://cdn.jsdelivr.net/gh/JankinLee/cdn@1.1/img/banner/about.jpg
---
{% raw %}
<!-- 因为vue和botui更新导至bug,现将对话移至js下的botui中配置 -->

<div class="entry-content">
  <div class="moe-mashiro" style="text-align:center; font-size: 50px; margin-bottom: 20px;">[脚滑の俗人]</div>
  <div id="hello-mashiro" class="popcontainer" style="min-height: 300px; padding: 2px 6px 4px; background-color: rgba(242, 242, 242, 0.5); border-radius: 10px;">
    <center>
    <p>
    </p>
    <h4>
    天&nbsp;<ruby>
    人&nbsp;<rp>
    （</rp>
    <rt>
    交（发）战（呆）</rt>
    <rp>
    ）</rp>
    </ruby>
    中...</h4>
    <p>
    </p>
    </center>
    <bot-ui></botui>
  </div>
</div>
<script src="/js/botui.js"></script>
<script>
bot_ui_ini()
</script>

{% endraw %}