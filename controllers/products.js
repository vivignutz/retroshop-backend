router.get('/products', async (req, res) => {
    // Lógica para buscar produtos do banco de dados (por enquanto, retorne um array vazio)
    const products = [];
    res.json(products);
});

router.post('/products', async (req, res) => {
    // Lógica para criar um novo produto no banco de dados (por enquanto, retorne um objeto vazio)
    const product = {};
    res.json(product);
});
