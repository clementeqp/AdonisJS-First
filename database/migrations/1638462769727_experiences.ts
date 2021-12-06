import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Experiences extends BaseSchema {
  protected tableName = 'experiences'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.integer('candidate_id').references('candidates.id')
      table.integer('skill_id').references('id').inTable('skills')

      table.integer('level')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
