![Logo of the project](./banner.png)

# Gulp Starter Kit &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

Базовая Gulp-сборка для верстки.

- Собирает и оптимизирует `html`, `sass`, `js`, изображения и шрифты
- Использует `gulp-rigger` для работы с html-chunks
- Включает файлы настроек различных линтеров
- Все ошибки логируются в консоль
- Добавляет вендорные префиксы
- Оптимизиуерт медиазапросы
- Есть режим разработки и сборки в прод
- Автоматический деплой на GitHub Pages

## Developing

### Prerequisites

Для корректной работы компилятора SASS и других инструментов, в терминале
необходимо выполнить следующие команды. Пользователям MacOS ничего делать не
нужно.

Пользователям Windows.

```shell
npm install --global windows-build-tools
```

Пользователям Linux.

```shell
sudo apt-get install gcc g++ make
```

### Setting up Dev

Для быстрого старта необходимо склонировать репозиторий.

```shell
git clone https://github.com/luxplanjay/gulp-starter-kit.git
```

Переименовать папку сборки по имени вашего проекта.

```shell
mv gulp-starter-kit имя_проекта
```

Затем перейти в папку проекта.

```shell
cd имя_проекта
```

Находясь в папке проекта удалить папку `.git` выполнив следующую команду.

```shell
npx rimraf .git
```

Установить все зависимости.

```shell
npm install
```

И запустить режим разработки.

```shell
npm start
```

Во вкладке браузера перейти по адресу
[http://localhost:1234](http://localhost:1234).

### Building

Для того чтобы создать оптимизированные файлы для хостинга, необходимо выполнить
следующую команду. В корне проекта появится папка `build` со всеми
оптимизированными ресурсами.

```shell
npm run build
```

### Deploying / Publishing

Сборка может автоматически деплоить билд на GitHub Pages текущего репозитория.
Для этого необходимо в файле `package.json` отредактировать поле `homepage`,
заменив имя пользователя и репозитория на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

После чего в терминале выполнить следующую команду.

```shell
npm run deploy
```

Если нет ошибок в коде и свойство `homepage` указано верно, запустится сборка
проекта в продакшен, после чего содержимое папки `build` будет помещено в ветку
`gh-pages` на удаленном репозитории. Через какое-то время живую страницу можно
будет посмотреть по адресу указанному в отредактированном свойстве `homepage`.

## Configuration

- Все файлы стилей должны лежать в папке `src/sass` и импортироваться в
  `src/sass/main.scss`
- Изображения добавляйте в папку `src/images`
- Локальные шрифты идут в папку `src/fonts`

Пример изображения в HTML, после того как файл `picture.png` был добавлен в
папку `src/images`.

```html
<img src="./images/picture.png" />
```

Пример изображения в CSS, после того как файл `picture.png` был добавлен в папку
`src/images`.

```css
.my-class {
  background-image: url('../images/picture.png');
}
```
