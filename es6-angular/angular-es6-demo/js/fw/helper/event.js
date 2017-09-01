/**
 *  Collection of Event helpers
 *
 *  @author  zhouxiumin
 *  @date    Sep 1, 2017
 *
 */
export function stop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (e.preventDefault) {
        e.preventDefault();
    }
}
