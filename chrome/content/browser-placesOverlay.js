/**
 * Bookmarking multiselected tabs.
 */
var bug566510_PlacesCommandHook = {
    get uniqueSelectedPages() {
        let uniquePages = {};
        let URIs = [];
        gBrowser.selectedTabs.forEach(function (tab) {
            let spec = tab.linkedBrowser.currentURI.spec;
            if (!tab.pinned && !(spec in uniquePages)) {
                uniquePages[spec] = null;
                URIs.push(tab.linkedBrowser.currentURI);
            }
        });
        return URIs;
    },
    bookmarkSelectedPages: function () {
        let pages = this.uniqueSelectedPages;
        if (pages.length > 1) {
            PlacesUIUtils.showBookmarkDialog({ action: "add"
                                             , type: "folder"
                                             , URIList: pages
                                             , hiddenRows: [ "description" ]
                                             }, window);
        }
    }
}
