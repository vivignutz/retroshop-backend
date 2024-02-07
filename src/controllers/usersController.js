router.get('/users', async (req, res) => {
    // Lógica para buscar usuários do banco de dados (por enquanto, retorne um array vazio)
    const users = [];
    res.json(users);
  });

router.post('/users', async (req, res) => {
  // Lógica para criar um novo usuário no banco de dados (por enquanto, retorne um objeto vazio)
    const user = {};
    res.json(user);
});
