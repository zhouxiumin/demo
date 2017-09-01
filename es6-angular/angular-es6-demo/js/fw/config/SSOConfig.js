/**
 *  SSOConfig set authorised configuration.
 *
 *  @author  zhouxiumin
 *  @date    Sep 1, 2017
 *
 */
export default {
    type: 'configure',
    config($httpProvider) {
        'ngInject';

        $httpProvider.defaults.headers.common.Accept = 'application/json;charset=utf-8';
        $httpProvider.defaults.withCredentials = true;
    }
};
