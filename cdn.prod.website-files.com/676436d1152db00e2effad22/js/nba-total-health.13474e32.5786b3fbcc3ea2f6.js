
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => { // webpackBootstrap
var __webpack_modules__ = ({
9858: (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
/* globals window, document */ /**
 * Webflow: Dropdown component
 */ 
var Webflow = __webpack_require__(3949);
var IXEvents = __webpack_require__(5134);
const KEY_CODES = {
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    ESCAPE: 27,
    SPACE: 32,
    ENTER: 13,
    HOME: 36,
    END: 35
};
const IX3_COMPONENT_EVENT = 'IX3_COMPONENT_STATE_CHANGE';
function dispatchIx3ComponentEvent(element, state) {
    IXEvents.dispatchCustomEvent(element, IX3_COMPONENT_EVENT, {
        component: 'dropdown',
        state
    });
}
const FORCE_CLOSE = true;
/**
 * This pattern matches links that begin with a `#` AND have some alphanumeric
 * characters after it, including also hyphens and underscores
 *
 * Matches:
 * #foo
 * #999
 * #foo-bar_baz
 *
 * Does not match:
 * #
 */ const INTERNAL_PAGE_LINK_HASHES_PATTERN = /^#[a-zA-Z0-9\-_]+$/;
Webflow.define('dropdown', module.exports = function($, _) {
    var debounce = _.debounce;
    var api = {};
    var inApp = Webflow.env();
    var inPreview = false;
    var inDesigner;
    var touch = Webflow.env.touch;
    var namespace = '.w-dropdown';
    var openStateClassName = 'w--open';
    var ix = IXEvents.triggers;
    var defaultZIndex = 900; // @dropdown-depth
    var focusOutEvent = 'focusout' + namespace;
    var keydownEvent = 'keydown' + namespace;
    var mouseEnterEvent = 'mouseenter' + namespace;
    var mouseMoveEvent = 'mousemove' + namespace;
    var mouseLeaveEvent = 'mouseleave' + namespace;
    var mouseUpEvent = (touch ? 'click' : 'mouseup') + namespace;
    var closeEvent = 'w-close' + namespace;
    var settingEvent = 'setting' + namespace;
    var $doc = $(document);
    var $dropdowns;
    // -----------------------------------
    // Module methods
    api.ready = init;
    api.design = function() {
        // Close all when returning from preview
        if (inPreview) {
            closeAll();
        }
        inPreview = false;
        init();
    };
    api.preview = function() {
        inPreview = true;
        init();
    };
    // -----------------------------------
    // Private methods
    function init() {
        inDesigner = inApp && Webflow.env('design');
        // Find all instances on the page
        $dropdowns = $doc.find(namespace);
        $dropdowns.each(build);
    }
    function build(i, el) {
        var $el = $(el);
        // Store state in data
        var data = $.data(el, namespace);
        if (!data) {
            data = $.data(el, namespace, {
                open: false,
                el: $el,
                config: {},
                selectedIdx: -1
            });
        }
        data.toggle = data.el.children('.w-dropdown-toggle');
        data.list = data.el.children('.w-dropdown-list');
        data.links = data.list.find('a:not(.w-dropdown .w-dropdown a)');
        data.complete = complete(data);
        data.mouseLeave = makeMouseLeaveHandler(data);
        data.mouseUpOutside = outside(data);
        data.mouseMoveOutside = moveOutside(data);
        // Set config from data attributes
        configure(data);
        // Store the IDs of the toggle button & list
        var toggleId = data.toggle.attr('id');
        var listId = data.list.attr('id');
        // If user did not provide toggle ID, set it
        if (!toggleId) {
            toggleId = 'w-dropdown-toggle-' + i;
        }
        // If user did not provide list ID, set it
        if (!listId) {
            listId = 'w-dropdown-list-' + i;
        }
        // Add attributes to toggle element
        data.toggle.attr('id', toggleId);
        data.toggle.attr('aria-controls', listId);
        data.toggle.attr('aria-haspopup', 'menu');
        data.toggle.attr('aria-expanded', 'false');
        // Hide toggle icon from ATs
        data.toggle.find('.w-icon-dropdown-toggle').attr('aria-hidden', 'true');
        // If toggle element is not a button
        if (data.toggle.prop('tagName') !== 'BUTTON') {
            // Give it an appropriate role
            data.toggle.attr('role', 'button');
            // And give it a tabindex if user has not provided one
            if (!data.toggle.attr('tabindex')) {
                data.toggle.attr('tabindex', '0');
            }
        }
        // Add attributes to list element
        data.list.attr('id', listId);
        data.list.attr('aria-labelledby', toggleId);
        data.links.each(function(idx, link) {
            /**
         * In macOS Safari, links don't take focus on click unless they have
         * a tabindex. Without this, the dropdown will break.
         * @see https://gist.github.com/cvrebert/68659d0333a578d75372
         */ if (!link.hasAttribute('tabindex')) link.setAttribute('tabindex', '0');
            // We want to close the drop down if the href links somewhere internally
            // to the page
            if (INTERNAL_PAGE_LINK_HASHES_PATTERN.test(link.hash)) {
                link.addEventListener('click', close.bind(null, data));
            }
        });
        // Remove old events
        data.el.off(namespace);
        data.toggle.off(namespace);
        if (data.nav) {
            data.nav.off(namespace);
        }
        var initialToggler = makeToggler(data, FORCE_CLOSE);
        if (inDesigner) {
            data.el.on(settingEvent, makeSettingEventHandler(data));
        }
        if (!inDesigner) {
            // Close in preview mode and clean the data.hovering state
            if (inApp) {
                data.hovering = false;
                close(data);
            }
            if (data.config.hover) {
                data.toggle.on(mouseEnterEvent, makeMouseEnterHandler(data));
            }
            data.el.on(closeEvent, initialToggler);
            data.el.on(keydownEvent, makeDropdownKeydownHandler(data));
            data.el.on(focusOutEvent, makeDropdownFocusOutHandler(data));
            data.toggle.on(mouseUpEvent, initialToggler);
            data.toggle.on(keydownEvent, makeToggleKeydownHandler(data));
            data.nav = data.el.closest('.w-nav');
            data.nav.on(closeEvent, initialToggler);
        }
    }
    /**
     * Mutate the data object with a new config property
     */ function configure(data) {
        // Determine if z-index should be managed
        var zIndex = Number(data.el.css('z-index'));
        data.manageZ = zIndex === defaultZIndex || zIndex === defaultZIndex + 1;
        data.config = {
            hover: data.el.attr('data-hover') === 'true' && !touch,
            delay: data.el.attr('data-delay')
        };
    }
    function makeSettingEventHandler(data) {
        return function(evt, options) {
            options = options || {};
            configure(data);
            options.open === true && open(data);
            options.open === false && close(data, {
                immediate: true
            });
        };
    }
    function makeToggler(data, forceClose) {
        return debounce(function(evt) {
            if (data.open || evt && evt.type === 'w-close') {
                return close(data, {
                    forceClose
                });
            }
            open(data);
        });
    }
    function open(data) {
        if (data.open) {
            return;
        }
        closeOthers(data);
        data.open = true;
        data.list.addClass(openStateClassName);
        data.toggle.addClass(openStateClassName);
        data.toggle.attr('aria-expanded', 'true'); // ARIA
        ix.intro(0, data.el[0]);
        dispatchIx3ComponentEvent(data.el[0], 'open');
        Webflow.redraw.up();
        // Increase z-index to keep above other managed dropdowns
        data.manageZ && data.el.css('z-index', defaultZIndex + 1);
        // Listen for click outside events
        var isEditor = Webflow.env('editor');
        if (!inDesigner) {
            $doc.on(mouseUpEvent, data.mouseUpOutside);
        }
        if (data.hovering && !isEditor) {
            data.el.on(mouseLeaveEvent, data.mouseLeave);
        }
        if (data.hovering && isEditor) {
            $doc.on(mouseMoveEvent, data.mouseMoveOutside);
        }
        // Clear previous delay
        window.clearTimeout(data.delayId);
    }
    function close(data, { immediate, forceClose } = {}) {
        if (!data.open) {
            return;
        }
        // Do not close hover-based menus if currently hovering
        if (data.config.hover && data.hovering && !forceClose) {
            return;
        }
        data.toggle.attr('aria-expanded', 'false');
        data.open = false;
        var config = data.config;
        ix.outro(0, data.el[0]);
        dispatchIx3ComponentEvent(data.el[0], 'close');
        // Stop listening for click outside events
        $doc.off(mouseUpEvent, data.mouseUpOutside);
        $doc.off(mouseMoveEvent, data.mouseMoveOutside);
        data.el.off(mouseLeaveEvent, data.mouseLeave);
        // Clear previous delay
        window.clearTimeout(data.delayId);
        // Skip delay during immediate
        if (!config.delay || immediate) {
            return data.complete();
        }
        // Optionally wait for delay before close
        data.delayId = window.setTimeout(data.complete, config.delay);
    }
    function closeAll() {
        $doc.find(namespace).each(function(i, el) {
            $(el).triggerHandler(closeEvent);
        });
    }
    function closeOthers(data) {
        var self = data.el[0];
        $dropdowns.each(function(i, other) {
            var $other = $(other);
            if ($other.is(self) || $other.has(self).length) {
                return;
            }
            $other.triggerHandler(closeEvent);
        });
    }
    function outside(data) {
        // Unbind previous click handler if it exists
        if (data.mouseUpOutside) {
            $doc.off(mouseUpEvent, data.mouseUpOutside);
        }
        // Close menu when clicked outside
        return debounce(function(evt) {
            if (!data.open) {
                return;
            }
            var $target = $(evt.target);
            if ($target.closest('.w-dropdown-toggle').length) {
                return;
            }
            var isEventOutsideDropdowns = $.inArray(data.el[0], $target.parents(namespace)) === -1;
            var isEditor = Webflow.env('editor');
            if (isEventOutsideDropdowns) {
                if (isEditor) {
                    var isEventOnDetachedSvg = $target.parents().length === 1 && $target.parents('svg').length === 1;
                    var isEventOnHoverControls = $target.parents('.w-editor-bem-EditorHoverControls').length;
                    if (isEventOnDetachedSvg || isEventOnHoverControls) {
                        return;
                    }
                }
                close(data);
            }
        });
    }
    function complete(data) {
        return function() {
            data.list.removeClass(openStateClassName);
            data.toggle.removeClass(openStateClassName);
            // Reset z-index for managed dropdowns
            data.manageZ && data.el.css('z-index', '');
        };
    }
    function makeMouseEnterHandler(data) {
        return function() {
            data.hovering = true;
            open(data);
        };
    }
    function makeMouseLeaveHandler(data) {
        return function() {
            data.hovering = false;
            // We do not want the list to close upon mouseleave
            // if one of the links has focus
            if (!data.links.is(':focus')) {
                close(data);
            }
        };
    }
    function moveOutside(data) {
        return debounce(function(evt) {
            if (!data.open) {
                return;
            }
            var $target = $(evt.target);
            var isEventOutsideDropdowns = $.inArray(data.el[0], $target.parents(namespace)) === -1;
            if (isEventOutsideDropdowns) {
                var isEventOnHoverControls = $target.parents('.w-editor-bem-EditorHoverControls').length;
                var isEventOnHoverToolbar = $target.parents('.w-editor-bem-RTToolbar').length;
                var $editorOverlay = $('.w-editor-bem-EditorOverlay');
                var isDropdownInEdition = $editorOverlay.find('.w-editor-edit-outline').length || $editorOverlay.find('.w-editor-bem-RTToolbar').length;
                if (isEventOnHoverControls || isEventOnHoverToolbar || isDropdownInEdition) {
                    return;
                }
                data.hovering = false;
                close(data);
            }
        });
    }
    function makeDropdownKeydownHandler(data) {
        return function(evt) {
            // Don't respond to keyboard in designer or if the list is not open
            if (inDesigner || !data.open) {
                return;
            }
            // Realign selectedIdx with the menu item that is currently in focus.
            // We need this because we do not track the `Tab` key activity!
            data.selectedIdx = data.links.index(document.activeElement);
            // Evaluate item-selection logic
            switch(evt.keyCode){
                case KEY_CODES.HOME:
                    {
                        if (!data.open) return;
                        data.selectedIdx = 0;
                        focusSelectedLink(data);
                        return evt.preventDefault();
                    }
                case KEY_CODES.END:
                    {
                        if (!data.open) return;
                        data.selectedIdx = data.links.length - 1;
                        focusSelectedLink(data);
                        return evt.preventDefault();
                    }
                case KEY_CODES.ESCAPE:
                    {
                        close(data);
                        data.toggle.focus();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN:
                    {
                        data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                        focusSelectedLink(data);
                        return evt.preventDefault();
                    }
                case KEY_CODES.ARROW_LEFT:
                case KEY_CODES.ARROW_UP:
                    {
                        data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                        focusSelectedLink(data);
                        return evt.preventDefault();
                    }
            }
        };
    }
    function focusSelectedLink(data) {
        if (data.links[data.selectedIdx]) {
            data.links[data.selectedIdx].focus();
        }
    }
    function makeToggleKeydownHandler(data) {
        // We want to close immediately
        // if interacting via keyboard
        var toggler = makeToggler(data, FORCE_CLOSE);
        return function(evt) {
            if (inDesigner) return;
            // If the menu is not open, we don't want
            // the up or Down arrows to do anything
            if (!data.open) {
                switch(evt.keyCode){
                    case KEY_CODES.ARROW_UP:
                    case KEY_CODES.ARROW_DOWN:
                        {
                            return evt.stopPropagation();
                        }
                }
            }
            switch(evt.keyCode){
                case KEY_CODES.SPACE:
                case KEY_CODES.ENTER:
                    {
                        toggler();
                        evt.stopPropagation();
                        return evt.preventDefault();
                    }
            }
        };
    }
    function makeDropdownFocusOutHandler(data) {
        return debounce(function(evt) {
            var { relatedTarget, target } = evt;
            var menuEl = data.el[0];
            /**
         * Close menu
         * With focusout events, the `relatedTarget` is the element that will next receive focus.
         * @see: https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget
         */ var menuContainsFocus = menuEl.contains(relatedTarget) || menuEl.contains(target);
            if (!menuContainsFocus) {
                close(data);
            }
            return evt.stopPropagation();
        });
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctZHJvcGRvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyB3aW5kb3csIGRvY3VtZW50ICovXG5cbi8qKlxuICogV2ViZmxvdzogRHJvcGRvd24gY29tcG9uZW50XG4gKi9cblxudmFyIFdlYmZsb3cgPSByZXF1aXJlKCcuLi9CYXNlU2l0ZU1vZHVsZXMvd2ViZmxvdy1saWInKTtcbnZhciBJWEV2ZW50cyA9IHJlcXVpcmUoJy4uL0Jhc2VTaXRlTW9kdWxlcy93ZWJmbG93LWl4Mi1ldmVudHMnKTtcblxuY29uc3QgS0VZX0NPREVTID0ge1xuICBBUlJPV19MRUZUOiAzNyxcbiAgQVJST1dfVVA6IDM4LFxuICBBUlJPV19SSUdIVDogMzksXG4gIEFSUk9XX0RPV046IDQwLFxuICBFU0NBUEU6IDI3LFxuICBTUEFDRTogMzIsXG4gIEVOVEVSOiAxMyxcbiAgSE9NRTogMzYsXG4gIEVORDogMzUsXG59O1xuXG5jb25zdCBJWDNfQ09NUE9ORU5UX0VWRU5UID0gJ0lYM19DT01QT05FTlRfU1RBVEVfQ0hBTkdFJztcblxuZnVuY3Rpb24gZGlzcGF0Y2hJeDNDb21wb25lbnRFdmVudChlbGVtZW50LCBzdGF0ZSkge1xuICBJWEV2ZW50cy5kaXNwYXRjaEN1c3RvbUV2ZW50KGVsZW1lbnQsIElYM19DT01QT05FTlRfRVZFTlQsIHtcbiAgICBjb21wb25lbnQ6ICdkcm9wZG93bicsXG4gICAgc3RhdGUsXG4gIH0pO1xufVxuXG5jb25zdCBGT1JDRV9DTE9TRSA9IHRydWU7XG5cbi8qKlxuICogVGhpcyBwYXR0ZXJuIG1hdGNoZXMgbGlua3MgdGhhdCBiZWdpbiB3aXRoIGEgYCNgIEFORCBoYXZlIHNvbWUgYWxwaGFudW1lcmljXG4gKiBjaGFyYWN0ZXJzIGFmdGVyIGl0LCBpbmNsdWRpbmcgYWxzbyBoeXBoZW5zIGFuZCB1bmRlcnNjb3Jlc1xuICpcbiAqIE1hdGNoZXM6XG4gKiAjZm9vXG4gKiAjOTk5XG4gKiAjZm9vLWJhcl9iYXpcbiAqXG4gKiBEb2VzIG5vdCBtYXRjaDpcbiAqICNcbiAqL1xuY29uc3QgSU5URVJOQUxfUEFHRV9MSU5LX0hBU0hFU19QQVRURVJOID0gL14jW2EtekEtWjAtOVxcLV9dKyQvO1xuXG5XZWJmbG93LmRlZmluZShcbiAgJ2Ryb3Bkb3duJyxcbiAgKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCQsIF8pIHtcbiAgICB2YXIgZGVib3VuY2UgPSBfLmRlYm91bmNlO1xuXG4gICAgdmFyIGFwaSA9IHt9O1xuICAgIHZhciBpbkFwcCA9IFdlYmZsb3cuZW52KCk7XG4gICAgdmFyIGluUHJldmlldyA9IGZhbHNlO1xuICAgIHZhciBpbkRlc2lnbmVyO1xuICAgIHZhciB0b3VjaCA9IFdlYmZsb3cuZW52LnRvdWNoO1xuICAgIHZhciBuYW1lc3BhY2UgPSAnLnctZHJvcGRvd24nO1xuICAgIHZhciBvcGVuU3RhdGVDbGFzc05hbWUgPSAndy0tb3Blbic7XG4gICAgdmFyIGl4ID0gSVhFdmVudHMudHJpZ2dlcnM7XG4gICAgdmFyIGRlZmF1bHRaSW5kZXggPSA5MDA7IC8vIEBkcm9wZG93bi1kZXB0aFxuXG4gICAgdmFyIGZvY3VzT3V0RXZlbnQgPSAnZm9jdXNvdXQnICsgbmFtZXNwYWNlO1xuICAgIHZhciBrZXlkb3duRXZlbnQgPSAna2V5ZG93bicgKyBuYW1lc3BhY2U7XG4gICAgdmFyIG1vdXNlRW50ZXJFdmVudCA9ICdtb3VzZWVudGVyJyArIG5hbWVzcGFjZTtcbiAgICB2YXIgbW91c2VNb3ZlRXZlbnQgPSAnbW91c2Vtb3ZlJyArIG5hbWVzcGFjZTtcbiAgICB2YXIgbW91c2VMZWF2ZUV2ZW50ID0gJ21vdXNlbGVhdmUnICsgbmFtZXNwYWNlO1xuICAgIHZhciBtb3VzZVVwRXZlbnQgPSAodG91Y2ggPyAnY2xpY2snIDogJ21vdXNldXAnKSArIG5hbWVzcGFjZTtcblxuICAgIHZhciBjbG9zZUV2ZW50ID0gJ3ctY2xvc2UnICsgbmFtZXNwYWNlO1xuICAgIHZhciBzZXR0aW5nRXZlbnQgPSAnc2V0dGluZycgKyBuYW1lc3BhY2U7XG5cbiAgICB2YXIgJGRvYyA9ICQoZG9jdW1lbnQpO1xuICAgIHZhciAkZHJvcGRvd25zO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTW9kdWxlIG1ldGhvZHNcblxuICAgIGFwaS5yZWFkeSA9IGluaXQ7XG5cbiAgICBhcGkuZGVzaWduID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ2xvc2UgYWxsIHdoZW4gcmV0dXJuaW5nIGZyb20gcHJldmlld1xuICAgICAgaWYgKGluUHJldmlldykge1xuICAgICAgICBjbG9zZUFsbCgpO1xuICAgICAgfVxuICAgICAgaW5QcmV2aWV3ID0gZmFsc2U7XG4gICAgICBpbml0KCk7XG4gICAgfTtcblxuICAgIGFwaS5wcmV2aWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaW5QcmV2aWV3ID0gdHJ1ZTtcbiAgICAgIGluaXQoKTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICBpbkRlc2lnbmVyID0gaW5BcHAgJiYgV2ViZmxvdy5lbnYoJ2Rlc2lnbicpO1xuXG4gICAgICAvLyBGaW5kIGFsbCBpbnN0YW5jZXMgb24gdGhlIHBhZ2VcbiAgICAgICRkcm9wZG93bnMgPSAkZG9jLmZpbmQobmFtZXNwYWNlKTtcbiAgICAgICRkcm9wZG93bnMuZWFjaChidWlsZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGQoaSwgZWwpIHtcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcblxuICAgICAgLy8gU3RvcmUgc3RhdGUgaW4gZGF0YVxuICAgICAgdmFyIGRhdGEgPSAkLmRhdGEoZWwsIG5hbWVzcGFjZSk7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9ICQuZGF0YShlbCwgbmFtZXNwYWNlLCB7XG4gICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgZWw6ICRlbCxcbiAgICAgICAgICBjb25maWc6IHt9LFxuICAgICAgICAgIHNlbGVjdGVkSWR4OiAtMSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkYXRhLnRvZ2dsZSA9IGRhdGEuZWwuY2hpbGRyZW4oJy53LWRyb3Bkb3duLXRvZ2dsZScpO1xuICAgICAgZGF0YS5saXN0ID0gZGF0YS5lbC5jaGlsZHJlbignLnctZHJvcGRvd24tbGlzdCcpO1xuICAgICAgZGF0YS5saW5rcyA9IGRhdGEubGlzdC5maW5kKCdhOm5vdCgudy1kcm9wZG93biAudy1kcm9wZG93biBhKScpO1xuICAgICAgZGF0YS5jb21wbGV0ZSA9IGNvbXBsZXRlKGRhdGEpO1xuICAgICAgZGF0YS5tb3VzZUxlYXZlID0gbWFrZU1vdXNlTGVhdmVIYW5kbGVyKGRhdGEpO1xuICAgICAgZGF0YS5tb3VzZVVwT3V0c2lkZSA9IG91dHNpZGUoZGF0YSk7XG4gICAgICBkYXRhLm1vdXNlTW92ZU91dHNpZGUgPSBtb3ZlT3V0c2lkZShkYXRhKTtcblxuICAgICAgLy8gU2V0IGNvbmZpZyBmcm9tIGRhdGEgYXR0cmlidXRlc1xuICAgICAgY29uZmlndXJlKGRhdGEpO1xuXG4gICAgICAvLyBTdG9yZSB0aGUgSURzIG9mIHRoZSB0b2dnbGUgYnV0dG9uICYgbGlzdFxuICAgICAgdmFyIHRvZ2dsZUlkID0gZGF0YS50b2dnbGUuYXR0cignaWQnKTtcbiAgICAgIHZhciBsaXN0SWQgPSBkYXRhLmxpc3QuYXR0cignaWQnKTtcblxuICAgICAgLy8gSWYgdXNlciBkaWQgbm90IHByb3ZpZGUgdG9nZ2xlIElELCBzZXQgaXRcbiAgICAgIGlmICghdG9nZ2xlSWQpIHtcbiAgICAgICAgdG9nZ2xlSWQgPSAndy1kcm9wZG93bi10b2dnbGUtJyArIGk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVzZXIgZGlkIG5vdCBwcm92aWRlIGxpc3QgSUQsIHNldCBpdFxuICAgICAgaWYgKCFsaXN0SWQpIHtcbiAgICAgICAgbGlzdElkID0gJ3ctZHJvcGRvd24tbGlzdC0nICsgaTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGF0dHJpYnV0ZXMgdG8gdG9nZ2xlIGVsZW1lbnRcbiAgICAgIGRhdGEudG9nZ2xlLmF0dHIoJ2lkJywgdG9nZ2xlSWQpO1xuICAgICAgZGF0YS50b2dnbGUuYXR0cignYXJpYS1jb250cm9scycsIGxpc3RJZCk7XG4gICAgICBkYXRhLnRvZ2dsZS5hdHRyKCdhcmlhLWhhc3BvcHVwJywgJ21lbnUnKTtcbiAgICAgIGRhdGEudG9nZ2xlLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuICAgICAgLy8gSGlkZSB0b2dnbGUgaWNvbiBmcm9tIEFUc1xuICAgICAgZGF0YS50b2dnbGUuZmluZCgnLnctaWNvbi1kcm9wZG93bi10b2dnbGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgIC8vIElmIHRvZ2dsZSBlbGVtZW50IGlzIG5vdCBhIGJ1dHRvblxuICAgICAgaWYgKGRhdGEudG9nZ2xlLnByb3AoJ3RhZ05hbWUnKSAhPT0gJ0JVVFRPTicpIHtcbiAgICAgICAgLy8gR2l2ZSBpdCBhbiBhcHByb3ByaWF0ZSByb2xlXG4gICAgICAgIGRhdGEudG9nZ2xlLmF0dHIoJ3JvbGUnLCAnYnV0dG9uJyk7XG5cbiAgICAgICAgLy8gQW5kIGdpdmUgaXQgYSB0YWJpbmRleCBpZiB1c2VyIGhhcyBub3QgcHJvdmlkZWQgb25lXG4gICAgICAgIGlmICghZGF0YS50b2dnbGUuYXR0cigndGFiaW5kZXgnKSkge1xuICAgICAgICAgIGRhdGEudG9nZ2xlLmF0dHIoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBZGQgYXR0cmlidXRlcyB0byBsaXN0IGVsZW1lbnRcbiAgICAgIGRhdGEubGlzdC5hdHRyKCdpZCcsIGxpc3RJZCk7XG4gICAgICBkYXRhLmxpc3QuYXR0cignYXJpYS1sYWJlbGxlZGJ5JywgdG9nZ2xlSWQpO1xuXG4gICAgICBkYXRhLmxpbmtzLmVhY2goZnVuY3Rpb24gKGlkeCwgbGluaykge1xuICAgICAgICAvKipcbiAgICAgICAgICogSW4gbWFjT1MgU2FmYXJpLCBsaW5rcyBkb24ndCB0YWtlIGZvY3VzIG9uIGNsaWNrIHVubGVzcyB0aGV5IGhhdmVcbiAgICAgICAgICogYSB0YWJpbmRleC4gV2l0aG91dCB0aGlzLCB0aGUgZHJvcGRvd24gd2lsbCBicmVhay5cbiAgICAgICAgICogQHNlZSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9jdnJlYmVydC82ODY1OWQwMzMzYTU3OGQ3NTM3MlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFsaW5rLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkgbGluay5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblxuICAgICAgICAvLyBXZSB3YW50IHRvIGNsb3NlIHRoZSBkcm9wIGRvd24gaWYgdGhlIGhyZWYgbGlua3Mgc29tZXdoZXJlIGludGVybmFsbHlcbiAgICAgICAgLy8gdG8gdGhlIHBhZ2VcbiAgICAgICAgaWYgKElOVEVSTkFMX1BBR0VfTElOS19IQVNIRVNfUEFUVEVSTi50ZXN0KGxpbmsuaGFzaCkpIHtcbiAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UuYmluZChudWxsLCBkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW1vdmUgb2xkIGV2ZW50c1xuICAgICAgZGF0YS5lbC5vZmYobmFtZXNwYWNlKTtcbiAgICAgIGRhdGEudG9nZ2xlLm9mZihuYW1lc3BhY2UpO1xuXG4gICAgICBpZiAoZGF0YS5uYXYpIHtcbiAgICAgICAgZGF0YS5uYXYub2ZmKG5hbWVzcGFjZSk7XG4gICAgICB9XG4gICAgICB2YXIgaW5pdGlhbFRvZ2dsZXIgPSBtYWtlVG9nZ2xlcihkYXRhLCBGT1JDRV9DTE9TRSk7XG5cbiAgICAgIGlmIChpbkRlc2lnbmVyKSB7XG4gICAgICAgIGRhdGEuZWwub24oc2V0dGluZ0V2ZW50LCBtYWtlU2V0dGluZ0V2ZW50SGFuZGxlcihkYXRhKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWluRGVzaWduZXIpIHtcbiAgICAgICAgLy8gQ2xvc2UgaW4gcHJldmlldyBtb2RlIGFuZCBjbGVhbiB0aGUgZGF0YS5ob3ZlcmluZyBzdGF0ZVxuICAgICAgICBpZiAoaW5BcHApIHtcbiAgICAgICAgICBkYXRhLmhvdmVyaW5nID0gZmFsc2U7XG4gICAgICAgICAgY2xvc2UoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuY29uZmlnLmhvdmVyKSB7XG4gICAgICAgICAgZGF0YS50b2dnbGUub24obW91c2VFbnRlckV2ZW50LCBtYWtlTW91c2VFbnRlckhhbmRsZXIoZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZWwub24oY2xvc2VFdmVudCwgaW5pdGlhbFRvZ2dsZXIpO1xuICAgICAgICBkYXRhLmVsLm9uKGtleWRvd25FdmVudCwgbWFrZURyb3Bkb3duS2V5ZG93bkhhbmRsZXIoZGF0YSkpO1xuICAgICAgICBkYXRhLmVsLm9uKGZvY3VzT3V0RXZlbnQsIG1ha2VEcm9wZG93bkZvY3VzT3V0SGFuZGxlcihkYXRhKSk7XG5cbiAgICAgICAgZGF0YS50b2dnbGUub24obW91c2VVcEV2ZW50LCBpbml0aWFsVG9nZ2xlcik7XG4gICAgICAgIGRhdGEudG9nZ2xlLm9uKGtleWRvd25FdmVudCwgbWFrZVRvZ2dsZUtleWRvd25IYW5kbGVyKGRhdGEpKTtcblxuICAgICAgICBkYXRhLm5hdiA9IGRhdGEuZWwuY2xvc2VzdCgnLnctbmF2Jyk7XG4gICAgICAgIGRhdGEubmF2Lm9uKGNsb3NlRXZlbnQsIGluaXRpYWxUb2dnbGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNdXRhdGUgdGhlIGRhdGEgb2JqZWN0IHdpdGggYSBuZXcgY29uZmlnIHByb3BlcnR5XG4gICAgICovXG4gICAgZnVuY3Rpb24gY29uZmlndXJlKGRhdGEpIHtcbiAgICAgIC8vIERldGVybWluZSBpZiB6LWluZGV4IHNob3VsZCBiZSBtYW5hZ2VkXG4gICAgICB2YXIgekluZGV4ID0gTnVtYmVyKGRhdGEuZWwuY3NzKCd6LWluZGV4JykpO1xuICAgICAgZGF0YS5tYW5hZ2VaID0gekluZGV4ID09PSBkZWZhdWx0WkluZGV4IHx8IHpJbmRleCA9PT0gZGVmYXVsdFpJbmRleCArIDE7XG4gICAgICBkYXRhLmNvbmZpZyA9IHtcbiAgICAgICAgaG92ZXI6IGRhdGEuZWwuYXR0cignZGF0YS1ob3ZlcicpID09PSAndHJ1ZScgJiYgIXRvdWNoLFxuICAgICAgICBkZWxheTogZGF0YS5lbC5hdHRyKCdkYXRhLWRlbGF5JyksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VTZXR0aW5nRXZlbnRIYW5kbGVyKGRhdGEpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0LCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBjb25maWd1cmUoZGF0YSk7XG4gICAgICAgIG9wdGlvbnMub3BlbiA9PT0gdHJ1ZSAmJiBvcGVuKGRhdGEpO1xuICAgICAgICBvcHRpb25zLm9wZW4gPT09IGZhbHNlICYmIGNsb3NlKGRhdGEsIHtpbW1lZGlhdGU6IHRydWV9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVRvZ2dsZXIoZGF0YSwgZm9yY2VDbG9zZSkge1xuICAgICAgcmV0dXJuIGRlYm91bmNlKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgaWYgKGRhdGEub3BlbiB8fCAoZXZ0ICYmIGV2dC50eXBlID09PSAndy1jbG9zZScpKSB7XG4gICAgICAgICAgcmV0dXJuIGNsb3NlKGRhdGEsIHtmb3JjZUNsb3NlfSk7XG4gICAgICAgIH1cbiAgICAgICAgb3BlbihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW4oZGF0YSkge1xuICAgICAgaWYgKGRhdGEub3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsb3NlT3RoZXJzKGRhdGEpO1xuICAgICAgZGF0YS5vcGVuID0gdHJ1ZTtcbiAgICAgIGRhdGEubGlzdC5hZGRDbGFzcyhvcGVuU3RhdGVDbGFzc05hbWUpO1xuICAgICAgZGF0YS50b2dnbGUuYWRkQ2xhc3Mob3BlblN0YXRlQ2xhc3NOYW1lKTtcbiAgICAgIGRhdGEudG9nZ2xlLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpOyAvLyBBUklBXG4gICAgICBpeC5pbnRybygwLCBkYXRhLmVsWzBdKTtcbiAgICAgIGRpc3BhdGNoSXgzQ29tcG9uZW50RXZlbnQoZGF0YS5lbFswXSwgJ29wZW4nKTtcbiAgICAgIFdlYmZsb3cucmVkcmF3LnVwKCk7XG5cbiAgICAgIC8vIEluY3JlYXNlIHotaW5kZXggdG8ga2VlcCBhYm92ZSBvdGhlciBtYW5hZ2VkIGRyb3Bkb3duc1xuICAgICAgZGF0YS5tYW5hZ2VaICYmIGRhdGEuZWwuY3NzKCd6LWluZGV4JywgZGVmYXVsdFpJbmRleCArIDEpO1xuXG4gICAgICAvLyBMaXN0ZW4gZm9yIGNsaWNrIG91dHNpZGUgZXZlbnRzXG4gICAgICB2YXIgaXNFZGl0b3IgPSBXZWJmbG93LmVudignZWRpdG9yJyk7XG4gICAgICBpZiAoIWluRGVzaWduZXIpIHtcbiAgICAgICAgJGRvYy5vbihtb3VzZVVwRXZlbnQsIGRhdGEubW91c2VVcE91dHNpZGUpO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGEuaG92ZXJpbmcgJiYgIWlzRWRpdG9yKSB7XG4gICAgICAgIGRhdGEuZWwub24obW91c2VMZWF2ZUV2ZW50LCBkYXRhLm1vdXNlTGVhdmUpO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGEuaG92ZXJpbmcgJiYgaXNFZGl0b3IpIHtcbiAgICAgICAgJGRvYy5vbihtb3VzZU1vdmVFdmVudCwgZGF0YS5tb3VzZU1vdmVPdXRzaWRlKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgcHJldmlvdXMgZGVsYXlcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoZGF0YS5kZWxheUlkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZShkYXRhLCB7aW1tZWRpYXRlLCBmb3JjZUNsb3NlfSA9IHt9KSB7XG4gICAgICBpZiAoIWRhdGEub3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERvIG5vdCBjbG9zZSBob3Zlci1iYXNlZCBtZW51cyBpZiBjdXJyZW50bHkgaG92ZXJpbmdcbiAgICAgIGlmIChkYXRhLmNvbmZpZy5ob3ZlciAmJiBkYXRhLmhvdmVyaW5nICYmICFmb3JjZUNsb3NlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZGF0YS50b2dnbGUuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXG4gICAgICBkYXRhLm9wZW4gPSBmYWxzZTtcbiAgICAgIHZhciBjb25maWcgPSBkYXRhLmNvbmZpZztcbiAgICAgIGl4Lm91dHJvKDAsIGRhdGEuZWxbMF0pO1xuICAgICAgZGlzcGF0Y2hJeDNDb21wb25lbnRFdmVudChkYXRhLmVsWzBdLCAnY2xvc2UnKTtcblxuICAgICAgLy8gU3RvcCBsaXN0ZW5pbmcgZm9yIGNsaWNrIG91dHNpZGUgZXZlbnRzXG4gICAgICAkZG9jLm9mZihtb3VzZVVwRXZlbnQsIGRhdGEubW91c2VVcE91dHNpZGUpO1xuICAgICAgJGRvYy5vZmYobW91c2VNb3ZlRXZlbnQsIGRhdGEubW91c2VNb3ZlT3V0c2lkZSk7XG4gICAgICBkYXRhLmVsLm9mZihtb3VzZUxlYXZlRXZlbnQsIGRhdGEubW91c2VMZWF2ZSk7XG5cbiAgICAgIC8vIENsZWFyIHByZXZpb3VzIGRlbGF5XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGRhdGEuZGVsYXlJZCk7XG5cbiAgICAgIC8vIFNraXAgZGVsYXkgZHVyaW5nIGltbWVkaWF0ZVxuICAgICAgaWYgKCFjb25maWcuZGVsYXkgfHwgaW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLmNvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE9wdGlvbmFsbHkgd2FpdCBmb3IgZGVsYXkgYmVmb3JlIGNsb3NlXG4gICAgICBkYXRhLmRlbGF5SWQgPSB3aW5kb3cuc2V0VGltZW91dChkYXRhLmNvbXBsZXRlLCBjb25maWcuZGVsYXkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlQWxsKCkge1xuICAgICAgJGRvYy5maW5kKG5hbWVzcGFjZSkuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgJChlbCkudHJpZ2dlckhhbmRsZXIoY2xvc2VFdmVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZU90aGVycyhkYXRhKSB7XG4gICAgICB2YXIgc2VsZiA9IGRhdGEuZWxbMF07XG4gICAgICAkZHJvcGRvd25zLmVhY2goZnVuY3Rpb24gKGksIG90aGVyKSB7XG4gICAgICAgIHZhciAkb3RoZXIgPSAkKG90aGVyKTtcbiAgICAgICAgaWYgKCRvdGhlci5pcyhzZWxmKSB8fCAkb3RoZXIuaGFzKHNlbGYpLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkb3RoZXIudHJpZ2dlckhhbmRsZXIoY2xvc2VFdmVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvdXRzaWRlKGRhdGEpIHtcbiAgICAgIC8vIFVuYmluZCBwcmV2aW91cyBjbGljayBoYW5kbGVyIGlmIGl0IGV4aXN0c1xuICAgICAgaWYgKGRhdGEubW91c2VVcE91dHNpZGUpIHtcbiAgICAgICAgJGRvYy5vZmYobW91c2VVcEV2ZW50LCBkYXRhLm1vdXNlVXBPdXRzaWRlKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xvc2UgbWVudSB3aGVuIGNsaWNrZWQgb3V0c2lkZVxuICAgICAgcmV0dXJuIGRlYm91bmNlKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgaWYgKCFkYXRhLm9wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2dC50YXJnZXQpO1xuICAgICAgICBpZiAoJHRhcmdldC5jbG9zZXN0KCcudy1kcm9wZG93bi10b2dnbGUnKS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzRXZlbnRPdXRzaWRlRHJvcGRvd25zID1cbiAgICAgICAgICAkLmluQXJyYXkoZGF0YS5lbFswXSwgJHRhcmdldC5wYXJlbnRzKG5hbWVzcGFjZSkpID09PSAtMTtcbiAgICAgICAgdmFyIGlzRWRpdG9yID0gV2ViZmxvdy5lbnYoJ2VkaXRvcicpO1xuICAgICAgICBpZiAoaXNFdmVudE91dHNpZGVEcm9wZG93bnMpIHtcbiAgICAgICAgICBpZiAoaXNFZGl0b3IpIHtcbiAgICAgICAgICAgIHZhciBpc0V2ZW50T25EZXRhY2hlZFN2ZyA9XG4gICAgICAgICAgICAgICR0YXJnZXQucGFyZW50cygpLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgICAkdGFyZ2V0LnBhcmVudHMoJ3N2ZycpLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgICAgIHZhciBpc0V2ZW50T25Ib3ZlckNvbnRyb2xzID0gJHRhcmdldC5wYXJlbnRzKFxuICAgICAgICAgICAgICAnLnctZWRpdG9yLWJlbS1FZGl0b3JIb3ZlckNvbnRyb2xzJ1xuICAgICAgICAgICAgKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoaXNFdmVudE9uRGV0YWNoZWRTdmcgfHwgaXNFdmVudE9uSG92ZXJDb250cm9scykge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNsb3NlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZShkYXRhKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBkYXRhLmxpc3QucmVtb3ZlQ2xhc3Mob3BlblN0YXRlQ2xhc3NOYW1lKTtcbiAgICAgICAgZGF0YS50b2dnbGUucmVtb3ZlQ2xhc3Mob3BlblN0YXRlQ2xhc3NOYW1lKTtcblxuICAgICAgICAvLyBSZXNldCB6LWluZGV4IGZvciBtYW5hZ2VkIGRyb3Bkb3duc1xuICAgICAgICBkYXRhLm1hbmFnZVogJiYgZGF0YS5lbC5jc3MoJ3otaW5kZXgnLCAnJyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VNb3VzZUVudGVySGFuZGxlcihkYXRhKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBkYXRhLmhvdmVyaW5nID0gdHJ1ZTtcbiAgICAgICAgb3BlbihkYXRhKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZU1vdXNlTGVhdmVIYW5kbGVyKGRhdGEpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRhdGEuaG92ZXJpbmcgPSBmYWxzZTtcblxuICAgICAgICAvLyBXZSBkbyBub3Qgd2FudCB0aGUgbGlzdCB0byBjbG9zZSB1cG9uIG1vdXNlbGVhdmVcbiAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBsaW5rcyBoYXMgZm9jdXNcbiAgICAgICAgaWYgKCFkYXRhLmxpbmtzLmlzKCc6Zm9jdXMnKSkge1xuICAgICAgICAgIGNsb3NlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVPdXRzaWRlKGRhdGEpIHtcbiAgICAgIHJldHVybiBkZWJvdW5jZShmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGlmICghZGF0YS5vcGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChldnQudGFyZ2V0KTtcbiAgICAgICAgdmFyIGlzRXZlbnRPdXRzaWRlRHJvcGRvd25zID1cbiAgICAgICAgICAkLmluQXJyYXkoZGF0YS5lbFswXSwgJHRhcmdldC5wYXJlbnRzKG5hbWVzcGFjZSkpID09PSAtMTtcbiAgICAgICAgaWYgKGlzRXZlbnRPdXRzaWRlRHJvcGRvd25zKSB7XG4gICAgICAgICAgdmFyIGlzRXZlbnRPbkhvdmVyQ29udHJvbHMgPSAkdGFyZ2V0LnBhcmVudHMoXG4gICAgICAgICAgICAnLnctZWRpdG9yLWJlbS1FZGl0b3JIb3ZlckNvbnRyb2xzJ1xuICAgICAgICAgICkubGVuZ3RoO1xuICAgICAgICAgIHZhciBpc0V2ZW50T25Ib3ZlclRvb2xiYXIgPSAkdGFyZ2V0LnBhcmVudHMoXG4gICAgICAgICAgICAnLnctZWRpdG9yLWJlbS1SVFRvb2xiYXInXG4gICAgICAgICAgKS5sZW5ndGg7XG4gICAgICAgICAgdmFyICRlZGl0b3JPdmVybGF5ID0gJCgnLnctZWRpdG9yLWJlbS1FZGl0b3JPdmVybGF5Jyk7XG4gICAgICAgICAgdmFyIGlzRHJvcGRvd25JbkVkaXRpb24gPVxuICAgICAgICAgICAgJGVkaXRvck92ZXJsYXkuZmluZCgnLnctZWRpdG9yLWVkaXQtb3V0bGluZScpLmxlbmd0aCB8fFxuICAgICAgICAgICAgJGVkaXRvck92ZXJsYXkuZmluZCgnLnctZWRpdG9yLWJlbS1SVFRvb2xiYXInKS5sZW5ndGg7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXNFdmVudE9uSG92ZXJDb250cm9scyB8fFxuICAgICAgICAgICAgaXNFdmVudE9uSG92ZXJUb29sYmFyIHx8XG4gICAgICAgICAgICBpc0Ryb3Bkb3duSW5FZGl0aW9uXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGEuaG92ZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgICBjbG9zZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZURyb3Bkb3duS2V5ZG93bkhhbmRsZXIoZGF0YSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgLy8gRG9uJ3QgcmVzcG9uZCB0byBrZXlib2FyZCBpbiBkZXNpZ25lciBvciBpZiB0aGUgbGlzdCBpcyBub3Qgb3BlblxuICAgICAgICBpZiAoaW5EZXNpZ25lciB8fCAhZGF0YS5vcGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVhbGlnbiBzZWxlY3RlZElkeCB3aXRoIHRoZSBtZW51IGl0ZW0gdGhhdCBpcyBjdXJyZW50bHkgaW4gZm9jdXMuXG4gICAgICAgIC8vIFdlIG5lZWQgdGhpcyBiZWNhdXNlIHdlIGRvIG5vdCB0cmFjayB0aGUgYFRhYmAga2V5IGFjdGl2aXR5IVxuICAgICAgICBkYXRhLnNlbGVjdGVkSWR4ID0gZGF0YS5saW5rcy5pbmRleChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgICAgICAvLyBFdmFsdWF0ZSBpdGVtLXNlbGVjdGlvbiBsb2dpY1xuICAgICAgICBzd2l0Y2ggKGV2dC5rZXlDb2RlKSB7XG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuSE9NRToge1xuICAgICAgICAgICAgaWYgKCFkYXRhLm9wZW4pIHJldHVybjtcblxuICAgICAgICAgICAgZGF0YS5zZWxlY3RlZElkeCA9IDA7XG4gICAgICAgICAgICBmb2N1c1NlbGVjdGVkTGluayhkYXRhKTtcblxuICAgICAgICAgICAgcmV0dXJuIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkVORDoge1xuICAgICAgICAgICAgaWYgKCFkYXRhLm9wZW4pIHJldHVybjtcblxuICAgICAgICAgICAgZGF0YS5zZWxlY3RlZElkeCA9IGRhdGEubGlua3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGZvY3VzU2VsZWN0ZWRMaW5rKGRhdGEpO1xuXG4gICAgICAgICAgICByZXR1cm4gZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuRVNDQVBFOiB7XG4gICAgICAgICAgICBjbG9zZShkYXRhKTtcbiAgICAgICAgICAgIGRhdGEudG9nZ2xlLmZvY3VzKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuQVJST1dfUklHSFQ6XG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuQVJST1dfRE9XTjoge1xuICAgICAgICAgICAgZGF0YS5zZWxlY3RlZElkeCA9IE1hdGgubWluKFxuICAgICAgICAgICAgICBkYXRhLmxpbmtzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggKyAxXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb2N1c1NlbGVjdGVkTGluayhkYXRhKTtcblxuICAgICAgICAgICAgcmV0dXJuIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkFSUk9XX0xFRlQ6XG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuQVJST1dfVVA6IHtcbiAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggPSBNYXRoLm1heCgtMSwgZGF0YS5zZWxlY3RlZElkeCAtIDEpO1xuICAgICAgICAgICAgZm9jdXNTZWxlY3RlZExpbmsoZGF0YSk7XG5cbiAgICAgICAgICAgIHJldHVybiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9jdXNTZWxlY3RlZExpbmsoZGF0YSkge1xuICAgICAgaWYgKGRhdGEubGlua3NbZGF0YS5zZWxlY3RlZElkeF0pIHtcbiAgICAgICAgZGF0YS5saW5rc1tkYXRhLnNlbGVjdGVkSWR4XS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VUb2dnbGVLZXlkb3duSGFuZGxlcihkYXRhKSB7XG4gICAgICAvLyBXZSB3YW50IHRvIGNsb3NlIGltbWVkaWF0ZWx5XG4gICAgICAvLyBpZiBpbnRlcmFjdGluZyB2aWEga2V5Ym9hcmRcbiAgICAgIHZhciB0b2dnbGVyID0gbWFrZVRvZ2dsZXIoZGF0YSwgRk9SQ0VfQ0xPU0UpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBpZiAoaW5EZXNpZ25lcikgcmV0dXJuO1xuXG4gICAgICAgIC8vIElmIHRoZSBtZW51IGlzIG5vdCBvcGVuLCB3ZSBkb24ndCB3YW50XG4gICAgICAgIC8vIHRoZSB1cCBvciBEb3duIGFycm93cyB0byBkbyBhbnl0aGluZ1xuICAgICAgICBpZiAoIWRhdGEub3Blbikge1xuICAgICAgICAgIHN3aXRjaCAoZXZ0LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkFSUk9XX1VQOlxuICAgICAgICAgICAgY2FzZSBLRVlfQ09ERVMuQVJST1dfRE9XTjoge1xuICAgICAgICAgICAgICByZXR1cm4gZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZ0LmtleUNvZGUpIHtcbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5TUEFDRTpcbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5FTlRFUjoge1xuICAgICAgICAgICAgdG9nZ2xlcigpO1xuICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlRHJvcGRvd25Gb2N1c091dEhhbmRsZXIoZGF0YSkge1xuICAgICAgcmV0dXJuIGRlYm91bmNlKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIHtyZWxhdGVkVGFyZ2V0LCB0YXJnZXR9ID0gZXZ0O1xuICAgICAgICB2YXIgbWVudUVsID0gZGF0YS5lbFswXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsb3NlIG1lbnVcbiAgICAgICAgICogV2l0aCBmb2N1c291dCBldmVudHMsIHRoZSBgcmVsYXRlZFRhcmdldGAgaXMgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIG5leHQgcmVjZWl2ZSBmb2N1cy5cbiAgICAgICAgICogQHNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZvY3VzRXZlbnQvcmVsYXRlZFRhcmdldFxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIG1lbnVDb250YWluc0ZvY3VzID1cbiAgICAgICAgICBtZW51RWwuY29udGFpbnMocmVsYXRlZFRhcmdldCkgfHwgbWVudUVsLmNvbnRhaW5zKHRhcmdldCk7XG4gICAgICAgIGlmICghbWVudUNvbnRhaW5zRm9jdXMpIHtcbiAgICAgICAgICBjbG9zZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRXhwb3J0IG1vZHVsZVxuICAgIHJldHVybiBhcGk7XG4gIH0pXG4pO1xuIl0sIm5hbWVzIjpbIldlYmZsb3ciLCJyZXF1aXJlIiwiSVhFdmVudHMiLCJLRVlfQ09ERVMiLCJBUlJPV19MRUZUIiwiQVJST1dfVVAiLCJBUlJPV19SSUdIVCIsIkFSUk9XX0RPV04iLCJFU0NBUEUiLCJTUEFDRSIsIkVOVEVSIiwiSE9NRSIsIkVORCIsIklYM19DT01QT05FTlRfRVZFTlQiLCJkaXNwYXRjaEl4M0NvbXBvbmVudEV2ZW50IiwiZWxlbWVudCIsInN0YXRlIiwiZGlzcGF0Y2hDdXN0b21FdmVudCIsImNvbXBvbmVudCIsIkZPUkNFX0NMT1NFIiwiSU5URVJOQUxfUEFHRV9MSU5LX0hBU0hFU19QQVRURVJOIiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsIiQiLCJfIiwiZGVib3VuY2UiLCJhcGkiLCJpbkFwcCIsImVudiIsImluUHJldmlldyIsImluRGVzaWduZXIiLCJ0b3VjaCIsIm5hbWVzcGFjZSIsIm9wZW5TdGF0ZUNsYXNzTmFtZSIsIml4IiwidHJpZ2dlcnMiLCJkZWZhdWx0WkluZGV4IiwiZm9jdXNPdXRFdmVudCIsImtleWRvd25FdmVudCIsIm1vdXNlRW50ZXJFdmVudCIsIm1vdXNlTW92ZUV2ZW50IiwibW91c2VMZWF2ZUV2ZW50IiwibW91c2VVcEV2ZW50IiwiY2xvc2VFdmVudCIsInNldHRpbmdFdmVudCIsIiRkb2MiLCJkb2N1bWVudCIsIiRkcm9wZG93bnMiLCJyZWFkeSIsImluaXQiLCJkZXNpZ24iLCJjbG9zZUFsbCIsInByZXZpZXciLCJmaW5kIiwiZWFjaCIsImJ1aWxkIiwiaSIsImVsIiwiJGVsIiwiZGF0YSIsIm9wZW4iLCJjb25maWciLCJzZWxlY3RlZElkeCIsInRvZ2dsZSIsImNoaWxkcmVuIiwibGlzdCIsImxpbmtzIiwiY29tcGxldGUiLCJtb3VzZUxlYXZlIiwibWFrZU1vdXNlTGVhdmVIYW5kbGVyIiwibW91c2VVcE91dHNpZGUiLCJvdXRzaWRlIiwibW91c2VNb3ZlT3V0c2lkZSIsIm1vdmVPdXRzaWRlIiwiY29uZmlndXJlIiwidG9nZ2xlSWQiLCJhdHRyIiwibGlzdElkIiwicHJvcCIsImlkeCIsImxpbmsiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXN0IiwiaGFzaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZSIsImJpbmQiLCJvZmYiLCJuYXYiLCJpbml0aWFsVG9nZ2xlciIsIm1ha2VUb2dnbGVyIiwib24iLCJtYWtlU2V0dGluZ0V2ZW50SGFuZGxlciIsImhvdmVyaW5nIiwiaG92ZXIiLCJtYWtlTW91c2VFbnRlckhhbmRsZXIiLCJtYWtlRHJvcGRvd25LZXlkb3duSGFuZGxlciIsIm1ha2VEcm9wZG93bkZvY3VzT3V0SGFuZGxlciIsIm1ha2VUb2dnbGVLZXlkb3duSGFuZGxlciIsImNsb3Nlc3QiLCJ6SW5kZXgiLCJOdW1iZXIiLCJjc3MiLCJtYW5hZ2VaIiwiZGVsYXkiLCJldnQiLCJvcHRpb25zIiwiaW1tZWRpYXRlIiwiZm9yY2VDbG9zZSIsInR5cGUiLCJjbG9zZU90aGVycyIsImFkZENsYXNzIiwiaW50cm8iLCJyZWRyYXciLCJ1cCIsImlzRWRpdG9yIiwid2luZG93IiwiY2xlYXJUaW1lb3V0IiwiZGVsYXlJZCIsIm91dHJvIiwic2V0VGltZW91dCIsInRyaWdnZXJIYW5kbGVyIiwic2VsZiIsIm90aGVyIiwiJG90aGVyIiwiaXMiLCJoYXMiLCJsZW5ndGgiLCIkdGFyZ2V0IiwidGFyZ2V0IiwiaXNFdmVudE91dHNpZGVEcm9wZG93bnMiLCJpbkFycmF5IiwicGFyZW50cyIsImlzRXZlbnRPbkRldGFjaGVkU3ZnIiwiaXNFdmVudE9uSG92ZXJDb250cm9scyIsInJlbW92ZUNsYXNzIiwiaXNFdmVudE9uSG92ZXJUb29sYmFyIiwiJGVkaXRvck92ZXJsYXkiLCJpc0Ryb3Bkb3duSW5FZGl0aW9uIiwiaW5kZXgiLCJhY3RpdmVFbGVtZW50Iiwia2V5Q29kZSIsImZvY3VzU2VsZWN0ZWRMaW5rIiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsInN0b3BQcm9wYWdhdGlvbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJ0b2dnbGVyIiwicmVsYXRlZFRhcmdldCIsIm1lbnVFbCIsIm1lbnVDb250YWluc0ZvY3VzIiwiY29udGFpbnMiXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QixHQUU1Qjs7Q0FFQztBQUVELElBQUlBLFVBQVVDLFFBQVE7QUFDdEIsSUFBSUMsV0FBV0QsUUFBUTtBQUV2QixNQUFNRSxZQUFZO0lBQ2hCQyxZQUFZO0lBQ1pDLFVBQVU7SUFDVkMsYUFBYTtJQUNiQyxZQUFZO0lBQ1pDLFFBQVE7SUFDUkMsT0FBTztJQUNQQyxPQUFPO0lBQ1BDLE1BQU07SUFDTkMsS0FBSztBQUNQO0FBRUEsTUFBTUMsc0JBQXNCO0FBRTVCLFNBQVNDLDBCQUEwQkMsT0FBTyxFQUFFQyxLQUFLO0lBQy9DZCxT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

}),
3502: (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
__webpack_require__(9461);__webpack_require__(7624);__webpack_require__(286);__webpack_require__(8334);__webpack_require__(2338);__webpack_require__(3695);__webpack_require__(322);__webpack_require__(1655);__webpack_require__(941);__webpack_require__(5134);__webpack_require__(9858);__webpack_require__(2458);__webpack_require__(2801);

}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

/************************************************************************/
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/esm_module_decorator
(() => {
__webpack_require__.hmd = (module) => {
  module = Object.create(module);
  if (!module.children) module.children = [];
  Object.defineProperty(module, 'exports', {
      enumerable: true,
      set: () => {
          throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
      }
  });
  return module;
};
})();
// webpack/runtime/global
(() => {
__webpack_require__.g = (() => {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/node_module_decorator
(() => {
__webpack_require__.nmd = (module) => {
  module.paths = [];
  if (!module.children) module.children = [];
  return module;
};
})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = (result, chunkIds, fn, priority) => {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var [chunkIds, fn, priority] = deferred[i];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.3.9")
})();
// webpack/runtime/jsonp_chunk_loading
(() => {

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = {"777": 0,};
      __webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
// install a JSONP callback for chunk loading
var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
	var [chunkIds, moreModules, runtime] = data;
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	return __webpack_require__.O(result);
};

var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.3.9";

})();
/************************************************************************/
// startup
// Load entry module and return exports
// This entry module depends on other loaded chunks and execution need to be delayed
var __webpack_exports__ = __webpack_require__.O(undefined, ["87", "378", "64", "417"], function() { return __webpack_require__(3502) });
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
;