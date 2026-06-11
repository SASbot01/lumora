# LUMORA — Plan de acción (qué hacer DESDE AHORA)

> Orden real de prioridades. Lo que te bloquea para vender va primero.

## 🔴 SEMANA 1 — Desbloquear la venta (sin esto, no hay negocio legal ni ads)
Estado tras esta sesión: la web ya tiene **píxel + consentimiento RGPD + páginas legales + checkout Stripe**. Faltan TUS datos y accesos:

1. **Rellenar [CORCHETES] legales** — en `privacidad.html`, `aviso-legal.html`, `terminos.html`, `envios-devoluciones.html`: nombre/entidad, NIF/VAT, dirección, email. (Confirma con asesor cómo factura la LLC el IVA UE.)
2. **Email profesional** `hola@lumora.com` (o el dominio que uses) y poner ese email en lugar de `[email]` en la web.
3. **Crear Meta Business Manager** + cuenta publicitaria + página FB + conectar IG.
4. **Crear el Meta Pixel**, copiar su ID y pegarlo en `META_PIXEL_ID` (`consent-pixel.js`).
5. **Verificar dominio** en Business Manager + configurar los 8 eventos (Purchase prioritario).
6. **Probar una compra real** de prueba (Stripe modo test o compra real reembolsada) → confirmar que llega **Purchase** a Events Manager y que `gracias.html` carga.
7. **Quitar las cifras inventadas** de la web ("214 reseñas", "+2.000 hombres") hasta tener reales — riesgo legal UE + ban de Meta. (Te lo dejo a un clic: dímelo y lo cambio por prueba social honesta.)

## 🟠 SEMANA 1-2 — Prueba social real (lo que más sube la conversión)
8. **Conseguir 5-10 reseñas reales con foto/vídeo** — regala unidades a clientes/amigos de la barbería a cambio de reseña honesta. Sustituye las de ejemplo.
9. **Pedir testimonios en vídeo** de clientes de Jerico usando la máquina → sirven como ads y como prueba.
10. **Foto real del sérum** (cuando toque) y del packaging.

## 🟡 SEMANA 2-3 — Lanzar Meta Ads (ver `11-META-ADS-PLAYBOOK.md`)
11. Subir AD 1, 2, 3 + variantes de hook a una **campaña ASC (ventas/Purchase)**, España, 18-45, 20-30 €/día.
12. Configurar las **5 reglas automáticas** (apagar/escalar/avisar).
13. **No tocar 3-4 días.** Leer. Matar perdedores. Escalar ganador +20%.
14. Activar **campaña de retargeting** (AD 6 + oferta) cuando haya tráfico.
15. En paralelo: **publicar orgánico** 1-3 vídeos/día en TikTok + Reels (los mismos guiones). El orgánico baja tu CPA.

## 🟢 SEMANA 3-6 — Optimizar y construir marca
16. Email marketing (Klaviyo): bienvenida, carrito abandonado, post-compra (`05-EMAIL-FLOWS.md`).
17. Renovar creativos cada 1-2 semanas (fatiga).
18. Empezar lista de espera del **sérum/roller** (mide demanda antes de fabricar).
19. Montar **reporting automático** (script Meta API) → resumen diario de decisiones.

## 🔵 MES 2-3 — Escalar
20. **CAPI server-side** con webhook de Stripe (mejor señal → mejor optimización → CPA más bajo).
21. **Subir ticket medio:** pack (cortadora + aceite/peines + estuche), upsell en checkout, suscripción de cuchillas/recambios.
22. **Lanzar 2º producto** (roller o sérum) a la lista de espera → ya tienes audiencia.
23. **Plantear migrar a Shopify** si el volumen lo pide (mejor checkout, upsells, apps de reseñas, multi-país). Hoy Stripe Link te vale para validar; Shopify es para escalar.
24. **TikTok Shop** + Amazon como canales nuevos.
25. **Expansión geográfica:** mismo producto, traducir (ES→EN/FR/IT), Markets/multi-moneda, ads por país.

---

## Reparto de roles
- **TÚ:** identidad legal, dinero, comprar stock, grabar contenido con Jerico, aprobar decisiones de ads/gasto, atención al cliente.
- **CLAUDE (yo):** toda la infraestructura web/legal/tracking, copys y fichas, configuración de campañas y reglas, panel de decisiones diario, scripts de reporting, SEO, emails, y guiarte clic a clic.

## Cómo expandir el negocio (resumen)
1. **Profundidad:** sube el ticket medio del cliente que ya tienes (packs, recambios por suscripción, upsells). Es el dinero más barato.
2. **Catálogo:** de 1 producto a una **línea de grooming masculino** (corte → piel → cabello/barba). Misma audiencia, más LTV.
3. **Canales:** web → +TikTok Shop → +Amazon → +marketplaces UE.
4. **Geografía:** España → UE (idiomas + multi-moneda + ads por país).
5. **Marca/comunidad:** Jerico como cara → contenido constante → comunidad "trabaja tu versión" → la marca vende sola y baja el coste de adquisición.
6. **B2B:** vender lotes a barberías/peluquerías como marca blanca o afiliación (Jerico abre esa puerta).
