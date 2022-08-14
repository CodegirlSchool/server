# server
Тестовый сервер для демонстрации работы с сетью

## Запуск
Ввести в терминале VS Code:
```
npm run start
```

❗️На компьютере должен быть установлен [Node.js](https://nodejs.org/en/download/)

## Поддерживаемые запросы

GET: http://localhost:3001/users — получить всех пользователей

POST: http://localhost:3001/create-user — создать нового пользователя

В body должен содержаться объект со следующей структурой:
```
{
  "name": "Лиза",
  "job": "Бариста",
  "age": 17
}
```
