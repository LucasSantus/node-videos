import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

const routes = Router();

  /*
   * [X] C - Create - POST
   * [X] R - Read - GET
   * [X] U - Update - PUT
   * [X] D - Delete - DELETE
   */

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle)

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes };