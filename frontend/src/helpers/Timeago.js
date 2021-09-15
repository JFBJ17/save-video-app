import { format } from 'timeago.js';

export const timeAgo = (timestamp) => {
    return format(timestamp);
}