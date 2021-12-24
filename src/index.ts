import db from "../src/database/db";
import { Book } from "../src/database/models/book";

db.select(["title", "genre"])
  .from<Book>("books")
  .where("authorId", "19a438a90-7013-4496-87d7-38cf994a3fd1")
  .first()
  .then((res: Book) => {
    console.log(res?.title);
  })
  .catch((err) => console.log(err));
