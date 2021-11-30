const express = require("express");
const app = express();
require("./db.js");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const coursesModel = require("./coursesModel");
//  ----------
app.get("/courses", async (req, res) => {
  try {
    const courses = await coursesModel.find({});
    res.status(200).json(courses);
  } catch (error) {
    res.send(error);
  }
});
//  ------------------
app.post("/courses", async (req, res) => {
  const { newName, newDescription, newImg } = req.body;
  const newCourses = new coursesModel({
    name: newName,
    description: newDescription,
    img: newImg,
  });

  try {
    const savedCourses = await newCourses.save();
    res.status(200).json(savedCourses);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/Delet/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const cours = await coursesModel.findOneAndDelete({ _id: id });
    res.status(200).json(cours);
  } catch (err) {
    res.send(err);
  }
});

/////////////
const Port = 5000;
app.listen(Port, () => {
  console.log("server is on");
});
