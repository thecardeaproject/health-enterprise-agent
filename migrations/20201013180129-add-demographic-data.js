'use strict'

var dbm
var type
var seed

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate
  type = dbm.dataType
  seed = seedLink
}

exports.up = function (db) {
  return db.createTable('demographic_data', {
    contact_id: {type: 'int', primaryKey: true, unique: true},
    surnames: 'text',
    given_names: 'text',
    date_of_birth: 'text',
    gender_legal: 'text',
    street_address: 'text',
    city: 'text',
    state_province_region: 'text',
    postalcode: 'text',
    country: 'text',
    phone: 'text',
    email: 'text',
    medical_release_id: 'text',
    created_at: 'timestamptz',
    updated_at: 'timestamptz',
  })
}

exports.down = function (db) {
  return db.dropTable('demographic_data')
}

exports._meta = {
  version: 1.1,
}