import db from "../database/connection.js";

class ProfessionalController {
  constructor() {
    // Constructor vacío o inicializaciones si son necesarias
  }

  create(req, res) {
    const { id } = req.params;
    const { area, nombre, email, password } = req.body;

    try {
      if (!area || !nombre || !email || !password) {
        return res.status(400).json({ error: "Faltan campos requeridos" });
      }

      db.query(
        `INSERT INTO centro_medico.profesionales
        (id, area, nombre, email, password)
        VALUES(NULL, ?, ?, ?, ?);`,
        [area, nombre, email, password],
        (err, rows) => {
          if (err) {
            return res.status(400).send(err);
          }
          res.status(201).json({ rows });
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  delete(req, res) {
    const { id: profId } = req.params;
    try {
      db.query(
        `DELETE FROM centro_medico.profesionales WHERE id=?`,
        [profId],
        (err, rows) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          res
            .status(200)
            .json({ message: "Profesional eliminado correctamente" });
        }
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  actualizar(req, res) {
    const { id } = req.params;  // Obtener el id de los parámetros de la URL
    const { area, password, nombre, email } = req.body;
  
    // Verificar que todos los campos necesarios están presentes
    if (!id || !area || !password || !nombre || !email) {
      return res.status(400).json({
        error: "Faltan campos requeridos",
      });
    }
  
    try {
      db.query(
        `UPDATE centro_medico.profesionales
        SET area=?, nombre=?, email=?, password=?
        WHERE id=?;`,
        [area, nombre, email, password, id],  // Asegúrate de incluir 'id' al final del array de parámetros
        (error, rows) => {
          if (error) {
            return res.status(400).send(error.message);
          }
          if (rows.affectedRows === 0) {
            return res.status(404).json({ message: "Profesional no encontrado" });
          }
          res.status(200).json({ message: "Profesional actualizado correctamente" });
        }
      );
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "No se ha podido actualizar el profesional",
      });
    }
  }
  

  viewDetail(req, res) {
    const { id: profId } = req.params;
    try {
      db.query(
        `SELECT * FROM centro_medico.profesionales WHERE id = ?`,
        [profId],
        (err, rows) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          if (rows.length === 0) {
            return res.status(404).json({ error: "Profesional no encontrado" });
          }
          const profesional = rows[0];
          res.json({ ok: true, profesional });
        }
      );
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "No se ha podido encontrar el porfesional solicitado",
      });
    }
  }

  login(req, res) {
    res.json({ ok: true, message: "logeo de profesionales" });
  }
}

// Exporta una instancia de ProfessionalController
export const professionalController = new ProfessionalController();
