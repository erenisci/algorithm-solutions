function validate(username, password) {
  if (password.includes('||') || password.includes('//')) return 'Wrong username or password!';

  let database = new Database();
  return database.login(username, password);
}
