function isMobile() {
    try {
        // Has touch input but not necessarily mobile
        if (('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch) || ((hash['touch'] && hash['touch'].offsetTop) === 9))
        {
            return true;
        }
        else
        {
            return false;
        }
    } catch (err) {
        // pc
        return false;
    }
}
