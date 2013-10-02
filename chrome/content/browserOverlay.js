var bug566510_TabContextMenu = {
    /**
     * It just hooks on onpopupshowing event and then makes bold all menuitems
     * that support multiselect.
     */
    updateContextMenu: function(event) {
        TabContextMenu.updateContextMenu(event);

        var style = "font-weight: normal;";
        var menuItemIDs = [
            "context_reloadTab",
            "context_pinTab",
            "context_unpinTab",
            "context_tabViewMenu",
            "context_openTabInWindow",
            "context_closeOtherTabs",
            "context_closeTab"
        ];

        if (TabContextMenu.contextTab.multiselected)
            style = "font-weight: bold;";
        for (var i = 0; i < menuItemIDs.length; i++) {
            var id = menuItemIDs[i];
            var menuItem = document.getElementById(id);
            menuItem.setAttribute("style", style);
        }
    }
}
