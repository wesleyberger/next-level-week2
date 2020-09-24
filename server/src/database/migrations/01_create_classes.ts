import knex from 'knex';

export async function up(knex: knex){
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE') /* ao alterar um usuário(id) todos as referencias do mesmo sofrem efeito cascata */
      .onDelete('CASCADE'); /* quando um usuário(id) é deletado as refencias do mesmo forem efeito cascata, no caso aulas deletadas junto do user. */
  });
}

export async function down(knex: knex){
  return knex.schema.dropTable('classes');
}