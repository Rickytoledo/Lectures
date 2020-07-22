const mongoose = require('mongoose');
const Cat = require("./models/Cat")


mongoose
  .connect('mongodb://localhost/ironHackJune',  {
//   .connect('mongodb+srv://niko:nikoniko@cluster0-k13bi.mongodb.net/ironHackJune?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));



//Cat.findByIdAndUpdate('5f185b5952aec561b419ad4c', {color:'white and black'}).then(cats => console.log(cats))
Cat.create({name:'Cheshire', age: 6, size: 'medium' })













//   const Cat = mongoose.model('Cat', { name: String, age: Number });

//   //new Cat({ name: 'qwerty'}).save()
//   const Student = mongoose.model('Student', { firstName: String });
//   const City = mongoose.model('City', { name: String });

//  Student.insertMany([{ firstName: 'Carlos' }, { firstName: 'Valerie' }]).then(res => {
//     City.insertMany([{ name: 'Madrid' }, { name: 'Barcelona' }, { name: 'Miami' }]).then(res=> {

//     })
//   })


//   Promise.all([promise1, promise2])
//   .then(values => {
//     console.log('students and cities have been inserted');
//     console.log(values);
//   })
//   .catch(err => console.error(err));

// //   Cat.create({name: 'garfield2222', age: 2}).then(res => {
// //       console.log(res, '-=-=-=-=-=-=-=-')
// //      //res.json({message: 'cat inserted})

// //   }).catch()

// //   Cat
// //   .deleteMany() //create //insert 
// //   .then(allCats => console.log(allCats))
// //   .catch(err => console.log(`Error while creating a new cat: ${err}`));
