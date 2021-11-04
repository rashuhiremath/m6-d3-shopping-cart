import express from "express";
import models from "../../db/models/index.js";
import Product from "../../db/models/product.js";
import User from "../../db/models/user.js";
const { Review } = models;
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      include: [
        User,
        {
          model: Product,
          attributes: {
            exclude: ["image"],
          },
        },
      ],
      attributes:{
          exclude:["createdAt","updatedAt"],
      }
    });
    res.send(reviews);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    res.send(review);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
// get by id
router.get("/:id", async (req, res, next) => {
  try {
    const reviewById = await Review.findByPk(req.params.id, {
      include: Product,
    });
    res.send(reviewById);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const newReview = await Review.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
      }
    );
    res.send(newReview[1][0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedReview = await Review.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({ deletedReview });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
