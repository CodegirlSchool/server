import fs from "fs";

export function getAllUsers(req, res) {
  try {
    // прочитать файл
    const source = fs.readFileSync("data.json", "utf8");
    // вернуть данные на клиент
    res.send(JSON.parse(source));
  } catch (e) {
    // обработать ошибку
    res.status(500).send({
      message: e.message,
    });
  }
}

export function createUser(req, res) {
  const { body } = req;

  if (!isValidUser(body)) {
    return res.status(400).send({
      message: "Некорректный формат",
    });
  }

  try {
    // прочитать файл
    const data = fs.readFileSync("data.json", "utf8");
    // распарсить данные
    const users = JSON.parse(data).users;

    // обновить стейт
    users.push(body);

    // записать в файл
    fs.writeFileSync("data.json", JSON.stringify({ users }, null, 2), "utf8");

    // отправить ответ
    res.status(200).send({
      message: "Пользователь успешно добавлен",
    });
  } catch (e) {
    res.status(500).send({
      error: e,
      message: "Не удалось добавить пользователя",
    });
  }
}

// валидация при добавлении нового юзера
function isValidUser(user) {
  return user && user.name && user.job && user.age;
}
