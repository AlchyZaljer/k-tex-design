# k-tex-design

Статический сайт бюро текстильного дизайна с генерацией HTML из Handlebars, минификацией CSS/JS/HTML и оптимизацией изображений.

Упакован в Docker для dev-режима с live-reload и production-сборки.

## **Сервисы**

### **dev**

- Следит за изменениями в `templates/`, `css/`, `js/`, `imgs/`, `fonts/`, `pages/`, `robots.txt`, `sitemap.xml`, `yandex_883883acb18ad896.html`

- Пересобирает проект на лету

- Запускает BrowserSync на порту **3000** с live-reload

- Команда:

    ```bash
    docker-compose up dev
    ```

### **builder**

- Копирует `imgs/`, `fonts/`, `robots.txt`, `sitemap.xml`, `yandex_883883acb18ad896.html` → `dist/`

- Компилирует Handlebars → `dist/index.html`

- Минифицирует HTML, CSS, JS и доп. страницы из `pages/`

- Результат: готовый к деплою каталог `dist/`

- Команда:

    ```bash
    docker-compose run --rm builder
    ```

## **Установка и запуск**

1. Клонирование репозитория:

    ```bash
    git clone https://github.com/AlchyZaljer/k-tex-design.git
    cd k-tex-design
    ```

2. Запуск Dev-режима:

    ```bash
    docker compose -f 'docker-compose.yml' up -d --build 'dev'
    ```

3. Запуск Build-режима:

    ```bash
    docker compose -f 'docker-compose.yml' up -d --build 'builder'
    ```
