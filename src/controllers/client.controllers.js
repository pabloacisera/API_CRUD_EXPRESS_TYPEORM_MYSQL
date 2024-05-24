import db from '../database/connection.js';

class ClientController {
  constructor() {
    // Constructor vacío o inicializaciones si son necesarias
  }

  viewDetail(req, res) {
    const { id: clientId } = req.params;
    console.log('Id del clientes: ', clientId)
    res.json({ ok: true, message: "vista de detalle del cliente" }); // Corregido el typo
  }

  viewAll(req, res) { // Corregido
    res.json({ ok: true, message: "vista de todos los clientes" });
  }

  create(req, res) {
    res.json({ ok: true, message: "cliente creado exitosamente" });
  }

  delete(req, res) {
    const { id: clientId } = req.params;
    console.log('Id del cliente: ', clientId)
    res.json({ ok: true, message: "cliente borrado exitosamente" });
  }

  update(req, res) {
    const { id: clientId } = req.params;
    console.log('Id del ciente: ', clientId)
    res.json({ ok: true, message: "actualizacion de datos de clientes" });
  }
}

// Exporta una instancia de ClientController
export const clienteController = new ClientController();
