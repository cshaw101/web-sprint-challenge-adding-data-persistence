exports.seed = function (knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('resources').del(),
    knex('projects').del(),
    knex('tasks').del(),
  ])
    .then(function () {
      // Inserts seed entries for resources
      return knex('resources').insert([
        { resource_id: 1, resource_name: 'foo', resource_description: null },
      ]);
    })
    .then(function () {
      // Inserts seed entries for projects
      return knex('projects').insert([
        {
          project_id: 1,
          project_name: 'bar',
          project_description: null,
          project_completed: 0, // Integer representation of false
        },
      ]);
    })
    .then(function () {
      // Inserts seed entries for tasks
      return knex('tasks').insert([
        {
          task_id: 1,
          task_description: 'baz',
          task_notes: null,
          task_completed: 0, // Integer representation of false
          project_id: 1,
        },
      ]);
    });
};
