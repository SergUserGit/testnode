function getStatus(statusNumber, message, res) {
  return res.status(statusNumber).json({
    message: message,
  });
}

const objStatuts = { getStatus };

export default objStatuts;
