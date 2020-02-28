/**
 * @typedef {Object} MeetupGroup
 * @property {string} name Full name of groups
 * @property {string} urlname Name used in URL parameter
 */

/**
 * @typedef {Object} MeetupEvent
 * @property {number} id ID of event
 * @property {string} name Name of event
 * @property {number} time Start time of event in microseconds
 * @property {MeetupGroup} group Group details
 */
