import { Router, Request, Response } from "express";
import { Routes } from "../INTERFACE/route.interface";

export class userRoutes implements Routes{
  public path= '/user';
  public router = Router();

  constructor(){
    this.initUserRoutes();
  }

  /**
   * initUserRoutes
   */
  public initUserRoutes() {
    this.router.get(`${this.path}/:id`, (req: Request, res: Response)=>{
      const {id: userId} = req.params;
      console.log('Parametro de la solicitud: ', userId)
      res.status(200).json({ok:true})
    })

    this.router.post(`${this.path}`, (req: Request, res: Response)=>{
      const { id, name, email, password, area } = req.body;

      const newUser = {id, email, name, password, area};

      res.status(200).json({
        message:"Se han guardado los siguientes datos: ",
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        area: newUser.area,
      })
    })
    this.router.put(`${this.path}/:id`, (req: Request, res: Response)=>{
      const {id: userId} = req.params;
      console.log('Parametro de la solicitud: ', userId)
      res.status(200).json({ok:true, message:"datos modificados", id: userId,})
    })

    this.router.delete(`${this.path}/:id`, (req: Request, res: Response)=>{
      const {id: userId} = req.params;
      console.log('Id del usuario eliminado: ', userId)
      res.status(200).json({ok:true})
    })
  }
}