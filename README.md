# Proyecto Integrador | React JS

## Temática

🔗 La temática es un **E-commerce**.  
Página para una empresa que venda algún producto o grupo de productos y/o servicios.  

---

## Indicaciones Generales

- Desarrollar su propia idea, su propio modelo de negocio.     
- El proyecto debe ser **totalmente responsive** (condición necesaria para aprobar).  

---


## La APP deberá contar con:

### 👉 Landing Page
- Header con su navbar funcional en responsive con API Context o Redux Toolkit.
- Hero representativo de su página.
- Apartado introductorio de *About*, que lleve a la página "Sobre Nosotros" (por ejemplo, un botón).
- Sección de cards con productos destacados que lleve a la página de productos (por ejemplo, un botón).
- Footer.

### 👉 Página "Sobre Nosotros"
- Con Header, Footer y la información que corresponda.

### 👉 Página de "Productos"
- Productos renderizados dinámicamente.
- Lógica de filtros.
- Agregado de productos al carrito.
- Manejo de cantidades en carrito.
- Posibilidad de vaciar el carrito.
- Borrar individualmente cada producto.
- Realizar compra.  
  > Todas estas acciones deben tener un **modal de confirmación**.

### 👉 Página de Contacto
- Formulario con campos: **nombre, apellido, email, asunto**.
- Validación con **Formik**.
- No debe enviar nada, pero sí cumplir con la validación correcta.
- Renderizar un mensaje de envío correcto si todos los campos pasan la validación.

### 👉 Requisitos Técnicos
- Todas las páginas vinculadas entre sí mediante **React Router**.
- Diseño responsive en todas las páginas.
- Deploy en **Vercel**.
- Persistencia de productos en el carrito.
- Entregar el repositorio de **GitHub** y el link de **Vercel**.

---

## Opcionales (Desafíos Extra)
- Sistema de login y registro.
- Página de checkout al realizar la compra.
- Página de producto individual.
- Envío de mail desde el formulario de contacto usando APIs como **emailJS**.
