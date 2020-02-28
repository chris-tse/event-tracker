/**
 * @typedef {Object} MeetupGroup
 * @property {string} name Full name of groups
 * @property {string} urlname Name used in URL parameter
 */
declare type MeetupGroup = {
    name: string;
    urlname: string;
};

/**
 * @typedef {Object} MeetupEvent
 * @property {number} id ID of event
 * @property {string} name Name of event
 * @property {number} time Start time of event in microseconds
 * @property {MeetupGroup} group Group details
 */
declare type MeetupEvent = {
    id: number;
    name: string;
    time: number;
    group: MeetupGroup;
};

