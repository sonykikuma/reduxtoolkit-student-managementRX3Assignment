const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
  name:String,
  email:String,
  imageUrl: String,
  phoneNumber: Number
})

const Teacher = mongoose.model("Teacher", teacherSchema)

module.exports = {Teacher}

// {
//       "name": "Hilary Nelson",
//       "email": "hilary@test.com",
//       "imageUrl":"https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800",
//       "phoneNumber": "9287654789"
//  }