# 🌸 Littles Details Izamar

Aplicación web de comercio electrónico para la venta de flores eternas, rosas, girasoles y arreglos florales hermosos. Perfectos para ocasiones especiales y regalos memorables.

## 📋 Descripción

**Littles Details Izamar** es una tienda online especializada en flores eternas y frescas. La aplicación permite a los usuarios explorar un catálogo de productos, filtrar por categorías, agregar artículos al carrito de compras y realizar pedidos directamente a través de WhatsApp.

## ✨ Características

- 🌺 **Catálogo de Productos**: Navegación completa de flores y arreglos disponibles
- 🔍 **Filtros por Categoría**: Filtra productos por Ramo, Flor, o Adorno
- 🛒 **Carrito de Compras**: Gestión intuitiva de productos seleccionados
- 📱 **Integración con WhatsApp**: Envío directo de pedidos vía WhatsApp
- 💫 **Animaciones Suaves**: Experiencia de usuario mejorada con Framer Motion
- 📱 **Diseño Responsivo**: Adaptado para dispositivos móviles, tablets y escritorio
- 🎨 **Interfaz Moderna**: Diseñada con Tailwind CSS y componentes de Radix UI

## 🛍️ Productos Disponibles

### Ramos
- Girasol con 2 rositas
- Mini ramo rojo
- Ramo de 7 rosas amarillas
- Ramo con girasol
- Ramo color chicle
- Ramo lila
- Ramo azul

### Flores Individuales
- Flor corazón
- Flor individual roja
- Flor individual lila
- Flor individual amarilla
- Girasol individual

### Adornos para Carro
- Varios diseños disponibles

## 🚀 Tecnologías Utilizadas

- **Framework**: [Next.js 15.1.6](https://nextjs.org/) con App Router
- **Lenguaje**: TypeScript
- **UI Library**: React 19
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Componentes**: Radix UI
- **Íconos**: Lucide React
- **Desarrollo**: Turbopack para compilación rápida

## 📦 Instalación

### Prerrequisitos

- Node.js 20.x o superior
- npm, yarn, pnpm o bun

### Pasos de Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Edgarmejiav/DETAILS-IZAMAR.git
cd DETAILS-IZAMAR
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con Turbopack
- `npm run build` - Compila la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter de ESLint

## 📁 Estructura del Proyecto

```
DETAILS-IZAMAR/
├── app/
│   ├── components/
│   │   ├── Cart.tsx           # Componente del carrito de compras
│   │   ├── ProductList.tsx    # Lista de productos
│   │   └── WhatsAppButton.tsx # Botón de pedido por WhatsApp
│   ├── layout.tsx             # Layout principal
│   ├── page.tsx               # Página principal
│   └── globals.css            # Estilos globales
├── components/
│   └── ui/                    # Componentes UI reutilizables
├── lib/                       # Utilidades y helpers
├── public/
│   └── imgs/                  # Imágenes de productos
├── next.config.ts             # Configuración de Next.js
├── tailwind.config.ts         # Configuración de Tailwind
└── package.json               # Dependencias del proyecto
```

## 🎨 Personalización

### Agregar Nuevos Productos

Edita el archivo `app/page.tsx` y agrega nuevos productos al array `flowersAll`:

```typescript
const flowersAll: Flower[] = [
    {
        id: 18,
        name: "Nombre del producto",
        description: "Descripción del producto",
        price: 30,
        category: "Ramo" // o "Flor" o "Adorno"
    },
    // ...más productos
];
```

### Modificar Estilos

Los estilos se gestionan con Tailwind CSS. Puedes personalizar:
- `tailwind.config.ts` - Configuración de tema y colores
- `app/globals.css` - Estilos globales
- Componentes individuales - Clases de Tailwind inline

## 🌐 Despliegue

### Vercel (Recomendado)

La forma más fácil de desplegar esta aplicación es usar [Vercel](https://vercel.com):

1. Crea una cuenta en [Vercel](https://vercel.com/signup)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente Next.js y configurará el build
4. ¡Tu aplicación estará en línea en minutos!

URL de producción: [https://details-izamar.vercel.app](https://details-izamar.vercel.app)

### Otras Plataformas

También puedes desplegar en:
- Netlify
- Railway
- AWS Amplify
- Google Cloud Platform
- DigitalOcean App Platform

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

## 📱 SEO y Metadata

La aplicación incluye metadatos optimizados para SEO y redes sociales:
- Meta tags de Open Graph
- Twitter Cards
- Keywords optimizados
- Descripción para motores de búsqueda

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está destinado para uso personal de Littles Details Izamar.

## 📞 Contacto

Para pedidos o consultas, contáctanos a través de:
- WhatsApp: (disponible en la aplicación)
- Sitio web: [https://details-izamar.vercel.app](https://details-izamar.vercel.app)

---

**Desarrollado con ❤️ para Littles Details Izamar**

## 📚 Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React](https://react.dev)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Framer Motion](https://www.framer.com/motion/)
- [Componentes Radix UI](https://www.radix-ui.com/)
