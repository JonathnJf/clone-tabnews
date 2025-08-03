function status(request, response) {
  response.status(200).json({ cave: "valor" });
}

export default status;
