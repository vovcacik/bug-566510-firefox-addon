var bug566510_TabContextMenu = {
    /**
     * It just hooks on popupshowing event of tab context menu and updates
     * the multiselection broadcaster.
     */
    updateContextMenu: function(event) {
        TabContextMenu.updateContextMenu(event);

        var contextTabs = TabContextMenu.contextTab.multiselected ? gBrowser.selectedTabs : [TabContextMenu.contextTab];
        var multiselection = contextTabs.length > 1;

        var broadcaster = document.getElementById("multiselectionContextBroadcaster");
        broadcaster.setAttribute("multiselection", multiselection);
    }
}
