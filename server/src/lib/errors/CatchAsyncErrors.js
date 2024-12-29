const CatchAsyncErrors = (promise) => (req, res, next) => {
  Promise.resolve(promise(req, res, next)).catch(next);
}
export default CatchAsyncErrors;