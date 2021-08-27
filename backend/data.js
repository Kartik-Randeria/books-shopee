import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: "Kartik",
      email: "kartik.randeria@xaviers.edu.in",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Abhinash Yadav",
      email: "abhinash.yadav@xaviers.edu.in",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Mohd. Zaffar Sayyed",
      email: "mohd.zaffer.sayyed@xaviers.edu.in",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: "C#",
      category: "Programming",
      image: "/images/C#.jpg",
      price: 750,
      countInStock: 10,
      author: "Rowlings",
      rating: 4.5,
      numReviews: 10,
      description:
        "C-SHARP (C#) is a general-purpose, multi-paradigm programming language developed by Microsoft that runs on the . NET framework. C# is widely used for building mobile applications, games, and windows applications.\nC-SHARP (C#) is a general-purpose, multi-paradigm programming language developed by Microsoft that runs on the . NET framework. C# is widely used for building mobile applications, games, and windows applications.\nC-SHARP (C#) is a general-purpose, multi-paradigm programming language developed by Microsoft that runs on the . NET framework. C# is widely used for building mobile applications, games, and windows applications.",
    },
   
  ],
};
export default data;