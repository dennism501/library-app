import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("books", (table: Knex.TableBuilder) => {
        table.uuid("id").primary().notNullable().unique();
        table.string("title").notNullable();
        table.string("genre").notNullable();
        table.string("rating").notNullable();
        table.uuid('authorId').references('id').inTable("authors")
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
}

