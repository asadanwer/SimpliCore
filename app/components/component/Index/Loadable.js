/**
 *
 * Asynchronously loads the component for Index
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
