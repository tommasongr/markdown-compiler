---
code: {{code}}
name: {{name}}
layout: {{layout}}
title: Atosa Italy - {{name}}
date: {{currentDate}}
line: {{line}}
published: true
img: /assets/img/products/thumbs/{{img}}.jpg
socialImage: /assets/img/products/thumbs/{{img}}.jpg
family: {{family}}
offers: false
permalink: /products/{{line}}/{{permalink}}/:title/

[//]: # (ADDITIONAL)

energy: '{{#ifvalue energy value='SI'}}/assets/img/products/energy/{{line}}/EEI--{{code}}.png{{/ifvalue}}'
cadDraw: '{{#ifvalue cadDraw value='SI'}}/assets/img/products/cad/{{code}}.pdf{{/ifvalue}}'
exploded: '{{#ifvalue exploded value='SI'}}/assets/img/products/exploded/{{line}}/{{code}}.pdf{{/ifvalue}}'
dataSheet: '{{#ifvalue dataSheet value='SI'}}/assets/img/products/data/{{line}}/{{code}}.pdf{{/ifvalue}}'
---


| Dimensioni (LxPxA mm) | {{dimensioni}} |
| Dimensioni Interne (mm) | {{dimensioniInterne}} |
| Griglie Incluse | {{griglieIncluse}} |
| Capacità (L) | {{capacità}} |
| Peso Netto (Kg) | {{pesoNetto}} |
| Amperaggio (A) | {{amperaggio}} |
| Consumo (kW/24h) | {{consumo}} |
| Compressore | {{compressore}} |
| Modello Compressore | {{modelloCompressore}} |
| Termostato | {{termostato}} |
| Modello Termostato | {{modelloTermostato}} |
| Gas Refrigerante | {{gasRefrigerante}} |
| Temperatura (°C) | {{temperatura}} |
| Spessore Coibentazione (cm) | {{spessoreCoibentazione}} |
{: .info-specs-table}

{{#ifvalue alzatina value='SI'}}
"Disponibile in versione con Alzatina: {{code}}A"
{: .extra-notes}
{{/ifvalue}}