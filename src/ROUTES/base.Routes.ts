import { Router, Request, Response } from "express";
import { Routes } from "../INTERFACE/route.interface";

class BaseRoute implements Routes{
  public path = '/home';
  public router = Router();

  constructor(){
    this.initBaseRoute();
  }

  /**
   * initBaseRoute
   */
  public initBaseRoute() {
    this.router.get(`${this.path}`, (req: Request, res: Response)=>{
      res.status(200).json({ok:true, message: "HomeLanding"})
    })
  }
}

export default BaseRoute;