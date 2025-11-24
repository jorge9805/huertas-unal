# 🚀 Pasos para Subir a GitHub

## Opción 1: Usando GitHub CLI (Recomendado)

### 1. Instalar GitHub CLI
Descarga desde: https://cli.github.com/

### 2. Autenticarse
```bash
gh auth login
```
Sigue las instrucciones para autenticarte con tu cuenta de GitHub.

### 3. Crear y subir el repositorio
```bash
gh repo create huertas-unal --public --source=. --remote=origin --push
```

---

## Opción 2: Creando el repositorio manualmente en GitHub

### 1. Ve a GitHub
Abre https://github.com/new en tu navegador

### 2. Completa la información:
- **Repository name:** `huertas-unal`
- **Description:** Proyecto web de Huertas Urbanas UNAL - Investigación y Educación
- **Public/Private:** Elige según tu preferencia
- ⚠️ **NO** marques "Initialize this repository with a README"

### 3. Después de crear el repositorio, ejecuta estos comandos:

```bash
# Asegúrate de estar en la carpeta del proyecto
cd C:/Users/Biblio/Desktop/huertasUnal

# Agregar el remote de GitHub (reemplaza TU_USUARIO con tu nombre de usuario)
git remote add origin https://github.com/TU_USUARIO/huertas-unal.git

# Cambiar el nombre de la rama a 'main' (si es necesario)
git branch -M main

# Subir los archivos a GitHub
git push -u origin main
```

---

## Opción 3: Usando SSH (si ya tienes SSH configurado)

```bash
# Agregar el remote con SSH
git remote add origin git@github.com:TU_USUARIO/huertas-unal.git

# Cambiar a rama main
git branch -M main

# Push
git push -u origin main
```

---

## 🔑 Si te pide credenciales

GitHub ya no acepta contraseñas para git. Necesitas usar uno de estos métodos:

### A. Personal Access Token (PAT)
1. Ve a: https://github.com/settings/tokens
2. Click en "Generate new token (classic)"
3. Dale un nombre y permisos (marca al menos "repo")
4. Copia el token generado
5. Cuando git te pida la contraseña, pega el token

### B. GitHub CLI (Más fácil)
```bash
gh auth login
```

---

## ✅ Verificar que se subió correctamente

Después de hacer push, ve a:
```
https://github.com/TU_USUARIO/huertas-unal
```

Deberías ver todos tus archivos allí.

---

## 📝 Comandos útiles para el futuro

```bash
# Ver estado de los cambios
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push

# Ver el historial
git log --oneline

# Ver los remotes configurados
git remote -v
```

---

## 🆘 Solución de problemas comunes

### "Permission denied (publickey)"
- Necesitas configurar SSH o usar HTTPS con Personal Access Token

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/huertas-unal.git
```

### "Updates were rejected"
```bash
git pull origin main --rebase
git push origin main
```
