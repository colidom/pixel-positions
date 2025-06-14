# 🧰 Laravel Job Board

Proyecto final del curso [30 Days to Learn Laravel 11](https://laracasts.com/series/30-days-to-learn-laravel-11) de Laracasts.  
Es una aplicación web para publicar y buscar ofertas de empleo, desarrollada con Laravel 11, Blade y Tailwind CSS.

---

## 🚀 Funcionalidades

-   🔐 Registro, inicio y cierre de sesión
-   📝 Crear, editar y eliminar ofertas laborales
-   🔎 Búsqueda por título, descripción y etiquetas
-   🏷️ Sistema de etiquetas para clasificar empleos
-   📁 Subida de logotipos de empresa
-   ✅ Validación de formularios
-   🧪 Pruebas automatizadas (TDD con PHPUnit)
-   💡 Interfaz responsive con Tailwind CSS

---

## 🧑‍💻 Tecnologías

-   Laravel 11
-   Laravel Breeze (auth)
-   Blade (plantillas)
-   Eloquent ORM
-   Tailwind CSS
-   PHPUnit

---

## 📦 Instalación

```bash
git clone https://github.com/tuusuario/laravel-job-board.git
cd laravel-job-board
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate --seed
npm install && npm run dev
php artisan serve
```

## 🧪 Ejecutar pruebas

```bash
php artisan test
```

## 📚 Créditos

Este proyecto fue desarrollado siguiendo el curso gratuito de Laracasts:
👉 [30 Days to Learn Laravel 11]('https://laracasts.com/series/30-days-to-learn-laravel-11')

## 📝 Licencia

Este proyecto está bajo la licencia GPL-3.0.
