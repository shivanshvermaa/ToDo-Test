const service = require("./todo.service");
const router = require("express").Router();

router.post("/" , service.create);

router.get("/:id" , service.findById);

router.get("/all" , service.giveAll);

router.get("/healthcheck" , (req,res) => {
    res.status(200).send({
        "server":"working"
    })
});

module.exports = router;