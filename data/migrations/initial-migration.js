
exports.up = async function(knex) {
    await knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name', 200).notNullable()
        table.string('project_description', 200)
        table.integer('project_completed').defaultTo(0);
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name').notNullable().unique()
        table.string('resource_description')
    })
}










exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('resources');
    await knex.schema.dropTableIfExists('projects');
}