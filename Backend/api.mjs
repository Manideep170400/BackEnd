import schemas from "./schemas.mjs";

const { info } = schemas.init();

async function api(app) {
  app.get("/", async (req, res) => {
    console.log(req.body);
    try {
      const response = await info.create(req.body);
      res.send(response);
    } catch (error) {
      console.error("error", error);
      console.log("api is not getting");
    }
  });
}

export default {
  api: api,
};
