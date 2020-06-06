import express from "express";
import { celebrate, Joi } from "celebrate";

import multer from "multer";
import multerConfig from "./config/multer";

import ItemController from "./app/controllers/ItemController";
import PointController from "./app/controllers/PointController";

const routes = express.Router();
const upload = multer(multerConfig);

routes.get("/items", ItemController.index);
routes.get("/points/", PointController.index);
routes.get("/points/:id", PointController.show);

routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        whatsapp: Joi.string().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false, // Faz com que ele valide todos os campos de uma só vez.
    }
  ),
  PointController.store
);

export default routes;
