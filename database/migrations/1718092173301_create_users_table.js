import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'users';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('full_name').nullable();
            table.string('email');
            table.string('password');
            table.timestamp('created_at').defaultTo(this.now());
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1718092173301_create_users_table.js.map