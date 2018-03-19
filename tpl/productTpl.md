---
code: {{code}}
name: {{name}}
layout: {{layout}}
date: {{currentDate}}
published: true
img: /assets/img/products/thumbs/{{img}}.jpg
family: {{family}}
offers: false
permalink: /products/{{line}}/{{permalink}}/:title/

[//]: # (ADDITIONAL)

energy: '{{#ifvalue energy value='SI'}}/assets/img/products/energy/{{line}}/EEI--{{code}}.png{{/ifvalue}}'
cadDraw: '/assets/img/products/cad/{{code}}.pdf'
exploded: '{{#ifvalue exploded value='SI'}}/assets/img/products/exploded/{{code}}.pdf{{/ifvalue}}'
dataSheet: '{{#ifvalue dataSheet value='SI'}}/assets/img/products/data/{{code}}.pdf{{/ifvalue}}'
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
"Disponibile in versione con Alzatina: EPF3421A"
{: .extra-notes}
{{/ifvalue}}