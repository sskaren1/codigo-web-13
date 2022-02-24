# Codigo 13
## Comandos para GIT
### Sólo se realiza una vez
```
git init
```
- Este comando solo se hace una vez por proyecto, sirve para inicializar nuestro proyecto con git
- :eye: crear una :file_folder: carpeta oculta llamada .git

```
git config --global user.name "sskaren1" 
```

```
git config --global user.email "karen.93st@gmail.com" 
```
- Configurar una dirección de correo electrónico en Git(el correo con el que cree mi cuenta de github)

```
git config --global user.email
```
- Confirma que has establecido correctamente la dirección de correo electrónico en Git

```
git branch -M main
```
- Cambia el nombre de la rama de master a main

```
git remote add origin https://github.com/sskaren1/nft-preview-card-component.git
```
- Vincula nuesttra carpeta local con github de manera remota

```
git push -u origin main
```
- Lo que hace el -u es configurar el upstream para el branch en el que se encuentra.
- Esto es para que despues se pueda hacer "git pull" sin tener que poner "git pull origin nombre_branch". El push -u solo hace falta hacerlo una vez. Si se hace el -u te permite hacer git pull sin pasarle origin branch.

### Flujo normal - Pasar archivos de mi pc a Github
```
git status
```
- Poder listar y ver si los archivos estan listo para subir
- :eye: en caso los archivos no esten listos se veran de color rojo y cuando lo esten serán de color verde

```
git add .
git add nombre_de_archivo
```
- Se encarga de agregar los archivos a la memoria de GIT, es decir los guarda en un stash

```
git commit -m "comentario"
```
- Crear un punto en la linea de tiempo :alarm_clock: de nuestros cambios y a estos se le es posible adjuntar un comentario
- :eye: Los comentarios deben estar relacionados a los cambios que hice, esto es una recomendación

```
git push origin main
```
- Sirve para poder subir los cambios a nuestro repositorio en la nube, en este caso github

### Flujo archivos de Github a mi pc
```
git pull origin main
```
- Sirve para poder descargar los cambios de nuestro repositorio en la nube, en este caso de github a mi computadora.

### Otros comandos GIT
```
git config --list
```

```
rm -rf .git
```

```
git remote -v
```
- Para ver el estado de la conexion

```
git add -A
```
- Agrega todos los archivos que no están trackeados y los agrega al staging area.

```
git rm --cached nombre_archivo
```
- Para no agregarlo al staging

```
git commit --amend -m "Accessibility error-fixed-img_alt-widt_card"
```
- Modificar el nombre del commit último realizado

```
git log --oneline
```
- Para ver los commits realizados

```
git clone url_de_github.com
```
- Mediante el modo HTTPS
- Este comando me crea una carpeta con el nombre del repositorio
- Forma en la cuál se puede descargar proyecto de github siempre y cuando sea pública.

```
git diff
```
- Te muestra la diferencia de lo que está en el repositorio en github de lo que está localmente en la máquina

```
vim index.html
```
- Para modificar el contenido de un archivo si es que se tiene el editor VIM.

### Comandos GIT para branch
```
git branch
```
- Sirve para poder listar los branch que tengo localmente y me dice en cual me encuentro localmente

```
git branch -a
```
- Sirve para poder listar los branch que se tiene locales y remotas.

```
git branch --merged
```
- Para ver las branch que hasta ahora se han mergeado

```
git checkout -b nombre_del_branch_actual
```
- Para crear el branch nuevo y poder trabajar en él
- Si está el "-b" es para poder crear y no para moverse entre ramas

```
git checkout nombre_del_branch_destino
```
- Para moverse entre ramas

```
git checkout nombre_del_branch_actual
```
- Sirve para poder moverme entre ramas
- 👁️ Si el checkout no tiene el -b solo es para moverse 

```
git push origin nombre_del_branch_actual
```
- Para subirlo a github

```
git pull --rebase origin nombre_del_branch_actual
```
- Para hacer un restart al branch

```
git merge nombre_del_branch_actual
```
- Para unir los cambios que realizaste de una rama a la otra

```
git fetch
```
- Actualiza cambios en la rama pero referente a nueva ramas creadas

```
git branch -d nombre_del_branch_a_borrar
```
- Esto elimina el branch localmente

```
git push origin --delete nombre_del_branch_a_borrar
```
- Esto elimina el branch del repositorio en github

### Flujo de añadir cambios de una rama a otra 1
```
- git add .  // git add -A
- git commit -m "comentario"
- git push origin nombre_branch_actual
- git checkout nombre_branch_a_la_cual_se_va_unir
- git branch --merged   -opcional-
- git merge nombre_branch_anterior
- git push origin nombre_branch_actual
```

## Comandos utilizados en el Gitbash
```
ll -a
```
- Para ver archivos ocultos
```
ls -a
```
- Para listar los archivos de dirección

```
mkdir nombrecarpeta
```
- Comando para poder crear carpetas
```
cd nombrecarpeta
```
- Para moverte entre carpetas
```
cd..
```
- Para volver a la carpeta anterior
```
start .
```
- Para abrir la carpeta en la posición donde estas (.->se refiere aqui)



