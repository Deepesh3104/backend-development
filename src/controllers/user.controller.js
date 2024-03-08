import asyncHandlers from "../utils/asynchandlers.js";

const registerUser = asyncHandlers(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

export default registerUser;
