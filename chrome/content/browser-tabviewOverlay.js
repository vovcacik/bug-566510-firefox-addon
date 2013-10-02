/**
 * Support for moving multiselected tabs to tab groups (Panorama).
 * @see http://mxr.mozilla.org/mozilla-release/source/browser/base/content/browser-tabview.js
 */
var bug566510_TabView = {
    /**
     * Just redirects TabView.moveTabTo calls on each menuitem to this. Doing it
     * this way preserves arguments. There is one menuitem for each tab group
     * plus one for "New group" item.
     */
    moveToGroupPopupShowing: function (event) {
        TabView.moveToGroupPopupShowing(event);

        var popup = event.target;
        var menuItems = popup.getElementsByTagName("menuitem");
        for (var i = 0; i < menuItems.length; i++){
            var menuItem = menuItems[i];
            var oncommand = menuItem.getAttribute("oncommand");
            menuItem.setAttribute(
                "oncommand",
                oncommand.replace(/^TabView\.moveTabTo/, "bug566510_TabView.moveTabsTo"));
        }
    },
    /**
     * Takes tab or array of tabs and moves them to tab group.
     * @see http://mxr.mozilla.org/mozilla-release/source/browser/base/content/browser-tabview.js#337
     */
    moveTabsTo: function(tabs, groupItemId) {
        if (!tabs)
            return;
        if (!TabView.getContentWindow()) {
            // The panorama is not yet initialized.
            var self = this;
            TabView._initFrame(function() {
                self.moveTabsTo(tabs, groupItemId);
            });
            return;
        }

        // When called by the tab context menu, tabs is actually a tab
        if (tabs instanceof XULElement) {
            if (tabs.multiselected)
                tabs = gBrowser.selectedTabs;
            else
                tabs = [tabs];
        }
        tabs.forEach(function(tab) {
            if (!tab.pinned) {
                TabView.moveTabTo(tab, groupItemId);
                // groupItemId is null when new group was created; put rest of the
                // tabs to the same group
                groupItemId = groupItemId ? groupItemId : tab._tabViewTabItem.parent.id;
            }
        });
    }
}
