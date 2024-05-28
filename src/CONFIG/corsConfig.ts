import { ORIGIN } from "./config";


export const corsConfig = {
  allowedHeaders: "*",
  methods: "GET,POST,PUT,PATCH,UPDATE,DELETE",
  preflightContinue: false,
  origin: ORIGIN,
}
