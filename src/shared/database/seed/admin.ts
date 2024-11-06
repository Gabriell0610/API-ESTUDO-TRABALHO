import { AppDataSource } from "../data-source";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";

async function create() {
  const conection = AppDataSource.initialize();

  const id = uuidv4();
  const passwordHash = await hash("admin", 8);

  (await conection).query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", "createdAt", "driver_license") 
    VALUES('${id}', 'admin', 'admin@rentx.com.br', '${passwordHash}', true, '${new Date().toISOString()}', 'ddf-333')`,
  );
}

create()
  .then(() => {
    console.log("User Admin created successfully");
  })
  .catch((error) => {
    console.error("Error creating admin user:", error);
  });
