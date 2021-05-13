/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import 'calypso/state/happychat/init';

/**
 * Returns the geo location of the current user, based happychat session initiation (on ip)
 *
 * @param {object}  state  Global state tree
 * @returns {?string}        Current user geo location
 */
export default ( state ) => get( state, 'happychat.user.geoLocation', null );
