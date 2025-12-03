# 📘 Fundamentos de Programación - Práctica 1

## 👨‍💻 Información del Estudiante

- **Nombre:** David Alonso Romero Medina
- **Matrícula:** SW2409053
- **Grupo:** C
- **Cuatrimestre:** Primer Cuatrimestre
- **Carrera:** TSU en Desarrollo e Innovación de Software
- **Profesor:** Jorge Javier Pedrozo Romero

---

## 📋 Descripción del Proyecto

Este repositorio contiene mi portafolio de evidencias, donde se presentan todas las actividades realizadas en la unidad

## 🎯 Objetivos Alcanzados

- ✅ Dominar variables y tipos de datos en JavaScript
- ✅ Implementar estructuras condicionales
- ✅ Utilizar bucles y funciones
- ✅ Manipular arrays unidimensionales
- ✅ Trabajar con arrays bidimensionales (matrices)
- ✅ Aplicar control de versiones con Git y GitHub

---

## 📊 Progreso de Ejercicios

### Actividad 02
- [x] index.html ✅
- [x] script.js ✅


### Actividad 04
- [x] index.html ✅
- [x] script.js ✅


### Actividad 06
- [x] index.html ✅
- [x] script.js ✅


### Actividad 08
- [x] index.html ✅
- [x] script.js ✅


### Actividad 10
- [x] index.html ✅
- [x] script.js ✅


### Actividad 12
- [x] index.html ✅
- [x] script.js ✅

### Actividad 14
- [x] index.html ✅
- [x] script.js ✅

---

## 📈 Calificación Final

```
┌────────────────────────────────────────┐
│  REPORTE DE CALIFICACIÓN               │
├────────────────────────────────────────┤
│  Puntos obtenidos: 100/100             │
│  Porcentaje: 100%                      │
│  🎓 Calificación: A - Excelente        │
└────────────────────────────────────────┘
```

![Tests](../../actions/workflows/test.yml/badge.svg)

---

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- Git

### Clonar el repositorio
```bash
git clone https://github.com/TU-USUARIO/fundamentos-programacion-practica-1.git
cd fundamentos-programacion-practica-1
```

### Instalar dependencias
```bash
npm install
```

### Ejecutar tests
```bash
npm test
```

### Ejecutar tests en modo watch
```bash
npm run test:watch
```

### Ver cobertura de código
```bash
npm run test:coverage
```

---

## 📁 Estructura del Proyecto

```
fundamentos-programacion-practica-1/
│
├── Portafolio de Evidencias           
├── Actividades      
├── actividad02            
├── actividad04              
├── actividad06     
├── actividad08      
│── actividad10
│── actividad12
│── actividad14
└── .github/
    └── workflows/
        └── test.yml        # Configuración de GitHub Actions
```

---

## 💡 Aprendizajes Clave

### Lo que más me costó
- **Ejercicio 5.5 (Transponer Matriz)**: Entender cómo intercambiar filas por columnas requirió visualizar bien el proceso.
- **Ejercicio 3.1 (Factorial)**: Al principio olvidé el caso base cuando n=0.

### Lo que más me gustó
- **Arrays Bidimensionales**: Ver cómo las matrices se relacionan con estructuras de datos reales como imágenes.
- **Testing Automático**: Es increíble ver los tests correr y obtener retroalimentación inmediata.

### Técnicas aplicadas
- Uso de `for` loops para iteraciones
- Operador módulo `%` para determinar paridad
- Arrays dinámicos con `.push()`
- Bucles anidados para matrices

---

## 🔧 Ejemplos de Código

### Función Favorita: Transponer Matriz
```javascript
function transponer(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;
  const transpuesta = [];
  
  for (let j = 0; j < columnas; j++) {
    const fila = [];
    for (let i = 0; i < filas; i++) {
      fila.push(matriz[i][j]);
    }
    transpuesta.push(fila);
  }
  
  return transpuesta;
}
```

**Por qué me gusta:** Demuestra cómo manipular estructuras bidimensionales de forma elegante.

---

## 📚 Recursos Utilizados

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [JavaScript.info](https://es.javascript.info/)
- [Stack Overflow](https://stackoverflow.com)
- Guía del estudiante incluida en el repositorio

---

## 🎯 Próximos Pasos

Este proyecto me prepara para:
- ✨ Operaciones matriciales avanzadas (multiplicación, determinantes)
- 🖼️ Desarrollo de editores de imágenes
- 🔐 Implementación de algoritmos de encriptación
- 📊 Creación de calculadoras científicas

---

## 📝 Historial de Commits

```bash
# Ver mi historial completo
git log --oneline --graph --decorate
```

**Commits destacados:**
- `Actividad02 completa`
- `Actividad 06 completa`
- `Actividad 08 completa`
- `Actividad 10 completa`
- `Actividad 12 completa`
- `Actividad 14 completa`

---

## 🤝 Agradecimientos

- **Profesor Jorge Javier Pedrozo Romero** por la estructura del curso y la práctica
- **Compañeros del Grupo [C]** por el apoyo mutuo
- **Tecnológico de Software** por la formación integral

---

## 📧 Contacto

- **Email Institucional:** [david.romero@tecdesoftware.edu.mx]
- **GitHub:** [DavidAlonsoRomeroMedina]https://github.com/

---

## 📄 Licencia

Este proyecto es parte de las actividades académicas del **Tecnológico de Software** y está bajo la licencia MIT.

---

<div align="center">

**⭐ Si te gustó este proyecto, dale una estrella ⭐**

Hecho con 💙 por [Tu Nombre] - 2025

</div>
