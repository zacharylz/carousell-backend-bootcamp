const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

class ListingsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post(
      "/",
      authMiddleware,
      this.controller.insertOne.bind(this.controller)
    );
    router.get("/:listingId", this.controller.getOne.bind(this.controller));
    router.put(
      "/:listingId",
      authMiddleware,
      this.controller.buyItem.bind(this.controller)
    );
    return router;
  }
}

module.exports = ListingsRouter;
