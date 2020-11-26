import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Germán De Bonis",
    email: "german@example.com",
    password: bcrypt.hashSync("german", 10),
  },
  {
    name: "Pablo Viar",
    email: "pablo@example.com",
    password: bcrypt.hashSync("pablo", 10),
  },
];

export default users;
