import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'events';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('title', 180);
            table.text('description').nullable();
            table.dateTime('start_at');
            table.dateTime('end_at');
            table.string('address', 255).nullable();
            table.string('city', 80).nullable();
            table.string('country', 80).nullable();
            table.boolean('online').defaultTo(false);
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
            table.timestamp('created_at').defaultTo(this.now());
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1718094122027_create_events_table.js.map