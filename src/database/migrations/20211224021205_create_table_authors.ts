import { table } from "console";
import knex, { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("authors", (table: Knex.TableBuilder) => {
      table.uuid("id").primary().notNullable().unique();
      table.string("name").notNullable();
      table.string("age").notNullable();
      table.string("rating").notNullable();
      table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {}
