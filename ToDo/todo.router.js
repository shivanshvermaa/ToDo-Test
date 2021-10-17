const service = require("./todo.service");
const router = require("express").Router();

router.post("/" , service.create);

router.get("/findby/:id" , service.findById);

router.get("/all" , service.giveAll);

router.get("/healthcheck" , function(req,res) {
    res.status(200).json({
        "server":"working"
    })
});

module.exports = router;