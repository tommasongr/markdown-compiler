---
name: {{name}}
title: Markdown Compiler - {{name}}
subtitle: {{subtitle}}
id: {{id}}
coverIMG: /assets/img/thumbs/{{coverIMG}}.jpg
collection: {{collection}}
date: {{currentDate}}
published: {{published}}
layout: {{layout}}
permalink: /{{collection}}/{{id}}/
---

{{content}}


{{#ifvalue ifExample value=true}}

Hello world! I'm... {{name}}
{: .markdown-class-example}

{{/ifvalue}}