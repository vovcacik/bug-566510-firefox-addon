/**
 * Bookmarking multiselected tabs.
 */
var bug566510_PlacesCommandHook = {
    get uniqueSelectedPages() {
        var uniquePages = {};
        var URIs = [];
        gBrowser.selectedTabs.forEach(function (tab) {
            var spec = tab.linkedBrowser.currentURI.spec;
            if (!tab.pinned && !(spec in uniquePages)) {
                uniquePages[spec] = null;
                URIs.push(tab.linkedBrowser.currentURI);
            }
        });
        return URIs;
    },
    bookmarkSelectedPages: function () {
        var pages = this.uniqueSelectedPages;
        if (pages.length > 1) {
            PlacesUIUtils.showBookmarkDialog({ action: "add"
                                             , type: "folder"
                                             , URIList: pages
                                             , hiddenRows: [ "description" ]
                                             }, window);
        }
    }
}
