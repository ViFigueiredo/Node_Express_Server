class HomeController {
  async index(req, res) {
    // #swagger.tags = ['Homepage']
    // #swagger.description = 'Endpoint para obter a página inicial.'
    res.json('Bem-vindo a página inicial da API.');
  }
}

export default new HomeController();
