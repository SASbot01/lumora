# LUMORA — Meta Ads Playbook (config ganadora 2026)

> Objetivo: vender la **Cortadora Pro Zero-Gapped** (39,95 €) con anuncios UGC de Jerico.
> Filosofía 2026: **estructura simple + audiencia amplia + dejar trabajar al algoritmo (Advantage+)**. El creativo es el 80% del resultado. No micro-gestiones.

---

## 0. ANTES de gastar 1 € (requisitos técnicos)
Sin esto, los anuncios no optimizan o ni se aprueban:

1. **Meta Business Manager** creado (business.facebook.com) con tu identidad.
2. **Cuenta publicitaria** + método de pago + **página de Facebook** + **Instagram conectada** (la que ya tienes).
3. **Meta Pixel** instalado → ya está en la web (`consent-pixel.js`). Solo falta **pegar tu ID** en `META_PIXEL_ID`.
4. **Conversions API (CAPI)** — clave en 2026 por iOS/bloqueadores. Opciones:
   - Rápida: **CAPI Gateway** o la integración de Stripe/partner.
   - Mejor: server-side con el webhook de Stripe (lo montamos en fase 2).
5. **Dominio verificado** en Business Manager + **priorizar 8 eventos** (Purchase arriba).
6. **Política de privacidad pública** → ya creada (`privacidad.html`). Meta la exige.
7. **Test Events** (Events Manager) en verde: PageView, ViewContent, InitiateCheckout, Purchase.

> ⚠️ Sin Purchase llegando al píxel/CAPI, Meta **no puede** optimizar por compras. Es el punto #1.

---

## 1. ESTRUCTURA DE CAMPAÑA (la que funciona hoy)

**Usa Advantage+ Sales Campaign (ASC)** — es la apuesta por defecto de Meta para ecommerce y la que mejor rinde con presupuesto pequeño.

```
CAMPAÑA: [PROSPECTING] ASC - Cortadora
 ├─ Objetivo: Ventas (Sales)
 ├─ Conversión: Purchase (Compra)
 ├─ Presupuesto: CBO a nivel campaña (Advantage Campaign Budget)
 ├─ Audiencia: Advantage+ (amplia). País: España. Edad 18-45. Sin intereses al inicio.
 │            (Opcional: "audience suggestions" como pista, NO como límite)
 └─ Conjunto de anuncios: 1 solo (deja que ASC reparta)
      └─ 3-5 creativos (AD 1, 2, 3 + variantes de hook)

CAMPAÑA: [RETARGETING] - Recupera
 ├─ Objetivo: Ventas
 └─ Audiencias:
     • Visitó web 30d y NO compró
     • Vio vídeo 50%+ (IG/FB) 30d
     • Engagement IG/FB 30d
     • Añadió al carrito / InitiateCheckout 14d (la más caliente)
     └─ Creativos: AD 6 (storytime) + oferta/urgencia + reseñas reales
```

**Regla de oro:** 1 campaña de prospecting (amplia) + 1 de retargeting. **No crees 15 conjuntos.** Con poco presupuesto, fragmentar mata el aprendizaje.

---

## 2. PRESUPUESTO Y FASES

| Fase | Días | Presupuesto/día | Qué haces |
|---|---|---|---|
| **Test** | 1-4 | 20-30 € (todo a prospecting ASC) | Subes 3-5 creativos. **NO TOCAS NADA.** Dejas salir de aprendizaje (~50 compras/sem es el ideal teórico; con poco budget, optimiza igual). |
| **Lectura** | 5-7 | igual | Miras qué creativo se lleva el gasto y trae ventas. Matas los que no. |
| **Escala** | 8+ | +20% cada 3-4 días | Subes presupuesto SOLO si CPA < margen. Añades retargeting (5-10 €/día). Grabas variantes del hook ganador. |

- **Presupuesto mínimo realista para aprender:** 20 €/día × 7 días = ~140 €. Tu checklist reserva 350-400 € → perfecto para 2 semanas de test + escala.
- **No subas el presupuesto de golpe** (>20-30%): reinicia el aprendizaje. Sube en escalones.

---

## 3. KPIs Y UMBRALES DE DECISIÓN

Margen aprox.: PVP 39,95 € − coste producto/envío/comisión (~12-16 €) ≈ **24-28 € de margen bruto**. Tu **CPA objetivo (coste por compra) máximo ≈ 18-22 €** para ganar dinero (deja margen para devoluciones).

| Métrica | Bien | Mata o revisa |
|---|---|---|
| **CTR (link)** | > 1,5% | < 0,8% → creativo flojo |
| **CPC** | < 0,50 € | > 1 € |
| **CPM** | 4-12 € (España) | muy alto = creativo/segmento malo |
| **Hook rate** (3s views / impresiones) | > 25% | < 15% → cambia los 2 primeros segundos |
| **ROAS** | > 1,8 para empezar; > 2,5 escalable | < 1,3 sostenido → pausa |
| **CPA** | < 18 € | > margen → pausa o cambia creativo |

> Decide por **CPA/ROAS a nivel creativo**, no por likes. Un ad con muchos comentarios pero sin ventas, fuera.

---

## 4. CREATIVO (donde se gana o se pierde)

Ya tienes 8 guiones grabados por Jerico (`09-TIKTOK-CORTADORA.md`). Orden de entrada:
1. **AD 1 (test del barbero)** — principal.
2. **AD 3 (ahorro)** — suele ser el de mejor ROI.
3. **AD 2 (transformación)** — visual fuerte.
4. **AD 5 (40€ vs 200€)** y **AD 7 (verano)** como refuerzo estacional.
5. **AD 8 (regalo)** → conjunto/campaña aparte segmentada a **mujeres 20-45** en fechas clave.
6. **AD 6 (storytime)** → reservado para **retargeting**.

**Reglas de creativo para ads:**
- 9:16, subtítulos quemados, hook con texto en pantalla en <2s, logo solo al final.
- Graba **3-5 hooks distintos del mismo vídeo** → es el test más rentable que existe.
- Formato UGC/auténtico > "anuncio de marca". La autoridad de barbero real es tu ventaja.
- **Renueva creativos cada 1-2 semanas** (fatiga de anuncio). El creativo es lo que escalas, no el presupuesto.

---

## 5. AUTOMATIZACIÓN DENTRO DE META (reglas automáticas)
Meta ejecuta estas reglas por ti 24/7 (Ads Manager → Reglas). Configúralas una vez:

1. **Apaga perdedores:** SI (gasto ≥ 1,5× CPA objetivo) Y (compras = 0) en 3 días → **pausar anuncio**. Frecuencia: diaria.
2. **Protege presupuesto:** SI CPA (7 días) > 25 € → **pausar conjunto** y avisarme por email.
3. **Escala ganadores:** SI ROAS (3 días) > 2,5 Y gasto > 15 € → **subir presupuesto +20%**. Máx 1 vez/día.
4. **Control de frecuencia (retargeting):** SI frecuencia > 4 → bajar puja/pausar.
5. **Aviso de fatiga:** SI CTR cae 30% vs 7 días antes → notificación (toca renovar creativo).

> Esto es automatización **real y segura**: las reglas las ejecuta Meta, no tocan tu dinero más allá de los límites que tú pones.

---

## 6. ¿HASTA DÓNDE SE PUEDE AUTOMATIZAR? (honesto)

**Lo que SÍ se automatiza hoy:**
- ✅ **El algoritmo de Meta (Advantage+)** ya hace el 80%: a quién, cuándo y a qué precio mostrar. Es IA, y es la mejor automatización disponible.
- ✅ **Reglas automáticas** (sección 5): pausar/escalar/avisar sin que estés delante.
- ✅ **Catálogo + Advantage+ catalog** para retargeting dinámico automático.
- ✅ **Reporting automático**: puedo montarte un script (Meta Marketing API) que **lea métricas a diario y te mande un resumen** con recomendaciones (qué escalar / qué matar). Esto sí lo puedo construir y mantener.
- ✅ **Generación de variantes de copy/hooks** con IA (te las preparo en lote).

**Lo que NO debo automatizar a ciegas (y por qué):**
- ❌ **Que "yo" (la IA) gestione tu dinero sin supervisión.** Lanzar/subir/bajar gasto en vivo es una acción **irreversible que mueve tu dinero**. Requiere acceso a tu cuenta publicitaria y un humano que autorice. No es honesto venderte "lo llevo yo solo": una decisión mala quema presupuesto real.
- ❌ **Aprobar creativos/claims sin revisión** (riesgo legal: claims falsos = cuenta baneada).
- ❌ **Cambiar la oferta/precio** sin tu visto bueno.

**El modelo realista y potente:** tú (o yo vía API con tu permiso) pones la estructura; **Meta optimiza solo**; las **reglas automáticas** vigilan 24/7; y yo te doy el **panel de decisiones diario** (qué escalar, qué cortar, qué grabar). Tú apruebas con un clic. Eso es ~90% automatizado con el 10% de control humano donde está el dinero. **Empieza así. Cuando haya histórico y confianza, ampliamos la API.**

---

## 7. RETARGETING + EMAIL (cierra al que no compró)
- Pixel → audiencias de retargeting (sección 1).
- Sincroniza el evento **Lead** (newsletter) → secuencia Klaviyo (`05-EMAIL-FLOWS.md`).
- Carrito abandonado: email a 1h/24h/48h con `LUZ10`.
- **El retargeting suele ser tu mejor ROAS.** No lo dejes para "luego".

---

## 8. ERRORES QUE NO VAS A COMETER
- Tocar campañas en fase de aprendizaje (espera 3-4 días).
- Fragmentar en muchos conjuntos con poco presupuesto.
- Optimizar por clics/tráfico en vez de por **Compra**.
- Escalar presupuesto de golpe.
- Reseñas/cifras inventadas (ilegal UE + ban de Meta). Usa prueba social **real**.
- Claims médicos ("regenera", "elimina"). Usa "acabado de barbería", "apura a 0mm".
