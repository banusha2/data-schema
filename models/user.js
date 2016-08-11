'use strict';
const Joi = require('joi');
const mutate = require('../lib/mutate');

const MODEL = {
    id: Joi
        .string().hex().length(40)
        .description('Identifier of this user')
        .example('b09833cec69eff1bb667940a45e311262e85a422'),

    username: Joi
        .string()
        .description('Username')
        .example('batman123'),

    token: Joi
        .string()
        .description('Github token')
};

module.exports = {
    /**
     * All the available properties of User
     *
     * @property base
     * @type {Joi}
     */
    base: Joi.object(MODEL).label('User'),

    /**
     * Properties for User that will be passed during a CREATE request
     *
     * @property create
     * @type {Joi}
     */
    create: Joi.object(mutate(MODEL, [
        'username'
    ], [])).label('Create User'),

    /**
     * List of fields that determine a unique row
     *
     * @property keys
     * @type {Array}
     */
    keys: ['username'],

    /**
     * List of all fields in the model
     * @property allKeys
     * @type {Array}
     */
    allKeys: Object.keys(MODEL),

    /**
     * Tablename to be used in the datastore
     *
     * @property tableName
     * @type {String}
     */
    tableName: 'users',

    /**
     * List of indexes to create in the datastore
     *
     * @property indexes
     * @type {Array}
     */
    indexes: ['username']
};