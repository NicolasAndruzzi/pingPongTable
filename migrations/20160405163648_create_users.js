exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('firstName');
    table.string('lastName');
    table.string('gif');
    table.integer('pin');
    table.string('location');
    table.string('group');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albums');
};
