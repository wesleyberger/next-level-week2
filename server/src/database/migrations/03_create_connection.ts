import knex from 'knex';

export async function up(knex: knex){
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();
    
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE') /* ao alterar um usuário(id) todos as referencias do mesmo sofrem efeito cascata */
      .onDelete('CASCADE'); /* quando um usuário(id) é deletado as refencias do mesmo forem efeito cascata, no caso aulas deletadas junto do user. */
  
    table.timestamp('created_at') 
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
    });
}

export async function down(knex: knex){
  return knex.schema.dropTable('connections');
}