Bug 566510 - Allow multiselect operations on tabs
=================================================

Extends Firefox API to support [multiple tab selection][multiselect project]. Based on patch attached to [bug 566510][].

Features
--------

- **Ctrl + Left mouse button** to toggle selection.
- **Shift + Left mouse button** to select range of tabs.
- **Left mouse button** to deselect.
- Multiselect support for items in tab context menu:
  - Reload tabs
  - Pin and unpin tabs
  - Open tabs in new window
  - Close tabs
  - Remove all tabs but the multiselected
  - Move tabs to tab group (Panorama)
- Implementing following features would be too nasty:
  - Dragging tabs

API
---

- From the patch (possibly forward compatible):
  - **aTab.multiselected**  
    Writable property indicating the tab is multiselected.
- From this addon only:
  - **gBrowser.selectedTabs**  
    Returns array of multiselected tabs that are visible, otherwise empty array.  
    _Example of hidden tabs are the ones in different tab/panorama/tab-candy group._
  - **multiselectionBroadcaster**  
    changes state on tab multiple selection/deselection.
  - **multiselectionContextBroadcaster**  
    is same like above, but requires the change  
    to occur in appropriate context (currently tab context menu, but can be extended).

[multiselect project]: https://wiki.mozilla.org/Firefox/Projects/Tab_Multi-Selection
[bug 566510]: https://bugzilla.mozilla.org/show_bug.cgi?id=566510
