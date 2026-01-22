# Historial de Cambios - Club K-1 Andorra

## Fecha: 2026-01-21

### Resumen General
Actualización completa del sitio web de Freddy Boxing a Club K-1 Andorra con rebranding, actualización de contenidos y mejoras estructurales.

---

## 🎨 Rebranding y Actualización de Contenido

### 1. Cambio de Marca Principal
- **De:** Freddy Boxing
- **A:** Club K-1 Andorra
- **Alcance:** Todos los archivos, componentes y páginas del sitio

### 2. Nomenclatura de Disciplinas
**Antes:** "Kick Boxing / K-1", "Kickboxing/K-1", "K-1"
**Ahora:** "Kickboxing" (simplificado y consistente)

**Archivos afectados:**
- Header.astro
- Footer.astro
- index.astro (Home)
- disciplinas/index.astro
- disciplinas/k1.astro
- disciplinas/boxeo.astro
- disciplinas/muay-thai.astro
- sobre-mi.astro

### 3. Información de Contacto Actualizada
- **Email:** info@freddyboxing.com → **info@k1andorra.com**
- **Dirección agregada:** Centre, Camí Esportiu dels Serradells, AD500 Andorra la Vella, Andorra
- **Teléfono/WhatsApp:** +376 331 785 (mantenido)

---

## 📄 Cambios por Archivo

### `src/components/Header.astro`
**Línea 5-19:** Actualización del menú de navegación
- Cambiado submenu item: "Kick Boxing / K-1" → "Kickboxing"
- **Eliminado:** Enlace a "CURSOS"
- Estructura final: SOBRE MÍ | DISCIPLINAS (Boxeo, Kickboxing, Muay Thai) | HORARIOS Y PRECIOS | GALERÍA | CONTACTO

### `src/components/Footer.astro`
**Cambios realizados:**
- Branding: "FREDDY BOXING" → "CLUB K-1 ANDORRA"
- Tagline: "Boxeo, Kickboxing y Muay Thai en Andorra"
- Email: info@k1andorra.com
- **Nueva sección:** Dirección física completa
- Enlaces actualizados a nuevas páginas de disciplinas

### `src/pages/index.astro` (Home)
**Cambios estructurales mayores:**

1. **Meta información:**
   - Title: "Club K-1 Andorra – Boxeo, Kickboxing y Muay Thai en Andorra la Vella"
   - Description actualizada con nueva propuesta de valor

2. **Hero Section (líneas 30-60):**
   - H1: "Club K-1 Andorra"
   - Subtitle: "Boxeo, Kickboxing y Muay Thai en Andorra la Vella"
   - Frase animada mantenida: "SIN SACRIFICIO NO HAY GLORIA"

3. **Nueva sección: Estadísticas (líneas 108-129):**
   - 23 años formando atletas
   - +400 alumnos entrenados
   - 2007 fundación del club
   - Contador animado con JavaScript

4. **Nueva sección: Filosofía (líneas 134-163):**
   - Título: "Un club, una familia y una pasión"
   - 5 valores: Respeto, Disciplina, Humildad, Esfuerzo, Superación personal
   - Grid con iconos y animaciones hover

5. **Sección Disciplinas actualizada (líneas 168-217):**
   - Cambiado "Kick Boxing / K-1" → "Kickboxing"
   - 4 tarjetas: Boxeo, Kickboxing, Muay Thai, Clases Privadas

6. **Nueva sección: Beneficios (líneas 241-272):**
   - 6 beneficios principales con checkmarks
   - Grid responsive

7. **Testimonios con diseño "Ring" (líneas 277-329):**
   - 4 testimonios con badges "ROUND 1-4"
   - Avatares circulares con efecto hover
   - SVG decorativo con círculos de ring

8. **Formulario de Contacto movido al final (líneas 288-329):**
   - **Eliminado de la posición inicial** (después del hero)
   - **Reubicado:** Sección "Tu primera clase te está esperando"
   - Campos: Nombre, Email, Teléfono, Disciplina de interés, Mensaje
   - Action: https://formspree.io/f/YOUR_FORM_ID (pendiente configuración)

### `src/pages/sobre-mi.astro`
**Cambios:**
- Title: "Sobre mí – Alfred "Freddy" Calero | Campeón de Europa | Club K-1 Andorra"
- Timeline actualizada con nueva estructura:
  1. INTRODUCCIÓN - Soy Alfred "Freddy" Calero
  2. LOS INICIOS - El Judo: La Base
  3. COMPETICIÓN - Campeón de Europa y España
  4. MUAY THAI - Viaje a Tailandia
  5. FILOSOFÍA - Un Eterno Aprendiz
- **Nueva sección:** Lema - "La constancia crea la superación."
- Arsenal: "Kick Boxing" → "Kickboxing"
- Estilo warrior cinematográfico mantenido

### `src/pages/contacto.astro`
**Transformación completa:**
- **Antes:** Página "Coming Soon"
- **Ahora:** Página funcional completa

**Contenido (líneas 24-105):**
1. **Hero section:** Título y subtítulo
2. **Info card:**
   - 📍 Dirección completa
   - 📞 Teléfono/WhatsApp: +376 331 785
   - ✉️ Email: info@k1andorra.com
3. **CTAs card:**
   - Reservar primera clase (WhatsApp)
   - Abrir WhatsApp
   - Enviar Email
   - Volver al Inicio
4. **Horario de atención:**
   - Lunes a Viernes: 7:00 - 22:00
   - Sábado: 9:00 - 14:00
   - Domingo: Cerrado

### `src/pages/disciplinas/index.astro`
**Archivo creado desde cero**

**Estructura (líneas 20-128):**
1. **Hero:** "Servicios"
2. **Grid de servicios (4 tarjetas):**

   **Boxeo:**
   - Imagen: IMG_2011_kick-andorra_fin-scaled.jpeg
   - 5 beneficios: Resistencia, Coordinación, Fuerza, Seguridad personal, Reducción del estrés
   - Link: /disciplinas/boxeo/

   **Kickboxing:**
   - Imagen: 11A_00015.jpeg
   - 5 beneficios: Cardio intenso, Flexibilidad, Potencia, Equilibrio, Autoconfianza
   - Link: /disciplinas/k1/

   **Muay Thai:**
   - Imagen: IMG_1657-scaled.jpeg
   - 5 beneficios: Entrenamiento completo, Disciplina mental, Resistencia extrema, Técnica avanzada, Cultura marcial
   - Link: /disciplinas/muay-thai/

   **Clases Privadas:**
   - Sin imagen (estilo destacado)
   - 4 características: Atención 1-a-1, Objetivos personalizados, Horario flexible, Progresión rápida
   - Link: /contacto/

**Estilos (líneas 134-357):**
- Cards con hover effects
- Grid responsive (4 cols → 1 col en mobile)
- Diseño alternado (reverse) para variedad visual

### `src/pages/disciplinas/boxeo.astro`
**Cambios menores:**
- WhatsApp link limpiado: "Hola Freddy" → "Hola"
- Texto capitalizado: "boxeo" → "Boxeo"
- Línea 117

**Contenido verificado (veracidad):**
- ✅ Técnicas correctas: jab, cross, gancho, uppercut
- ✅ 8 beneficios listados son precisos y reales
- ✅ Información técnica veraz

### `src/pages/disciplinas/k1.astro`
**Cambios realizados (múltiples líneas):**

**Meta (líneas 10-11):**
- Title: "Kick Boxing K-1 en Andorra" → "Kickboxing en Andorra | Club K-1 Andorra - Entrenamiento Profesional"
- Description actualizada

**Hero (línea 23):**
- H1: "KICK BOXING / K-1" → "KICKBOXING EN ANDORRA"

**Contenido (líneas 32, 35, 48, 102, 110):**
- Todas las referencias "Kick Boxing", "kick boxing", "K-1" → "Kickboxing"

**WhatsApp (línea 112):**
- "Hola Freddy, quiero información sobre clases de kick boxing" → "Hola, quiero información sobre clases de Kickboxing"

**Contenido verificado (veracidad):**
- ✅ Origen en Japón 1960s: Correcto
- ✅ Combina karate, muay thai, boxeo: Correcto
- ✅ 8 beneficios listados son precisos

### `src/pages/disciplinas/muay-thai.astro`
**Cambios menores:**
- WhatsApp link limpiado (línea 112)
- "Hola Freddy" → "Hola"

**Contenido verificado (veracidad):**
- ✅ "Arte de las 8 armas": Correcto (2 puños, 2 codos, 2 rodillas, 2 piernas)
- ✅ Originario de Tailandia: Correcto
- ✅ 8 beneficios listados son precisos y reales

### `src/pages/cursos.astro`
**ELIMINADO**
- Archivo completamente eliminado del proyecto
- Ya no es necesario según requisitos del cliente

---

## 🎨 Mejoras de Diseño y UX

### Animaciones Implementadas
1. **Frase motivacional en Hero:**
   - Alternancia cada 3 segundos
   - "SIN SACRIFICIO" ↔ "NO HAY GLORIA"
   - Smooth transitions con CSS cubic-bezier
   - Respeta prefers-reduced-motion

2. **Contador de estadísticas:**
   - Animación de números incrementales
   - Flash effect al completar
   - Activado al entrar en viewport (Intersection Observer)

3. **Scroll progress bar:**
   - Barra superior fija
   - Gradient rojo-dorado
   - Actualización smooth en scroll

4. **Cards hover effects:**
   - Shake animation sutil
   - Transform 3D (rotateX, rotateY)
   - Líneas decorativas animadas

### Separadores Decorativos
- Diamante dorado centrado (◆)
- Gradientes rojo-dorado
- Alternancia background claro/oscuro

### Responsive Design
- Mobile-first approach
- Breakpoints: 1024px, 768px
- Grid columns: 4 → 2 → 1
- Touch-friendly buttons y forms

---

## 🔧 Configuraciones Pendientes

### 1. Formspree (Formulario de Contacto)
**Archivo:** `src/pages/index.astro` línea 296

**Pasos:**
1. Crear cuenta en https://formspree.io
2. Usar email: info@k1andorra.com
3. Obtener Form ID
4. Reemplazar `YOUR_FORM_ID` en:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

### 2. Canonical URLs
- ✅ **Actualizado:** freddyboxing.com → k-1andorra.com
- **Dominio definitivo:** https://k-1andorra.com/
- Actualizado en 9 páginas (index, sobre-mi, contacto, disciplinas, galeria, horarios-precios)

---

## 📊 Estructura Final del Sitio

```
/
├── / (Home)
│   ├── Hero con frase animada
│   ├── Estadísticas (23 años, 400+ alumnos, 2007)
│   ├── Filosofía (5 valores)
│   ├── Disciplinas (Boxeo, Kickboxing, Muay Thai, Privadas)
│   ├── Entrenador (Alfred Freddy Calero)
│   ├── Beneficios (6 items)
│   ├── Testimonios (4 rounds)
│   └── Formulario de contacto
│
├── /sobre-mi/ (About)
│   ├── Timeline warrior style
│   └── Lema personal
│
├── /disciplinas/ (Services Index)
│   ├── Boxeo card
│   ├── Kickboxing card
│   ├── Muay Thai card
│   └── Clases Privadas card
│
├── /disciplinas/boxeo/
│   ├── Hero
│   ├── Práctica del Boxeo
│   ├── 8 Beneficios
│   └── CTA
│
├── /disciplinas/k1/ (Kickboxing)
│   ├── Hero
│   ├── Práctica del Kickboxing
│   ├── 8 Beneficios
│   └── CTA
│
├── /disciplinas/muay-thai/
│   ├── Hero
│   ├── Práctica del Muay Thai
│   ├── 8 Beneficios
│   └── CTA
│
├── /contacto/ (Contact)
│   ├── Info de contacto
│   ├── CTAs múltiples
│   └── Horario de atención
│
├── /horarios-precios/ (Pendiente actualización)
└── /galeria/ (Sin cambios)
```

---

## ✅ Checklist de Tareas Completadas

- [x] Actualizar Footer (email, dirección, branding)
- [x] Actualizar Header (navegación, nomenclatura Kickboxing)
- [x] Actualizar Home completa (nuevo diseño con secciones)
- [x] Actualizar página Sobre mí (textos, mantener estilo warrior)
- [x] Actualizar página Contacto (de Coming Soon a completa)
- [x] Crear página disciplinas/index.astro (Servicios)
- [x] Actualizar páginas individuales disciplinas (Kickboxing, Boxeo, Muay Thai)
- [x] Eliminar página de Cursos
- [x] Eliminar link a Cursos del Header
- [x] Mover formulario al final del Home
- [x] Verificar veracidad de información de disciplinas
- [x] Revisar y testear todos los cambios

---

## 🚀 Servidor de Desarrollo

**Comando:** `npm run dev`
**URL Local:** http://localhost:4321/
**Estado:** ✅ Corriendo (proceso bc0897c)

Para detener el servidor:
```bash
# Encontrar proceso
ps aux | grep "astro dev"

# Detener
kill [PID]
```

---

## 📝 Notas Técnicas

### Stack Tecnológico
- **Framework:** Astro 5.14.1
- **Hosting:** Vercel
- **Estilos:** CSS Variables nativas
- **Tipografía:** Oswald (headings), Inter (body)
- **Imágenes:** Astro:assets con optimización WebP/AVIF
- **Forms:** Formspree (pendiente configuración)

### Variables CSS Principales
```css
--bg: #0B0D0F (fondo oscuro)
--card: #14161A (tarjetas)
--fg: #F6F7F9 (texto claro)
--accent: #E10600 (rojo marca)
--gold: #CDA434 (dorado)
--line: #2A2D32 (bordes)
```

### Convenciones de Código
- Componentes Astro en PascalCase
- Páginas en kebab-case
- Imágenes importadas con alias descriptivos
- CSS con clases semánticas
- Accessibility: aria-labels, prefers-reduced-motion

---

## 🐛 Issues Conocidos y Soluciones

### ~~Títulos no centrados en páginas de disciplinas~~ ✅ RESUELTO
**Problema:** Los h2 con clase `.text-center` no se centraban correctamente.

**Causa:** Estilos globales en `index.astro` establecían `display: inline-block` para todos los h2.

**Solución aplicada (2026-01-22):**
- Modificado `src/pages/index.astro` líneas 859-875
- Cambiado selectores globales `h2` a `.text-center h2` y `h2.text-center`
- Cambiado `display: inline-block` a `display: block`
- Añadido `text-align: center` explícitamente
- Ahora los títulos se centran correctamente en todas las landing pages

---

## 📅 Próximos Pasos Sugeridos

### Corto Plazo
1. Configurar Formspree con info@k1andorra.com
2. Actualizar URLs canónicas cuando se defina dominio final
3. Añadir contenido a /horarios-precios/

### Medio Plazo
4. Optimización SEO específica por página
5. Añadir más imágenes reales del gimnasio
6. Implementar sistema de reservas online (si se requiere)

### Largo Plazo
7. Blog/noticias del club
8. Área de miembros
9. Integración con sistema de pagos

---

## 👤 Información del Cliente

**Gimnasio:** Club K-1 Andorra
**Entrenador:** Alfred "Freddy" Calero
**Ubicación:** Centre, Camí Esportiu dels Serradells, AD500 Andorra la Vella
**Contacto:** +376 331 785 | info@k1andorra.com
**Horario:**
- Lunes a Viernes: 7:00 - 22:00
- Sábado: 9:00 - 14:00
- Domingo: Cerrado

**Disciplinas ofrecidas:**
- Boxeo
- Kickboxing
- Muay Thai
- Clases Privadas

---

---

## 📝 Actualizaciones Post-Lanzamiento

### 2026-01-22

**Commit:** d8d93f3
- Fix títulos centrados en páginas de disciplinas
- Actualización de dominio a k-1andorra.com

**Commit:** 894b46b
- Actualización de documentación

**Commit:** 30ba8d0
- **Actualización de estadísticas:**
  - Cambiado: "18 años formando luchadores" → "23 años formando atletas"
  - Contador actualizado: 18 → 23
  - Término más abierto e inclusivo
  - Archivo: `src/pages/index.astro:70-71`

---

**Última actualización:** 2026-01-22
**Versión:** 2.2
**Estado:** ✅ Producción Ready (pending Formspree config)
**Dominio:** https://k-1andorra.com/

## 📊 Resumen de Commits

- **4e4a285** - Rebranding completo: Freddy Boxing → Club K-1 Andorra (2026-01-21)
- **d8d93f3** - Fix: Centrar títulos + Actualizar dominio (2026-01-22)
- **894b46b** - Docs: Actualizar claude.md (2026-01-22)
- **30ba8d0** - Update: 23 años formando atletas (2026-01-22)
