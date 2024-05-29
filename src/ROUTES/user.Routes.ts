import { Router } from "express";
import { Routes } from "../INTERFACE/route.interface";
import DoctorsController from "../CONTROLLERS/doctors.controllers";

export class userRoutes implements Routes {
  public path = "/user";
  public router = Router();
  public DoctorsController = new DoctorsController();

  constructor() {
    this.initUserRoutes();
  }

  /**
   * initUserRoutes
   */
  public initUserRoutes() {

    this.router.get(`${this.path}/:id`, this.DoctorsController.profile);

    this.router.post(`${this.path}`, this.DoctorsController.register);

    this.router.put(`${this.path}/:id`,this.DoctorsController.updateProfile );

    this.router.delete(`${this.path}/:id`, this.DoctorsController.deleteProfile);
  }
}
