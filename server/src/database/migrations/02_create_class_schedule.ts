import knex from 'knex';

export async function up(knex: knex){
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();
    table.integer('week_day').notNullable(); /* um campo que vai de 0 até 6 representando seg/dom */
    table.integer('from').notNullable();
    table.integer('to').notNullable();
    
    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE') /* ao alterar um usuário(id) todos as referencias do mesmo sofrem efeito cascata */
      .onDelete('CASCADE'); /* quando um usuário(id) é deletado as refencias do mesmo forem efeito cascata, no caso aulas deletadas junto do user. */
  });
}

export async function down(knex: knex){
  return knex.schema.dropTable('class_schedule');
}