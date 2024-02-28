const asyncHandlers = (requestHandlers) => {
  (req, res, next) => {
    Promise.resolve(requestHandlers(req, res, next)).catch((error) =>
      next(err)
    );
  };
};

const asyncHandlerss = (fn) => async () => {
  try {
    await (req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};

export default asyncHandlers;

const hellowhandlers = (handler) => async () => {
  try {
    await handler(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
