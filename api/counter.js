let count = 0;

export default function handler(req, res) {
  if (req.method === "POST") {
    count++;

    console.log("Counter:", count);

    return res.status(200).json({
      message: "Counter updated",
      count: count
    });
  }

  return res.status(200).json({
    message: "Use POST request"
  });
}