import model from "../models/Livro";

class LivroController {
  static post = async (req, res) => {
    const livroPayload = req.body;

    const livro = await model.create({
      titulo: livroPayload.titulo,
      autor: livroPayload.autor,
      editora: livroPayload.editora,
    });

    res.status(201).send({
      messsage: "criado com sucesso!",
      livro,
    });
  };

  static put = async (req, res) => {
    const { id } = req.params;
    const { titulo, autor, editora } = req.body;
    const filter = { _id: id };
    const update = { titulo: titulo, autor: autor, editora: editora };

    const livro = await model.findOneAndUpdate(filter, update);
    res.status(200).send(livro);
  };

  static getAll = async (req, res) => {
    model.find({}, function (err: any, livros: any) {
      var livroMap: any = {};

      livros.forEach(function (livro: any) {
        livroMap[livro._id] = livro;
      });

      res.send(livroMap);
    });
  };

  static getById = async (req, res) => {
    const { id } = req.params;
    const livro = await model.findById(id);
    res.status(200).send(livro);
  };

  static getByName = async (req,res) => {
      const titulo  = req.query.titulo;
      const livro = await model.findOne({titulo: titulo})
      res.status(200).send(livro);
  }

  static delete = async (req, res) => {
    const { id } = req.params;
    const livro = await model.findByIdAndDelete(id);
    res.status(200).send(livro);
  };
}

export default LivroController;
