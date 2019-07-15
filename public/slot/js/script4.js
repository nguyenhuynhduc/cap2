/*

 * jQuery mmenu v5.2.0

 * @requires jQuery 1.7.0 or later

 *

 * mmenu.frebsite.nl

 *

 * Copyright (c) Fred Heusschen

 * www.frebsite.nl

 *

 * Licensed under the MIT license:

 * http://en.wikipedia.org/wiki/MIT_License

 */

!function (e) {

    function t() {

        e[n].glbl || (r = {

            $wndw: e(window),

            $html: e("html"),

            $body: e("body")

        }, a = {}, i = {}, l = {}, e.each([a, i, l], function (e, t) {

            t.add = function (e) {

                e = e.split(" ");

                for (var n = 0, s = e.length; s > n; n++) t[e[n]] = t.mm(e[n])

            }

        }), a.mm = function (e) {

            return "mm-" + e

        }, a.add("wrapper menu vertical panel nopanel current highest opened subopened navbar hasnavbar title btn prev next first last listview nolistview selected divider spacer hidden fullsubopen"), a.umm = function (e) {

            return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e

        }, i.mm = function (e) {

            return "mm-" + e

        }, i.add("parent sub"), l.mm = function (e) {

            return e + ".mm"

        }, l.add("transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend click keydown"), e[n]._c = a, e[n]._d = i, e[n]._e = l, e[n].glbl = r)

    }



    var n = "mmenu",

        s = "5.2.0";

    if (!e[n]) {

        e[n] = function (e, t, n) {

            this.$menu = e, this._api = ["bind", "init", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts = t, this.conf = n, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();

            var s = this.$menu.children(this.conf.panelNodetype);

            return this._initAddons(), this.init(s), "function" == typeof this.___debug && this.___debug(), this

        }, e[n].version = s, e[n].addons = {}, e[n].uniqueId = 0, e[n].defaults = {

            extensions: [],

            navbar: {

                title: "Menu",

                titleLink: "panel"

            },

            onClick: {

                setSelected: !0

            },

            slidingSubmenus: !0

        }, e[n].configuration = {

            classNames: {

                panel: "Panel",

                vertical: "Vertical",

                selected: "Selected",

                divider: "Divider",

                spacer: "Spacer"

            },

            clone: !1,

            openingInterval: 25,

            panelNodetype: "ul, ol, div",

            transitionDuration: 400

        }, e[n].prototype = {

            init: function (e) {

                e = e.not("." + a.nopanel), e = this._initPanels(e), this.trigger("init", e), this.trigger("update")

            },

            update: function () {

                this.trigger("update")

            },

            setSelected: function (e) {

                this.$menu.find("." + a.listview)

                    .children()

                    .removeClass(a.selected), e.addClass(a.selected), this.trigger("setSelected", e)

            },

            openPanel: function (t) {

                var n = t.parent();

                if (n.hasClass(a.vertical)) {

                    var s = n.parents("." + a.subopened);

                    if (s.length) return this.openPanel(s.first());

                    n.addClass(a.opened)

                } else {

                    if (t.hasClass(a.current)) return;

                    var i = e(this.$menu)

                            .children("." + a.panel),

                        l = i.filter("." + a.current);

                    i.removeClass(a.highest)

                        .removeClass(a.current)

                        .not(t)

                        .not(l)

                        .not("." + a.vertical)

                        .addClass(a.hidden), t.hasClass(a.opened) ? l.addClass(a.highest)

                        .removeClass(a.opened)

                        .removeClass(a.subopened) : (t.addClass(a.highest), l.addClass(a.subopened)), t.removeClass(a.hidden)

                        .addClass(a.current), setTimeout(function () {

                        t.removeClass(a.subopened)

                            .addClass(a.opened)

                    }, this.conf.openingInterval)

                }

                this.trigger("openPanel", t)

            },

            closePanel: function (e) {

                var t = e.parent();

                t.hasClass(a.vertical) && (t.removeClass(a.opened), this.trigger("closePanel", e))

            },

            closeAllPanels: function () {

                this.$menu.find("." + a.listview)

                    .children()

                    .removeClass(a.selected)

                    .filter("." + a.vertical)

                    .removeClass(a.opened);

                var e = this.$menu.children("." + a.panel),

                    t = e.first();

                this.$menu.children("." + a.panel)

                    .not(t)

                    .removeClass(a.subopened)

                    .removeClass(a.opened)

                    .removeClass(a.current)

                    .removeClass(a.highest)

                    .addClass(a.hidden), this.openPanel(t)

            },

            togglePanel: function (e) {

                var t = e.parent();

                t.hasClass(a.vertical) && this[t.hasClass(a.opened) ? "closePanel" : "openPanel"](e)

            },

            getInstance: function () {

                return this

            },

            bind: function (e, t) {

                this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(t)

            },

            trigger: function () {

                var e = this,

                    t = Array.prototype.slice.call(arguments),

                    n = t.shift();

                if (this.cbck[n])

                    for (var s = 0, a = this.cbck[n].length; a > s; s++) this.cbck[n][s].apply(e, t)

            },

            _initMenu: function () {

                this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("[id]"))

                    .filter("[id]")

                    .each(function () {

                        e(this)

                            .attr("id", a.mm(e(this)

                                .attr("id")))

                    })), this.$menu.contents()

                    .each(function () {

                        3 == e(this)[0].nodeType && e(this)

                            .remove()

                    }), this.$menu.parent()

                    .addClass(a.wrapper);

                var t = [a.menu];

                this.opts.slidingSubmenus || t.push(a.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && t.push(this.opts.extensions), this.$menu.addClass(t.join(" "))

            },

            _initPanels: function (t) {

                var n = this;

                this.__findAddBack(t, "ul, ol")

                    .not("." + a.nolistview)

                    .addClass(a.listview);

                var s = this.__findAddBack(t, "." + a.listview)

                    .children();

                this.__refactorClass(s, this.conf.classNames.selected, "selected"), this.__refactorClass(s, this.conf.classNames.divider, "divider"), this.__refactorClass(s, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(t, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");

                var l = e(),

                    r = t.add(t.find("." + a.panel))

                        .add(this.__findAddBack(t, "." + a.listview)

                            .children()

                            .children(this.conf.panelNodetype))

                        .not("." + a.nopanel);

                this.__refactorClass(r, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || r.addClass(a.vertical), r.each(function () {

                    var t = e(this),

                        s = t;

                    t.is("ul, ol") ? (t.wrap('<div class="' + a.panel + '" />'), s = t.parent()) : s.addClass(a.panel);

                    var i = t.attr("id");

                    t.removeAttr("id"), s.attr("id", i || n.__getUniqueId()), t.hasClass(a.vertical) && (t.removeClass(n.conf.classNames.vertical), s.add(s.parent())

                        .addClass(a.vertical)), l = l.add(s);

                    var r = s.children()

                            .first(),

                        d = s.children()

                            .last();

                    r.is("." + a.listview) && r.addClass(a.first), d.is("." + a.listview) && d.addClass(a.last)

                });

                var d = e("." + a.panel, this.$menu);

                l.each(function () {

                    var t = e(this),

                        s = t.parent(),

                        l = s.children("a, span")

                            .first();

                    if (s.is("." + a.menu) || (s.data(i.sub, t), t.data(i.parent, s)), !s.children("." + a.next)

                        .length && s.parent()

                        .is("." + a.listview)) {

                        var r = t.attr("id"),

                            d = e('<a class="' + a.next + '" href="#' + r + '" data-target="#' + r + '" />')

                                .insertBefore(l);

                        l.is("span") && d.addClass(a.fullsubopen)

                    }

                    if (!t.children("." + a.navbar)

                        .length && !s.hasClass(a.vertical)) {

                        if (s.parent()

                            .is("." + a.listview)) var s = s.closest("." + a.panel);

                        else var l = s.closest("." + a.panel)

                                .find('a[href="#' + t.attr("id") + '"]')

                                .first(),

                            s = l.closest("." + a.panel);

                        var o = e('<div class="' + a.navbar + '" />');

                        if (s.length) {

                            var r = s.attr("id");

                            switch (n.opts.navbar.titleLink) {

                                case "anchor":

                                    _url = l.attr("href");

                                    break;

                                case "panel":

                                case "parent":

                                    _url = "#" + r;

                                    break;

                                case "none":

                                default:

                                    _url = !1

                            }

                            o.append('<a class="' + a.btn + " " + a.prev + '" href="#' + r + '" data-target="#' + r + '"></a>')

                                .append('<a class="' + a.title + '"' + (_url ? ' href="' + _url + '"' : "") + ">" + l.text() + "</a>")

                                .prependTo(t), t.addClass(a.hasnavbar)

                        } else n.opts.navbar.title && (o.append('<a class="' + a.title + '">' + n.opts.navbar.title + "</a>")

                            .prependTo(t), t.addClass(a.hasnavbar))

                    }

                });

                var o = this.__findAddBack(t, "." + a.listview)

                    .children("." + a.selected)

                    .removeClass(a.selected)

                    .last()

                    .addClass(a.selected);

                o.add(o.parentsUntil("." + a.menu, "li"))

                    .filter("." + a.vertical)

                    .addClass(a.opened)

                    .end()

                    .not("." + a.vertical)

                    .each(function () {

                        e(this)

                            .parentsUntil("." + a.menu, "." + a.panel)

                            .not("." + a.vertical)

                            .first()

                            .addClass(a.opened)

                            .parentsUntil("." + a.menu, "." + a.panel)

                            .not("." + a.vertical)

                            .first()

                            .addClass(a.opened)

                            .addClass(a.subopened)

                    }), o.children("." + a.panel)

                    .not("." + a.vertical)

                    .addClass(a.opened)

                    .parentsUntil("." + a.menu, "." + a.panel)

                    .not("." + a.vertical)

                    .first()

                    .addClass(a.opened)

                    .addClass(a.subopened);

                var c = d.filter("." + a.opened);

                return c.length || (c = l.first()), c.addClass(a.opened)

                    .last()

                    .addClass(a.current), l.not("." + a.vertical)

                    .not(c.last())

                    .addClass(a.hidden)

                    .end()

                    .appendTo(this.$menu), l

            },

            _initAnchors: function () {

                var t = this;

                r.$body.on(l.click + "-oncanvas", "a[href]", function (s) {

                    var i = e(this),

                        l = !1,

                        d = t.$menu.find(i)

                            .length;

                    for (var o in e[n].addons)

                        if (l = e[n].addons[o].clickAnchor.call(t, i, d)) break;

                    if (!l && d) {

                        var c = i.attr("href");

                        if (c.length > 1 && "#" == c.slice(0, 1)) {

                            var h = e(c, t.$menu);

                            h.is("." + a.panel) && (l = !0, t[i.parent()

                                .hasClass(a.vertical) ? "togglePanel" : "openPanel"](h))

                        }

                    }

                    if (l && s.preventDefault(), !l && d && i.is("." + a.listview + " > li > a") && !i.is('[rel="external"]') && !i.is('[target="_blank"]')) {

                        t.__valueOrFn(t.opts.onClick.setSelected, i) && t.setSelected(e(s.target)

                            .parent());

                        var u = t.__valueOrFn(t.opts.onClick.preventDefault, i, "#" == c.slice(0, 1));

                        u && s.preventDefault(), t.__valueOrFn(t.opts.onClick.blockUI, i, !u) && r.$html.addClass(a.blocking), t.__valueOrFn(t.opts.onClick.close, i, u) && t.close()

                    }

                })

            },

            _initAddons: function () {

                for (var t in e[n].addons) e[n].addons[t].add.call(this), e[n].addons[t].add = function () {

                };

                for (var t in e[n].addons) e[n].addons[t].setup.call(this)

            },

            __api: function () {

                var t = this,

                    n = {};

                return e.each(this._api, function () {

                    var e = this;

                    n[e] = function () {

                        var s = t[e].apply(t, arguments);

                        return "undefined" == typeof s ? n : s

                    }

                }), n

            },

            __valueOrFn: function (e, t, n) {

                return "function" == typeof e ? e.call(t[0]) : "undefined" == typeof e && "undefined" != typeof n ? n : e

            },

            __refactorClass: function (e, t, n) {

                return e.filter("." + t)

                    .removeClass(t)

                    .addClass(a[n])

            },

            __findAddBack: function (e, t) {

                return e.find(t)

                    .add(e.filter(t))

            },

            __filterListItems: function (e) {

                return e.not("." + a.divider)

                    .not("." + a.hidden)

            },

            __transitionend: function (e, t, n) {

                var s = !1,

                    a = function () {

                        s || t.call(e[0]), s = !0

                    };

                e.one(l.transitionend, a), e.one(l.webkitTransitionEnd, a), setTimeout(a, 1.1 * n)

            },

            __getUniqueId: function () {

                return a.mm(e[n].uniqueId++)

            }

        }, e.fn[n] = function (s, a) {

            return t(), s = e.extend(!0, {}, e[n].defaults, s), a = e.extend(!0, {}, e[n].configuration, a), this.each(function () {

                var t = e(this);

                if (!t.data(n)) {

                    var i = new e[n](t, s, a);

                    t.data(n, i.__api())

                }

            })

        }, e[n].support = {

            touch: "ontouchstart" in window || navigator.msMaxTouchPoints

        };

        var a, i, l, r

    }

}(jQuery);

!function (t) {

    var e = "mmenu",

        o = "offCanvas";

    t[e].addons[o] = {

        setup: function () {

            if (this.opts[o]) {

                var n = this.opts[o],

                    i = this.conf[o];

                a = t[e].glbl, this._api = t.merge(this._api, ["open", "close", "setPage"]), ("top" == n.position || "bottom" == n.position) && (n.zposition = "front"), "string" != typeof i.pageSelector && (i.pageSelector = "> " + i.pageNodetype), a.$allMenus = (a.$allMenus || t())

                    .add(this.$menu), this.vars.opened = !1;

                var r = [s.offcanvas];

                "left" != n.position && r.push(s.mm(n.position)), "back" != n.zposition && r.push(s.mm(n.zposition)), this.$menu.addClass(r.join(" "))

                    .parent()

                    .removeClass(s.wrapper), this.setPage(a.$page), this._initBlocker(), this["_initWindow_" + o](), this.$menu[i.menuInjectMethod + "To"](i.menuWrapperSelector)

            }

        },

        add: function () {

            s = t[e]._c, n = t[e]._d, i = t[e]._e, s.add("offcanvas slideout modal background opening blocker page"), n.add("style"), i.add("resize")

        },

        clickAnchor: function (t) {

            if (!this.opts[o]) return !1;

            var e = this.$menu.attr("id");

            if (e && e.length && (this.conf.clone && (e = s.umm(e)), t.is('[href="#' + e + '"]'))) return this.open(), !0;

            if (a.$page) {

                var e = a.$page.first()

                    .attr("id");

                return e && e.length && t.is('[href="#' + e + '"]') ? (this.close(), !0) : !1

            }

        }

    }, t[e].defaults[o] = {

        position: "left",

        zposition: "back",

        modal: !1,

        moveBackground: !0

    }, t[e].configuration[o] = {

        pageNodetype: "div",

        pageSelector: null,

        wrapPageIfNeeded: !0,

        menuWrapperSelector: "body",

        menuInjectMethod: "prepend"

    }, t[e].prototype.open = function () {

        if (!this.vars.opened) {

            var t = this;

            this._openSetup(), setTimeout(function () {

                t._openFinish()

            }, this.conf.openingInterval), this.trigger("open")

        }

    }, t[e].prototype._openSetup = function () {

        var e = this;

        this.closeAllOthers(), a.$page.each(function () {

            t(this)

                .data(n.style, t(this)

                    .attr("style") || "")

        }), a.$wndw.trigger(i.resize + "-offcanvas", [!0]);

        var r = [s.opened];

        this.opts[o].modal && r.push(s.modal), this.opts[o].moveBackground && r.push(s.background), "left" != this.opts[o].position && r.push(s.mm(this.opts[o].position)), "back" != this.opts[o].zposition && r.push(s.mm(this.opts[o].zposition)), this.opts.extensions && r.push(this.opts.extensions), a.$html.addClass(r.join(" ")), setTimeout(function () {

            e.vars.opened = !0

        }, this.conf.openingInterval), this.$menu.addClass(s.current + " " + s.opened)

    }, t[e].prototype._openFinish = function () {

        var t = this;

        this.__transitionend(a.$page.first(), function () {

            t.trigger("opened")

        }, this.conf.transitionDuration), a.$html.addClass(s.opening), this.trigger("opening")

    }, t[e].prototype.close = function () {

        if (this.vars.opened) {

            var e = this;

            this.__transitionend(a.$page.first(), function () {

                e.$menu.removeClass(s.current)

                    .removeClass(s.opened), a.$html.removeClass(s.opened)

                    .removeClass(s.modal)

                    .removeClass(s.background)

                    .removeClass(s.mm(e.opts[o].position))

                    .removeClass(s.mm(e.opts[o].zposition)), e.opts.extensions && a.$html.removeClass(e.opts.extensions), a.$page.each(function () {

                    t(this)

                        .attr("style", t(this)

                            .data(n.style))

                }), e.vars.opened = !1, e.trigger("closed")

            }, this.conf.transitionDuration), a.$html.removeClass(s.opening), this.trigger("close"), this.trigger("closing")

        }

    }, t[e].prototype.closeAllOthers = function () {

        a.$allMenus.not(this.$menu)

            .each(function () {

                var o = t(this)

                    .data(e);

                o && o.close && o.close()

            })

    }, t[e].prototype.setPage = function (e) {

        var n = this,

            i = this.conf[o];

        e && e.length || (e = a.$body.find(i.pageSelector), e.length > 1 && i.wrapPageIfNeeded && (e = e.wrapAll("<" + this.conf[o].pageNodetype + " />")

            .parent())), e.each(function () {

            t(this)

                .attr("id", t(this)

                    .attr("id") || n.__getUniqueId())

        }), e.addClass(s.page + " " + s.slideout), a.$page = e, this.trigger("setPage", e)

    }, t[e].prototype["_initWindow_" + o] = function () {

        a.$wndw.off(i.keydown + "-offcanvas")

            .on(i.keydown + "-offcanvas", function (t) {

                return a.$html.hasClass(s.opened) && 9 == t.keyCode ? (t.preventDefault(), !1) : void 0

            });

        var t = 0;

        a.$wndw.off(i.resize + "-offcanvas")

            .on(i.resize + "-offcanvas", function (e, o) {

                if (1 == a.$page.length && (o || a.$html.hasClass(s.opened))) {

                    var n = a.$wndw.height();

                    (o || n != t) && (t = n, a.$page.css("minHeight", n))

                }

            })

    }, t[e].prototype._initBlocker = function () {

        var e = this;

        a.$blck || (a.$blck = t('<div id="' + s.blocker + '" class="' + s.slideout + '" />')), a.$blck.appendTo(a.$body)

            .off(i.touchstart + "-offcanvas " + i.touchmove + "-offcanvas")

            .on(i.touchstart + "-offcanvas " + i.touchmove + "-offcanvas", function (t) {

                t.preventDefault(), t.stopPropagation(), a.$blck.trigger(i.mousedown + "-offcanvas")

            })

            .off(i.mousedown + "-offcanvas")

            .on(i.mousedown + "-offcanvas", function (t) {

                t.preventDefault(), a.$html.hasClass(s.modal) || (e.closeAllOthers(), e.close())

            })

    };

    var s, n, i, a

}(jQuery);

!function (t) {

    var e = "mmenu",

        i = "autoHeight";

    t[e].addons[i] = {

        setup: function () {

            if (this.opts.offCanvas) {

                switch (this.opts.offCanvas.position) {

                    case "left":

                    case "right":

                        return

                }

                var n = this,

                    o = this.opts[i];

                if (this.conf[i], h = t[e].glbl, "boolean" == typeof o && o && (o = {

                    height: "auto"

                }), "object" != typeof o && (o = {}), o = this.opts[i] = t.extend(!0, {}, t[e].defaults[i], o), "auto" == o.height) {

                    this.$menu.addClass(s.autoheight);

                    var u = function (t) {

                        var e = this.$menu.children("." + s.current);

                        _top = parseInt(e.css("top"), 10) || 0, _bot = parseInt(e.css("bottom"), 10) || 0, this.$menu.addClass(s.measureheight), t = t || this.$menu.children("." + s.current), t.is("." + s.vertical) && (t = t.parents("." + s.panel)

                            .not("." + s.vertical)

                            .first()), this.$menu.height(t.outerHeight() + _top + _bot)

                            .removeClass(s.measureheight)

                    };

                    this.bind("update", u), this.bind("openPanel", u), this.bind("closePanel", u), this.bind("open", u), h.$wndw.off(a.resize + "-autoheight")

                        .on(a.resize + "-autoheight", function () {

                            u.call(n)

                        })

                }

            }

        },

        add: function () {

            s = t[e]._c, n = t[e]._d, a = t[e]._e, s.add("autoheight measureheight"), a.add("resize")

        },

        clickAnchor: function () {

        }

    }, t[e].defaults[i] = {

        height: "default"

    };

    var s, n, a, h

}(jQuery);

!function (o) {

    var t = "mmenu",

        n = "backButton";

    o[t].addons[n] = {

        setup: function () {

            if (this.opts.offCanvas) {

                var i = this,

                    e = this.opts[n];

                if (this.conf[n], a = o[t].glbl, "boolean" == typeof e && (e = {

                    close: e

                }), "object" != typeof e && (e = {}), e = o.extend(!0, {}, o[t].defaults[n], e), e.close) {

                    var c = "#" + i.$menu.attr("id");

                    this.bind("opened", function () {

                        location.hash != c && history.pushState(null, document.title, c)

                    }), o(window)

                        .on("popstate", function (o) {

                            a.$html.hasClass(s.opened) ? (o.stopPropagation(), i.close()) : location.hash == c && (o.stopPropagation(), i.open())

                        })

                }

            }

        },

        add: function () {

            return window.history && window.history.pushState ? (s = o[t]._c, i = o[t]._d, e = o[t]._e, void 0) : (o[t].addons[n].setup = function () {

            }, void 0)

        },

        clickAnchor: function () {

        }

    }, o[t].defaults[n] = {

        close: !1

    };

    var s, i, e, a

}(jQuery);

!function (t) {

    var n = "mmenu",

        e = "counters";

    t[n].addons[e] = {

        setup: function () {

            var c = this,

                o = this.opts[e];

            this.conf[e], s = t[n].glbl, "boolean" == typeof o && (o = {

                add: o,

                update: o

            }), "object" != typeof o && (o = {}), o = this.opts[e] = t.extend(!0, {}, t[n].defaults[e], o), this.bind("init", function (n) {

                this.__refactorClass(t("em", n), this.conf.classNames[e].counter, "counter")

            }), o.add && this.bind("init", function (n) {

                n.each(function () {

                    var n = t(this)

                        .data(a.parent);

                    n && (n.children("em." + i.counter)

                        .length || n.prepend(t('<em class="' + i.counter + '" />')))

                })

            }), o.update && this.bind("update", function () {

                this.$menu.find("." + i.panel)

                    .each(function () {

                        var n = t(this),

                            e = n.data(a.parent);

                        if (e) {

                            var s = e.children("em." + i.counter);

                            s.length && (n = n.children("." + i.listview), n.length && s.html(c.__filterListItems(n.children())

                                .length))

                        }

                    })

            })

        },

        add: function () {

            i = t[n]._c, a = t[n]._d, c = t[n]._e, i.add("counter search noresultsmsg")

        },

        clickAnchor: function () {

        }

    }, t[n].defaults[e] = {

        add: !1,

        update: !1

    }, t[n].configuration.classNames[e] = {

        counter: "Counter"

    };

    var i, a, c, s

}(jQuery);

!function (i) {

    var e = "mmenu",

        s = "dividers";

    i[e].addons[s] = {

        setup: function () {

            var n = this,

                a = this.opts[s];

            if (this.conf[s], l = i[e].glbl, "boolean" == typeof a && (a = {

                add: a,

                fixed: a

            }), "object" != typeof a && (a = {}), a = this.opts[s] = i.extend(!0, {}, i[e].defaults[s], a), this.bind("init", function () {

                this.__refactorClass(i("li", this.$menu), this.conf.classNames[s].collapsed, "collapsed")

            }), a.add && this.bind("init", function (e) {

                switch (a.addTo) {

                    case "panels":

                        var s = e;

                        break;

                    default:

                        var s = i(a.addTo, this.$menu)

                            .filter("." + d.panel)

                }

                i("." + d.divider, s)

                    .remove(), s.find("." + d.listview)

                    .not("." + d.vertical)

                    .each(function () {

                        var e = "";

                        n.__filterListItems(i(this)

                            .children())

                            .each(function () {

                                var s = i.trim(i(this)

                                    .children("a, span")

                                    .text())

                                    .slice(0, 1)

                                    .toLowerCase();

                                s != e && s.length && (e = s, i('<li class="' + d.divider + '">' + s + "</li>")

                                    .insertBefore(this))

                            })

                    })

            }), a.collapse && this.bind("init", function (e) {

                i("." + d.divider, e)

                    .each(function () {

                        var e = i(this),

                            s = e.nextUntil("." + d.divider, "." + d.collapsed);

                        s.length && (e.children("." + d.subopen)

                            .length || (e.wrapInner("<span />"), e.prepend('<a href="#" class="' + d.subopen + " " + d.fullsubopen + '" />')))

                    })

            }), a.fixed) {

                var o = function (e) {

                    e = e || this.$menu.children("." + d.current);

                    var s = e.find("." + d.divider)

                        .not("." + d.hidden);

                    if (s.length) {

                        this.$menu.addClass(d.hasdividers);

                        var n = e.scrollTop() || 0,

                            t = "";

                        e.is(":visible") && e.find("." + d.divider)

                            .not("." + d.hidden)

                            .each(function () {

                                i(this)

                                    .position()

                                    .top + n < n + 1 && (t = i(this)

                                    .text())

                            }), this.$fixeddivider.text(t)

                    } else this.$menu.removeClass(d.hasdividers)

                };

                this.$fixeddivider = i('<ul class="' + d.listview + " " + d.fixeddivider + '"><li class="' + d.divider + '"></li></ul>')

                    .prependTo(this.$menu)

                    .children(), this.bind("openPanel", o), this.bind("init", function (e) {

                    e.off(t.scroll + "-dividers " + t.touchmove + "-dividers")

                        .on(t.scroll + "-dividers " + t.touchmove + "-dividers", function () {

                            o.call(n, i(this))

                        })

                })

            }

        },

        add: function () {

            d = i[e]._c, n = i[e]._d, t = i[e]._e, d.add("collapsed uncollapsed fixeddivider hasdividers"), t.add("scroll")

        },

        clickAnchor: function (i, e) {

            if (this.opts[s].collapse && e) {

                var n = i.parent();

                if (n.is("." + d.divider)) {

                    var t = n.nextUntil("." + d.divider, "." + d.collapsed);

                    return n.toggleClass(d.opened), t[n.hasClass(d.opened) ? "addClass" : "removeClass"](d.uncollapsed), !0

                }

            }

            return !1

        }

    }, i[e].defaults[s] = {

        add: !1,

        addTo: "panels",

        fixed: !1,

        collapse: !1

    }, i[e].configuration.classNames[s] = {

        collapsed: "Collapsed"

    };

    var d, n, t, l

}(jQuery);

!function (e) {

    function t(e, t, n) {

        return t > e && (e = t), e > n && (e = n), e

    }



    var n = "mmenu",

        o = "dragOpen";

    e[n].addons[o] = {

        setup: function () {

            if (this.opts.offCanvas) {

                var i = this,

                    a = this.opts[o],

                    p = this.conf[o];

                if (r = e[n].glbl, "boolean" == typeof a && (a = {

                    open: a

                }), "object" != typeof a && (a = {}), a = this.opts[o] = e.extend(!0, {}, e[n].defaults[o], a), a.open) {

                    var d, f, c, u, h, l = {},

                        m = 0,

                        g = !1,

                        v = !1,

                        w = 0,

                        _ = 0;

                    switch (this.opts.offCanvas.position) {

                        case "left":

                        case "right":

                            l.events = "panleft panright", l.typeLower = "x", l.typeUpper = "X", v = "width";

                            break;

                        case "top":

                        case "bottom":

                            l.events = "panup pandown", l.typeLower = "y", l.typeUpper = "Y", v = "height"

                    }

                    switch (this.opts.offCanvas.position) {

                        case "right":

                        case "bottom":

                            l.negative = !0, u = function (e) {

                                e >= r.$wndw[v]() - a.maxStartPos && (m = 1)

                            };

                            break;

                        default:

                            l.negative = !1, u = function (e) {

                                e <= a.maxStartPos && (m = 1)

                            }

                    }

                    switch (this.opts.offCanvas.position) {

                        case "left":

                            l.open_dir = "right", l.close_dir = "left";

                            break;

                        case "right":

                            l.open_dir = "left", l.close_dir = "right";

                            break;

                        case "top":

                            l.open_dir = "down", l.close_dir = "up";

                            break;

                        case "bottom":

                            l.open_dir = "up", l.close_dir = "down"

                    }

                    switch (this.opts.offCanvas.zposition) {

                        case "front":

                            h = function () {

                                return this.$menu

                            };

                            break;

                        default:

                            h = function () {

                                return e("." + s.slideout)

                            }

                    }

                    var b = this.__valueOrFn(a.pageNode, this.$menu, r.$page);

                    "string" == typeof b && (b = e(b));

                    var y = new Hammer(b[0], a.vendors.hammer);

                    y.on("panstart", function (e) {

                        u(e.center[l.typeLower]), r.$slideOutNodes = h(), g = l.open_dir

                    })

                        .on(l.events + " panend", function (e) {

                            m > 0 && e.preventDefault()

                        })

                        .on(l.events, function (e) {

                            if (d = e["delta" + l.typeUpper], l.negative && (d = -d), d != w && (g = d >= w ? l.open_dir : l.close_dir), w = d, w > a.threshold && 1 == m) {

                                if (r.$html.hasClass(s.opened)) return;

                                m = 2, i._openSetup(), i.trigger("opening"), r.$html.addClass(s.dragging), _ = t(r.$wndw[v]() * p[v].perc, p[v].min, p[v].max)

                            }

                            2 == m && (f = t(w, 10, _) - ("front" == i.opts.offCanvas.zposition ? _ : 0), l.negative && (f = -f), c = "translate" + l.typeUpper + "(" + f + "px )", r.$slideOutNodes.css({

                                "-webkit-transform": "-webkit-" + c,

                                transform: c

                            }))

                        })

                        .on("panend", function () {

                            2 == m && (r.$html.removeClass(s.dragging), r.$slideOutNodes.css("transform", ""), i[g == l.open_dir ? "_openFinish" : "close"]()), m = 0

                        })

                }

            }

        },

        add: function () {

            return "function" != typeof Hammer || Hammer.VERSION < 2 ? (e[n].addons[o].setup = function () {

            }, void 0) : (s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("dragging"), void 0)

        },

        clickAnchor: function () {

        }

    }, e[n].defaults[o] = {

        open: !1,

        maxStartPos: 100,

        threshold: 50,

        vendors: {

            hammer: {}

        }

    }, e[n].configuration[o] = {

        width: {

            perc: .8,

            min: 140,

            max: 440

        },

        height: {

            perc: .8,

            min: 140,

            max: 880

        }

    };

    var s, i, a, r

}(jQuery);

!function (i) {

    var s = "mmenu",

        n = "fixedElements";

    i[s].addons[n] = {

        setup: function () {

            if (this.opts.offCanvas) {

                this.opts[n], this.conf[n], o = i[s].glbl;

                var a = function (i) {

                    var s = this.conf.classNames[n].fixed;

                    this.__refactorClass(i.find("." + s), s, "slideout")

                        .appendTo(o.$body)

                };

                a.call(this, o.$page), this.bind("setPage", a)

            }

        },

        add: function () {

            a = i[s]._c, t = i[s]._d, e = i[s]._e, a.add("fixed")

        },

        clickAnchor: function () {

        }

    }, i[s].configuration.classNames[n] = {

        fixed: "Fixed"

    };

    var a, t, e, o

}(jQuery);

!function (n) {

    var a = "mmenu",

        t = "navbars";

    n[a].addons[t] = {

        setup: function () {

            var r = this,

                s = this.opts[t];

            if (this.conf[t], i = n[a].glbl, "undefined" != typeof s) {

                s instanceof Array || (s = [s]);

                var d = {};

                n.each(s, function (i) {

                    var c = s[i];

                    "boolean" == typeof c && c && (c = {}), "object" != typeof c && (c = {}), "undefined" == typeof c.content && (c.content = ["prev", "title"]), c.content instanceof Array || (c.content = [c.content]), c = n.extend(!0, {}, r.opts.navbar, c);

                    var o = c.position;

                    "bottom" != o && (o = "top"), d[o] || (d[o] = 0), d[o]++;

                    for (var l = n("<div />")

                        .addClass(e.navbar)

                        .addClass(e.navbar + "-" + o)

                        .addClass(e.navbar + "-" + o + "-" + d[o]), h = 0, f = c.content.length; f > h; h++) {

                        var v = n[a].addons[t][c.content[h]] || !1;

                        v ? v.call(r, l, c) : (v = c.content[h], v instanceof n || (v = n(c.content[h])), v.each(function () {

                            l.append(n(this))

                        }))

                    }

                    var u = l.children()

                        .not("." + e.btn)

                        .length;

                    u > 1 && l.addClass(e.navbar + "-" + u), l.children("." + e.btn)

                        .length && l.addClass(e.hasbtns), l.prependTo(r.$menu)

                });

                for (var c in d) r.$menu.addClass(e.hasnavbar + "-" + c + "-" + d[c])

            }

        },

        add: function () {

            e = n[a]._c, r = n[a]._d, s = n[a]._e, e.add("close hasbtns")

        },

        clickAnchor: function () {

        }

    }, n[a].configuration.classNames[t] = {

        panelTitle: "Title",

        panelNext: "Next",

        panelPrev: "Prev"

    };

    var e, r, s, i

}(jQuery),

    function (n) {

        var a = "mmenu",

            t = "navbars",

            e = "close";

        n[a].addons[t][e] = function (t) {

            var e = n[a]._c,

                r = n[a].glbl;

            t.append('<a class="' + e.close + " " + e.btn + '" href="#"></a>');

            var s = function (n) {

                t.find("." + e.close)

                    .attr("href", "#" + n.attr("id"))

            };

            s.call(this, r.$page), this.bind("setPage", s)

        }

    }(jQuery),

    function (n) {

        var a = "mmenu",

            t = "navbars",

            e = "next";

        n[a].addons[t][e] = function (e) {

            var r = n[a]._c;

            e.append('<a class="' + r.next + " " + r.btn + '" href="#"></a>');

            var s = function (n) {

                n = n || this.$menu.children("." + r.current);

                var a = e.find("." + r.next),

                    s = n.find("." + this.conf.classNames[t].panelNext),

                    i = s.attr("href"),

                    d = s.html();

                a[i ? "attr" : "removeAttr"]("href", i), a[i || d ? "removeClass" : "addClass"](r.hidden), a.html(d)

            };

            this.bind("openPanel", s), this.bind("init", function () {

                s.call(this)

            })

        }

    }(jQuery),

    function (n) {

        var a = "mmenu",

            t = "navbars",

            e = "prev";

        n[a].addons[t][e] = function (e) {

            var r = n[a]._c;

            e.append('<a class="' + r.prev + " " + r.btn + '" href="#"></a>'), this.bind("init", function (n) {

                n.removeClass(r.hasnavbar)

            });

            var s = function (n) {

                n = n || this.$menu.children("." + r.current);

                var a = e.find("." + r.prev),

                    s = n.find("." + this.conf.classNames[t].panelPrev);

                s.length || (s = n.children("." + r.navbar)

                    .children("." + r.prev));

                var i = s.attr("href"),

                    d = s.html();

                a[i ? "attr" : "removeAttr"]("href", i), a[i || d ? "removeClass" : "addClass"](r.hidden), a.html(d)

            };

            this.bind("openPanel", s), this.bind("init", function () {

                s.call(this)

            })

        }

    }(jQuery),

    function (n) {

        var a = "mmenu",

            t = "navbars",

            e = "searchfield";

        n[a].addons[t][e] = function (t) {

            var e = n[a]._c,

                r = n('<div class="' + e.search + '" />')

                    .appendTo(t);

            "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = r

        }

    }(jQuery),

    function (n) {

        var a = "mmenu",

            t = "navbars",

            e = "title";

        n[a].addons[t][e] = function (e, r) {

            var s = n[a]._c;

            e.append('<a class="' + s.title + '"></a>');

            var i = function (n) {

                n = n || this.$menu.children("." + s.current);

                var a = e.find("." + s.title),

                    i = n.find("." + this.conf.classNames[t].panelTitle);

                i.length || (i = n.children("." + s.navbar)

                    .children("." + s.title));

                var d = i.attr("href"),

                    c = i.html() || r.title;

                a[d ? "attr" : "removeAttr"]("href", d), a[d || c ? "removeClass" : "addClass"](s.hidden), a.html(c)

            };

            this.bind("openPanel", i), this.bind("init", function () {

                i.call(this)

            })

        }

    }(jQuery);

!function (e) {

    function s(e) {

        switch (e) {

            case 9:

            case 16:

            case 17:

            case 18:

            case 37:

            case 38:

            case 39:

            case 40:

                return !0

        }

        return !1

    }



    var n = "mmenu",

        a = "searchfield";

    e[n].addons[a] = {

        setup: function () {

            var o = this,

                d = this.opts[a],

                c = this.conf[a];

            r = e[n].glbl, "boolean" == typeof d && (d = {

                add: d

            }), "object" != typeof d && (d = {}), d = this.opts[a] = e.extend(!0, {}, e[n].defaults[a], d), this.bind("close", function () {

                this.$menu.find("." + l.search)

                    .find("input")

                    .blur()

            }), this.bind("init", function (n) {

                if (d.add) {

                    switch (d.addTo) {

                        case "panels":

                            var a = n;

                            break;

                        default:

                            var a = e(d.addTo, this.$menu)

                    }

                    a.each(function () {

                        var s = e(this);

                        if (!s.is("." + l.panel) || !s.is("." + l.vertical)) {

                            if (!s.children("." + l.search)

                                .length) {

                                var n = c.form ? "form" : "div",

                                    a = e("<" + n + ' class="' + l.search + '" />');

                                if (c.form && "object" == typeof c.form)

                                    for (var t in c.form) a.attr(t, c.form[t]);

                                a.append('<input placeholder="' + d.placeholder + '" type="text" autocomplete="off" />'), s.hasClass(l.search) ? s.replaceWith(a) : s.prepend(a)

                                    .addClass(l.hassearch)

                            }

                            if (d.noResults) {

                                var i = s.closest("." + l.panel)

                                    .length;

                                if (i || (s = o.$menu.children("." + l.panel)

                                    .first()), !s.children("." + l.noresultsmsg)

                                    .length) {

                                    var r = s.children("." + l.listview);

                                    e('<div class="' + l.noresultsmsg + '" />')

                                        .append(d.noResults)[r.length ? "insertBefore" : "prependTo"](r.length ? r : s)

                                }

                            }

                        }

                    }), d.search && e("." + l.search, this.$menu)

                        .each(function () {

                            var n = e(this),

                                a = n.closest("." + l.panel)

                                    .length;

                            if (a) var r = n.closest("." + l.panel),

                                c = r;

                            else var r = e("." + l.panel, o.$menu),

                                c = o.$menu;

                            var h = n.children("input"),

                                u = o.__findAddBack(r, "." + l.listview)

                                    .children("li"),

                                f = u.filter("." + l.divider),

                                p = o.__filterListItems(u),

                                v = "> a",

                                m = v + ", > span",

                                b = function () {

                                    var s = h.val()

                                        .toLowerCase();

                                    r.scrollTop(0), p.add(f)

                                        .addClass(l.hidden)

                                        .find("." + l.fullsubopensearch)

                                        .removeClass(l.fullsubopen)

                                        .removeClass(l.fullsubopensearch), p.each(function () {

                                        var n = e(this),

                                            a = v;

                                        (d.showTextItems || d.showSubPanels && n.find("." + l.next)) && (a = m), e(a, n)

                                            .text()

                                            .toLowerCase()

                                            .indexOf(s) > -1 && n.add(n.prevAll("." + l.divider)

                                            .first())

                                            .removeClass(l.hidden)

                                    }), d.showSubPanels && r.each(function () {

                                        var s = e(this);

                                        o.__filterListItems(s.find("." + l.listview)

                                            .children())

                                            .each(function () {

                                                var s = e(this),

                                                    n = s.data(t.sub);

                                                s.removeClass(l.nosubresults), n && n.find("." + l.listview)

                                                    .children()

                                                    .removeClass(l.hidden)

                                            })

                                    }), e(r.get()

                                        .reverse())

                                        .each(function (s) {

                                            var n = e(this),

                                                i = n.data(t.parent);

                                            i && (o.__filterListItems(n.find("." + l.listview)

                                                .children())

                                                .length ? (i.hasClass(l.hidden) && i.children("." + l.next)

                                                .not("." + l.fullsubopen)

                                                .addClass(l.fullsubopen)

                                                .addClass(l.fullsubopensearch), i.removeClass(l.hidden)

                                                .removeClass(l.nosubresults)

                                                .prevAll("." + l.divider)

                                                .first()

                                                .removeClass(l.hidden)) : a || (n.hasClass(l.opened) && setTimeout(function () {

                                                o.openPanel(i.closest("." + l.panel))

                                            }, 1.5 * (s + 1) * o.conf.openingInterval), i.addClass(l.nosubresults)))

                                        }), c[p.not("." + l.hidden)

                                        .length ? "removeClass" : "addClass"](l.noresults), this.update()

                                };

                            h.off(i.keyup + "-searchfield " + i.change + "-searchfield")

                                .on(i.keyup + "-searchfield", function (e) {

                                    s(e.keyCode) || b.call(o)

                                })

                                .on(i.change + "-searchfield", function () {

                                    b.call(o)

                                })

                        })

                }

            })

        },

        add: function () {

            l = e[n]._c, t = e[n]._d, i = e[n]._e, l.add("search hassearch noresultsmsg noresults nosubresults fullsubopensearch"), i.add("change keyup")

        },

        clickAnchor: function () {

        }

    }, e[n].defaults[a] = {

        add: !1,

        addTo: "panels",

        search: !0,

        placeholder: "TĂ¬m kiáº¿m...",

        noResults: "No results found.",

        showTextItems: !1,

        showSubPanels: !0

    }, e[n].configuration[a] = {

        form: !1

    };

    var l, t, i, r

}(jQuery);

!function (e) {

    var a = "mmenu",

        r = "sectionIndexer";

    e[a].addons[r] = {

        setup: function () {

            var n = this,

                d = this.opts[r];

            this.conf[r], t = e[a].glbl, "boolean" == typeof d && (d = {

                add: d

            }), "object" != typeof d && (d = {}), d = this.opts[r] = e.extend(!0, {}, e[a].defaults[r], d), this.bind("init", function (a) {

                if (d.add) {

                    switch (d.addTo) {

                        case "panels":

                            var r = a;

                            break;

                        default:

                            var r = e(d.addTo, this.$menu)

                                .filter("." + i.panel)

                    }

                    r.find("." + i.divider)

                        .closest("." + i.panel)

                        .addClass(i.hasindexer)

                }

                if (!this.$indexer && this.$menu.children("." + i.hasindexer)

                    .length) {

                    this.$indexer = e('<div class="' + i.indexer + '" />')

                        .prependTo(this.$menu)

                        .append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), this.$indexer.children()

                        .on(s.mouseover + "-searchfield " + i.touchstart + "-searchfield", function () {

                            var a = e(this)

                                    .attr("href")

                                    .slice(1),

                                r = n.$menu.children("." + i.current),

                                s = r.find("." + i.listview),

                                t = !1,

                                d = r.scrollTop(),

                                h = s.position()

                                    .top + parseInt(s.css("margin-top"), 10) + parseInt(s.css("padding-top"), 10) + d;

                            r.scrollTop(0), s.children("." + i.divider)

                                .not("." + i.hidden)

                                .each(function () {

                                    t === !1 && a == e(this)

                                        .text()

                                        .slice(0, 1)

                                        .toLowerCase() && (t = e(this)

                                        .position()

                                        .top + h)

                                }), r.scrollTop(t !== !1 ? t : d)

                        });

                    var t = function (e) {

                        n.$menu[(e.hasClass(i.hasindexer) ? "add" : "remove") + "Class"](i.hasindexer)

                    };

                    this.bind("openPanel", t), t.call(this, this.$menu.children("." + i.current))

                }

            })

        },

        add: function () {

            i = e[a]._c, n = e[a]._d, s = e[a]._e, i.add("indexer hasindexer"), s.add("mouseover touchstart")

        },

        clickAnchor: function (e) {

            return e.parent()

                .is("." + i.indexer) ? !0 : void 0

        }

    }, e[a].defaults[r] = {

        add: !1,

        addTo: "panels"

    };

    var i, n, s, t

}(jQuery);

!function (t) {

    var e = "mmenu",

        c = "toggles";

    t[e].addons[c] = {

        setup: function () {

            var n = this;

            this.opts[c], this.conf[c], l = t[e].glbl, this.bind("init", function (e) {

                this.__refactorClass(t("input", e), this.conf.classNames[c].toggle, "toggle"), this.__refactorClass(t("input", e), this.conf.classNames[c].check, "check"), t("input." + s.toggle + ", input." + s.check, e)

                    .each(function () {

                        var e = t(this),

                            c = e.closest("li"),

                            i = e.hasClass(s.toggle) ? "toggle" : "check",

                            l = e.attr("id") || n.__getUniqueId();

                        c.children('label[for="' + l + '"]')

                            .length || (e.attr("id", l), c.prepend(e), t('<label for="' + l + '" class="' + s[i] + '"></label>')

                            .insertBefore(c.children("a, span")

                                .last()))

                    })

            })

        },

        add: function () {

            s = t[e]._c, n = t[e]._d, i = t[e]._e, s.add("toggle check")

        },

        clickAnchor: function () {

        }

    }, t[e].configuration.classNames[c] = {

        toggle: "Toggle",

        check: "Check"

    };

    var s, n, i, l

}(jQuery);

/**

 * BxSlider v4.1.2 - Fully loaded, responsive content slider

 * http://bxslider.com

 *

 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com

 * Written while drinking Belgian ales and listening to jazz

 *

 * Released under the MIT license - http://opensource.org/licenses/MIT

 */

!function (t) {

    var e = {},

        s = {

            mode: "horizontal",

            slideSelector: "",

            infiniteLoop: !0,

            hideControlOnEnd: !1,

            speed: 500,

            easing: null,

            slideMargin: 0,

            startSlide: 0,

            randomStart: !1,

            captions: !1,

            ticker: !1,

            tickerHover: !1,

            adaptiveHeight: !1,

            adaptiveHeightSpeed: 500,

            video: !1,

            useCSS: !0,

            preloadImages: "visible",

            responsive: !0,

            slideZIndex: 50,

            touchEnabled: !0,

            swipeThreshold: 50,

            oneToOneTouch: !0,

            preventDefaultSwipeX: !0,

            preventDefaultSwipeY: !1,

            pager: !0,

            pagerType: "full",

            pagerShortSeparator: " / ",

            pagerSelector: null,

            buildPager: null,

            pagerCustom: null,

            controls: !0,

            nextText: "Next",

            prevText: "Prev",

            nextSelector: null,

            prevSelector: null,

            autoControls: !1,

            startText: "Start",

            stopText: "Stop",

            autoControlsCombine: !1,

            autoControlsSelector: null,

            auto: !1,

            pause: 4e3,

            autoStart: !0,

            autoDirection: "next",

            autoHover: !1,

            autoDelay: 0,

            minSlides: 1,

            maxSlides: 1,

            moveSlides: 0,

            slideWidth: 0,

            onSliderLoad: function () {

            },

            onSlideBefore: function () {

            },

            onSlideAfter: function () {

            },

            onSlideNext: function () {

            },

            onSlidePrev: function () {

            },

            onSliderResize: function () {

            }

        };

    t.fn.bxSlider = function (n) {

        if (0 == this.length) return this;

        if (this.length > 1) return this.each(function () {

            t(this)

                .bxSlider(n)

        }), this;

        var o = {},

            r = this;

        e.el = this;

        var a = t(window)

                .width(),

            l = t(window)

                .height(),

            d = function () {

                o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {

                    index: o.settings.startSlide

                }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function () {

                    var t = document.createElement("div"),

                        e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];

                    for (var i in e)

                        if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "")

                            .toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;

                    return !1

                }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector)

                    .each(function () {

                        t(this)

                            .data("origStyle", t(this)

                                .attr("style"))

                    }), c()

            },

            c = function () {

                r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({

                    width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",

                    position: "relative"

                }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({

                    width: "100%",

                    overflow: "hidden",

                    position: "relative"

                }), o.viewport.parent()

                    .css({

                        maxWidth: p()

                    }), o.settings.pager || o.viewport.parent()

                    .css({

                        margin: "0 auto 0px"

                    }), o.children.css({

                    "float": "horizontal" == o.settings.mode ? "left" : "none",

                    listStyle: "none",

                    position: "relative"

                }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({

                    position: "absolute",

                    zIndex: 0,

                    display: "none"

                }), o.children.eq(o.settings.startSlide)

                    .css({

                        zIndex: o.settings.slideZIndex,

                        display: "block"

                    })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();

                var e = o.children.eq(o.settings.startSlide);

                "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)

            },

            g = function (e, i) {

                var s = e.find("img, iframe")

                    .length;

                if (0 == s) return i(), void 0;

                var n = 0;

                e.find("img, iframe")

                    .each(function () {

                        t(this)

                            .one("load", function () {

                                ++n == s && i()

                            })

                            .each(function () {

                                this.complete && t(this)

                                    .load()

                            })

                    })

            },

            h = function () {

                if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {

                    var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,

                        i = o.children.slice(0, e)

                            .clone()

                            .addClass("bx-clone"),

                        s = o.children.slice(-e)

                            .clone()

                            .addClass("bx-clone");

                    r.append(i)

                        .prepend(s)

                }

                o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(v()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window)

                    .bind("resize", Z), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()

            },

            v = function () {

                var e = 0,

                    s = t();

                if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)

                    if (o.carousel) {

                        var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();

                        for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))

                    } else s = o.children.eq(o.active.index);

                else s = o.children;

                return "vertical" == o.settings.mode ? (s.each(function () {

                    e += t(this)

                        .outerHeight()

                }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function () {

                    return t(this)

                        .outerHeight(!1)

                })

                    .get()), e

            },

            p = function () {

                var t = "100%";

                return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t

            },

            u = function () {

                var t = o.settings.slideWidth,

                    e = o.viewport.width();

                return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t

            },

            f = function () {

                var t = 1;

                if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)

                    if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;

                    else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;

                    else {

                        var e = o.children.first()

                            .width();

                        t = Math.floor(o.viewport.width() / e)

                    } else "vertical" == o.settings.mode && (t = o.settings.minSlides);

                return t

            },

            x = function () {

                var t = 0;

                if (o.settings.moveSlides > 0)

                    if (o.settings.infiniteLoop) t = o.children.length / m();

                    else

                        for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();

                else t = Math.ceil(o.children.length / f());

                return t

            },

            m = function () {

                return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()

            },

            S = function () {

                if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {

                    if ("horizontal" == o.settings.mode) {

                        var t = o.children.last(),

                            e = t.position();

                        b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)

                    } else if ("vertical" == o.settings.mode) {

                        var i = o.children.length - o.settings.minSlides,

                            e = o.children.eq(i)

                                .position();

                        b(-e.top, "reset", 0)

                    }

                } else {

                    var e = o.children.eq(o.active.index * m())

                        .position();

                    o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))

                }

            },

            b = function (t, e, i, s) {

                if (o.usingCSS) {

                    var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";

                    r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {

                        r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()

                    })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {

                        r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()

                    }))

                } else {

                    var a = {};

                    a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function () {

                        D()

                    }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function () {

                        b(s.resetValue, "reset", 0), N()

                    })

                }

            },

            w = function () {

                for (var e = "", i = x(), s = 0; i > s; s++) {

                    var n = "";

                    o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"

                }

                o.pagerEl.html(e)

            },

            T = function () {

                o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector)

                    .html(o.pagerEl) : o.controls.el.addClass("bx-has-pager")

                    .append(o.pagerEl), w()), o.pagerEl.on("click", "a", I)

            },

            C = function () {

                o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector)

                    .append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector)

                    .append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev)

                    .append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction")

                    .append(o.controls.directionEl))

            },

            E = function () {

                o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", k), o.controls.autoEl.on("click", ".bx-stop", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start)

                    .append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector)

                    .html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto")

                    .append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")

            },

            P = function () {

                o.children.each(function () {

                    var e = t(this)

                        .find("img:first")

                        .attr("title");

                    void 0 != e && ("" + e)

                        .length && t(this)

                        .append('<div class="bx-caption"><span>' + e + "</span></div>")

                })

            },

            y = function (t) {

                o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()

            },

            z = function (t) {

                o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()

            },

            k = function (t) {

                r.startAuto(), t.preventDefault()

            },

            M = function (t) {

                r.stopAuto(), t.preventDefault()

            },

            I = function (e) {

                o.settings.auto && r.stopAuto();

                var i = t(e.currentTarget),

                    s = parseInt(i.attr("data-slide-index"));

                s != o.active.index && r.goToSlide(s), e.preventDefault()

            },

            q = function (e) {

                var i = o.children.length;

                return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a")

                    .removeClass("active"), o.pagerEl.each(function (i, s) {

                    t(s)

                        .find("a")

                        .eq(e)

                        .addClass("active")

                }), void 0)

            },

            D = function () {

                if (o.settings.infiniteLoop) {

                    var t = "";

                    0 == o.active.index ? t = o.children.eq(0)

                        .position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m())

                        .position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1)

                        .position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))

                }

                o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)

            },

            A = function (t) {

                o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a")

                    .removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")")

                    .addClass("active"))

            },

            W = function () {

                1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))

            },

            H = function () {

                o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function () {

                    o.interval && (r.stopAuto(!0), o.autoPaused = !0)

                }, function () {

                    o.autoPaused && (r.startAuto(!0), o.autoPaused = null)

                })

            },

            L = function () {

                var e = 0;

                if ("next" == o.settings.autoDirection) r.append(o.children.clone()

                    .addClass("bx-clone"));

                else {

                    r.prepend(o.children.clone()

                        .addClass("bx-clone"));

                    var i = o.children.first()

                        .position();

                    e = "horizontal" == o.settings.mode ? -i.left : -i.top

                }

                b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function () {

                    r.stop()

                }, function () {

                    var e = 0;

                    o.children.each(function () {

                        e += "horizontal" == o.settings.mode ? t(this)

                            .outerWidth(!0) : t(this)

                            .outerHeight(!0)

                    });

                    var i = o.settings.speed / e,

                        s = "horizontal" == o.settings.mode ? "left" : "top",

                        n = i * (e - Math.abs(parseInt(r.css(s))));

                    N(n)

                }), N()

            },

            N = function (t) {

                speed = t ? t : o.settings.speed;

                var e = {

                        left: 0,

                        top: 0

                    },

                    i = {

                        left: 0,

                        top: 0

                    };

                "next" == o.settings.autoDirection ? e = r.find(".bx-clone")

                    .first()

                    .position() : i = o.children.first()

                    .position();

                var s = "horizontal" == o.settings.mode ? -e.left : -e.top,

                    n = "horizontal" == o.settings.mode ? -i.left : -i.top,

                    a = {

                        resetValue: n

                    };

                b(s, "ticker", speed, a)

            },

            O = function () {

                o.touch = {

                    start: {

                        x: 0,

                        y: 0

                    },

                    end: {

                        x: 0,

                        y: 0

                    }

                }, o.viewport.bind("touchstart", X)

            },

            X = function (t) {

                if (o.working) t.preventDefault();

                else {

                    o.touch.originalPos = r.position();

                    var e = t.originalEvent;

                    o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)

                }

            },

            Y = function (t) {

                var e = t.originalEvent,

                    i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),

                    s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);

                if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {

                    var n = 0;

                    if ("horizontal" == o.settings.mode) {

                        var r = e.changedTouches[0].pageX - o.touch.start.x;

                        n = o.touch.originalPos.left + r

                    } else {

                        var r = e.changedTouches[0].pageY - o.touch.start.y;

                        n = o.touch.originalPos.top + r

                    }

                    b(n, "reset", 0)

                }

            },

            V = function (t) {

                o.viewport.unbind("touchmove", Y);

                var e = t.originalEvent,

                    i = 0;

                if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {

                    var s = Math.abs(o.touch.start.x - o.touch.end.x);

                    s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())

                } else {

                    var s = 0;

                    "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)

                }

                o.viewport.unbind("touchend", V)

            },

            Z = function () {

                var e = t(window)

                        .width(),

                    i = t(window)

                        .height();

                (a != e || l != i) && (a = e, l = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))

            };

        return r.goToSlide = function (e, i) {

            if (!o.working && o.active.index != e)

                if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({

                    height: v()

                }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible")

                    .fadeOut(o.settings.speed)

                    .css({

                        zIndex: 0

                    }), o.children.eq(o.active.index)

                    .css("zIndex", o.settings.slideZIndex + 1)

                    .fadeIn(o.settings.speed, function () {

                        t(this)

                            .css("zIndex", o.settings.slideZIndex), D()

                    });

                else {

                    o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({

                        height: v()

                    }, o.settings.adaptiveHeightSpeed);

                    var s = 0,

                        n = {

                            left: 0,

                            top: 0

                        };

                    if (!o.settings.infiniteLoop && o.carousel && o.active.last)

                        if ("horizontal" == o.settings.mode) {

                            var a = o.children.eq(o.children.length - 1);

                            n = a.position(), s = o.viewport.width() - a.outerWidth()

                        } else {

                            var l = o.children.length - o.settings.minSlides;

                            n = o.children.eq(l)

                                .position()

                        } else if (o.carousel && o.active.last && "prev" == i) {

                        var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),

                            a = r.children(".bx-clone")

                                .eq(d);

                        n = a.position()

                    } else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone")

                        .eq(o.settings.maxSlides)

                        .position(), o.active.last = !1;

                    else if (e >= 0) {

                        var c = e * m();

                        n = o.children.eq(c)

                            .position()

                    }

                    if ("undefined" != typeof n) {

                        var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;

                        b(g, "slide", o.settings.speed)

                    }

                }

        }, r.goToNextSlide = function () {

            if (o.settings.infiniteLoop || !o.active.last) {

                var t = parseInt(o.active.index) + 1;

                r.goToSlide(t, "next")

            }

        }, r.goToPrevSlide = function () {

            if (o.settings.infiniteLoop || 0 != o.active.index) {

                var t = parseInt(o.active.index) - 1;

                r.goToSlide(t, "prev")

            }

        }, r.startAuto = function (t) {

            o.interval || (o.interval = setInterval(function () {

                "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()

            }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))

        }, r.stopAuto = function (t) {

            o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))

        }, r.getCurrentSlide = function () {

            return o.active.index

        }, r.getCurrentSlideElement = function () {

            return o.children.eq(o.active.index)

        }, r.getSlideCount = function () {

            return o.children.length

        }, r.redrawSlider = function () {

            o.children.add(r.find(".bx-clone"))

                .outerWidth(u()), o.viewport.css("height", v()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index))

        }, r.destroySlider = function () {

            o.initialized && (o.initialized = !1, t(".bx-clone", this)

                .remove(), o.children.each(function () {

                void 0 != t(this)

                    .data("origStyle") ? t(this)

                    .attr("style", t(this)

                        .data("origStyle")) : t(this)

                    .removeAttr("style")

            }), void 0 != t(this)

                .data("origStyle") ? this.attr("style", t(this)

                .data("origStyle")) : t(this)

                .removeAttr("style"), t(this)

                .unwrap()

                .unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this)

                .remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window)

                .unbind("resize", Z))

        }, r.reloadSlider = function (t) {

            void 0 != t && (n = t), r.destroySlider(), d()

        }, d(), this

    }

}(jQuery);

/*!

 * Tipped - A Complete Javascript Tooltip Solution - v4.5.7

 * (c) 2012-2016 Nick Stakenburg

 *

 * http://www.tippedjs.com

 *

 * License: http://www.tippedjs.com/license

 */

!function (a, b) {

    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : a.Tipped = b(jQuery)

}(this, function ($) {

    function degrees(a) {

        return 180 * a / Math.PI

    }



    function radian(a) {

        return a * Math.PI / 180

    }



    function sec(a) {

        return 1 / Math.cos(a)

    }



    function sfcc(a) {

        return String.fromCharCode.apply(String, a.replace(" ", "")

            .split(","))

    }



    function deepExtend(a, b) {

        for (var c in b) b[c] && b[c].constructor && b[c].constructor === Object ? (a[c] = $.extend({}, a[c]) || {}, deepExtend(a[c], b[c])) : a[c] = b[c];

        return a

    }



    function Spin() {

        return this.initialize.apply(this, _slice.call(arguments))

    }



    function Visible() {

        return this.initialize.apply(this, _slice.call(arguments))

    }



    function Skin() {

        this.initialize.apply(this, _slice.call(arguments))

    }



    function Stem() {

        this.initialize.apply(this, _slice.call(arguments))

    }



    function Tooltip() {

        this.initialize.apply(this, _slice.call(arguments))

    }



    function Collection() {

        this.initialize.apply(this, _slice.call(arguments))

    }



    var Tipped = {};

    $.extend(Tipped, {

        version: "4.5.7"

    }), Tipped.Skins = {

        base: {

            afterUpdate: !1,

            ajax: {},

            cache: !0,

            container: !1,

            containment: {

                selector: "viewport",

                padding: 5

            },

            close: !1,

            detach: !0,

            fadeIn: 200,

            fadeOut: 200,

            showDelay: 75,

            hideDelay: 25,

            hideAfter: !1,

            hideOn: {

                element: "mouseleave"

            },

            hideOthers: !1,

            position: "top",

            inline: !1,

            offset: {

                x: 0,

                y: 0

            },

            onHide: !1,

            onShow: !1,

            padding: !0,

            radius: !0,

            shadow: !0,

            showOn: {

                element: "mousemove"

            },

            size: "medium",

            spinner: !0,

            stem: !0,

            target: "element",

            voila: !0

        },

        reset: {

            ajax: !1,

            hideOn: {

                element: "mouseleave",

                tooltip: "mouseleave"

            },

            showOn: {

                element: "mouseenter",

                tooltip: "mouseenter"

            }

        }

    }, $.each("dark".split(" "), function (a, b) {

        Tipped.Skins[b] = {}

    });

    var Browser = function (a) {

            function b(b) {

                var c = new RegExp(b + "([\\d.]+)")

                    .exec(a);

                return c ? parseFloat(c[1]) : !0

            }



            return {

                IE: !(!window.attachEvent || -1 !== a.indexOf("Opera")) && b("MSIE "),

                Opera: a.indexOf("Opera") > -1 && (!!window.opera && opera.version && parseFloat(opera.version()) || 7.55),

                WebKit: a.indexOf("AppleWebKit/") > -1 && b("AppleWebKit/"),

                Gecko: a.indexOf("Gecko") > -1 && -1 === a.indexOf("KHTML") && b("rv:"),

                MobileSafari: !!a.match(/Apple.*Mobile.*Safari/),

                Chrome: a.indexOf("Chrome") > -1 && b("Chrome/"),

                ChromeMobile: a.indexOf("CrMo") > -1 && b("CrMo/"),

                Android: a.indexOf("Android") > -1 && b("Android "),

                IEMobile: a.indexOf("IEMobile") > -1 && b("IEMobile/")

            }

        }(navigator.userAgent),

        Support = function () {

            function a(a) {

                return c(a, "prefix")

            }



            function b(a, b) {

                for (var c in a)

                    if (void 0 !== d.style[a[c]]) return "prefix" == b ? a[c] : !0;

                return !1

            }



            function c(a, c) {

                var d = a.charAt(0)

                        .toUpperCase() + a.substr(1),

                    f = (a + " " + e.join(d + " ") + d)

                        .split(" ");

                return b(f, c)

            }



            var d = document.createElement("div"),

                e = "Webkit Moz O ms Khtml".split(" ");

            return {

                css: {

                    animation: c("animation"),

                    transform: c("transform"),

                    prefixed: a

                },

                shadow: c("boxShadow") && c("pointerEvents"),

                touch: function () {

                    try {

                        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)

                    } catch (a) {

                        return !1

                    }

                }()

            }

        }(),

        _slice = Array.prototype.slice,

        _ = {

            wrap: function (a, b) {

                var c = a;

                return function () {

                    var a = [$.proxy(c, this)].concat(_slice.call(arguments));

                    return b.apply(this, a)

                }

            },

            isElement: function (a) {

                return a && 1 == a.nodeType

            },

            isText: function (a) {

                return a && 3 == a.nodeType

            },

            isDocumentFragment: function (a) {

                return a && 11 == a.nodeType

            },

            delay: function (a, b) {

                var c = _slice.call(arguments, 2);

                return setTimeout(function () {

                    return a.apply(a, c)

                }, b)

            },

            defer: function (a) {

                return _.delay.apply(this, [a, 1].concat(_slice.call(arguments, 1)))

            },

            pointer: function (a) {

                return {

                    x: a.pageX,

                    y: a.pageY

                }

            },

            element: {

                isAttached: function () {

                    function a(a) {

                        for (var b = a; b && b.parentNode;) b = b.parentNode;

                        return b

                    }



                    return function (b) {

                        var c = a(b);

                        return !(!c || !c.body)

                    }

                }()

            }

        },

        getUID = function () {

            var a = 0,

                b = "_tipped-uid-";

            return function (c) {

                for (c = c || b, a++; document.getElementById(c + a);) a++;

                return c + a

            }

        }(),

        Position = {

            positions: ["topleft", "topmiddle", "topright", "righttop", "rightmiddle", "rightbottom", "bottomright", "bottommiddle", "bottomleft", "leftbottom", "leftmiddle", "lefttop"],

            regex: {

                toOrientation: /^(top|left|bottom|right)(top|left|bottom|right|middle|center)$/,

                horizontal: /^(top|bottom)/,

                isCenter: /(middle|center)/,

                side: /^(top|bottom|left|right)/

            },

            toDimension: function () {

                var a = {

                    top: "height",

                    left: "width",

                    bottom: "height",

                    right: "width"

                };

                return function (b) {

                    return a[b]

                }

            }(),

            isCenter: function (a) {

                return !!a.toLowerCase()

                    .match(this.regex.isCenter)

            },

            isCorner: function (a) {

                return !this.isCenter(a)

            },

            getOrientation: function (a) {

                return a.toLowerCase()

                    .match(this.regex.horizontal) ? "horizontal" : "vertical"

            },

            getSide: function (a) {

                var b = null,

                    c = a.toLowerCase()

                        .match(this.regex.side);

                return c && c[1] && (b = c[1]), b

            },

            split: function (a) {

                return a.toLowerCase()

                    .match(this.regex.toOrientation)

            },

            _flip: {

                top: "bottom",

                bottom: "top",

                left: "right",

                right: "left"

            },

            flip: function (a, b) {

                var c = this.split(a);

                return b ? this.inverseCornerPlane(this.flip(this.inverseCornerPlane(a))) : this._flip[c[1]] + c[2]

            },

            inverseCornerPlane: function (a) {

                if (Position.isCorner(a)) {

                    var b = this.split(a);

                    return b[2] + b[1]

                }

                return a

            },

            adjustOffsetBasedOnPosition: function (a, b, c) {

                var d = $.extend({}, a),

                    e = {

                        horizontal: "x",

                        vertical: "y"

                    },

                    f = {

                        x: "y",

                        y: "x"

                    },

                    g = {

                        top: {

                            right: "x"

                        },

                        bottom: {

                            left: "x"

                        },

                        left: {

                            bottom: "y"

                        },

                        right: {

                            top: "y"

                        }

                    },

                    h = Position.getOrientation(b);

                if (h == Position.getOrientation(c)) {

                    if (Position.getSide(b) != Position.getSide(c)) {

                        var i = f[e[h]];

                        d[i] *= -1

                    }

                } else {

                    var j = d.x;

                    d.x = d.y, d.y = j;

                    var k = g[Position.getSide(b)][Position.getSide(c)];

                    k && (d[k] *= -1), d[e[Position.getOrientation(c)]] = 0

                }

                return d

            },

            getBoxFromPoints: function (a, b, c, d) {

                var e = Math.min(a, c),

                    f = Math.max(a, c),

                    g = Math.min(b, d),

                    h = Math.max(b, d);

                return {

                    left: e,

                    top: g,

                    width: Math.max(f - e, 0),

                    height: Math.max(h - g, 0)

                }

            },

            isPointWithinBox: function (a, b, c, d, e, f) {

                var g = this.getBoxFromPoints(c, d, e, f);

                return a >= g.left && a <= g.left + g.width && b >= g.top && b <= g.top + g.height

            },

            isPointWithinBoxLayout: function (a, b, c) {

                return this.isPointWithinBox(a, b, c.position.left, c.position.top, c.position.left + c.dimensions.width, c.position.top + c.dimensions.height)

            },

            getDistance: function (a, b, c, d) {

                return Math.sqrt(Math.pow(Math.abs(c - a), 2) + Math.pow(Math.abs(d - b), 2))

            },

            intersectsLine: function () {

                var a = function (a, b, c, d, e, f) {

                    var g = (f - b) * (c - a) - (d - b) * (e - a);

                    return g > 0 ? !0 : 0 > g ? !1 : !0

                };

                return function (b, c, d, e, f, g, h, i, j) {

                    if (!j) return a(b, c, f, g, h, i) != a(d, e, f, g, h, i) && a(b, c, d, e, f, g) != a(b, c, d, e, h, i);

                    var k, l, m, n;

                    k = d - b, l = e - c, m = h - f, n = i - g;

                    var o, p;

                    if (o = (-l * (b - f) + k * (c - g)) / (-m * l + k * n), p = (m * (c - g) - n * (b - f)) / (-m * l + k * n), o >= 0 && 1 >= o && p >= 0 && 1 >= p) {

                        var q = b + p * k,

                            r = c + p * l;

                        return {

                            x: q,

                            y: r

                        }

                    }

                    return !1

                }

            }()

        },

        Bounds = {

            viewport: function () {

                var a;

                return a = Browser.MobileSafari || Browser.Android && Browser.Gecko ? {

                    width: window.innerWidth,

                    height: window.innerHeight

                } : {

                    height: $(window)

                        .height(),

                    width: $(window)

                        .width()

                }

            }

        },

        Mouse = {

            _buffer: {

                pageX: 0,

                pageY: 0

            },

            _dimensions: {

                width: 30,

                height: 30

            },

            _shift: {

                x: 2,

                y: 10

            },

            getPosition: function (a) {

                var b = this.getActualPosition(a);

                return {

                    left: b.left - Math.round(.5 * this._dimensions.width) + this._shift.x,

                    top: b.top - Math.round(.5 * this._dimensions.height) + this._shift.y

                }

            },

            getActualPosition: function (a) {

                var b = a && "number" == $.type(a.pageX) ? a : this._buffer;

                return {

                    left: b.pageX,

                    top: b.pageY

                }

            },

            getDimensions: function () {

                return this._dimensions

            }

        },

        Color = function () {

            function a(a) {

                return ("0" + parseInt(a)

                    .toString(16))

                    .slice(-2)

            }



            function b(b) {

                return b = b.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/), "#" + a(b[1]) + a(b[2]) + a(b[3])

            }



            var c = {

                _default: "#000000",

                aqua: "#00ffff",

                black: "#000000",

                blue: "#0000ff",

                fuchsia: "#ff00ff",

                gray: "#808080",

                green: "#008000",

                lime: "#00ff00",

                maroon: "#800000",

                navy: "#000080",

                olive: "#808000",

                purple: "#800080",

                red: "#ff0000",

                silver: "#c0c0c0",

                teal: "#008080",

                white: "#ffffff",

                yellow: "#ffff00"

            };

            return {

                toRGB: function (a) {

                    if (/^rgba?\(/.test(a)) return b(a);

                    c[a] && (a = c[a]);

                    var d = a.replace("#", "");

                    return /^(?:[0-9a-fA-F]{3}){1,2}$/.test(d) || c._default, 3 == d.length && (d = d.charAt(0) + d.charAt(0) + d.charAt(1) + d.charAt(1) + d.charAt(2) + d.charAt(2)), "#" + d

                }

            }

        }();

    Spin.supported = Support.css.transform && Support.css.animation, $.extend(Spin.prototype, {

        initialize: function () {

            this.options = $.extend({}, arguments[0] || {}), this.build(), this.start()

        },

        build: function () {

            var a = 2 * (this.options.length + this.options.radius),

                b = {

                    height: a,

                    width: a

                };

            this.element = $("<div>")

                .addClass("tpd-spin")

                .css(b), this.element.append(this._rotate = $("<div>")

                .addClass("tpd-spin-rotate")), this.element.css({

                "margin-left": -.5 * b.width,

                "margin-top": -.5 * b.height

            });

            for (var c = this.options.lines, d = 0; c > d; d++) {

                var e, f;

                this._rotate.append(e = $("<div>")

                    .addClass("tpd-spin-frame")

                    .append(f = $("<div>")

                        .addClass("tpd-spin-line"))), f.css({

                    "background-color": this.options.color,

                    width: this.options.width,

                    height: this.options.length,

                    "margin-left": -.5 * this.options.width,

                    "border-radius": Math.round(.5 * this.options.width)

                }), e.css({

                    opacity: (1 / c * (d + 1))

                        .toFixed(2)

                });

                var g = {};

                g[Support.css.prefixed("transform")] = "rotate(" + 360 / c * (d + 1) + "deg)", e.css(g)

            }

        },

        start: function () {

            var a = {};

            a[Support.css.prefixed("animation")] = "tpd-spin 1s infinite steps(" + this.options.lines + ")", this._rotate.css(a)

        },

        stop: function () {

            var a = {};

            a[Support.css.prefixed("animation")] = "none", this._rotate.css(a), this.element.detach()

        }

    }), $.extend(Visible.prototype, {

        initialize: function (a) {

            return a = "array" == $.type(a) ? a : [a], this.elements = a, this._restore = [], $.each(a, $.proxy(function (a, b) {

                var c = $(b)

                    .is(":visible");

                c || $(b)

                    .show(), this._restore.push({

                    element: b,

                    visible: c

                })

            }, this)), this

        },

        restore: function () {

            $.each(this._restore, function (a, b) {

                b.visible || $(b.element)

                    .show()

            }), this._restore = null

        }

    });

    var AjaxCache = function () {

            var a = [];

            return {

                get: function (b) {

                    for (var c = null, d = 0; d < a.length; d++) a[d] && a[d].url == b.url && (a[d].type || "GET")

                        .toUpperCase() == (b.type || "GET")

                        .toUpperCase() && $.param(a[d].data || {}) == $.param(b.data || {}) && (c = a[d]);

                    return c

                },

                set: function (b, c, d) {

                    var e = this.get(b);

                    e || (e = $.extend({

                        callbacks: {}

                    }, b), a.push(e)), e.callbacks[c] = d

                },

                remove: function (b) {

                    for (var c = 0; c < a.length; c++) a[c] && a[c].url == b && delete a[c]

                },

                clear: function () {

                    a = []

                }

            }

        }(),

        Voila = function (a) {

            function b(c, d, e) {

                if (!(this instanceof b)) return new b(c, d, e);

                var f = a.type(arguments[1]),

                    g = "object" === f ? arguments[1] : {},

                    h = "function" === f ? arguments[1] : "function" === a.type(arguments[2]) ? arguments[2] : !1;

                return this.options = a.extend({

                    method: "onload"

                }, g), this.deferred = new jQuery.Deferred, h && this.always(h), this._processed = 0, this.images = [], this._add(c), this

            }



            a.extend(b.prototype, {

                _add: function (b) {

                    var d = "string" == a.type(b) ? a(b) : b instanceof jQuery || b.length > 0 ? b : [b];

                    a.each(d, a.proxy(function (b, d) {

                        var e = a(),

                            f = a(d);

                        e = f.is("img") ? e.add(f) : e.add(f.find("img")), e.each(a.proxy(function (b, d) {

                            this.images.push(new c(d, a.proxy(function (a) {

                                this._progress(a)

                            }, this), a.proxy(function (a) {

                                this._progress(a)

                            }, this), this.options))

                        }, this))

                    }, this)), this.images.length < 1 && setTimeout(a.proxy(function () {

                        this._resolve()

                    }, this))

                },

                abort: function () {

                    this._progress = this._notify = this._reject = this._resolve = function () {

                    }, a.each(this.images, function (a, b) {

                        b.abort()

                    }), this.images = []

                },

                _progress: function (a) {

                    this._processed++, a.isLoaded || (this._broken = !0), this._notify(a), this._processed == this.images.length && this[this._broken ? "_reject" : "_resolve"]()

                },

                _notify: function (a) {

                    this.deferred.notify(this, a)

                },

                _reject: function () {

                    this.deferred.reject(this)

                },

                _resolve: function () {

                    this.deferred.resolve(this)

                },

                always: function (a) {

                    return this.deferred.always(a), this

                },

                done: function (a) {

                    return this.deferred.done(a), this

                },

                fail: function (a) {

                    return this.deferred.fail(a), this

                },

                progress: function (a) {

                    return this.deferred.progress(a), this

                }

            });

            var c = function (a) {

                var b = function () {

                    return this.initialize.apply(this, Array.prototype.slice.call(arguments))

                };

                a.extend(b.prototype, {

                    initialize: function () {

                        this.options = a.extend({

                            test: function () {

                            },

                            success: function () {

                            },

                            timeout: function () {

                            },

                            callAt: !1,

                            intervals: [

                                [0, 0],

                                [1e3, 10],

                                [2e3, 50],

                                [4e3, 100],

                                [2e4, 500]

                            ]

                        }, arguments[0] || {}), this._test = this.options.test, this._success = this.options.success, this._timeout = this.options.timeout, this._ipos = 0, this._time = 0, this._delay = this.options.intervals[this._ipos][1], this._callTimeouts = [], this.poll(), this._createCallsAt()

                    },

                    poll: function () {

                        this._polling = setTimeout(a.proxy(function () {

                            if (this._test()) return this.success(), void 0;

                            if (this._time += this._delay, this._time >= this.options.intervals[this._ipos][0]) {

                                if (!this.options.intervals[this._ipos + 1]) return "function" == a.type(this._timeout) && this._timeout(), void 0;

                                this._ipos++, this._delay = this.options.intervals[this._ipos][1]

                            }

                            this.poll()

                        }, this), this._delay)

                    },

                    success: function () {

                        this.abort(), this._success()

                    },

                    _createCallsAt: function () {

                        this.options.callAt && a.each(this.options.callAt, a.proxy(function (b, c) {

                            var d = c[0],

                                e = c[1],

                                f = setTimeout(a.proxy(function () {

                                    e()

                                }, this), d);

                            this._callTimeouts.push(f)

                        }, this))

                    },

                    _stopCallTimeouts: function () {

                        a.each(this._callTimeouts, function (a, b) {

                            clearTimeout(b)

                        }), this._callTimeouts = []

                    },

                    abort: function () {

                        this._stopCallTimeouts(), this._polling && (clearTimeout(this._polling), this._polling = null)

                    }

                });

                var c = function () {

                    return this.initialize.apply(this, Array.prototype.slice.call(arguments))

                };

                return a.extend(c.prototype, {

                    supports: {

                        naturalWidth: function () {

                            return "naturalWidth" in new Image

                        }()

                    },

                    initialize: function (b, c, d) {

                        return this.img = a(b)[0], this.successCallback = c, this.errorCallback = d, this.isLoaded = !1, this.options = a.extend({

                            method: "onload",

                            pollFallbackAfter: 1e3

                        }, arguments[3] || {}), "onload" != this.options.method && this.supports.naturalWidth ? (this.poll(), void 0) : (this.load(), void 0)

                    },

                    poll: function () {

                        this._poll = new b({

                            test: a.proxy(function () {

                                return this.img.naturalWidth > 0

                            }, this),

                            success: a.proxy(function () {

                                this.success()

                            }, this),

                            timeout: a.proxy(function () {

                                this.error()

                            }, this),

                            callAt: [

                                [this.options.pollFallbackAfter, a.proxy(function () {

                                    this.load()

                                }, this)]

                            ]

                        })

                    },

                    load: function () {

                        this._loading = setTimeout(a.proxy(function () {

                            var b = new Image;

                            this._onloadImage = b, b.onload = a.proxy(function () {

                                b.onload = function () {

                                }, this.supports.naturalWidth || (this.img.naturalWidth = b.width, this.img.naturalHeight = b.height, b.naturalWidth = b.width, b.naturalHeight = b.height), this.success()

                            }, this), b.onerror = a.proxy(this.error, this), b.src = this.img.src

                        }, this))

                    },

                    success: function () {

                        this._calledSuccess || (this._calledSuccess = !0, this.abort(), this.waitForRender(a.proxy(function () {

                            this.isLoaded = !0, this.successCallback(this)

                        }, this)))

                    },

                    error: function () {

                        this._calledError || (this._calledError = !0, this.abort(), this._errorRenderTimeout = setTimeout(a.proxy(function () {

                            this.errorCallback && this.errorCallback(this)

                        }, this)))

                    },

                    abort: function () {

                        this.stopLoading(), this.stopPolling(), this.stopWaitingForRender()

                    },

                    stopPolling: function () {

                        this._poll && (this._poll.abort(), this._poll = null)

                    },

                    stopLoading: function () {

                        this._loading && (clearTimeout(this._loading), this._loading = null), this._onloadImage && (this._onloadImage.onload = function () {

                        }, this._onloadImage.onerror = function () {

                        })

                    },

                    waitForRender: function (a) {

                        this._renderTimeout = setTimeout(a)

                    },

                    stopWaitingForRender: function () {

                        this._renderTimeout && (clearTimeout(this._renderTimeout), this._renderTimeout = null), this._errorRenderTimeout && (clearTimeout(this._errorRenderTimeout), this._errorRenderTimeout = null)

                    }

                }), c

            }(jQuery);

            return b

        }(jQuery);

    Tipped.Behaviors = {

        hide: {

            showOn: {

                element: "mouseenter",

                tooltip: !1

            },

            hideOn: {

                element: "mouseleave",

                tooltip: "mouseenter"

            }

        },

        mouse: {

            showOn: {

                element: "mouseenter",

                tooltip: !1

            },

            hideOn: {

                element: "mouseleave",

                tooltip: "mouseenter"

            },

            target: "mouse",

            showDelay: 100,

            fadeIn: 0,

            hideDelay: 0,

            fadeOut: 0

        },

        sticky: {

            showOn: {

                element: "mouseenter",

                tooltip: "mouseenter"

            },

            hideOn: {

                element: "mouseleave",

                tooltip: "mouseleave"

            },

            showDelay: 150,

            target: "mouse",

            fixed: !0

        }

    };

    var Options = {

        create: function () {

            function a(b) {

                return e = Tipped.Skins.base, f = deepExtend($.extend({}, e), Tipped.Skins.reset), a = d, d(b)

            }



            function b(a) {

                return a.match(/^(top|left|bottom|right)$/) && (a += "middle"), a.replace("center", "middle")

                    .replace(" ", ""), a

            }



            function c(a) {

                var b, c;

                return b = a.behavior && (c = Tipped.Behaviors[a.behavior]) ? deepExtend($.extend({}, c), a) : a

            }



            function d(a) {

                var d = a.skin ? a.skin : Tooltips.options.defaultSkin,

                    g = $.extend({}, Tipped.Skins[d] || {});

                g.skin || (g.skin = Tooltips.options.defaultSkin || "dark");

                var h = deepExtend($.extend({}, f), c(g)),

                    i = deepExtend($.extend({}, h), c(a));

                i[sfcc("115,107,105,110")] = sfcc("100,97,114,107"), i.ajax && (f.ajax || {}, e.ajax, "boolean" == $.type(i.ajax) && (i.ajax = {}), i.ajax = !1);

                var j,

                    k = k = i.position && i.position.target || "string" == $.type(i.position) && i.position || f.position && f.position.target || "string" == $.type(f.position) && f.position || e.position && e.position.target || e.position;

                k = b(k);

                var l = i.position && i.position.tooltip || f.position && f.position.tooltip || e.position && e.position.tooltip || Tooltips.Position.getInversedPosition(k);

                if (l = b(l), i.position ? "string" == $.type(i.position) ? (i.position = b(i.position), j = {

                    target: i.position,

                    tooltip: Tooltips.Position.getTooltipPositionFromTarget(i.position)

                }) : (j = {

                    tooltip: l,

                    target: k

                }, i.position.tooltip && (j.tooltip = b(i.position.tooltip)), i.position.target && (j.target = b(i.position.target))) : j = {

                    tooltip: l,

                    target: k

                }, Position.isCorner(j.target) && Position.getOrientation(j.target) != Position.getOrientation(j.tooltip) && (j.target = Position.inverseCornerPlane(j.target)), "mouse" == i.target) {

                    var m = Position.getOrientation(j.target);

                    j.target = "horizontal" == m ? j.target.replace(/(left|right)/, "middle") : j.target.replace(/(top|bottom)/, "middle")

                }

                i.position = j;

                var n;

                if ("mouse" == i.target ? (n = $.extend({}, e.offset), $.extend(n, Tipped.Skins.reset.offset || {}), n = Position.adjustOffsetBasedOnPosition(e.offset, e.position, j.target, !0), a.offset && (n = $.extend(n, a.offset || {}))) : n = {

                    x: i.offset.x,

                    y: i.offset.y

                }, i.offset = n, i.hideOn && "click-outside" == i.hideOn && (i.hideOnClickOutside = !0, i.hideOn = !1, i.fadeOut = 0), i.showOn) {

                    var o = i.showOn;

                    "string" == $.type(o) && (o = {

                        element: o

                    }), i.showOn = o

                }

                if (i.hideOn) {

                    var p = i.hideOn;

                    "string" == $.type(p) && (p = {

                        element: p

                    }), i.hideOn = p

                }

                return i.inline && "string" != $.type(i.inline) && (i.inline = !1), Browser.IE && Browser.IE < 9 && $.extend(i, {

                    fadeIn: 0,

                    fadeOut: 0,

                    hideDelay: 0

                }), i.spinner && (Spin.supported ? "boolean" == $.type(i.spinner) && (i.spinner = f.spinner || e.spinner || {}) : i.spinner = !1), i.container || (i.container = document.body), i.containment && "string" == $.type(i.containment) && (i.containment = {

                    selector: i.containment,

                    padding: f.containment && f.containment.padding || e.padding && e.containment.padding

                }), i.shadow && (i.shadow = Support.shadow), i

            }



            var e, f;

            return a

        }()

    };

    $.extend(Skin.prototype, {

        initialize: function (a) {

            this.tooltip = a, this.element = a._skin;

            var b = this.tooltip.options;

            this.tooltip._tooltip[(b.shadow ? "remove" : "add") + "Class"]("tpd-no-shadow")[(b.radius ? "remove" : "add") + "Class"]("tpd-no-radius")[(b.stem ? "remove" : "add") + "Class"]("tpd-no-stem");

            var c, d, e, f, g = Support.css.prefixed("borderTopLeftRadius");

            this.element.append(c = $("<div>")

                .addClass("tpd-frames")

                .append($("<div>")

                    .addClass("tpd-frame")

                    .append($("<div>")

                        .addClass("tpd-backgrounds")

                        .append(d = $("<div>")

                            .addClass("tpd-background")

                            .append(e = $("<div>")

                                .addClass("tpd-background-content"))))))

                .append(f = $("<div>")

                    .addClass("tpd-spinner")), d.css({

                width: 999,

                height: 999,

                zoom: 1

            }), this._css = {

                border: parseFloat(d.css("border-top-width")),

                radius: parseFloat(g ? d.css(g) : 0),

                padding: parseFloat(a._content.css("padding-top")),

                borderColor: d.css("border-top-color"),

                backgroundColor: e.css("background-color"),

                backgroundOpacity: e.css("opacity"),

                spinner: {

                    dimensions: {

                        width: f.innerWidth(),

                        height: f.innerHeight()

                    }

                }

            }, f.remove(), c.remove(), this._side = Position.getSide(a.options.position.tooltip) || "top", this._vars = {}

        },

        destroy: function () {

            this.frames && ($.each("top right bottom left".split(" "), $.proxy(function (a, b) {

                this["stem_" + b] && this["stem_" + b].destroy()

            }, this)), this.frames.remove(), this.frames = null)

        },

        build: function () {

            this.frames || (this.element.append(this.frames = $("<div>")

                .addClass("tpd-frames")), $.each("top right bottom left".split(" "), $.proxy(function (a, b) {

                this.insertFrame(b)

            }, this)), this._spinner || this.tooltip._tooltip.append(this._spinner = $("<div>")

                .addClass("tpd-spinner")

                .hide()

                .append($("<div>")

                    .addClass("tpd-spinner-spin"))))

        },

        _frame: function () {

            var a, b = $("<div>")

                .addClass("tpd-frame")

                .append(a = $("<div>")

                    .addClass("tpd-backgrounds")

                    .append($("<div>")

                        .addClass("tpd-background-shadow")))

                .append($("<div>")

                    .addClass("tpd-shift-stem")

                    .append($("<div>")

                        .addClass("tpd-shift-stem-side tpd-shift-stem-side-before"))

                    .append($("<div>")

                        .addClass("tpd-stem"))

                    .append($("<div>")

                        .addClass("tpd-shift-stem-side tpd-shift-stem-side-after")));

            return $.each("top right bottom left".split(" "), $.proxy(function (b, c) {

                a.append($("<div>")

                    .addClass("tpd-background-box tpd-background-box-" + c)

                    .append($("<div>")

                        .addClass("tpd-background-box-shift")

                        .append($("<div>")

                            .addClass("tpd-background-box-shift-further")

                            .append($("<div>")

                                .addClass("tpd-background")

                                .append($("<div>")

                                    .addClass("tpd-background-title"))

                                .append($("<div>")

                                    .addClass("tpd-background-content")))

                            .append($("<div>")

                                .addClass("tpd-background tpd-background-loading"))

                            .append($("<div>")

                                .addClass("tpd-background-border-hack")

                                .hide()))))

            }, this)), b

        }(),

        _getFrame: function (a) {

            var b = this._frame.clone();

            b.addClass("tpd-frame-" + a), b.find(".tpd-background-shadow")

                .css({

                    "border-radius": this._css.radius

                }), this.tooltip.options.stem && b.find(".tpd-stem")

                .attr("data-stem-position", a);

            var c = Math.max(this._css.radius - this._css.border, 0);

            b.find(".tpd-background-title")

                .css({

                    "border-top-left-radius": c,

                    "border-top-right-radius": c

                }), b.find(".tpd-background-content")

                .css({

                    "border-bottom-left-radius": c,

                    "border-bottom-right-radius": c

                }), b.find(".tpd-background-loading")

                .css({

                    "border-radius": c

                });

            var d = {

                    backgroundColor: this._css.borderColor

                },

                e = Position.getOrientation(a),

                f = "horizontal" == e;

            d[f ? "height" : "width"] = this._css.border + "px";

            var g = {

                top: "bottom",

                bottom: "top",

                left: "right",

                right: "left"

            };

            return d[g[a]] = 0, b.find(".tpd-shift-stem-side")

                .css(d), b

        },

        insertFrame: function (a) {

            var b = this["frame_" + a] = this._getFrame(a);

            if (this.frames.append(b), this.tooltip.options.stem) {

                var c = b.find(".tpd-stem");

                this["stem_" + a] = new Stem(c, this, {})

            }

        },

        startLoading: function () {

            this.tooltip.supportsLoading && (this.build(), this._spinner || this.tooltip.is("resize-to-content") || this.setDimensions(this._css.spinner.dimensions), this._spinner && this._spinner.show())

        },

        stopLoading: function () {

            this.tooltip.supportsLoading && this._spinner && (this.build(), this._spinner.hide())

        },

        updateBackground: function () {

            var a = this._vars.frames[this._side],

                b = $.extend({}, a.background.dimensions);

            if (this.tooltip.title && !this.tooltip.is("loading")) {

                this.element.find(".tpd-background-title, .tpd-background-content")

                    .show(), this.element.find(".tpd-background")

                    .css({

                        "background-color": "transparent"

                    });

                var c = $.extend({}, b),

                    d = Math.max(this._css.radius - this._css.border, 0),

                    e = {

                        "border-top-left-radius": d,

                        "border-top-right-radius": d,

                        "border-bottom-left-radius": d,

                        "border-bottom-right-radius": d

                    },

                    f = new Visible(this.tooltip._tooltip),

                    g = this.tooltip._titleWrapper.innerHeight();

                c.height -= g, this.element.find(".tpd-background-title")

                    .css({

                        height: g,

                        width: b.width

                    }), e["border-top-left-radius"] = 0, e["border-top-right-radius"] = 0, f.restore(), this.element.find(".tpd-background-content")

                    .css(c)

                    .css(e), this.element.find(".tpd-background-loading")

                    .css({

                        "background-color": this._css.backgroundColor

                    })

            } else this.element.find(".tpd-background-title, .tpd-background-content")

                .hide(), this.element.find(".tpd-background")

                .css({

                    "background-color": this._css.backgroundColor

                });

            this._css.border && (this.element.find(".tpd-background")

                .css({

                    "border-color": "transparent"

                }), this.element.find(".tpd-background-border-hack")

                .css({

                    width: b.width,

                    height: b.height,

                    "border-radius": this._css.radius,

                    "border-width": this._css.border,

                    "border-color": this._css.borderColor

                })

                .show())

        },

        paint: function () {

            if (!this._paintedDimensions || this._paintedDimensions.width != this._dimensions.width || this._paintedDimensions.height != this._dimensions.height || this._paintedStemPosition != this._stemPosition) {

                this._paintedDimensions = this._dimensions, this._paintedStemPosition = this._stemPosition, this.element.removeClass("tpd-visible-frame-top tpd-visible-frame-bottom tpd-visible-frame-left tpd-visible-frame-right")

                    .addClass("tpd-visible-frame-" + this._side);

                var a = this._vars.frames[this._side],

                    b = $.extend({}, a.background.dimensions);

                this.element.find(".tpd-background")

                    .css(b), this.element.find(".tpd-background-shadow")

                    .css({

                        width: b.width + 2 * this._css.border,

                        height: b.height + 2 * this._css.border

                    }), this.updateBackground(), this.element.find(".tpd-background-box-shift, .tpd-background-box-shift-further")

                    .removeAttr("style"), this.element.add(this.frames)

                    .add(this.tooltip._tooltip)

                    .css(a.dimensions);

                var c = this._side,

                    d = this._vars.frames[c],

                    e = this.element.find(".tpd-frame-" + this._side),

                    f = this._vars.frames[c].dimensions;

                e.css(f), e.find(".tpd-backgrounds")

                    .css($.extend({}, d.background.position, {

                        width: f.width - d.background.position.left,

                        height: f.height - d.background.position.top

                    }));

                var g = Position.getOrientation(c);

                if (this.tooltip.options.stem)

                    if (e.find(".tpd-shift-stem")

                        .css($.extend({}, d.shift.dimensions, d.shift.position)), "vertical" == g) {

                        var h = e.find(".tpd-background-box-top, .tpd-background-box-bottom");

                        h.css({

                            height: this._vars.cut,

                            width: this._css.border

                        }), e.find(".tpd-background-box-bottom")

                            .css({

                                top: d.dimensions.height - this._vars.cut

                            })

                            .find(".tpd-background-box-shift")

                            .css({

                                "margin-top": -1 * d.dimensions.height + this._vars.cut

                            });

                        var i = "right" == c ? d.dimensions.width - d.stemPx - this._css.border : 0;

                        h.css({

                            left: i

                        })

                            .find(".tpd-background-box-shift")

                            .css({

                                "margin-left": -1 * i

                            }), e.find(".tpd-background-box-" + ("left" == c ? "left" : "right"))

                            .hide(), "right" == c ? e.find(".tpd-background-box-left")

                            .css({

                                width: d.dimensions.width - d.stemPx - this._css.border

                            }) : e.find(".tpd-background-box-right")

                            .css({

                                "margin-left": this._css.border

                            })

                            .find(".tpd-background-box-shift")

                            .css({

                                "margin-left": -1 * this._css.border

                            });

                        var j = e.find(".tpd-background-box-" + this._side);

                        j.css({

                            height: d.dimensions.height - 2 * this._vars.cut,

                            "margin-top": this._vars.cut

                        }), j.find(".tpd-background-box-shift")

                            .css({

                                "margin-top": -1 * this._vars.cut

                            })

                    } else {

                        var h = e.find(".tpd-background-box-left, .tpd-background-box-right");

                        h.css({

                            width: this._vars.cut,

                            height: this._css.border

                        }), e.find(".tpd-background-box-right")

                            .css({

                                left: d.dimensions.width - this._vars.cut

                            })

                            .find(".tpd-background-box-shift")

                            .css({

                                "margin-left": -1 * d.dimensions.width + this._vars.cut

                            });

                        var i = "bottom" == c ? d.dimensions.height - d.stemPx - this._css.border : 0;

                        h.css({

                            top: i

                        })

                            .find(".tpd-background-box-shift")

                            .css({

                                "margin-top": -1 * i

                            }), e.find(".tpd-background-box-" + ("top" == c ? "top" : "bottom"))

                            .hide(), "bottom" == c ? e.find(".tpd-background-box-top")

                            .css({

                                height: d.dimensions.height - d.stemPx - this._css.border

                            }) : e.find(".tpd-background-box-bottom")

                            .css({

                                "margin-top": this._css.border

                            })

                            .find(".tpd-background-box-shift")

                            .css({

                                "margin-top": -1 * this._css.border

                            });

                        var j = e.find(".tpd-background-box-" + this._side);

                        j.css({

                            width: d.dimensions.width - 2 * this._vars.cut,

                            "margin-left": this._vars.cut

                        }), j.find(".tpd-background-box-shift")

                            .css({

                                "margin-left": -1 * this._vars.cut

                            })

                    }

                var k = a.background,

                    l = k.position,

                    m = k.dimensions;

                this._spinner.css({

                    top: l.top + this._css.border + (.5 * m.height - .5 * this._css.spinner.dimensions.height),

                    left: l.left + this._css.border + (.5 * m.width - .5 * this._css.spinner.dimensions.width)

                })

            }

        },

        getVars: function () {

            var a = (this._css.padding, this._css.radius, this._css.border),

                b = this._vars.maxStemHeight || 0,

                c = $.extend({}, this._dimensions || {}),

                d = {

                    frames: {},

                    dimensions: c,

                    maxStemHeight: b

                };

            d.cut = Math.max(this._css.border, this._css.radius) || 0;

            var e = {

                    width: 0,

                    height: 0

                },

                f = 0,

                g = 0;

            return this.tooltip.options.stem && (e = this.stem_top.getMath()

                .dimensions.outside, f = this.stem_top._css.offset, g = Math.max(e.height - this._css.border, 0)), d.stemDimensions = e, d.stemOffset = f, Position.getOrientation(this._side), $.each("top right bottom left".split(" "), $.proxy(function (b, f) {

                var h = Position.getOrientation(f),

                    i = "vertical" == h,

                    j = {

                        width: c.width + 2 * a,

                        height: c.height + 2 * a

                    },

                    k = j[i ? "height" : "width"] - 2 * d.cut,

                    l = {

                        dimensions: j,

                        stemPx: g,

                        position: {

                            top: 0,

                            left: 0

                        },

                        background: {

                            dimensions: $.extend({}, c),

                            position: {

                                top: 0,

                                left: 0

                            }

                        }

                    };

                if (d.frames[f] = l, l.dimensions[i ? "width" : "height"] += g, ("top" == f || "left" == f) && (l.background.position[f] += g), $.extend(l, {

                    shift: {

                        position: {

                            top: 0,

                            left: 0

                        },

                        dimensions: {

                            width: i ? e.height : k,

                            height: i ? k : e.height

                        }

                    }

                }), Browser.IE && Browser.IE < 9) {

                    var m = l.shift.dimensions;

                    m.width = Math.round(m.width), m.height = Math.round(m.height)

                }

                switch (f) {

                    case "top":

                    case "bottom":

                        l.shift.position.left += d.cut, "bottom" == f && (l.shift.position.top += j.height - a - g);

                        break;

                    case "left":

                    case "right":

                        l.shift.position.top += d.cut, "right" == f && (l.shift.position.left += j.width - a - g)

                }

            }, this)), d.connections = {}, $.each(Position.positions, $.proxy(function (a, b) {

                d.connections[b] = this.getConnectionLayout(b, d)

            }, this)), d

        },

        setDimensions: function (a) {

            this.build();

            var b = this._dimensions;

            b && b.width == a.width && b.height == a.height || (this._dimensions = a, this._vars = this.getVars())

        },

        setSide: function (a) {

            this._side = a, this._vars = this.getVars()

        },

        getConnectionLayout: function (a, b) {

            var c = Position.getSide(a),

                d = Position.getOrientation(a),

                e = (b.dimensions, b.cut),

                f = this["stem_" + c],

                g = b.stemOffset,

                h = this.tooltip.options.stem ? f.getMath()

                    .dimensions.outside.width : 0,

                i = e + g + .5 * h,

                j = {

                    stem: {}

                },

                k = {

                    left: 0,

                    right: 0,

                    up: 0,

                    down: 0

                },

                l = {

                    top: 0,

                    left: 0

                },

                m = {

                    top: 0,

                    left: 0

                },

                n = b.frames[c],

                i = 0;

            if ("horizontal" == d) {

                var o = n.dimensions.width;

                this.tooltip.options.stem && (o = n.shift.dimensions.width, 2 * g > o - h && (g = Math.floor(.5 * (o - h)) || 0), i = e + g + .5 * h);

                var p = o - 2 * g,

                    q = Position.split(a),

                    r = g;

                switch (q[2]) {

                    case "left":

                        k.right = p - h, l.left = i;

                        break;

                    case "middle":

                        r += Math.round(.5 * p - .5 * h), k.left = r - g, k.right = r - g, l.left = m.left = Math.round(.5 * n.dimensions.width);

                        break;

                    case "right":

                        r += p - h, k.left = p - h, l.left = n.dimensions.width - i, m.left = n.dimensions.width

                }

                "bottom" == q[1] && (l.top += n.dimensions.height, m.top += n.dimensions.height), $.extend(j.stem, {

                    position: {

                        left: r

                    },

                    before: {

                        width: r

                    },

                    after: {

                        left: r + h,

                        width: o - r - h + 1

                    }

                })

            } else {

                var s = n.dimensions.height;

                this.tooltip.options.stem && (s = n.shift.dimensions.height, 2 * g > s - h && (g = Math.floor(.5 * (s - h)) || 0), i = e + g + .5 * h);

                var t = s - 2 * g,

                    q = Position.split(a),

                    u = g;

                switch (q[2]) {

                    case "top":

                        k.down = t - h, l.top = i;

                        break;

                    case "middle":

                        u += Math.round(.5 * t - .5 * h), k.up = u - g, k.down = u - g, l.top = m.top = Math.round(.5 * n.dimensions.height);

                        break;

                    case "bottom":

                        u += t - h, k.up = t - h, l.top = n.dimensions.height - i, m.top = n.dimensions.height

                }

                "right" == q[1] && (l.left += n.dimensions.width, m.left += n.dimensions.width), $.extend(j.stem, {

                    position: {

                        top: u

                    },

                    before: {

                        height: u

                    },

                    after: {

                        top: u + h,

                        height: s - u - h + 1

                    }

                })

            }

            return j.move = k, j.stem.connection = l, j.connection = m, j

        },

        setStemPosition: function (a, b) {

            if (this._stemPosition != a) {

                this._stemPosition = a;

                var c = Position.getSide(a);

                this.setSide(c)

            }

            this.tooltip.options.stem && this.setStemShift(a, b)

        },

        setStemShift: function (a, b) {

            var c = this._shift,

                d = this._dimensions;

            if (!c || c.stemPosition != a || c.shift.x != b.x || c.shift.y != b.y || !d || c.dimensions.width != d.width || c.dimensions.height != d.height) {

                this._shift = {

                    stemPosition: a,

                    shift: b,

                    dimensions: d

                };

                var e = Position.getSide(a),

                    f = {

                        horizontal: "x",

                        vertical: "y"

                    }[Position.getOrientation(a)],

                    g = {

                        x: {

                            left: "left",

                            width: "width"

                        },

                        y: {

                            left: "top",

                            width: "height"

                        }

                    }[f],

                    h = this["stem_" + e],

                    i = deepExtend({}, this._vars.connections[a].stem);

                b && 0 !== b[f] && (i.before[g.width] += b[f], i.position[g.left] += b[f], i.after[g.left] += b[f], i.after[g.width] -= b[f]), h.element.css(i.position), h.element.siblings(".tpd-shift-stem-side-before")

                    .css(i.before), h.element.siblings(".tpd-shift-stem-side-after")

                    .css(i.after)

            }

        }

    }), $.extend(Stem.prototype, {

        initialize: function (a, b) {

            this.element = $(a), this.element[0] && (this.skin = b, this.element.removeClass("tpd-stem-reset"), this._css = $.extend({}, b._css, {

                width: this.element.innerWidth(),

                height: this.element.innerHeight(),

                offset: parseFloat(this.element.css("margin-left")),

                spacing: parseFloat(this.element.css("margin-top"))

            }), this.element.addClass("tpd-stem-reset"), this.options = $.extend({}, arguments[2] || {}), this._position = this.element.attr("data-stem-position") || "top", this._m = 100, this.build())

        },

        destroy: function () {

            this.element.html("")

        },

        build: function () {

            this.destroy();

            var a = this._css.backgroundColor,

                b = a.indexOf("rgba") > -1 && parseFloat(a.replace(/^.*,(.+)\)/, "$1")),

                c = b && 1 > b;

            this._useTransform = c && Support.css.transform, this._css.border || (this._useTransform = !1), this[(this._useTransform ? "build" : "buildNo") + "Transform"]()

        },

        buildTransform: function () {

            this.element.append(this.spacer = $("<div>")

                .addClass("tpd-stem-spacer")

                .append(this.downscale = $("<div>")

                    .addClass("tpd-stem-downscale")

                    .append(this.transform = $("<div>")

                        .addClass("tpd-stem-transform")

                        .append(this.first = $("<div>")

                            .addClass("tpd-stem-side")

                            .append(this.border = $("<div>")

                                .addClass("tpd-stem-border"))

                            .append($("<div>")

                                .addClass("tpd-stem-border-corner"))

                            .append($("<div>")

                                .addClass("tpd-stem-triangle")))))), this.transform.append(this.last = this.first.clone()

                .addClass("tpd-stem-side-inversed")), this.sides = this.first.add(this.last);

            var a = this.getMath(),

                b = a.dimensions,

                c = this._m,

                d = Position.getSide(this._position);

            if (this.element.find(".tpd-stem-spacer")

                .css({

                    width: l ? b.inside.height : b.inside.width,

                    height: l ? b.inside.width : b.inside.height

                }), "top" == d || "left" == d) {

                var e = {};

                "top" == d ? (e.bottom = 0, e.top = "auto") : "left" == d && (e.right = 0, e.left = "auto"), this.element.find(".tpd-stem-spacer")

                    .css(e)

            }

            this.transform.css({

                width: b.inside.width * c,

                height: b.inside.height * c

            });

            var f = Support.css.prefixed("transform"),

                g = {

                    "background-color": "transparent",

                    "border-bottom-color": this._css.backgroundColor,

                    "border-left-width": .5 * b.inside.width * c,

                    "border-bottom-width": b.inside.height * c

                };

            g[f] = "translate(" + a.border * c + "px, 0)", this.element.find(".tpd-stem-triangle")

                .css(g);

            var h = this._css.borderColor;

            alpha = h.indexOf("rgba") > -1 && parseFloat(h.replace(/^.*,(.+)\)/, "$1")), alpha && 1 > alpha ? h = (h.substring(0, h.lastIndexOf(",")) + ")")

                .replace("rgba", "rgb") : alpha = 1;

            var i = {

                "background-color": "transparent",

                "border-right-width": a.border * c,

                width: a.border * c,

                "margin-left": -2 * a.border * c,

                "border-color": h,

                opacity: alpha

            };

            i[f] = "skew(" + a.skew + "deg) translate(" + a.border * c + "px, " + -1 * this._css.border * c + "px)", this.element.find(".tpd-stem-border")

                .css(i);

            var h = this._css.borderColor;

            alpha = h.indexOf("rgba") > -1 && parseFloat(h.replace(/^.*,(.+)\)/, "$1")), alpha && 1 > alpha ? h = (h.substring(0, h.lastIndexOf(",")) + ")")

                .replace("rgba", "rgb") : alpha = 1;

            var j = {

                width: a.border * c,

                "border-right-width": a.border * c,

                "border-right-color": h,

                background: h,

                opacity: alpha,

                "margin-left": -2 * a.border * c

            };

            if (j[f] = "skew(" + a.skew + "deg) translate(" + a.border * c + "px, " + (b.inside.height - this._css.border) * c + "px)", this.element.find(".tpd-stem-border-corner")

                .css(j), this.setPosition(this._position), c > 1) {

                var k = {};

                k[f] = "scale(" + 1 / c + "," + 1 / c + ")", this.downscale.css(k)

            }

            var l = /^(left|right)$/.test(this._position);

            this._css.border || this.element.find(".tpd-stem-border, .tpd-stem-border-corner")

                .hide(), this.element.css({

                width: l ? b.outside.height : b.outside.width,

                height: l ? b.outside.width : b.outside.height

            })

        },

        buildNoTransform: function () {

            this.element.append(this.spacer = $("<div>")

                .addClass("tpd-stem-spacer")

                .append($("<div>")

                    .addClass("tpd-stem-notransform")

                    .append($("<div>")

                        .addClass("tpd-stem-border")

                        .append($("<div>")

                            .addClass("tpd-stem-border-corner"))

                        .append($("<div>")

                            .addClass("tpd-stem-border-center-offset")

                            .append($("<div>")

                                .addClass("tpd-stem-border-center-offset-inverse")

                                .append($("<div>")

                                    .addClass("tpd-stem-border-center")))))

                    .append($("<div>")

                        .addClass("tpd-stem-triangle"))));

            var a = this.getMath(),

                b = a.dimensions,

                c = /^(left|right)$/.test(this._position),

                d = /^(bottom)$/.test(this._position),

                e = /^(right)$/.test(this._position),

                f = Position.getSide(this._position);

            if (this.element.css({

                width: c ? b.outside.height : b.outside.width,

                height: c ? b.outside.width : b.outside.height

            }), this.element.find(".tpd-stem-notransform")

                .add(this.element.find(".tpd-stem-spacer"))

                .css({

                    width: c ? b.inside.height : b.inside.width,

                    height: c ? b.inside.width : b.inside.height

                }), "top" == f || "left" == f) {

                var g = {};

                "top" == f ? (g.bottom = 0, g.top = "auto") : "left" == f && (g.right = 0, g.left = "auto"), this.element.find(".tpd-stem-spacer")

                    .css(g)

            }

            this.element.find(".tpd-stem-border")

                .css({

                    width: "100%",

                    background: "transparent"

                });

            var h = {

                opacity: Browser.IE && Browser.IE < 9 ? this._css.borderOpacity : 1

            };

            h[c ? "height" : "width"] = "100%", h[c ? "width" : "height"] = this._css.border, h[d ? "top" : "bottom"] = 0, $.extend(h, e ? {

                left: 0

            } : {

                right: 0

            }), this.element.find(".tpd-stem-border-corner")

                .css(h);

            var i = {

                    width: 0,

                    "background-color": "transparent",

                    opacity: Browser.IE && Browser.IE < 9 ? this._css.borderOpacity : 1

                },

                j = .5 * b.inside.width + "px solid transparent",

                k = {

                    "background-color": "transparent"

                };

            if (.5 * b.inside.width - a.border + "px solid transparent", c) {

                var l = {

                    left: "auto",

                    top: "50%",

                    "margin-top": -.5 * b.inside.width,

                    "border-top": j,

                    "border-bottom": j

                };

                if ($.extend(i, l), i[e ? "right" : "left"] = 0, i[e ? "border-left" : "border-right"] = b.inside.height + "px solid " + this._css.borderColor, $.extend(k, l), k[e ? "border-left" : "border-right"] = b.inside.height + "px solid " + this._css.backgroundColor, k[e ? "right" : "left"] = a.top, k[e ? "left" : "right"] = "auto", Browser.IE && Browser.IE < 8) {

                    var m = .5 * this._css.width + "px solid transparent";

                    $.extend(k, {

                        "margin-top": -.5 * this._css.width,

                        "border-top": m,

                        "border-bottom": m

                    }), k[e ? "border-left" : "border-right"] = this._css.height + "px solid " + this._css.backgroundColor

                }

                this.element.find(".tpd-stem-border-center-offset")

                    .css({

                        "margin-left": -1 * this._css.border * (e ? -1 : 1)

                    })

                    .find(".tpd-stem-border-center-offset-inverse")

                    .css({

                        "margin-left": this._css.border * (e ? -1 : 1)

                    })

            } else {

                var l = {

                    "margin-left": -.5 * b.inside.width,

                    "border-left": j,

                    "border-right": j

                };

                if ($.extend(i, l), i[d ? "border-top" : "border-bottom"] = b.inside.height + "px solid " + this._css.borderColor, $.extend(k, l), k[d ? "border-top" : "border-bottom"] = b.inside.height + "px solid " + this._css.backgroundColor, k[d ? "bottom" : "top"] = a.top, k[d ? "top" : "bottom"] = "auto", Browser.IE && Browser.IE < 8) {

                    var m = .5 * this._css.width + "px solid transparent";

                    $.extend(k, {

                        "margin-left": -.5 * this._css.width,

                        "border-left": m,

                        "border-right": m

                    }), k[d ? "border-top" : "border-bottom"] = this._css.height + "px solid " + this._css.backgroundColor

                }

                this.element.find(".tpd-stem-border-center-offset")

                    .css({

                        "margin-top": -1 * this._css.border * (d ? -1 : 1)

                    })

                    .find(".tpd-stem-border-center-offset-inverse")

                    .css({

                        "margin-top": this._css.border * (d ? -1 : 1)

                    })

            }

            this.element.find(".tpd-stem-border-center")

                .css(i), this.element.find(".tpd-stem-border-corner")

                .css({

                    "background-color": this._css.borderColor

                }), this.element.find(".tpd-stem-triangle")

                .css(k), this._css.border || this.element.find(".tpd-stem-border")

                .hide()

        },

        setPosition: function (a) {

            this._position = a, this.transform.attr("class", "tpd-stem-transform tpd-stem-transform-" + a)

        },

        getMath: function () {

            var a = this._css.height,

                b = this._css.width,

                c = this._css.border;

            this._useTransform && Math.floor(b) % 2 && (b = Math.max(Math.floor(b) - 1, 0));

            var d = degrees(Math.atan(.5 * b / a)),

                e = 90 - d,

                f = c / Math.cos((90 - e) * Math.PI / 180),

                g = c / Math.cos((90 - d) * Math.PI / 180),

                h = {

                    width: b + 2 * f,

                    height: a + g

                };

            Math.max(c, this._css.radius), a = h.height, b = .5 * h.width;

            var i = degrees(Math.atan(a / b)),

                j = 90 - i,

                k = c / Math.cos(j * Math.PI / 180),

                l = 180 * Math.atan(a / b) / Math.PI,

                m = -1 * (90 - l),

                n = 90 - l,

                o = c * Math.tan(n * Math.PI / 180),

                g = c / Math.cos((90 - n) * Math.PI / 180),

                p = $.extend({}, h),

                q = $.extend({}, h);

            q.height += this._css.spacing, q.height = Math.ceil(q.height);

            var r = !0;

            return 2 * c >= h.width && (r = !1), {

                enabled: r,

                outside: q,

                dimensions: {

                    inside: p,

                    outside: q

                },

                top: g,

                border: k,

                skew: m,

                corner: o

            }

        }

    });

    var Tooltips = {

        tooltips: {},

        options: {

            defaultSkin: "dark",

            startingZIndex: 999999

        },

        _emptyClickHandler: function () {

        },

        init: function () {

            this.reset(), this._resizeHandler = $.proxy(this.onWindowResize, this), $(window)

                .bind("resize orientationchange", this._resizeHandler), Browser.MobileSafari && $("body")

                .bind("click", this._emptyClickHandler)

        },

        reset: function () {

            Tooltips.removeAll(), this._resizeHandler && $(window)

                .unbind("resize orientationchange", this._resizeHandler), Browser.MobileSafari && $("body")

                .unbind("click", this._emptyClickHandler)

        },

        onWindowResize: function () {

            this._resizeTimer && (window.clearTimeout(this._resizeTimer), this._resizeTimer = null), this._resizeTimer = _.delay($.proxy(function () {

                var a = this.getVisible();

                $.each(a, function (a, b) {

                    b.clearUpdatedTo(), b.position()

                })

            }, this), 15)

        },

        _getTooltips: function (a, b) {

            var c, d = [],

                e = [];

            if (_.isElement(a) ? (c = $(a)

                .data("tipped-uids")) && (d = d.concat(c)) : $(a)

                .each(function (a, b) {

                    (c = $(b)

                        .data("tipped-uids")) && (d = d.concat(c))

                }), !d[0] && !b) {

                var f = this.getTooltipByTooltipElement($(a)

                    .closest(".tpd-tooltip")[0]);

                f && f.element && (c = $(f.element)

                    .data("tipped-uids") || [], c && (d = d.concat(c)))

            }

            return d.length > 0 && $.each(d, $.proxy(function (a, b) {

                var c;

                (c = this.tooltips[b]) && e.push(c)

            }, this)), e

        },

        findElement: function (a) {

            var b = [];

            return _.isElement(a) && (b = this._getTooltips(a)), b[0] && b[0].element

        },

        get: function (a) {

            var b = $.extend({

                    api: !1

                }, arguments[1] || {}),

                c = [];

            return _.isElement(a) ? c = this._getTooltips(a) : a instanceof $ ? a.each($.proxy(function (a, b) {

                var d = this._getTooltips(b, !0);

                d.length > 0 && (c = c.concat(d))

            }, this)) : "string" == $.type(a) && $.each(this.tooltips, function (b, d) {

                d.element && $(d.element)

                    .is(a) && c.push(d)

            }), b.api && $.each(c, function (a, b) {

                b.is("api", !0)

            }), c

        },

        getTooltipByTooltipElement: function (a) {

            if (!a) return null;

            var b = null;

            return $.each(this.tooltips, function (c, d) {

                d.is("build") && d._tooltip[0] === a && (b = d)

            }), b

        },

        getBySelector: function (a) {

            var b = [];

            return $.each(this.tooltips, function (c, d) {

                d.element && $(d.element)

                    .is(a) && b.push(d)

            }), b

        },

        getNests: function () {

            var a = [];

            return $.each(this.tooltips, function (b, c) {

                c.is("nest") && a.push(c)

            }), a

        },

        show: function (a) {

            $(this.get(a))

                .each(function (a, b) {

                    b.show(!1, !0)

                })

        },

        hide: function (a) {

            $(this.get(a))

                .each(function (a, b) {

                    b.hide()

                })

        },

        toggle: function (a) {

            $(this.get(a))

                .each(function (a, b) {

                    b.toggle()

                })

        },

        hideAll: function (a) {

            $.each(this.getVisible(), function (b, c) {

                a && a == c || c.hide()

            })

        },

        refresh: function (a) {

            var b;

            b = a ? $.grep(this.get(a), function (a) {

                return a.is("visible")

            }) : this.getVisible(), $.each(b, function (a, b) {

                b.refresh()

            })

        },

        getVisible: function () {

            var a = [];

            return $.each(this.tooltips, function (b, c) {

                c.visible() && a.push(c)

            }), a

        },

        isVisibleByElement: function (a) {

            var b = !1;

            return _.isElement(a) && $.each(this.getVisible() || [], function (c, d) {

                return d.element == a ? (b = !0, !1) : void 0

            }), b

        },

        getHighestTooltip: function () {

            var a, b = 0;

            return $.each(this.tooltips, function (c, d) {

                d.zIndex > b && (b = d.zIndex, a = d)

            }), a

        },

        resetZ: function () {

            this.getVisible()

                .length <= 1 && $.each(this.tooltips, function (a, b) {

                b.is("build") && !b.options.zIndex && b._tooltip.css({

                    zIndex: b.zIndex = +Tooltips.options.startingZIndex

                })

            })

        },

        clearAjaxCache: function () {

            $.each(this.tooltips, $.proxy(function (a, b) {

                b.options.ajax && (b._cache && b._cache.xhr && (b._cache.xhr.abort(), b._cache.xhr = null), b.is("updated", !1), b.is("updating", !1), b.is("sanitized", !1))

            }, this)), AjaxCache.clear()

        },

        add: function (a) {

            this.tooltips[a.uid] = a

        },

        remove: function (a) {

            var b = this._getTooltips(a);

            this.removeTooltips(b)

        },

        removeTooltips: function (a) {

            a && $.each(a, $.proxy(function (a, b) {

                var c = b.uid;

                delete this.tooltips[c], Browser.IE && Browser.IE < 9 ? _.defer(function () {

                    b.remove()

                }) : b.remove()

            }, this))

        },

        removeDetached: function () {

            var a = this.getNests(),

                b = [];

            a.length > 0 && $.each(a, function (a, c) {

                c.is("detached") && (b.push(c), c.attach())

            }), $.each(this.tooltips, $.proxy(function (a, b) {

                b.element && !_.element.isAttached(b.element) && this.remove(b.element)

            }, this)), $.each(b, function (a, b) {

                b.detach()

            })

        },

        removeAll: function () {

            $.each(this.tooltips, $.proxy(function (a, b) {

                b.element && this.remove(b.element)

            }, this)), this.tooltips = {}

        },

        setDefaultSkin: function (a) {

            this.options.defaultSkin = a || "dark"

        },

        setStartingZIndex: function (a) {

            this.options.startingZIndex = a || 0

        }

    };

    return Tooltips.Position = {

        inversedPosition: {

            left: "right",

            right: "left",

            top: "bottom",

            bottom: "top",

            middle: "middle",

            center: "center"

        },

        getInversedPosition: function (a) {

            var b = Position.split(a),

                c = b[1],

                d = b[2],

                e = Position.getOrientation(a),

                f = $.extend({

                    horizontal: !0,

                    vertical: !0

                }, arguments[1] || {});

            return "horizontal" == e ? (f.vertical && (c = this.inversedPosition[c]), f.horizontal && (d = this.inversedPosition[d])) : (f.vertical && (d = this.inversedPosition[d]), f.horizontal && (c = this.inversedPosition[c])), c + d

        },

        getTooltipPositionFromTarget: function (a) {

            var b = Position.split(a);

            return this.getInversedPosition(b[1] + this.inversedPosition[b[2]])

        }

    }, $.extend(Tooltip.prototype, {

        supportsLoading: Support.css.transform && Support.css.animation,

        initialize: function (element, content) {

            if (this.element = element, this.element) {

                var options;

                "object" != $.type(content) || _.isElement(content) || _.isText(content) || _.isDocumentFragment(content) || content instanceof $ ? options = arguments[2] || {} : (options = content, content = null);

                var dataOptions = $(element)

                    .data("tipped-options");

                dataOptions && (options = deepExtend($.extend({}, options), eval("({" + dataOptions + "})"))), this.options = Options.create(options), this._cache = {

                    dimensions: {

                        width: 0,

                        height: 0

                    },

                    events: [],

                    timers: {},

                    layouts: {},

                    is: {},

                    fnCallFn: "",

                    updatedTo: {}

                }, this.queues = {

                    showhide: $({})

                };

                var title = $(element)

                    .attr("title") || $(element)

                    .data("tipped-restore-title");

                if (!content) {

                    var dt = $(element)

                        .attr("data-tipped");

                    if (dt ? content = dt : title && (content = title), content) {

                        var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

                        content = content.replace(SCRIPT_REGEX, "")

                    }

                }

                if ((!content || content instanceof $ && !content[0]) && !(this.options.ajax && this.options.ajax.url || this.options.inline)) return this._aborted = !0, void 0;

                title && ($(element)

                    .data("tipped-restore-title", title), $(element)[0].setAttribute("title", "")), this.content = content, this.title = $(this.element)

                    .data("tipped-title"), "undefined" != $.type(this.options.title) && (this.title = this.options.title), this.zIndex = this.options.zIndex || +Tooltips.options.startingZIndex;

                var uids = $(element)

                    .data("tipped-uids");

                uids || (uids = []);

                var uid = getUID();

                this.uid = uid, uids.push(uid), $(element)

                    .data("tipped-uids", uids);

                var parentTooltipElement = $(this.element)

                        .closest(".tpd-tooltip")[0],

                    parentTooltip;

                parentTooltipElement && (parentTooltip = Tooltips.getTooltipByTooltipElement(parentTooltipElement)) && parentTooltip.is("nest", !0);

                var target = this.options.target;

                this.target = "mouse" == target ? this.element : "element" != target && target ? _.isElement(target) ? target : target instanceof $ && target[0] ? target[0] : this.element : this.element, this.options.inline && (this.content = $("#" + this.options.inline)[0]), this.options.ajax && (this.__content = this.content), "function" == $.type(this.content) && (this._fn = this.content), this.preBuild(), Tooltips.add(this)

            }

        },

        remove: function () {

            this.unbind(), this.clearTimers(), this.restoreElementToMarker(), this.stopLoading(), this.abort(), this.is("build") && this._tooltip && (this._tooltip.remove(), this._tooltip = null);

            var a = $(this.element)

                    .data("tipped-uids") || [],

                b = $.inArray(this.uid, a);

            if (b > -1 && (a.splice(b, 1), $(this.element)

                .data("tipped-uids", a)), a.length < 1) {

                var c, d = "tipped-restore-title";

                (c = $(this.element)

                    .data(d)) && ("" != !$(this.element)[0].getAttribute("title") && $(this.element)

                    .attr("title", c), $(this.element)

                    .removeData(d)), $(this.element)

                    .removeData("tipped-uids")

            }

            var e = $(this.element)

                    .attr("class") || "",

                f = e.replace(/(tpd-delegation-uid-)\d+/g, "")

                    .replace(/^\s\s*/, "")

                    .replace(/\s\s*$/, "");

            $(this.element)

                .attr("class", f)

        },

        detach: function () {

            this.options.detach && !this.is("detached") && (this._tooltip && this._tooltip.detach(), this.is("detached", !0))

        },

        attach: function () {

            if (this.is("detached")) {

                var a;

                if ("string" == $.type(this.options.container)) {

                    var b = this.target;

                    "mouse" == b && (b = this.element), a = $($(b)

                        .closest(this.options.container)

                        .first())

                } else a = $(this.options.container);

                a[0] || (a = $(document.body)), a.append(this._tooltip), this.is("detached", !1)

            }

        },

        preBuild: function () {

            this.is("detached", !0);

            var a = {

                left: "-10000px",

                top: "-10000px",

                opacity: 0,

                zIndex: this.zIndex

            };

            this._tooltip = $("<div>")

                .addClass("tpd-tooltip")

                .addClass("tpd-skin-" + Tooltips.options.defaultSkin)

                .addClass("tpd-size-" + this.options.size)

                .css(a)

                .hide(), this.createPreBuildObservers()

        },

        build: function () {

            this.is("build") || (this.attach(), Browser.IE && Browser.IE < 7 && this._tooltip.append(this.iframeShim = $("<iframe>")

                .addClass("tpd-iframeshim")

                .attr({

                    frameBorder: 0,

                    src: "javascript:'';"

                })), this._tooltip.append(this._skin = $("<div>")

                .addClass("tpd-skin"))

                .append(this._contentWrapper = $("<div>")

                    .addClass("tpd-content-wrapper")

                    .append(this._contentSpacer = $("<div>")

                        .addClass("tpd-content-spacer")

                        .append(this._titleWrapper = $("<div>")

                            .addClass("tpd-title-wrapper")

                            .append(this._titleSpacer = $("<div>")

                                .addClass("tpd-title-spacer")

                                .append(this._titleRelative = $("<div>")

                                    .addClass("tpd-title-relative")

                                    .append(this._titleRelativePadder = $("<div>")

                                        .addClass("tpd-title-relative-padder")

                                        .append(this._title = $("<div>")

                                            .addClass("tpd-title")))))

                            .append(this._close = $("<div>")

                                .addClass("tpd-close")

                                .append($("<div>")

                                    .addClass("tpd-close-icon")

                                    .html("&times;"))))

                        .append(this._contentRelative = $("<div>")

                            .addClass("tpd-content-relative")

                            .append(this._contentRelativePadder = $("<div>")

                                .addClass("tpd-content-relative-padder")

                                .append(this._content = $("<div>")

                                    .addClass("tpd-content")))

                            .append(this._inner_close = $("<div>")

                                .addClass("tpd-close")

                                .append($("<div>")

                                    .addClass("tpd-close-icon")

                                    .html("&times;")))))), this.skin = new Skin(this), this._contentSpacer.css({

                "border-radius": Math.max(this.skin._css.radius - this.skin._css.border, 0)

            }), this.createPostBuildObservers(), this.is("build", !0))

        },

        createPostBuildObservers: function () {

            this._tooltip.delegate(".tpd-close, .close-tooltip", "click", $.proxy(function (a) {

                a.stopPropagation(), a.preventDefault(), this.is("api", !1), this.hide(!0)

            }, this))

        },

        createPreBuildObservers: function () {

            this.bind(this.element, "mouseenter", this.setActive), this.bind(this._tooltip, Support.touch && Browser.MobileSafari ? "touchstart" : "mouseenter", this.setActive), this.bind(this.element, "mouseleave", function (a) {

                this.setIdle(a)

            }), this.bind(this._tooltip, "mouseleave", function (a) {

                this.setIdle(a)

            }), this.options.showOn && ($.each(this.options.showOn, $.proxy(function (a, b) {

                var c, d = !1;

                switch (a) {

                    case "element":

                        c = this.element, this.options.hideOn && this.options.showOn && "click" == this.options.hideOn.element && "click" == this.options.showOn.element && (d = !0, this.is("toggleable", d));

                        break;

                    case "tooltip":

                        c = this._tooltip;

                        break;

                    case "target":

                        c = this.target

                }

                if (c && b) {

                    var e = b;

                    this.bind(c, e, "click" == b && d ? function () {

                        this.is("api", !1), this.toggle()

                    } : function () {

                        this.is("api", !1), this.showDelayed()

                    })

                }

            }, this)), Support.touch && Browser.MobileSafari && this.bind(this._tooltip, "touchend", function () {

                this._tooltipTouchEndTime = (new Date)

                    .getTime()

            })), this.options.hideOn && $.each(this.options.hideOn, $.proxy(function (a, b) {

                var c;

                switch (a) {

                    case "element":

                        if (this.is("toggleable") && "click" == b) return;

                        c = this.element;

                        break;

                    case "tooltip":

                        c = this._tooltip;

                        break;

                    case "target":

                        c = this.target

                }

                if (c && b) {

                    var d = b;

                    Support.touch && Browser.MobileSafari && /^(target|element)/.test(a) && /mouse(leave|out)/.test(d) ? this.bind(c, d, function (a) {

                        if (this._tooltipTouchEndTime && /^mouse(leave|out)$/.test(a.type)) {

                            var b = (new Date)

                                .getTime();

                            if (b - this._tooltipTouchEndTime < 450) return

                        }

                        this.is("api", !1), this.hideDelayed()

                    }) : this.bind(c, d, function () {

                        this.is("api", !1), this.hideDelayed()

                    })

                }

            }, this)), this.options.hideOnClickOutside && ($(this.element)

                .addClass("tpd-hideOnClickOutside"), this.bind(document.documentElement, "click touchend", $.proxy(function (a) {

                if (this.visible()) {

                    var b = $(a.target)

                        .closest(".tpd-tooltip, .tpd-hideOnClickOutside")[0];

                    (!b || b && b != this._tooltip[0] && b != this.element) && this.hide()

                }

            }, this))), "mouse" == this.options.target && this.bind(this.element, "mouseenter mousemove", $.proxy(function (a) {

                this._cache.event = a

            }, this));

            var a = !1;

            this.options.showOn && "mouse" == this.options.target && !this.options.fixed && (a = !0), a && this.bind(this.element, "mousemove", function () {

                this.is("build") && (this.is("api", !1), this.position())

            })

        }

    }), $.extend(Tooltip.prototype, {

        stop: function () {

            if (this._tooltip) {

                var a = this.queues.showhide;

                a.queue([]), this._tooltip.stop(1, 0)

            }

        },

        showDelayed: function () {

            this.is("disabled") || (this.clearTimer("hide"), this.is("visible") || this.getTimer("show") || this.setTimer("show", $.proxy(function () {

                this.clearTimer("show"), this.show()

            }, this), this.options.showDelay || 1))

        },

        show: function () {

            if (this.clearTimer("hide"), !this.visible() && !this.is("disabled") && $(this.target)

                .is(":visible")) {

                this.is("visible", !0), this.attach(), this.stop();

                var a = this.queues.showhide;

                this.is("updated") || this.is("updating") || a.queue($.proxy(function (a) {

                    this._onResizeDimensions = {

                        width: 0,

                        height: 0

                    }, this.update($.proxy(function (b) {

                        return b ? (this.is("visible", !1), this.detach(), void 0) : (a(), void 0)

                    }, this))

                }, this)), a.queue($.proxy(function (a) {

                    this.is("sanitized") ? (this.stopLoading(), this._contentWrapper.css({

                        visibility: "visible"

                    }), this.is("resize-to-content", !0), a()) : (this._contentWrapper.css({

                        visibility: "hidden"

                    }), this.startLoading(), this.sanitize($.proxy(function () {

                        this.stopLoading(), this._contentWrapper.css({

                            visibility: "visible"

                        }), this.is("resize-to-content", !0), a()

                    }, this)))

                }, this)), a.queue($.proxy(function (a) {

                    this.position(), this.raise(), a()

                }, this)), a.queue($.proxy(function (a) {

                    if (this.is("updated") && "function" == $.type(this.options.onShow)) {

                        var b = new Visible(this._tooltip);

                        this.options.onShow(this._content[0], this.element), b.restore(), a()

                    } else a()

                }, this)), a.queue($.proxy(function (a) {

                    this._show(this.options.fadeIn, function () {

                        a()

                    })

                }, this))

            }

        },

        _show: function (a, b) {

            a = ("number" == $.type(a) ? a : this.options.fadeIn) || 0, b = b || ("function" == $.type(arguments[0]) ? arguments[0] : !1), this.options.hideOthers && Tooltips.hideAll(this), this._tooltip.fadeTo(a, 1, $.proxy(function () {

                b && b()

            }, this))

        },

        hideDelayed: function () {

            this.clearTimer("show"), this.getTimer("hide") || !this.visible() || this.is("disabled") || this.setTimer("hide", $.proxy(function () {

                this.clearTimer("hide"), this.hide()

            }, this), this.options.hideDelay || 1)

        },

        hide: function (a, b) {

            if (this.clearTimer("show"), this.visible() && !this.is("disabled")) {

                this.is("visible", !1), this.stop();

                var c = this.queues.showhide;

                c.queue($.proxy(function (a) {

                    this.abort(), a()

                }, this)), c.queue($.proxy(function (b) {

                    this._hide(a, b)

                }, this)), c.queue(function (a) {

                    Tooltips.resetZ(), a()

                }), c.queue($.proxy(function (a) {

                    this.clearUpdatedTo(), a()

                }, this)), "function" == $.type(this.options.afterHide) && this.is("updated") && c.queue($.proxy(function (a) {

                    this.options.afterHide(this._content[0], this.element), a()

                }, this)), this.options.cache || !this.options.ajax && !this._fn || c.queue($.proxy(function (a) {

                    this.is("updated", !1), this.is("updating", !1), this.is("sanitized", !1), a()

                }, this)), "function" == $.type(b) && c.queue(function (a) {

                    b(), a()

                }), c.queue($.proxy(function (a) {

                    this.detach(), a()

                }, this))

            }

        },

        _hide: function (a, b) {

            b = b || ("function" == $.type(arguments[0]) ? arguments[0] : !1), this.attach(), this._tooltip.fadeTo(a ? 0 : this.options.fadeOut, 0, $.proxy(function () {

                this.stopLoading(), this.is("resize-to-content", !1), this._tooltip.hide(), b && b()

            }, this))

        },

        toggle: function () {

            this.is("disabled") || this[this.visible() ? "hide" : "show"]()

        },

        raise: function () {

            if (this.is("build") && !this.options.zIndex) {

                var a = Tooltips.getHighestTooltip();

                a && a != this && this.zIndex <= a.zIndex && (this.zIndex = a.zIndex + 1, this._tooltip.css({

                    "z-index": this.zIndex

                }), this._tooltipShadow && (this._tooltipShadow.css({

                    "z-index": this.zIndex

                }), this.zIndex = a.zIndex + 2, this._tooltip.css({

                    "z-index": this.zIndex

                })))

            }

        }

    }), $.extend(Tooltip.prototype, {

        createElementMarker: function () {

            !this.elementMarker && this.content && _.element.isAttached(this.content) && ($(this.content)

                .data("tpd-restore-inline-display", $(this.content)

                    .css("display")), this.elementMarker = $("<div>")

                .hide(), $(this.content)

                .before($(this.elementMarker)

                    .hide()))

        },

        restoreElementToMarker: function () {

            var a;

            this.content, this.elementMarker && this.content && ((a = $(this.content)

                .data("tpd-restore-inline-display")) && $(this.content)

                .css({

                    display: a

                }), $(this.elementMarker)

                .before(this.content)

                .remove())

        },

        startLoading: function () {

            this.is("loading") || (this.build(), this.is("loading", !0), this.options.spinner && (this._tooltip.addClass("tpd-is-loading"), this.skin.startLoading(), this.is("resize-to-content") || (this.position(), this.raise(), this._show())))

        },

        stopLoading: function () {

            this.build(), this.is("loading", !1), this.options.spinner && (this._tooltip.removeClass("tpd-is-loading"), this.skin.stopLoading())

        },

        abort: function () {

            this.abortAjax(), this.abortSanitize(), this.is("refreshed-before-sanitized", !1)

        },

        abortSanitize: function () {

            this._cache.voila && (this._cache.voila.abort(), this._cache.voila = null)

        },

        abortAjax: function () {

            this._cache.xhr && (this._cache.xhr.abort(), this._cache.xhr = null, this.is("updated", !1), this.is("updating", !1))

        },

        update: function (a) {

            if (!this.is("updating")) {

                this.is("updating", !0), this.build();

                var b = this.options.inline ? "inline" : this.options.ajax ? "ajax" : _.isElement(this.content) || _.isText(this.content) || _.isDocumentFragment(this.content) ? "element" : this._fn ? "function" : "html";

                switch (this._contentWrapper.css({

                    visibility: "hidden"

                }), b) {

                    case "html":

                    case "element":

                    case "inline":

                        if (this.is("updated")) return a && a(), void 0;

                        this._update(this.content, a);

                        break;

                    case "function":

                        if (this.is("updated")) return a && a(), void 0;

                        var c = this._fn(this.element);

                        if (!c) return this.is("updating", !1), a && a(!0), void 0;

                        this._update(c, a)

                }

            }

        },

        _update: function (a, b) {

            var c = {

                title: this.options.title,

                close: this.options.close

            };

            "string" == $.type(a) || _.isElement(a) || _.isText(a) || _.isDocumentFragment(a) || a instanceof $ ? c.content = a : $.extend(c, a);

            var a = c.content,

                d = c.title,

                e = c.close;

            this.content = a, this.title = d, this.close = e, this.createElementMarker(), (_.isElement(a) || a instanceof $) && $(a)

                .show(), this._content.html(this.content), this._title.html(d && "string" == $.type(d) ? d : ""), this._titleWrapper[d ? "show" : "hide"](), this._close[(this.title || this.options.title) && e ? "show" : "hide"]();

            var f = e && !(this.options.title || this.title),

                g = e && !(this.options.title || this.title) && "overlap" != e,

                h = e && (this.options.title || this.title) && "overlap" != e;

            this._inner_close[f ? "show" : "hide"](), this._tooltip[(g ? "add" : "remove") + "Class"]("tpd-has-inner-close"), this._tooltip[(h ? "add" : "remove") + "Class"]("tpd-has-title-close"), this._content[(this.options.padding ? "remove" : "add") + "Class"]("tpd-content-no-padding"), this.finishUpdate(b)

        },

        sanitize: function (a) {

            return !this.options.voila || this._content.find("img")

                .length < 1 ? (this.is("sanitized", !0), a && a(), void 0) : (this._cache.voila = Voila(this._content, {

                method: "onload"

            }, $.proxy(function (b) {

                this._markImagesAsSanitized(b.images), this.is("refreshed-before-sanitized") ? (this.is("refreshed-before-sanitized", !1), this.sanitize(a)) : (this.is("sanitized", !0), a && a())

            }, this)), void 0)

        },

        _markImagesAsSanitized: function (a) {

            $.each(a, function (a, b) {

                var c = b.img;

                $(c)

                    .data("completed-src", b.img.src)

            })

        },

        _hasAllImagesSanitized: function () {

            var a = !0;

            return this._content.find("img")

                .each(function (b, c) {

                    var d = $(c)

                        .data("completed-src");

                    return d && c.src == d ? void 0 : (a = !1, !1)

                }), a

        },

        refresh: function () {

            if (this.visible()) {

                if (!this.is("sanitized")) return this.is("refreshed-before-sanitized", !0), void 0;

                this.is("refreshing", !0), this.clearTimer("refresh-spinner"), !this.options.voila || this._content.find("img")

                    .length < 1 || this._hasAllImagesSanitized() ? (this.is("should-update-dimensions", !0), this.position(), this.is("refreshing", !1)) : (this.is("sanitized", !1), this._contentWrapper.css({

                    visibility: "hidden"

                }), this.startLoading(), this.sanitize($.proxy(function () {

                    this._contentWrapper.css({

                        visibility: "visible"

                    }), this.stopLoading(), this.is("should-update-dimensions", !0), this.position(), this.is("refreshing", !1)

                }, this)))

            }

        },

        finishUpdate: function (a) {

            if (this.is("updated", !0), this.is("updating", !1), "function" == $.type(this.options.afterUpdate)) {

                var b = this._contentWrapper.css("visibility");

                b && this._contentWrapper.css({

                    visibility: "visible"

                }), this.options.afterUpdate(this._content[0], this.element), b && this._contentWrapper.css({

                    visibility: "hidden"

                })

            }

            a && a()

        }

    }), $.extend(Tooltip.prototype, {

        clearUpdatedTo: function () {

            this._cache.updatedTo = {}

        },

        updateDimensionsToContent: function (a, b) {

            this.skin.build();

            var c = this.is("loading"),

                d = this._cache.updatedTo;

            if ((this._maxWidthPass || this.is("api") || this.is("should-update-dimensions") || d.stemPosition != b || d.loading != c) && (!c || !this.is("resize-to-content"))) {

                this._cache.updatedTo = {

                    type: this.is("resize-to-content") ? "content" : "spinner",

                    loading: this.is("loading"),

                    stemPosition: b

                }, this.is("should-update-dimensions") && this.is("should-update-dimensions", !1);

                var a = a || this.options.position.target,

                    b = b || this.options.position.tooltip,

                    e = Position.getSide(b),

                    f = Position.getOrientation(b),

                    g = this.skin._css.border;

                this._tooltip.addClass("tpd-tooltip-measuring");

                var h = this._tooltip.attr("style");

                this._tooltip.removeAttr("style");

                var i = {

                        top: g,

                        right: g,

                        bottom: g,

                        left: g

                    },

                    j = 0;

                if ("vertical" == Position.getOrientation(b)) {

                    this.options.stem && (i[e] = this.skin["stem_" + e].getMath()

                        .dimensions.outside.height);

                    var k = this.getMouseRoom();

                    k[Position._flip[e]] && (i[e] += k[Position._flip[e]]);

                    var l = this.getContainmentLayout(b),

                        m = this.getPaddingLine(a),

                        n = !1;

                    Position.isPointWithinBoxLayout(m.x1, m.y1, l) || Position.isPointWithinBoxLayout(m.x2, m.y2, l) ? n = !0 : $.each("top right bottom left".split(" "), $.proxy(function (a, b) {

                        var c = this.getSideLine(l, b);

                        return Position.intersectsLine(m.x1, m.y1, m.x2, m.y2, c.x1, c.y1, c.x2, c.y2) ? (n = !0, !1) : void 0

                    }, this)), n && (j = "left" == e ? m.x1 - l.position.left : l.position.left + l.dimensions.width - m.x1, i[e] += j)

                }

                if (this.options.offset && "vertical" == f) {

                    var o = Position.adjustOffsetBasedOnPosition(this.options.offset, this.options.position.target, a);

                    0 !== o.x && (i.right += Math.abs(o.x))

                }

                var j;

                this.options.containment && (j = this.options.containment.padding) && ($.each(i, function (a) {

                    i[a] += j

                }), "vertical" == f ? i["left" == e ? "left" : "right"] -= j : i["top" == e ? "top" : "bottom"] -= j);

                var p = Bounds.viewport(),

                    q = this.close && "overlap" != this.close && !this.title,

                    r = {

                        width: 0,

                        height: 0

                    };

                q && (r = this._innerCloseDimensions || {

                    width: this._inner_close.outerWidth(!0),

                    height: this._inner_close.outerHeight(!0)

                }, this._innerCloseDimensions = r), this._contentRelativePadder.css({

                    "padding-right": r.width

                }), this._contentSpacer.css({

                    width: p.width - i.left - i.right

                });

                var s = {

                        width: this._content.innerWidth() + r.width,

                        height: Math.max(this._content.innerHeight(), r.height || 0)

                    },

                    t = {

                        width: 0,

                        height: 0

                    };

                if (this.title) {

                    var u = {

                        width: 0,

                        height: 0

                    };

                    this._titleWrapper.add(this._titleSpacer)

                        .css({

                            width: "auto",

                            height: "auto"

                        }), this.close && "overlap" != this.close && (u = {

                        width: this._close.outerWidth(!0),

                        height: this._close.outerHeight(!0)

                    }, this._close.hide()), this._maxWidthPass && s.width > this.options.maxWidth && this._titleRelative.css({

                        width: s.width

                    }), this._titleRelativePadder.css({

                        "padding-right": u.width

                    });

                    var v = parseFloat(this._titleWrapper.css("border-bottom-width"));

                    t = {

                        width: this.title ? this._titleWrapper.innerWidth() : 0,

                        height: Math.max(this.title ? this._titleWrapper.innerHeight() + v : 0, u.height + v)

                    }, t.width > p.width - i.left - i.right && (t.width = p.width - i.left - i.right, this._titleSpacer.css({

                        width: t.width

                    }), t.height = Math.max(this.title ? this._titleWrapper.innerHeight() + v : 0, u.height + v)), s.width = Math.max(t.width, s.width), s.height += t.height, this._titleWrapper.css({

                        height: Math.max(this.title ? this._titleWrapper.innerHeight() : 0, u.height)

                    }), this.close && this._close.show()

                }

                if (this.options.stem) {

                    var w = "vertical" == f ? "height" : "width",

                        x = this.skin["stem_" + e].getMath(),

                        y = x.outside.width + 2 * this.skin._css.radius;

                    s[w] < y && (s[w] = y)

                }

                if (this._contentSpacer.css({

                    width: s.width

                }), s.height != Math.max(this._content.innerHeight(), r.height) + (this.title ? this._titleRelative.outerHeight() : 0) && s.width++, this.is("resize-to-content") || (s = this.skin._css.spinner.dimensions), this.setDimensions(s), i = {

                    top: g,

                    right: g,

                    bottom: g,

                    left: g

                }, this.options.stem) {

                    var z = Position.getSide(b);

                    i[z] = this.skin.stem_top.getMath()

                        .dimensions.outside.height

                }

                this._contentSpacer.css({

                    "margin-top": i.top,

                    "margin-left": +i.left,

                    width: s.width

                }), (this.title || this.close) && this._titleWrapper.css({

                    height: this._titleWrapper.innerHeight(),

                    width: s.width

                }), this._tooltip.removeClass("tpd-tooltip-measuring"), this._tooltip.attr("style", h);

                var A = this._contentRelative.add(this._titleRelative);

                this.options.maxWidth && s.width > this.options.maxWidth && !this._maxWidthPass && this.is("resize-to-content") && (A.css({

                    width: this.options.maxWidth

                }), this._maxWidthPass = !0, this.updateDimensionsToContent(a, b), this._maxWidthPass = !1, A.css({

                    width: "auto"

                }))

            }

        },

        setDimensions: function (a) {

            this.skin.setDimensions(a)

        },

        getContainmentSpace: function (a, b) {

            var c = this.getContainmentLayout(a, b),

                d = this.getTargetLayout(),

                e = d.position,

                f = d.dimensions,

                g = c.position,

                h = c.dimensions,

                i = {

                    top: Math.max(e.top - g.top, 0),

                    bottom: Math.max(g.top + h.height - (e.top + f.height), 0),

                    left: Math.max(e.left - g.left, 0),

                    right: Math.max(g.left + h.width - (e.left + f.width), 0)

                };

            return e.top > g.top + h.height && (i.top -= e.top - (g.top + h.height)), e.top + f.height < g.top && (i.bottom -= g.top - (e.top + f.height)), e.left > g.left + h.width && g.left + h.width >= e.left && (i.left -= e.left - (g.left + h.width)), e.left + f.width < g.left && (i.right -= g.left - (e.left + f.width)), this._cache.layouts.containmentSpace = i, i

        },

        position: function () {

            if (this.visible()) {

                this.is("positioning", !0), this._cache.layouts = {}, this._cache.dimensions;

                var a = this.options.position.target,

                    b = this.options.position.tooltip,

                    c = b,

                    d = a;

                this.updateDimensionsToContent(d, c);

                var e = this.getPositionBasedOnTarget(d, c),

                    f = deepExtend(e),

                    g = [];

                if (this.options.containment) {

                    var h = !1,

                        i = {};

                    if ($.each("top right bottom left".split(" "), $.proxy(function (a, b) {

                        (i[b] = this.isSideWithinContainment(b, c, !0)) && (h = !0)

                    }, this)), h || (f.contained = !0), f.contained) this.setPosition(f);

                    else {

                        g.unshift({

                            position: f,

                            targetPosition: d,

                            stemPosition: c

                        });

                        var j = Position.flip(a);

                        if (d = j, c = Position.flip(b), i[Position.getSide(d)] ? (this.updateDimensionsToContent(d, c), f = this.getPositionBasedOnTarget(d, c)) : f.contained = !1, f.contained) this.setPosition(f, c);

                        else {

                            g.unshift({

                                position: f,

                                targetPosition: d,

                                stemPosition: c

                            });

                            var k, l = a,

                                m = this.getContainmentSpace(c, !0),

                                n = "horizontal" == Position.getOrientation(l) ? ["left", "right"] : ["top", "bottom"];

                            k = m[n[0]] === m[n[1]] ? "horizontal" == Position.getOrientation(l) ? "left" : "top" : n[m[n[0]] > m[n[1]] ? 0 : 1];

                            var o = Position.split(l)[1],

                                p = k + o,

                                q = Position.flip(p);

                            if (d = p, c = q, i[Position.getSide(d)] ? (this.updateDimensionsToContent(d, c), f = this.getPositionBasedOnTarget(d, c)) : f.contained = !1, f.contained) this.setPosition(f, c);

                            else {

                                g.unshift({

                                    position: f,

                                    targetPosition: d,

                                    stemPosition: c

                                });

                                var r, s = [];

                                if ($.each(g, function (a, b) {

                                    if (b.position.top >= 0 && b.position.left >= 0) r = b;

                                    else {

                                        var c = b.position.top >= 0 ? 1 : Math.abs(b.position.top),

                                            d = b.position.left >= 0 ? 1 : Math.abs(b.position.left);

                                        s.push({

                                            result: b,

                                            negativity: c * d

                                        })

                                    }

                                }), !r) {

                                    var t = s[s.length - 1];

                                    $.each(s, function (a, b) {

                                        b.negativity < t.negativity && (t = b)

                                    }), r = t.result

                                }

                                this.updateDimensionsToContent(r.targetPosition, r.stemPosition, !0), this.setPosition(r.position, r.stemPosition)

                            }

                        }

                    }

                } else this.setPosition(f);

                this._cache.dimensions = this.skin._vars.dimensions, this.skin.paint(), this.is("positioning", !1)

            }

        },

        getPositionBasedOnTarget: function (a, b) {

            var b = b || this.options.position.tooltip,

                c = this.getTargetDimensions(),

                d = {

                    left: 0,

                    top: 0

                },

                e = {

                    left: 0,

                    top: 0

                };

            Position.getSide(a);

            var f = this.skin._vars,

                g = f.frames[Position.getSide(b)],

                h = Position.getOrientation(a),

                i = Position.split(a);

            if ("horizontal" == h) {

                var j = Math.floor(.5 * c.width);

                switch (i[2]) {

                    case "left":

                        e.left = j;

                        break;

                    case "middle":

                        d.left = c.width - j, e.left = d.left;

                        break;

                    case "right":

                        d.left = c.width, e.left = c.width - j

                }

                "bottom" == i[1] && (d.top = c.height, e.top = c.height)

            } else {

                var j = Math.floor(.5 * c.height);

                switch (i[2]) {

                    case "top":

                        e.top = j;

                        break;

                    case "middle":

                        d.top = c.height - j, e.top = d.top;

                        break;

                    case "bottom":

                        e.top = c.height - j, d.top = c.height

                }

                "right" == i[1] && (d.left = c.width, e.left = c.width)

            }

            var k = this.getTargetPosition(),

                l = $.extend({}, c, {

                    top: k.top,

                    left: k.left,

                    connection: d,

                    max: e

                }),

                m = {

                    width: g.dimensions.width,

                    height: g.dimensions.height,

                    top: 0,

                    left: 0,

                    connection: f.connections[b].connection,

                    stem: f.connections[b].stem

                };

            if (m.top = l.top + l.connection.top, m.left = l.left + l.connection.left, m.top -= m.connection.top, m.left -= m.connection.left, this.options.stem) {

                var n = f.stemDimensions.width,

                    o = {

                        stem: {

                            top: m.top + m.stem.connection.top,

                            left: m.left + m.stem.connection.left

                        },

                        connection: {

                            top: l.top + l.connection.top,

                            left: l.left + l.connection.left

                        },

                        max: {

                            top: l.top + l.max.top,

                            left: l.left + l.max.left

                        }

                    };

                if (!Position.isPointWithinBox(o.stem.left, o.stem.top, o.connection.left, o.connection.top, o.max.left, o.max.top)) {

                    var o = {

                            stem: {

                                top: m.top + m.stem.connection.top,

                                left: m.left + m.stem.connection.left

                            },

                            connection: {

                                top: l.top + l.connection.top,

                                left: l.left + l.connection.left

                            },

                            max: {

                                top: l.top + l.max.top,

                                left: l.left + l.max.left

                            }

                        },

                        p = {

                            connection: Position.getDistance(o.stem.left, o.stem.top, o.connection.left, o.connection.top),

                            max: Position.getDistance(o.stem.left, o.stem.top, o.max.left, o.max.top)

                        },

                        q = Math.min(p.connection, p.max),

                        r = o[p.connection <= p.max ? "connection" : "max"],

                        s = "horizontal" == Position.getOrientation(b) ? "left" : "top",

                        t = Position.getDistance(o.connection.left, o.connection.top, o.max.left, o.max.top);

                    if (t >= n) {

                        var u = {

                                top: 0,

                                left: 0

                            },

                            v = r[s] < o.stem[s] ? -1 : 1;

                        u[s] = q * v, u[s] += Math.floor(.5 * n) * v, m.left += u.left, m.top += u.top

                    } else {

                        $.extend(o, {

                            center: {

                                top: Math.round(l.top + .5 * c.height),

                                left: Math.round(l.left + .5 * c.left)

                            }

                        });

                        var w = {

                                connection: Position.getDistance(o.center.left, o.center.top, o.connection.left, o.connection.top),

                                max: Position.getDistance(o.center.left, o.center.top, o.max.left, o.max.top)

                            },

                            q = p[w.connection <= w.max ? "connection" : "max"],

                            x = {

                                top: 0,

                                left: 0

                            },

                            v = r[s] < o.stem[s] ? -1 : 1;

                        x[s] = q * v, m.left += x.left, m.top += x.top

                    }

                }

            }

            if (this.options.offset) {

                var y = $.extend({}, this.options.offset);

                y = Position.adjustOffsetBasedOnPosition(y, this.options.position.target, a), m.top += y.y, m.left += y.x

            }

            var z = this.getContainment({

                    top: m.top,

                    left: m.left

                }, b),

                A = z.horizontal && z.vertical,

                B = {

                    x: 0,

                    y: 0

                },

                C = Position.getOrientation(b);

            if (!z[C]) {

                var D = "horizontal" == C,

                    E = D ? ["left", "right"] : ["up", "down"],

                    F = D ? "x" : "y",

                    G = D ? "left" : "top",

                    H = z.correction[F],

                    I = this.getContainmentLayout(b),

                    J = I.position[D ? "left" : "top"];

                if (0 !== H) {

                    var K = f.connections[b].move,

                        L = K[E[0 > -1 * H ? 0 : 1]],

                        M = 0 > H ? -1 : 1;

                    if (L >= H * M && m[G] + H >= J) m[G] += H, B[F] = -1 * H, A = !0;

                    else if (Position.getOrientation(a) == Position.getOrientation(b)) {

                        if (m[G] += L * M, B[F] = -1 * L * M, m[G] < J) {

                            var N = J - m[G],

                                O = K[E[0]] + K[E[1]],

                                N = Math.min(N, O);

                            m[G] += N;

                            var P = B[F] - N;

                            P >= f.connections[b].move[E[0]] && P <= f.connections[b].move[E[1]] && (B[F] -= N)

                        }

                        z = this.getContainment({

                            top: m.top,

                            left: m.left

                        }, b);

                        var Q = z.correction[F],

                            R = deepExtend({}, m);

                        this.options.offset && (R.left -= this.options.offset.x, R.top -= this.options.offset.y);

                        var o = {

                            stem: {

                                top: R.top + m.stem.connection.top,

                                left: R.left + m.stem.connection.left

                            }

                        };

                        o.stem[G] += B[F];

                        var S = this.getTargetLayout(),

                            n = f.stemDimensions.width,

                            T = Math.floor(.5 * n),

                            U = J + I.dimensions[D ? "width" : "height"];

                        if ("x" == F) {

                            var V = S.position.left + T;

                            Q > 0 && (V += S.dimensions.width - 2 * T), (0 > Q && o.stem.left + Q >= V && R.left + Q >= J || Q > 0 && o.stem.left + Q <= V && R.left + Q <= U) && (R.left += Q)

                        } else {

                            var W = S.position.top + T;

                            Q > 0 && (W += S.dimensions.height - 2 * T), (0 > Q && o.stem.top + Q >= W && R.top + Q >= J || Q > 0 && o.stem.top + Q <= W && R.top + Q <= U) && (R.top += Q)

                        }

                        m = R, this.options.offset && (m.left += this.options.offset.x, m.top += this.options.offset.y)

                    }

                }

                z = this.getContainment({

                    top: m.top,

                    left: m.left

                }, b), A = z.horizontal && z.vertical

            }

            return {

                top: m.top,

                left: m.left,

                contained: A,

                shift: B

            }

        },

        setPosition: function (a, b) {

            var c = this._position;

            if (!c || c.top != a.top || c.left != a.left) {

                var d;

                if (this.options.container != document.body) {

                    if ("string" == $.type(this.options.container)) {

                        var e = this.target;

                        "mouse" == e && (e = this.element), d = $($(e)

                            .closest(this.options.container)

                            .first())

                    } else d = $(d);

                    if (d[0]) {

                        var f = $(d)

                                .offset(),

                            g = {

                                top: Math.round(f.top),

                                left: Math.round(f.left)

                            },

                            h = {

                                top: Math.round($(d)

                                    .scrollTop()),

                                left: Math.round($(d)

                                    .scrollLeft())

                            };

                        a.top -= g.top, a.top += h.top, a.left -= g.left, a.left += h.left

                    }

                }

                this._position = a, this._tooltip.css({

                    top: a.top,

                    left: a.left

                })

            }

            this.skin.setStemPosition(b || this.options.position.tooltip, a.shift || {

                x: 0,

                y: 0

            })

        },

        getSideLine: function (a, b) {

            var c = a.position.left,

                d = a.position.top,

                e = a.position.left,

                f = a.position.top;

            switch (b) {

                case "top":

                    e += a.dimensions.width;

                    break;

                case "bottom":

                    d += a.dimensions.height, e += a.dimensions.width, f += a.dimensions.height;

                    break;

                case "left":

                    f += a.dimensions.height;

                    break;

                case "right":

                    c += a.dimensions.width, e += a.dimensions.width, f += a.dimensions.height

            }

            return {

                x1: c,

                y1: d,

                x2: e,

                y2: f

            }

        },

        isSideWithinContainment: function (a, b, c) {

            var d = this.getContainmentLayout(b, c),

                e = this.getTargetLayout(),

                f = this.getSideLine(e, a);

            if (Position.isPointWithinBoxLayout(f.x1, f.y1, d) || Position.isPointWithinBoxLayout(f.x2, f.y2, d)) return !0;

            var g = !1;

            return $.each("top right bottom left".split(" "), $.proxy(function (a, b) {

                var c = this.getSideLine(d, b);

                return Position.intersectsLine(f.x1, f.y1, f.x2, f.y2, c.x1, c.y1, c.x2, c.y2) ? (g = !0, !1) : void 0

            }, this)), g

        },

        getContainment: function (a, b) {

            var c = {

                horizontal: !0,

                vertical: !0,

                correction: {

                    y: 0,

                    x: 0

                }

            };

            if (this.options.containment) {

                var d = this.getContainmentLayout(b),

                    e = this.skin._vars.frames[Position.getSide(b)].dimensions;

                this.options.containment && ((a.left < d.position.left || a.left + e.width > d.position.left + d.dimensions.width) && (c.horizontal = !1, c.correction.x = a.left < d.position.left ? d.position.left - a.left : d.position.left + d.dimensions.width - (a.left + e.width)), (a.top < d.position.top || a.top + e.height > d.position.top + d.dimensions.height) && (c.vertical = !1, c.correction.y = a.top < d.position.top ? d.position.top - a.top : d.position.top + d.dimensions.height - (a.top + e.height)))

            }

            return c

        },

        getContainmentLayout: function (a, b) {

            var c = {

                    top: $(window)

                        .scrollTop(),

                    left: $(window)

                        .scrollLeft()

                },

                d = this.target;

            "mouse" == d && (d = this.element);

            var e, f = $(d)

                .closest(this.options.containment.selector)

                .first()[0];

            e = f && "viewport" != this.options.containment.selector ? {

                dimensions: {

                    width: $(f)

                        .innerWidth(),

                    height: $(f)

                        .innerHeight()

                },

                position: $(f)

                    .offset()

            } : {

                dimensions: Bounds.viewport(),

                position: c

            };

            var g = this.options.containment.padding;

            if (g && !b) {

                var h = Math.max(e.dimensions.height, e.dimensions.width);

                if (2 * g > h && (g = Math.max(Math.floor(.5 * h), 0)), g) {

                    e.dimensions.width -= 2 * g, e.dimensions.height -= 2 * g, e.position.top += g, e.position.left += g;

                    var i = Position.getOrientation(a);

                    "vertical" == i ? (e.dimensions.width += g, "left" == Position.getSide(a) && (e.position.left -= g)) : (e.dimensions.height += g, "top" == Position.getSide(a) && (e.position.top -= g))

                }

            }

            return this._cache.layouts.containmentLayout = e, e

        },

        getMouseRoom: function () {

            var a = {

                top: 0,

                left: 0,

                right: 0,

                bottom: 0

            };

            if ("mouse" == this.options.target && !this.is("api")) {

                var b = Mouse.getActualPosition(this._cache.event),

                    c = $(this.element)

                        .offset(),

                    d = {

                        width: $(this.element)

                            .innerWidth(),

                        height: $(this.element)

                            .innerHeight()

                    };

                a = {

                    top: Math.max(0, b.top - c.top),

                    bottom: Math.max(0, c.top + d.height - b.top),

                    left: Math.max(0, b.left - c.left),

                    right: Math.max(0, c.left + d.width - b.left)

                }

            }

            return a

        },

        getTargetPosition: function () {

            var a;

            if ("mouse" == this.options.target)

                if (this.is("api")) {

                    var b = $(this.element)

                        .offset();

                    a = {

                        top: Math.round(b.top),

                        left: Math.round(b.left)

                    }

                } else a = Mouse.getPosition(this._cache.event);

            else {

                var b = $(this.target)

                    .offset();

                a = {

                    top: Math.round(b.top),

                    left: Math.round(b.left)

                }

            }

            return this._cache.layouts.targetPosition = a, a

        },

        getTargetDimensions: function () {

            if (this._cache.layouts.targetDimensions) return this._cache.layouts.targetDimensions;

            var a;

            return a = "mouse" == this.options.target ? Mouse.getDimensions() : {

                width: $(this.target)

                    .innerWidth(),

                height: $(this.target)

                    .innerHeight()

            }, this._cache.layouts.targetDimensions = a, a

        },

        getTargetLayout: function () {

            if (this._cache.layouts.targetLayout) return this._cache.layouts.targetLayout;

            var a = {

                position: this.getTargetPosition(),

                dimensions: this.getTargetDimensions()

            };

            return this._cache.layouts.targetLayout = a, a

        },

        getPaddingLine: function (a) {

            var b = this.getTargetLayout(),

                c = "left";

            if ("vertical" == Position.getOrientation(a)) return this.getSideLine(b, Position.getSide(a));

            if (Position.isCorner(a)) {

                var d = Position.inverseCornerPlane(a);

                return c = Position.getSide(d), this.getSideLine(b, c)

            }

            var e = this.getSideLine(b, c),

                f = Math.round(.5 * b.dimensions.width);

            return e.x1 += f, e.x2 += f, e

        }

    }), $.extend(Tooltip.prototype, {

        setActive: function () {

            this.is("active", !0), this.visible() && this.raise(), this.options.hideAfter && this.clearTimer("idle")

        },

        setIdle: function () {

            this.is("active", !1), this.options.hideAfter && this.setTimer("idle", $.proxy(function () {

                this.clearTimer("idle"), this.is("active") || this.hide()

            }, this), this.options.hideAfter)

        }

    }), $.extend(Tooltip.prototype, {

        bind: function (a, b, c, d) {

            b = b;

            var e = $.proxy(c, d || this);

            this._cache.events.push({

                element: a,

                eventName: b,

                handler: e

            }), $(a)

                .bind(b, e)

        },

        unbind: function () {

            $.each(this._cache.events, function (a, b) {

                $(b.element)

                    .unbind(b.eventName, b.handler)

            }), this._cache.events = []

        }

    }), $.extend(Tooltip.prototype, {

        disable: function () {

            this.is("disabled") || this.is("disabled", !0)

        },

        enable: function () {

            this.is("disabled") && this.is("disabled", !1)

        }

    }), $.extend(Tooltip.prototype, {

        is: function (a, b) {

            return "boolean" == $.type(b) && (this._cache.is[a] = b), this._cache.is[a]

        },

        visible: function () {

            return this.is("visible")

        }

    }), $.extend(Tooltip.prototype, {

        setTimer: function (a, b, c) {

            this._cache.timers[a] = _.delay(b, c)

        },

        getTimer: function (a) {

            return this._cache.timers[a]

        },

        clearTimer: function (a) {

            this._cache.timers[a] && (clearTimeout(this._cache.timers[a]), delete this._cache.timers[a])

        },

        clearTimers: function () {

            $.each(this._cache.timers, function (a, b) {

                clearTimeout(b)

            }), this._cache.timers = {}

        }

    }), $.extend(Tipped, {

        init: function () {

            Tooltips.init()

        },

        create: function (a, b) {

            var c = $.extend({}, arguments[2] || {}),

                d = [];

            return _.isElement(a) ? d.push(new Tooltip(a, b, c)) : $(a)

                .each(function (a, e) {

                    d.push(new Tooltip(e, b, c))

                }), new Collection(d)

        },

        get: function (a) {

            var b = Tooltips.get(a);

            return new Collection(b)

        },

        findElement: function (a) {

            return Tooltips.findElement(a)

        },

        refresh: function (a, b, c) {

            return Tooltips.refresh(a, b, c), this

        },

        setStartingZIndex: function (a) {

            return Tooltips.setStartingZIndex(a), this

        },

        remove: function (a) {

            return Tooltips.remove(a), this

        }

    }), $.extend(Collection.prototype, {

        initialize: function (a) {

            return this.tooltips = a, this

        },

        items: function () {

            return $.each(this.tooltips, function (a, b) {

                b.is("api", !0)

            }), this.tooltips

        },

        refresh: function () {

            return $.each(this._tooltips, function (a, b) {

                b.is("visible") && b.refresh()

            }), this

        },

        remove: function () {

            return Tooltips.removeTooltips(this.tooltips), this.tooltips = [], this

        }

    }), Tipped.init(), Tipped

});

/*

 * ScrollToFixed

 * https://github.com/bigspotteddog/ScrollToFixed

 *

 * Copyright (c) 2011 Joseph Cava-Lynch

 * MIT license

 */

!function (a) {

    a.isScrollToFixed = function (b) {

        return !!a(b)

            .data("ScrollToFixed")

    }, a.ScrollToFixed = function (b, c) {

        function s() {

            f.trigger("preUnfixed.ScrollToFixed"), z(), f.trigger("unfixed.ScrollToFixed"), o = -1, l = f.offset()

                .top, m = f.offset()

                .left, d.options.offsets && (m += f.offset()

                .left - f.position()

                .left), n == -1 && (n = m), g = f.css("position"), e = !0, d.options.bottom != -1 && (f.trigger("preFixed.ScrollToFixed"), x(), f.trigger("fixed.ScrollToFixed"))

        }



        function t() {

            var a = d.options.limit;

            return a ? "function" == typeof a ? a.apply(f) : a : 0

        }



        function u() {

            return "fixed" === g

        }



        function v() {

            return "absolute" === g

        }



        function w() {

            return !(u() || v())

        }



        function x() {

            if (!u()) {

                var a = f[0].getBoundingClientRect();

                p.css({

                    display: f.css("display"),

                    width: a.width,

                    height: a.height,

                    float: f.css("float")

                }), cssOptions = {

                    "z-index": d.options.zIndex,

                    position: "fixed",

                    top: d.options.bottom == -1 ? B() : "",

                    bottom: d.options.bottom == -1 ? "" : d.options.bottom,

                    "margin-left": "0px"

                }, d.options.dontSetWidth || (cssOptions.width = f.css("width")), f.css(cssOptions), f.addClass(d.options.baseClassName), d.options.className && f.addClass(d.options.className), g = "fixed"

            }

        }



        function y() {

            var a = t(),

                b = m;

            d.options.removeOffsets && (b = "", a -= l), cssOptions = {

                position: "absolute",

                top: a,

                left: b,

                "margin-left": "0px",

                bottom: ""

            }, d.options.dontSetWidth || (cssOptions.width = f.css("width")), f.css(cssOptions), g = "absolute"

        }



        function z() {

            w() || (o = -1, p.css("display", "none"), f.css({

                "z-index": k,

                width: "",

                position: h,

                left: "",

                top: j,

                "margin-left": ""

            }), f.removeClass("scroll-to-fixed-fixed"), d.options.className && f.removeClass(d.options.className), g = null)

        }



        function A(a) {

            a != o && (f.css("left", m - a), o = a)

        }



        function B() {

            var a = d.options.marginTop;

            return a ? "function" == typeof a ? a.apply(f) : a : 0

        }



        function C() {

            if (a.isScrollToFixed(f) && !f.is(":hidden")) {

                var b = e,

                    c = w();

                e ? w() && (l = f.offset()

                    .top, m = f.offset()

                    .left) : s();

                var g = a(window)

                        .scrollLeft(),

                    i = a(window)

                        .scrollTop(),

                    j = t();

                d.options.minWidth && a(window)

                    .width() < d.options.minWidth ? w() && b || (E(), f.trigger("preUnfixed.ScrollToFixed"), z(), f.trigger("unfixed.ScrollToFixed")) : d.options.maxWidth && a(window)

                    .width() > d.options.maxWidth ? w() && b || (E(), f.trigger("preUnfixed.ScrollToFixed"), z(), f.trigger("unfixed.ScrollToFixed")) : d.options.bottom == -1 ? j > 0 && i >= j - B() ? c || v() && b || (E(), f.trigger("preAbsolute.ScrollToFixed"), y(), f.trigger("unfixed.ScrollToFixed")) : i >= l - B() ? (u() && b || (E(), f.trigger("preFixed.ScrollToFixed"), x(), o = -1, f.trigger("fixed.ScrollToFixed")), A(g)) : w() && b || (E(), f.trigger("preUnfixed.ScrollToFixed"), z(), f.trigger("unfixed.ScrollToFixed")) : j > 0 ? i + a(window)

                    .height() - f.outerHeight(!0) >= j - (B() || -D()) ? u() && (E(), f.trigger("preUnfixed.ScrollToFixed"), "absolute" === h ? y() : z(), f.trigger("unfixed.ScrollToFixed")) : (u() || (E(), f.trigger("preFixed.ScrollToFixed"), x()), A(g), f.trigger("fixed.ScrollToFixed")) : A(g)

            }

        }



        function D() {

            return d.options.bottom ? d.options.bottom : 0

        }



        function E() {

            var a = f.css("position");

            "absolute" == a ? f.trigger("postAbsolute.ScrollToFixed") : "fixed" == a ? f.trigger("postFixed.ScrollToFixed") : f.trigger("postUnfixed.ScrollToFixed")

        }



        var d = this;

        d.$el = a(b), d.el = b, d.$el.data("ScrollToFixed", d);

        var g, h, i, j, k, e = !1,

            f = d.$el,

            l = 0,

            m = 0,

            n = -1,

            o = -1,

            p = null,

            F = function (a) {

                f.is(":visible") && (e = !1, C())

            },

            G = function (a) {

                window.requestAnimationFrame ? requestAnimationFrame(C) : C()

            },

            I = function (a) {

                a = a || window.event, a.preventDefault && a.preventDefault(), a.returnValue = !1

            };

        d.init = function () {

            d.options = a.extend({}, a.ScrollToFixed.defaultOptions, c), k = f.css("z-index"), d.$el.css("z-index", d.options.zIndex), p = a("<div />"), g = f.css("position"), h = f.css("position"), i = f.css("float"), j = f.css("top"), w() && d.$el.after(p), a(window)

                .bind("resize.ScrollToFixed", F), a(window)

                .bind("scroll.ScrollToFixed", G), "ontouchmove" in window && a(window)

                .bind("touchmove.ScrollToFixed", C), d.options.preFixed && f.bind("preFixed.ScrollToFixed", d.options.preFixed), d.options.postFixed && f.bind("postFixed.ScrollToFixed", d.options.postFixed), d.options.preUnfixed && f.bind("preUnfixed.ScrollToFixed", d.options.preUnfixed), d.options.postUnfixed && f.bind("postUnfixed.ScrollToFixed", d.options.postUnfixed), d.options.preAbsolute && f.bind("preAbsolute.ScrollToFixed", d.options.preAbsolute), d.options.postAbsolute && f.bind("postAbsolute.ScrollToFixed", d.options.postAbsolute), d.options.fixed && f.bind("fixed.ScrollToFixed", d.options.fixed), d.options.unfixed && f.bind("unfixed.ScrollToFixed", d.options.unfixed), d.options.spacerClass && p.addClass(d.options.spacerClass), f.bind("resize.ScrollToFixed", function () {

                p.height(f.height())

            }), f.bind("scroll.ScrollToFixed", function () {

                f.trigger("preUnfixed.ScrollToFixed"), z(), f.trigger("unfixed.ScrollToFixed"), C()

            }), f.bind("detach.ScrollToFixed", function (b) {

                I(b), f.trigger("preUnfixed.ScrollToFixed"), z(), f.trigger("unfixed.ScrollToFixed"), a(window)

                    .unbind("resize.ScrollToFixed", F), a(window)

                    .unbind("scroll.ScrollToFixed", G), f.unbind(".ScrollToFixed"), p.remove(), d.$el.removeData("ScrollToFixed")

            }), F()

        }, d.init()

    }, a.ScrollToFixed.defaultOptions = {

        marginTop: 0,

        limit: 0,

        bottom: -1,

        zIndex: 1e3,

        baseClassName: "scroll-to-fixed-fixed"

    }, a.fn.scrollToFixed = function (b) {

        return this.each(function () {

            new a.ScrollToFixed(this, b)

        })

    }

}(jQuery);

// ==================================================

// fancyBox v3.1.20

//

// Licensed GPLv3 for open source use

// or fancyBox Commercial License for commercial use

//

// http://fancyapps.com/fancybox/

// Copyright 2017 fancyApps

//

// ==================================================

!function (t, e, n, o) {

    "use strict";



    function i(t) {

        var e = t.currentTarget,

            o = t.data ? t.data.options : {},

            i = t.data ? t.data.items : [],

            a = n(e)

                .attr("data-fancybox") || "",

            s = 0;

        t.preventDefault(), t.stopPropagation(), a ? (i = i.length ? i.filter('[data-fancybox="' + a + '"]') : n('[data-fancybox="' + a + '"]'), s = i.index(e), s < 0 && (s = 0)) : i = [e], n.fancybox.open(i, o, s)

    }



    if (n) {

        if (n.fn.fancybox) return void n.error("fancyBox already initialized");

        var a = {

                loop: !1,

                margin: [44, 0],

                gutter: 50,

                keyboard: !0,

                arrows: !0,

                infobar: !1,

                toolbar: !0,

                buttons: ["slideShow", "fullScreen", "thumbs", "close"],

                idleTime: 4,

                smallBtn: "auto",

                protect: !1,

                modal: !1,

                image: {

                    preload: "auto"

                },

                ajax: {

                    settings: {

                        data: {

                            fancybox: !0

                        }

                    }

                },

                iframe: {

                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',

                    preload: !0,

                    css: {},

                    attr: {

                        scrolling: "auto"

                    }

                },

                animationEffect: "zoom",

                animationDuration: 366,

                zoomOpacity: "auto",

                transitionEffect: "fade",

                transitionDuration: 366,

                slideClass: "",

                baseClass: "",

                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',

                spinnerTpl: '<div class="fancybox-loading"></div>',

                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',

                btnTpl: {

                    slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',

                    fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',

                    thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',

                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',

                    smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'

                },

                parentEl: "body",

                autoFocus: !0,

                backFocus: !0,

                trapFocus: !0,

                fullScreen: {

                    autoStart: !1

                },

                touch: {

                    vertical: !0,

                    momentum: !0

                },

                hash: null,

                media: {},

                slideShow: {

                    autoStart: !1,

                    speed: 4e3

                },

                thumbs: {

                    autoStart: !1,

                    hideOnClose: !0

                },

                onInit: n.noop,

                beforeLoad: n.noop,

                afterLoad: n.noop,

                beforeShow: n.noop,

                afterShow: n.noop,

                beforeClose: n.noop,

                afterClose: n.noop,

                onActivate: n.noop,

                onDeactivate: n.noop,

                clickContent: function (t, e) {

                    return "image" === t.type && "zoom"

                },

                clickSlide: "close",

                clickOutside: "close",

                dblclickContent: !1,

                dblclickSlide: !1,

                dblclickOutside: !1,

                mobile: {

                    clickContent: function (t, e) {

                        return "image" === t.type && "toggleControls"

                    },

                    clickSlide: function (t, e) {

                        return "image" === t.type ? "toggleControls" : "close"

                    },

                    dblclickContent: function (t, e) {

                        return "image" === t.type && "zoom"

                    },

                    dblclickSlide: function (t, e) {

                        return "image" === t.type && "zoom"

                    }

                },

                lang: "en",

                i18n: {

                    en: {

                        CLOSE: "Close",

                        NEXT: "Next",

                        PREV: "Previous",

                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",

                        PLAY_START: "Start slideshow",

                        PLAY_STOP: "Pause slideshow",

                        FULL_SCREEN: "Full screen",

                        THUMBS: "Thumbnails"

                    },

                    de: {

                        CLOSE: "Schliessen",

                        NEXT: "Weiter",

                        PREV: "ZurÃ¼ck",

                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃ¤ter nochmal.",

                        PLAY_START: "Diaschau starten",

                        PLAY_STOP: "Diaschau beenden",

                        FULL_SCREEN: "Vollbild",

                        THUMBS: "Vorschaubilder"

                    }

                }

            },

            s = n(t),

            r = n(e),

            c = 0,

            l = function (t) {

                return t && t.hasOwnProperty && t instanceof n

            },

            u = function () {

                return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {

                    return t.setTimeout(e, 1e3 / 60)

                }

            }(),

            d = function () {

                var t, n = e.createElement("fakeelement"),

                    i = {

                        transition: "transitionend",

                        OTransition: "oTransitionEnd",

                        MozTransition: "transitionend",

                        WebkitTransition: "webkitTransitionEnd"

                    };

                for (t in i)

                    if (n.style[t] !== o) return i[t]

            }(),

            f = function (t) {

                return t && t.length && t[0].offsetHeight

            },

            h = function (t, o, i) {

                var s = this;

                s.opts = n.extend(!0, {

                    index: i

                }, a, o || {}), o && n.isArray(o.buttons) && (s.opts.buttons = o.buttons), s.id = s.opts.id || ++c, s.group = [], s.currIndex = parseInt(s.opts.index, 10) || 0, s.prevIndex = null, s.prevPos = null, s.currPos = 0, s.firstRun = null, s.createGroup(t), s.group.length && (s.$lastFocus = n(e.activeElement)

                    .blur(), s.slides = {}, s.init(t))

            };

        n.extend(h.prototype, {

            init: function () {

                var t, e, o, i = this,

                    a = i.group[i.currIndex].opts;

                i.scrollTop = r.scrollTop(), i.scrollLeft = r.scrollLeft(), n.fancybox.getInstance() || n.fancybox.isMobile || "hidden" === n("body")

                    .css("overflow") || (t = n("body")

                    .width(), n("html")

                    .addClass("fancybox-enabled"), t = n("body")

                    .width() - t, t > 1 && n("head")

                    .append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + t + "px; }</style>")), o = "", n.each(a.buttons, function (t, e) {

                    o += a.btnTpl[e] || ""

                }), e = n(i.translate(i, a.baseTpl.replace("{{BUTTONS}}", o)))

                    .addClass("fancybox-is-hidden")

                    .attr("id", "fancybox-container-" + i.id)

                    .addClass(a.baseClass)

                    .data("FancyBox", i)

                    .prependTo(a.parentEl), i.$refs = {

                    container: e

                }, ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(function (t) {

                    i.$refs[t] = e.find(".fancybox-" + t)

                }), (!a.arrows || i.group.length < 2) && e.find(".fancybox-navigation")

                    .remove(), a.infobar || i.$refs.infobar.remove(), a.toolbar || i.$refs.toolbar.remove(), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex)

            },

            translate: function (t, e) {

                var n = t.opts.i18n[t.opts.lang];

                return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {

                    var i = n[e];

                    return i === o ? t : i

                })

            },

            createGroup: function (t) {

                var e = this,

                    i = n.makeArray(t);

                n.each(i, function (t, i) {

                    var a, s, r, c, l = {},

                        u = {},

                        d = [];

                    n.isPlainObject(i) ? (l = i, u = i.opts || i) : "object" === n.type(i) && n(i)

                        .length ? (a = n(i), d = a.data(), u = "options" in d ? d.options : {}, u = "object" === n.type(u) ? u : {}, l.src = "src" in d ? d.src : u.src || a.attr("href"), ["width", "height", "thumb", "type", "filter"].forEach(function (t) {

                        t in d && (u[t] = d[t])

                    }), "srcset" in d && (u.image = {

                        srcset: d.srcset

                    }), u.$orig = a, l.type || l.src || (l.type = "inline", l.src = i)) : l = {

                        type: "html",

                        src: i + ""

                    }, l.opts = n.extend(!0, {}, e.opts, u), n.fancybox.isMobile && (l.opts = n.extend(!0, {}, l.opts, l.opts.mobile)), s = l.type || l.opts.type, r = l.src || "", !s && r && (r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? s = "pdf" : "#" === r.charAt(0) && (s = "inline")), l.type = s, l.index = e.group.length, l.opts.$orig && !l.opts.$orig.length && delete l.opts.$orig, !l.opts.$thumb && l.opts.$orig && (l.opts.$thumb = l.opts.$orig.find("img:first")), l.opts.$thumb && !l.opts.$thumb.length && delete l.opts.$thumb, "function" === n.type(l.opts.caption) ? l.opts.caption = l.opts.caption.apply(i, [e, l]) : "caption" in d && (l.opts.caption = d.caption), l.opts.caption = l.opts.caption === o ? "" : l.opts.caption + "", "ajax" === s && (c = r.split(/\s+/, 2), c.length > 1 && (l.src = c.shift(), l.opts.filter = c.shift())), "auto" == l.opts.smallBtn && (n.inArray(s, ["html", "inline", "ajax"]) > -1 ? (l.opts.toolbar = !1, l.opts.smallBtn = !0) : l.opts.smallBtn = !1), "pdf" === s && (l.type = "iframe", l.opts.iframe.preload = !1), l.opts.modal && (l.opts = n.extend(!0, l.opts, {

                        infobar: 0,

                        toolbar: 0,

                        smallBtn: 0,

                        keyboard: 0,

                        slideShow: 0,

                        fullScreen: 0,

                        thumbs: 0,

                        touch: 0,

                        clickContent: !1,

                        clickSlide: !1,

                        clickOutside: !1,

                        dblclickContent: !1,

                        dblclickSlide: !1,

                        dblclickOutside: !1

                    })), e.group.push(l)

                })

            },

            addEvents: function () {

                var o = this;

                o.removeEvents(), o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {

                    t.stopPropagation(), t.preventDefault(), o.close(t)

                })

                    .on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function (t) {

                        t.stopPropagation(), t.preventDefault(), o.previous()

                    })

                    .on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function (t) {

                        t.stopPropagation(), t.preventDefault(), o.next()

                    }), s.on("orientationchange.fb resize.fb", function (t) {

                    t && t.originalEvent && "resize" === t.originalEvent.type ? u(function () {

                        o.update()

                    }) : (o.$refs.stage.hide(), setTimeout(function () {

                        o.$refs.stage.show(), o.update()

                    }, 500))

                }), r.on("focusin.fb", function (t) {

                    var i = n.fancybox ? n.fancybox.getInstance() : null;

                    i.isClosing || !i.current || !i.current.opts.trapFocus || n(t.target)

                        .hasClass("fancybox-container") || n(t.target)

                        .is(e) || i && "fixed" !== n(t.target)

                        .css("position") && !i.$refs.container.has(t.target)

                        .length && (t.stopPropagation(), i.focus(), s.scrollTop(o.scrollTop)

                        .scrollLeft(o.scrollLeft))

                }), r.on("keydown.fb", function (t) {

                    var e = o.current,

                        i = t.keyCode || t.which;

                    if (e && e.opts.keyboard && !n(t.target)

                        .is("input") && !n(t.target)

                        .is("textarea")) return 8 === i || 27 === i ? (t.preventDefault(), void o.close(t)) : 37 === i || 38 === i ? (t.preventDefault(), void o.previous()) : 39 === i || 40 === i ? (t.preventDefault(), void o.next()) : void o.trigger("afterKeydown", t, i)

                }), o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function () {

                    o.idleSecondsCounter = 0, o.isIdle && o.showControls(), o.isIdle = !1

                }), o.idleInterval = t.setInterval(function () {

                    o.idleSecondsCounter++, o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && (o.isIdle = !0, o.idleSecondsCounter = 0, o.hideControls())

                }, 1e3))

            },

            removeEvents: function () {

                var e = this;

                s.off("orientationchange.fb resize.fb"), r.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)

            },

            previous: function (t) {

                return this.jumpTo(this.currPos - 1, t)

            },

            next: function (t) {

                return this.jumpTo(this.currPos + 1, t)

            },

            jumpTo: function (t, e, i) {

                var a, s, r, c, l, u, d, h = this,

                    p = h.group.length;

                if (!(h.isSliding || h.isClosing || h.isAnimating && h.firstRun)) {

                    if (t = parseInt(t, 10), s = h.current ? h.current.opts.loop : h.opts.loop, !s && (t < 0 || t >= p)) return !1;

                    if (a = h.firstRun = null === h.firstRun, !(p < 2 && !a && h.isSliding)) {

                        if (c = h.current, h.prevIndex = h.currIndex, h.prevPos = h.currPos, r = h.createSlide(t), p > 1 && ((s || r.index > 0) && h.createSlide(t - 1), (s || r.index < p - 1) && h.createSlide(t + 1)), h.current = r, h.currIndex = r.index, h.currPos = r.pos, h.trigger("beforeShow", a), h.updateControls(), u = n.fancybox.getTranslate(r.$slide), r.isMoved = (0 !== u.left || 0 !== u.top) && !r.$slide.hasClass("fancybox-animated"), r.forcedDuration = o, n.isNumeric(e) ? r.forcedDuration = e : e = r.opts[a ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), a) return r.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"), h.$refs.container.removeClass("fancybox-is-hidden"), f(h.$refs.container), h.$refs.container.addClass("fancybox-is-open"), r.$slide.addClass("fancybox-slide--current"), h.loadSlide(r), void h.preload();

                        n.each(h.slides, function (t, e) {

                            n.fancybox.stop(e.$slide)

                        }), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous")

                            .addClass("fancybox-slide--current"), r.isMoved ? (l = Math.round(r.$slide.width()), n.each(h.slides, function (t, o) {

                            var i = o.pos - r.pos;

                            n.fancybox.animate(o.$slide, {

                                top: 0,

                                left: i * l + i * o.opts.gutter

                            }, e, function () {

                                o.$slide.removeAttr("style")

                                    .removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === h.currPos && (r.isMoved = !1, h.complete())

                            })

                        })) : h.$refs.stage.children()

                            .removeAttr("style"), r.isLoaded ? h.revealContent(r) : h.loadSlide(r), h.preload(), c.pos !== r.pos && (d = "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous"), c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), c.isComplete = !1, e && (r.isMoved || r.opts.transitionEffect) && (r.isMoved ? c.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + r.opts.transitionEffect, n.fancybox.animate(c.$slide, d, e, function () {

                            c.$slide.removeClass(d)

                                .removeAttr("style")

                        }))))

                    }

                }

            },

            createSlide: function (t) {

                var e, o, i = this;

                return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>')

                    .appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {

                    pos: t,

                    $slide: e,

                    isLoaded: !1

                }), i.updateSlide(i.slides[t])), i.slides[t]

            },

            scaleToActual: function (t, e, i) {

                var a, s, r, c, l, u = this,

                    d = u.current,

                    f = d.$content,

                    h = parseInt(d.$slide.width(), 10),

                    p = parseInt(d.$slide.height(), 10),

                    g = d.width,

                    b = d.height;

                "image" != d.type || d.hasError || !f || u.isAnimating || (n.fancybox.stop(f), u.isAnimating = !0, t = t === o ? .5 * h : t, e = e === o ? .5 * p : e, a = n.fancybox.getTranslate(f), c = g / a.width, l = b / a.height, s = .5 * h - .5 * g, r = .5 * p - .5 * b, g > h && (s = a.left * c - (t * c - t), s > 0 && (s = 0), s < h - g && (s = h - g)), b > p && (r = a.top * l - (e * l - e), r > 0 && (r = 0), r < p - b && (r = p - b)), u.updateCursor(g, b), n.fancybox.animate(f, {

                    top: r,

                    left: s,

                    scaleX: c,

                    scaleY: l

                }, i || 330, function () {

                    u.isAnimating = !1

                }), u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop())

            },

            scaleToFit: function (t) {

                var e, o = this,

                    i = o.current,

                    a = i.$content;

                "image" != i.type || i.hasError || !a || o.isAnimating || (n.fancybox.stop(a), o.isAnimating = !0, e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {

                    top: e.top,

                    left: e.left,

                    scaleX: e.width / a.width(),

                    scaleY: e.height / a.height()

                }, t || 330, function () {

                    o.isAnimating = !1

                }))

            },

            getFitPos: function (t) {

                var e, o, i, a, r, c = this,

                    l = t.$content,

                    u = t.width,

                    d = t.height,

                    f = t.opts.margin;

                return !(!l || !l.length || !u && !d) && ("number" === n.type(f) && (f = [f, f]), 2 == f.length && (f = [f[0], f[1], f[0], f[1]]), s.width() < 800 && (f = [0, 0, 0, 0]), e = parseInt(c.$refs.stage.width(), 10) - (f[1] + f[3]), o = parseInt(c.$refs.stage.height(), 10) - (f[0] + f[2]), i = Math.min(1, e / u, o / d), a = Math.floor(i * u), r = Math.floor(i * d), {

                    top: Math.floor(.5 * (o - r)) + f[0],

                    left: Math.floor(.5 * (e - a)) + f[3],

                    width: a,

                    height: r

                })

            },

            update: function () {

                var t = this;

                n.each(t.slides, function (e, n) {

                    t.updateSlide(n)

                })

            },

            updateSlide: function (t) {

                var e = this,

                    o = t.$content;

                o && (t.width || t.height) && (n.fancybox.stop(o), n.fancybox.setTranslate(o, e.getFitPos(t)), t.pos === e.currPos && e.updateCursor()), t.$slide.trigger("refresh"), e.trigger("onUpdate", t)

            },

            updateCursor: function (t, e) {

                var n, i = this,

                    a = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");

                i.current && !i.isClosing && (i.isZoomable() ? (a.addClass("fancybox-is-zoomable"), n = t !== o && e !== o ? t < i.current.width && e < i.current.height : i.isScaledDown(), n ? a.addClass("fancybox-can-zoomIn") : i.current.opts.touch ? a.addClass("fancybox-can-drag") : a.addClass("fancybox-can-zoomOut")) : i.current.opts.touch && a.addClass("fancybox-can-drag"))

            },

            isZoomable: function () {

                var t, e = this,

                    o = e.current;

                if (o && !e.isClosing) return !!("image" === o.type && o.isLoaded && !o.hasError && ("zoom" === o.opts.clickContent || n.isFunction(o.opts.clickContent) && "zoom" === o.opts.clickContent(o)) && (t = e.getFitPos(o), o.width > t.width || o.height > t.height))

            },

            isScaledDown: function () {

                var t = this,

                    e = t.current,

                    o = e.$content,

                    i = !1;

                return o && (i = n.fancybox.getTranslate(o), i = i.width < e.width || i.height < e.height), i

            },

            canPan: function () {

                var t = this,

                    e = t.current,

                    n = e.$content,

                    o = !1;

                return n && (o = t.getFitPos(e), o = Math.abs(n.width() - o.width) > 1 || Math.abs(n.height() - o.height) > 1), o

            },

            loadSlide: function (t) {

                var e, o, i, a = this;

                if (!t.isLoading && !t.isLoaded) {

                    switch (t.isLoading = !0, a.trigger("beforeLoad", t), e = t.type, o = t.$slide, o.off("refresh")

                        .trigger("onReset")

                        .addClass("fancybox-slide--" + (e || "unknown"))

                        .addClass(t.opts.slideClass), e) {

                        case "image":

                            a.setImage(t);

                            break;

                        case "iframe":

                            a.setIframe(t);

                            break;

                        case "html":

                            a.setContent(t, t.src || t.content);

                            break;

                        case "inline":

                            n(t.src)

                                .length ? a.setContent(t, n(t.src)) : a.setError(t);

                            break;

                        case "ajax":

                            a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {

                                url: t.src,

                                success: function (e, n) {

                                    "success" === n && a.setContent(t, e)

                                },

                                error: function (e, n) {

                                    e && "abort" !== n && a.setError(t)

                                }

                            })), o.one("onReset", function () {

                                i.abort()

                            });

                            break;

                        default:

                            a.setError(t)

                    }

                    return !0

                }

            },

            setImage: function (e) {

                var o, i, a, s, r = this,

                    c = e.opts.image.srcset;

                if (c) {

                    a = t.devicePixelRatio || 1, s = t.innerWidth * a, i = c.split(",")

                        .map(function (t) {

                            var e = {};

                            return t.trim()

                                .split(/\s+/)

                                .forEach(function (t, n) {

                                    var o = parseInt(t.substring(0, t.length - 1), 10);

                                    return 0 === n ? e.url = t : void(o && (e.value = o, e.postfix = t[t.length - 1]))

                                }), e

                        }), i.sort(function (t, e) {

                        return t.value - e.value

                    });

                    for (var l = 0; l < i.length; l++) {

                        var u = i[l];

                        if ("w" === u.postfix && u.value >= s || "x" === u.postfix && u.value >= a) {

                            o = u;

                            break

                        }

                    }

                    !o && i.length && (o = i[i.length - 1]), o && (e.src = o.url, e.width && e.height && "w" == o.postfix && (e.height = e.width / e.height * o.value, e.width = o.value))

                }

                e.$content = n('<div class="fancybox-image-wrap"></div>')

                    .addClass("fancybox-is-hidden")

                    .appendTo(e.$slide), e.opts.preload !== !1 && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />")

                    .one("error", function () {

                        n(this)

                            .remove(), e.$ghost = null, r.setBigImage(e)

                    })

                    .one("load", function () {

                        r.afterLoad(e), r.setBigImage(e)

                    })

                    .addClass("fancybox-image")

                    .appendTo(e.$content)

                    .attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : r.setBigImage(e)

            },

            setBigImage: function (t) {

                var e = this,

                    o = n("<img />");

                t.$image = o.one("error", function () {

                    e.setError(t)

                })

                    .one("load", function () {

                        clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && o.attr("sizes", "100vw")

                            .attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function () {

                            t.timouts = null, t.$ghost.hide()

                        }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))

                    })

                    .addClass("fancybox-image")

                    .attr("src", t.src)

                    .appendTo(t.$content), o[0].complete ? o.trigger("load") : o[0].error ? o.trigger("error") : t.timouts = setTimeout(function () {

                    o[0].complete || t.hasError || e.showLoading(t)

                }, 100)

            },

            setIframe: function (t) {

                var e, i = this,

                    a = t.opts.iframe,

                    s = t.$slide;

                t.$content = n('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>')

                    .css(a.css)

                    .appendTo(s), e = n(a.tpl.replace(/\{rnd\}/g, (new Date)

                    .getTime()))

                    .attr(a.attr)

                    .appendTo(t.$content), a.preload ? (i.showLoading(t), e.on("load.fb error.fb", function (e) {

                    this.isReady = 1, t.$slide.trigger("refresh"), i.afterLoad(t)

                }), s.on("refresh.fb", function () {

                    var n, i, s, r, c, l = t.$content;

                    if (1 === e[0].isReady) {

                        try {

                            n = e.contents(), i = n.find("body")

                        } catch (t) {

                        }

                        i && i.length && (a.css.width === o || a.css.height === o) && (s = e[0].contentWindow.document.documentElement.scrollWidth, r = Math.ceil(i.outerWidth(!0) + (l.width() - s)), c = Math.ceil(i.outerHeight(!0)), l.css({

                            width: a.css.width === o ? r + (l.outerWidth() - l.innerWidth()) : a.css.width,

                            height: a.css.height === o ? c + (l.outerHeight() - l.innerHeight()) : a.css.height

                        })), l.removeClass("fancybox-is-hidden")

                    }

                })) : this.afterLoad(t), e.attr("src", t.src), t.opts.smallBtn === !0 && t.$content.prepend(i.translate(t, t.opts.btnTpl.smallBtn)), s.one("onReset", function () {

                    try {

                        n(this)

                            .find("iframe")

                            .hide()

                            .attr("src", "//about:blank")

                    } catch (t) {

                    }

                    n(this)

                        .empty(), t.isLoaded = !1

                })

            },

            setContent: function (t, e) {

                var o = this;

                o.isClosing || (o.hideLoading(t), t.$slide.empty(), l(e) && e.parent()

                    .length ? (e.parent(".fancybox-slide--inline")

                    .trigger("onReset"), t.$placeholder = n("<div></div>")

                    .hide()

                    .insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>")

                    .append(n.trim(e))

                    .contents(), 3 === e[0].nodeType && (e = n("<div>")

                    .html(e))), t.opts.filter && (e = n("<div>")

                    .html(e)

                    .find(t.opts.filter))), t.$slide.one("onReset", function () {

                    t.$placeholder && (t.$placeholder.after(e.hide())

                        .remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this)

                        .empty(), t.isLoaded = !1)

                }), t.$content = n(e)

                    .appendTo(t.$slide), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = n(o.translate(t, t.opts.btnTpl.smallBtn))

                    .appendTo(t.$content)), this.afterLoad(t))

            },

            setError: function (t) {

                t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))

            },

            showLoading: function (t) {

                var e = this;

                t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.opts.spinnerTpl)

                    .appendTo(t.$slide))

            },

            hideLoading: function (t) {

                var e = this;

                t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner)

            },

            afterLoad: function (t) {

                var e = this;

                e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {

                    return 2 == t.button && t.preventDefault(), !0

                }), "image" === t.type && n('<div class="fancybox-spaceball"></div>')

                    .appendTo(t.$content)), e.revealContent(t))

            },

            revealContent: function (t) {

                var e, i, a, s, r, c = this,

                    l = t.$slide,

                    u = !1;

                return e = t.opts[c.firstRun ? "animationEffect" : "transitionEffect"], a = t.opts[c.firstRun ? "animationDuration" : "transitionDuration"], a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10), !t.isMoved && t.pos === c.currPos && a || (e = !1), "zoom" !== e || t.pos === c.currPos && a && "image" === t.type && !t.hasError && (u = c.getThumbPos(t)) || (e = "fade"), "zoom" === e ? (r = c.getFitPos(t), r.scaleX = Math.round(r.width / u.width * 100) / 100, r.scaleY = Math.round(r.height / u.height * 100) / 100, delete r.width, delete r.height, s = t.opts.zoomOpacity, "auto" == s && (s = Math.abs(t.width / t.height - u.width / u.height) > .1), s && (u.opacity = .1, r.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), u), f(t.$content), void n.fancybox.animate(t.$content, r, a, function () {

                    c.complete()

                })) : (c.updateSlide(t), e ? (n.fancybox.stop(l), i = "fancybox-animated fancybox-slide--" + (t.pos > c.prevPos ? "next" : "previous") + " fancybox-fx-" + e, l.removeAttr("style")

                    .removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous")

                    .addClass(i), t.$content.removeClass("fancybox-is-hidden"), f(l), void n.fancybox.animate(l, "fancybox-slide--current", a, function (e) {

                    l.removeClass(i)

                        .removeAttr("style"), t.pos === c.currPos && c.complete()

                }, !0)) : (f(l), t.$content.removeClass("fancybox-is-hidden"), void(t.pos === c.currPos && c.complete())))

            },

            getThumbPos: function (o) {

                var i, a = this,

                    s = !1,

                    r = function (e) {

                        for (var o, i = e[0], a = i.getBoundingClientRect(), s = []; null !== i.parentElement;) "hidden" !== n(i.parentElement)

                            .css("overflow") && "auto" !== n(i.parentElement)

                            .css("overflow") || s.push(i.parentElement.getBoundingClientRect()), i = i.parentElement;

                        return o = s.every(function (t) {

                            var e = Math.min(a.right, t.right) - Math.max(a.left, t.left),

                                n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);

                            return e > 0 && n > 0

                        }), o && a.bottom > 0 && a.right > 0 && a.left < n(t)

                            .width() && a.top < n(t)

                            .height()

                    },

                    c = o.opts.$thumb,

                    l = c ? c.offset() : 0;

                return l && c[0].ownerDocument === e && r(c) && (i = a.$refs.stage.offset(), s = {

                    top: l.top - i.top + parseFloat(c.css("border-top-width") || 0),

                    left: l.left - i.left + parseFloat(c.css("border-left-width") || 0),

                    width: c.width(),

                    height: c.height(),

                    scaleX: 1,

                    scaleY: 1

                }), s

            },

            complete: function () {

                var t = this,

                    o = t.current,

                    i = {};

                o.isMoved || !o.isLoaded || o.isComplete || (o.isComplete = !0, o.$slide.siblings()

                    .trigger("onReset"), f(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, function (e, o) {

                    o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.unbind()

                        .remove())

                }), t.slides = i, t.updateCursor(), t.trigger("afterShow"), (n(e.activeElement)

                    .is("[disabled]") || o.opts.autoFocus && "image" != o.type && "iframe" !== o.type) && t.focus())

            },

            preload: function () {

                var t, e, n = this;

                n.group.length < 2 || (t = n.slides[n.currPos + 1], e = n.slides[n.currPos - 1], t && "image" === t.type && n.loadSlide(t), e && "image" === e.type && n.loadSlide(e))

            },

            focus: function () {

                var t, e = this.current;

                this.isClosing || (t = e && e.isComplete ? e.$slide.find("button,:input,[tabindex],a")

                    .filter(":not([disabled]):visible:first") : null, t = t && t.length ? t : this.$refs.container, t.focus())

            },

            activate: function () {

                var t = this;

                n(".fancybox-container")

                    .each(function () {

                        var e = n(this)

                            .data("FancyBox");

                        e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate")

                    }), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), t.updateControls()), t.trigger("onActivate"), t.addEvents()

            },

            close: function (t, e) {

                var o, i, a, s, r, c, l = this,

                    f = l.current,

                    h = function () {

                        l.cleanUp(t)

                    };

                return !l.isClosing && (l.isClosing = !0, l.trigger("beforeClose", t) === !1 ? (l.isClosing = !1, u(function () {

                    l.update()

                }), !1) : (l.removeEvents(), f.timouts && clearTimeout(f.timouts), a = f.$content, o = f.opts.animationEffect, i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0, f.$slide.off(d)

                    .removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), f.$slide.siblings()

                    .trigger("onReset")

                    .remove(), i && l.$refs.container.removeClass("fancybox-is-open")

                    .addClass("fancybox-is-closing"), l.hideLoading(f), l.hideControls(), l.updateCursor(), "zoom" !== o || t !== !0 && a && i && "image" === f.type && !f.hasError && (c = l.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), r = n.fancybox.getTranslate(a), r.width = r.width * r.scaleX, r.height = r.height * r.scaleY, s = f.opts.zoomOpacity, "auto" == s && (s = Math.abs(f.width / f.height - c.width / c.height) > .1), s && (c.opacity = 0), r.scaleX = r.width / c.width, r.scaleY = r.height / c.height, r.width = c.width, r.height = c.height, n.fancybox.setTranslate(f.$content, r), n.fancybox.animate(f.$content, c, i, h), !0) : (o && i ? t === !0 ? setTimeout(h, i) : n.fancybox.animate(f.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, i, h) : h(), !0)))

            },

            cleanUp: function (t) {

                var e, o = this;

                o.current.$slide.trigger("onReset"), o.$refs.container.empty()

                    .remove(), o.trigger("afterClose", t), o.$lastFocus && !o.current.focusBack && o.$lastFocus.focus(), o.current = null, e = n.fancybox.getInstance(), e ? e.activate() : (s.scrollTop(o.scrollTop)

                    .scrollLeft(o.scrollLeft), n("html")

                    .removeClass("fancybox-enabled"), n("#fancybox-style-noscroll")

                    .remove())

            },

            trigger: function (t, e) {

                var o, i = Array.prototype.slice.call(arguments, 1),

                    a = this,

                    s = e && e.opts ? e : a.current;

                return s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), o === !1 ? o : void("afterClose" === t ? r.trigger(t + ".fb", i) : a.$refs.container.trigger(t + ".fb", i))

            },

            updateControls: function (t) {

                var e = this,

                    o = e.current,

                    i = o.index,

                    a = o.opts,

                    s = a.caption,

                    r = e.$refs.caption;

                o.$slide.trigger("refresh"), e.$caption = s && s.length ? r.html(s) : null, e.isHiddenControls || e.showControls(), n("[data-fancybox-count]")

                    .html(e.group.length), n("[data-fancybox-index]")

                    .html(i + 1), n("[data-fancybox-prev]")

                    .prop("disabled", !a.loop && i <= 0), n("[data-fancybox-next]")

                    .prop("disabled", !a.loop && i >= e.group.length - 1)

            },

            hideControls: function () {

                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")

            },

            showControls: function () {

                var t = this,

                    e = t.current ? t.current.opts : t.opts,

                    n = t.$refs.container;

                t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))

                    .toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1))

                    .toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1))

                    .toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")

            },

            toggleControls: function () {

                this.isHiddenControls ? this.showControls() : this.hideControls()

            }

        }), n.fancybox = {

            version: "3.1.20",

            defaults: a,

            getInstance: function (t) {

                var e = n('.fancybox-container:not(".fancybox-is-closing"):first')

                        .data("FancyBox"),

                    o = Array.prototype.slice.call(arguments, 1);

                return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)

            },

            open: function (t, e, n) {

                return new h(t, e, n)

            },

            close: function (t) {

                var e = this.getInstance();

                e && (e.close(), t === !0 && this.close())

            },

            destroy: function () {

                this.close(!0), r.off("click.fb-start")

            },

            isMobile: e.createTouch !== o && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),

            use3d: function () {

                var n = e.createElement("div");

                return t.getComputedStyle && t.getComputedStyle(n)

                    .getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)

            }(),

            getTranslate: function (t) {

                var e;

                if (!t || !t.length) return !1;

                if (e = t.eq(0)

                    .css("transform"), e && e.indexOf("matrix") !== -1 ? (e = e.split("(")[1], e = e.split(")")[0], e = e.split(",")) : e = [], e.length) e = e.length > 10 ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]], e = e.map(parseFloat);

                else {

                    e = [0, 0, 1, 1];

                    var n = /\.*translate\((.*)px,(.*)px\)/i,

                        o = n.exec(t.eq(0)

                            .attr("style"));

                    o && (e[0] = parseFloat(o[2]), e[1] = parseFloat(o[1]))

                }

                return {

                    top: e[0],

                    left: e[1],

                    scaleX: e[2],

                    scaleY: e[3],

                    opacity: parseFloat(t.css("opacity")),

                    width: t.width(),

                    height: t.height()

                }

            },

            setTranslate: function (t, e) {

                var n = "",

                    i = {};

                if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position()

                    .left : e.left) + "px, " + (e.top === o ? t.position()

                    .top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (i.transform = n), e.opacity !== o && (i.opacity = e.opacity), e.width !== o && (i.width = e.width), e.height !== o && (i.height = e.height), t.css(i)

            },

            animate: function (t, e, i, a, s) {

                var r = d || "transitionend";

                n.isFunction(i) && (a = i, i = null), n.isPlainObject(e) || t.removeAttr("style"), t.on(r, function (i) {

                    (!i || !i.originalEvent || t.is(i.originalEvent.target) && "z-index" != i.originalEvent.propertyName) && (t.off(r), n.isPlainObject(e) ? e.scaleX !== o && e.scaleY !== o && (t.css("transition-duration", "0ms"), e.width = t.width() * e.scaleX, e.height = t.height() * e.scaleY, e.scaleX = 1, e.scaleY = 1, n.fancybox.setTranslate(t, e)) : s !== !0 && t.removeClass(e), n.isFunction(a) && a(i))

                }), n.isNumeric(i) && t.css("transition-duration", i + "ms"), n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e), t.data("timer", setTimeout(function () {

                    t.trigger("transitionend")

                }, i + 16))

            },

            stop: function (t) {

                clearTimeout(t.data("timer")), t.off(d)

            }

        }, n.fn.fancybox = function (t) {

            var e;

            return t = t || {}, e = t.selector || !1, e ? n("body")

                .off("click.fb-start", e)

                .on("click.fb-start", e, {

                    items: n(e),

                    options: t

                }, i) : this.off("click.fb-start")

                .on("click.fb-start", {

                    items: this,

                    options: t

                }, i), this

        }, r.on("click.fb-start", "[data-fancybox]", i)

    }

}(window, document, window.jQuery),

    function (t) {

        "use strict";

        var e = function (e, n, o) {

                if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function (t, n) {

                    e = e.replace("$" + t, n || "")

                }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e

            },

            n = {

                youtube: {

                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,

                    params: {

                        autoplay: 1,

                        autohide: 1,

                        fs: 1,

                        rel: 0,

                        hd: 1,

                        wmode: "transparent",

                        enablejsapi: 1,

                        html5: 1

                    },

                    paramPlace: 8,

                    type: "iframe",

                    url: "//www.youtube.com/embed/$4",

                    thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"

                },

                vimeo: {

                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,

                    params: {

                        autoplay: 1,

                        hd: 1,

                        show_title: 1,

                        show_byline: 1,

                        show_portrait: 0,

                        fullscreen: 1,

                        api: 1

                    },

                    paramPlace: 3,

                    type: "iframe",

                    url: "//player.vimeo.com/video/$2"

                },

                metacafe: {

                    matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,

                    type: "iframe",

                    url: "//www.metacafe.com/embed/$1/?ap=1"

                },

                dailymotion: {

                    matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,

                    params: {

                        additionalInfos: 0,

                        autoStart: 1

                    },

                    type: "iframe",

                    url: "//www.dailymotion.com/embed/video/$1"

                },

                vine: {

                    matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,

                    type: "iframe",

                    url: "//vine.co/v/$1/embed/simple"

                },

                instagram: {

                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,

                    type: "image",

                    url: "//$1/p/$2/media/?size=l"

                },

                google_maps: {

                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,

                    type: "iframe",

                    url: function (t) {

                        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")

                    }

                }

            };

        t(document)

            .on("onInit.fb", function (o, i) {

                t.each(i.group, function (o, i) {

                    var a, s, r, c, l, u, d, f = i.src || "",

                        h = !1;

                    i.type || (a = t.extend(!0, {}, n, i.opts.media), t.each(a, function (n, o) {

                        if (r = f.match(o.matcher), u = {}, d = n, r) {

                            if (h = o.type, o.paramPlace && r[o.paramPlace]) {

                                l = r[o.paramPlace], "?" == l[0] && (l = l.substring(1)), l = l.split("&");

                                for (var a = 0; a < l.length; ++a) {

                                    var p = l[a].split("=", 2);

                                    2 == p.length && (u[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " ")))

                                }

                            }

                            return c = t.extend(!0, {}, o.params, i.opts[n], u), f = "function" === t.type(o.url) ? o.url.call(this, r, c, i) : e(o.url, r, c), s = "function" === t.type(o.thumb) ? o.thumb.call(this, r, c, i) : e(o.thumb, r), "vimeo" === d && (f = f.replace("&%23", "#")), !1

                        }

                    }), h ? (i.src = f, i.type = h, i.opts.thumb || i.opts.$thumb && i.opts.$thumb.length || (i.opts.thumb = s), "iframe" === h && (t.extend(!0, i.opts, {

                        iframe: {

                            preload: !1,

                            attr: {

                                scrolling: "no"

                            }

                        }

                    }), i.contentProvider = d, i.opts.slideClass += " fancybox-slide--" + ("google_maps" == d ? "map" : "video"))) : i.type = "image")

                })

            })

    }(window.jQuery),

    function (t, e, n) {

        "use strict";

        var o = function () {

                return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {

                    return t.setTimeout(e, 1e3 / 60)

                }

            }(),

            i = function () {

                return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {

                    t.clearTimeout(e)

                }

            }(),

            a = function (e) {

                var n = [];

                e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

                for (var o in e) e[o].pageX ? n.push({

                    x: e[o].pageX,

                    y: e[o].pageY

                }) : e[o].clientX && n.push({

                    x: e[o].clientX,

                    y: e[o].clientY

                });

                return n

            },

            s = function (t, e, n) {

                return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0

            },

            r = function (t) {

                if (t.is("a,button,input,select,textarea") || n.isFunction(t.get(0)

                    .onclick)) return !0;

                for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)

                    if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;

                return !1

            },

            c = function (e) {

                var n = t.getComputedStyle(e)["overflow-y"],

                    o = t.getComputedStyle(e)["overflow-x"],

                    i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,

                    a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;

                return i || a

            },

            l = function (t) {

                for (var e = !1; ;) {

                    if (e = c(t.get(0))) break;

                    if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break

                }

                return e

            },

            u = function (t) {

                var e = this;

                e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))

            };

        u.prototype.destroy = function () {

            this.$container.off(".fb.touch")

        }, u.prototype.ontouchstart = function (o) {

            var i = this,

                c = n(o.target),

                u = i.instance,

                d = u.current,

                f = d.$content,

                h = "touchstart" == o.type;

            if (h && i.$container.off("mousedown.fb.touch"), !d || i.instance.isAnimating || i.instance.isClosing) return o.stopPropagation(), void o.preventDefault();

            if ((!o.originalEvent || 2 != o.originalEvent.button) && c.length && !r(c) && !r(c.parent()) && !(o.originalEvent.clientX > c[0].clientWidth + c.offset()

                .left) && (i.startPoints = a(o), i.startPoints && !(i.startPoints.length > 1 && u.isSliding))) {

                if (i.$target = c, i.$content = f, i.canTap = !0, n(e)

                    .off(".fb.touch"), n(e)

                    .on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")), n(e)

                    .on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), o.stopPropagation(), !u.current.opts.touch && !u.canPan() || !c.is(i.$stage) && !i.$stage.find(c)

                    .length) return void(c.is("img") && o.preventDefault());

                n.fancybox.isMobile && (l(i.$target) || l(i.$target.parent())) || o.preventDefault(), i.canvasWidth = Math.round(d.$slide[0].clientWidth), i.canvasHeight = Math.round(d.$slide[0].clientHeight), i.startTime = (new Date)

                    .getTime(), i.distanceX = i.distanceY = i.distance = 0, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.sliderStartPos = i.sliderLastPos || {

                    top: 0,

                    left: 0

                }, i.contentStartPos = n.fancybox.getTranslate(i.$content), i.contentLastPos = null, 1 !== i.startPoints.length || i.isZooming || (i.canTap = !u.isSliding, "image" === d.type && (i.contentStartPos.width > i.canvasWidth + 1 || i.contentStartPos.height > i.canvasHeight + 1) ? (n.fancybox.stop(i.$content), i.$content.css("transition-duration", "0ms"), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-controls--isGrabbing")), 2 !== i.startPoints.length || u.isAnimating || d.hasError || "image" !== d.type || !d.isLoaded && !d.$ghost || (i.isZooming = !0, i.isSwiping = !1, i.isPanning = !1, n.fancybox.stop(i.$content), i.$content.css("transition-duration", "0ms"), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t)

                    .scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t)

                    .scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))

            }

        }, u.prototype.ontouchmove = function (t) {

            var e = this;

            if (e.newPoints = a(t), n.fancybox.isMobile && (l(e.$target) || l(e.$target.parent()))) return t.stopPropagation(), void(e.canTap = !1);

            if ((e.instance.current.opts.touch || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0)) {

                if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target)

                    .length) return;

                t.stopPropagation(), t.preventDefault(), e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()

            }

        }, u.prototype.onSwipe = function () {

            var e, a = this,

                s = a.isSwiping,

                r = a.sliderStartPos.left || 0;

            s === !0 ? Math.abs(a.distance) > 10 && (a.canTap = !1, a.instance.group.length < 2 && a.instance.opts.touch.vertical ? a.isSwiping = "y" : a.instance.isSliding || a.instance.opts.touch.vertical === !1 || "auto" === a.instance.opts.touch.vertical && n(t)

                .width() > 800 ? a.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = e > 45 && e < 135 ? "y" : "x"), a.instance.isSliding = a.isSwiping, a.startPoints = a.newPoints, n.each(a.instance.slides, function (t, e) {

                n.fancybox.stop(e.$slide), e.$slide.css("transition-duration", "0ms"), e.inTransition = !1, e.pos === a.instance.current.pos && (a.sliderStartPos.left = n.fancybox.getTranslate(e.$slide)

                    .left)

            }), a.instance.SlideShow && a.instance.SlideShow.isActive && a.instance.SlideShow.stop()) : ("x" == s && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? r += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? r -= Math.pow(-a.distanceX, .8) : r += a.distanceX), a.sliderLastPos = {

                top: "x" == s ? 0 : a.sliderStartPos.top + a.distanceY,

                left: r

            }, a.requestId && (i(a.requestId), a.requestId = null), a.requestId = o(function () {

                a.sliderLastPos && (n.each(a.instance.slides, function (t, e) {

                    var o = e.pos - a.instance.currPos;

                    n.fancybox.setTranslate(e.$slide, {

                        top: a.sliderLastPos.top,

                        left: a.sliderLastPos.left + o * a.canvasWidth + o * e.opts.gutter

                    })

                }), a.$container.addClass("fancybox-is-sliding"))

            }))

        }, u.prototype.onPan = function () {

            var t, e, a, s = this;

            s.canTap = !1, t = s.contentStartPos.width > s.canvasWidth ? s.contentStartPos.left + s.distanceX : s.contentStartPos.left, e = s.contentStartPos.top + s.distanceY, a = s.limitMovement(t, e, s.contentStartPos.width, s.contentStartPos.height), a.scaleX = s.contentStartPos.scaleX, a.scaleY = s.contentStartPos.scaleY, s.contentLastPos = a, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function () {

                n.fancybox.setTranslate(s.$content, s.contentLastPos)

            })

        }, u.prototype.limitMovement = function (t, e, n, o) {

            var i, a, s, r, c = this,

                l = c.canvasWidth,

                u = c.canvasHeight,

                d = c.contentStartPos.left,

                f = c.contentStartPos.top,

                h = c.distanceX,

                p = c.distanceY;

            return i = Math.max(0, .5 * l - .5 * n), a = Math.max(0, .5 * u - .5 * o), s = Math.min(l - n, .5 * l - .5 * n), r = Math.min(u - o, .5 * u - .5 * o), n > l && (h > 0 && t > i && (t = i - 1 + Math.pow(-i + d + h, .8) || 0), h < 0 && t < s && (t = s + 1 - Math.pow(s - d - h, .8) || 0)), o > u && (p > 0 && e > a && (e = a - 1 + Math.pow(-a + f + p, .8) || 0), p < 0 && e < r && (e = r + 1 - Math.pow(r - f - p, .8) || 0)), {

                top: e,

                left: t

            }

        }, u.prototype.limitPosition = function (t, e, n, o) {

            var i = this,

                a = i.canvasWidth,

                s = i.canvasHeight;

            return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {

                top: e,

                left: t

            }

        }, u.prototype.onZoom = function () {

            var e = this,

                a = e.contentStartPos.width,

                r = e.contentStartPos.height,

                c = e.contentStartPos.left,

                l = e.contentStartPos.top,

                u = s(e.newPoints[0], e.newPoints[1]),

                d = u / e.startDistanceBetweenFingers,

                f = Math.floor(a * d),

                h = Math.floor(r * d),

                p = (a - f) * e.percentageOfImageAtPinchPointX,

                g = (r - h) * e.percentageOfImageAtPinchPointY,

                b = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t)

                    .scrollLeft(),

                m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t)

                    .scrollTop(),

                y = b - e.centerPointStartX,

                v = m - e.centerPointStartY,

                x = c + (p + y),

                w = l + (g + v),

                $ = {

                    top: w,

                    left: x,

                    scaleX: e.contentStartPos.scaleX * d,

                    scaleY: e.contentStartPos.scaleY * d

                };

            e.canTap = !1, e.newWidth = f, e.newHeight = h, e.contentLastPos = $, e.requestId && (i(e.requestId), e.requestId = null), e.requestId = o(function () {

                n.fancybox.setTranslate(e.$content, e.contentLastPos)

            })

        }, u.prototype.ontouchend = function (t) {

            var o = this,

                s = Math.max((new Date)

                    .getTime() - o.startTime, 1),

                r = o.isSwiping,

                c = o.isPanning,

                l = o.isZooming;

            return o.endPoints = a(t), o.$container.removeClass("fancybox-controls--isGrabbing"), n(e)

                .off(".fb.touch"), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.canTap ? o.onTap(t) : (o.speed = 366, o.velocityX = o.distanceX / s * .5, o.velocityY = o.distanceY / s * .5, o.speedX = Math.max(.5 * o.speed, Math.min(1.5 * o.speed, 1 / Math.abs(o.velocityX) * o.speed)), void(c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r)))

        }, u.prototype.endSwiping = function (t) {

            var e = this,

                o = !1;

            e.instance.isSliding = !1, e.sliderLastPos = null, "y" == t && Math.abs(e.distanceY) > 50 ? (n.fancybox.animate(e.instance.current.$slide, {

                top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,

                opacity: 0

            }, 150), o = e.instance.close(!0, 300)) : "x" == t && e.distanceX > 50 && e.instance.group.length > 1 ? o = e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 && e.instance.group.length > 1 && (o = e.instance.next(e.speedX)), o !== !1 || "x" != t && "y" != t || e.instance.jumpTo(e.instance.current.index, 150), e.$container.removeClass("fancybox-is-sliding")

        }, u.prototype.endPanning = function () {

            var t, e, o, i = this;

            i.contentLastPos && (i.instance.current.opts.touch.momentum === !1 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed, e = i.contentLastPos.top + i.velocityY * i.speed), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 330))

        }, u.prototype.endZooming = function () {

            var t, e, o, i, a = this,

                s = a.instance.current,

                r = a.newWidth,

                c = a.newHeight;

            a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {

                top: e,

                left: t,

                width: r,

                height: c,

                scaleX: 1,

                scaleY: 1

            }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.setTranslate(a.content, n.fancybox.getTranslate(a.$content)), n.fancybox.animate(a.$content, o, 150)))

        }, u.prototype.onTap = function (t) {

            var e, o = this,

                i = n(t.target),

                s = o.instance,

                r = s.current,

                c = t && a(t) || o.startPoints,

                l = c[0] ? c[0].x - o.$stage.offset()

                    .left : 0,

                u = c[0] ? c[0].y - o.$stage.offset()

                    .top : 0,

                d = function (e) {

                    var i = r.opts[e];

                    if (n.isFunction(i) && (i = i.apply(s, [r, t])), i) switch (i) {

                        case "close":

                            s.close(o.startEvent);

                            break;

                        case "toggleControls":

                            s.toggleControls(!0);

                            break;

                        case "next":

                            s.next();

                            break;

                        case "nextOrClose":

                            s.group.length > 1 ? s.next() : s.close(o.startEvent);

                            break;

                        case "zoom":

                            "image" == r.type && (r.isLoaded || r.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(l, u) : s.group.length < 2 && s.close(o.startEvent))

                    }

                };

            if (!(t.originalEvent && 2 == t.originalEvent.button || s.isSliding || l > i[0].clientWidth + i.offset()

                .left)) {

                if (i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";

                else if (i.is(".fancybox-slide")) e = "Slide";

                else {

                    if (!s.current.$content || !s.current.$content.has(t.target)

                        .length) return;

                    e = "Content"

                }

                if (o.tapped) {

                    if (clearTimeout(o.tapped), o.tapped = null, Math.abs(l - o.tapX) > 50 || Math.abs(u - o.tapY) > 50 || s.isSliding) return this;

                    d("dblclick" + e)

                } else o.tapX = l, o.tapY = u, r.opts["dblclick" + e] && r.opts["dblclick" + e] !== r.opts["click" + e] ? o.tapped = setTimeout(function () {

                    o.tapped = null, d("click" + e)

                }, 300) : d("click" + e);

                return this

            }

        }, n(e)

            .on("onActivate.fb", function (t, e) {

                e && !e.Guestures && (e.Guestures = new u(e))

            }), n(e)

            .on("beforeClose.fb", function (t, e) {

                e && e.Guestures && e.Guestures.destroy()

            })

    }(window, document, window.jQuery),

    function (t, e) {

        "use strict";

        var n = function (t) {

            this.instance = t, this.init()

        };

        e.extend(n.prototype, {

            timer: null,

            isActive: !1,

            $button: null,

            speed: 3e3,

            init: function () {

                var t = this;

                t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]")

                    .on("click", function () {

                        t.toggle()

                    }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()

            },

            set: function () {

                var t = this;

                t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function () {

                    t.instance.next()

                }, t.instance.current.opts.slideShow.speed || t.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, t.instance.showControls())

            },

            clear: function () {

                var t = this;

                clearTimeout(t.timer), t.timer = null

            },

            start: function () {

                var t = this,

                    e = t.instance.current;

                t.instance && e && (e.opts.loop || e.index < t.instance.group.length - 1) && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP)

                    .addClass("fancybox-button--pause"), e.isComplete && t.set())

            },

            stop: function () {

                var t = this,

                    e = t.instance.current;

                t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START)

                    .removeClass("fancybox-button--pause"), t.isActive = !1

            },

            toggle: function () {

                var t = this;

                t.isActive ? t.stop() : t.start()

            }

        }), e(t)

            .on({

                "onInit.fb": function (t, e) {

                    e && !e.SlideShow && (e.SlideShow = new n(e))

                },

                "beforeShow.fb": function (t, e, n, o) {

                    var i = e && e.SlideShow;

                    o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()

                },

                "afterShow.fb": function (t, e, n) {

                    var o = e && e.SlideShow;

                    o && o.isActive && o.set()

                },

                "afterKeydown.fb": function (n, o, i, a, s) {

                    var r = o && o.SlideShow;

                    !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement)

                        .is("button,a,input") || (a.preventDefault(), r.toggle())

                },

                "beforeClose.fb onDeactivate.fb": function (t, e) {

                    var n = e && e.SlideShow;

                    n && n.stop()

                }

            }), e(t)

            .on("visibilitychange", function () {

                var n = e.fancybox.getInstance(),

                    o = n && n.SlideShow;

                o && o.isActive && (t.hidden ? o.clear() : o.set())

            })

    }(document, window.jQuery),

    function (t, e) {

        "use strict";

        var n = function () {

            var e, n, o, i = [

                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],

                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],

                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],

                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],

                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]

                ],

                a = {};

            for (n = 0; n < i.length; n++)

                if (e = i[n], e && e[1] in t) {

                    for (o = 0; o < e.length; o++) a[i[0][o]] = e[o];

                    return a

                }

            return !1

        }();

        if (!n) return void(e.fancybox.defaults.btnTpl.fullScreen = !1);

        var o = {

            request: function (e) {

                e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)

            },

            exit: function () {

                t[n.exitFullscreen]()

            },

            toggle: function (e) {

                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)

            },

            isFullscreen: function () {

                return Boolean(t[n.fullscreenElement])

            },

            enabled: function () {

                return Boolean(t[n.fullscreenEnabled])

            }

        };

        e(t)

            .on({

                "onInit.fb": function (t, e) {

                    var n, i = e.$refs.toolbar.find("[data-fancybox-fullscreen]");

                    e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen ? (n = e.$refs.container, n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {

                        t.stopPropagation(), t.preventDefault(), o.toggle(n[0])

                    }), e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(n[0]), e.FullScreen = o) : i.hide()

                },

                "afterKeydown.fb": function (t, e, n, o, i) {

                    e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))

                },

                "beforeClose.fb": function (t) {

                    t && t.FullScreen && o.exit()

                }

            }), e(t)

            .on(n.fullscreenchange, function () {

                var t = e.fancybox.getInstance();

                t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0))

            })

    }(document, window.jQuery),

    function (t, e) {

        "use strict";

        var n = function (t) {

            this.instance = t, this.init()

        };

        e.extend(n.prototype, {

            $button: null,

            $grid: null,

            $list: null,

            isVisible: !1,

            init: function () {

                var t = this,

                    e = t.instance.group[0],

                    n = t.instance.group[1];

                t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), t.instance.group.length > 1 && t.instance.group[t.instance.currIndex].opts.thumbs && ("image" == e.type || e.opts.thumb || e.opts.$thumb) && ("image" == n.type || n.opts.thumb || n.opts.$thumb) ? (t.$button.on("click", function () {

                    t.toggle()

                }), t.isActive = !0) : (t.$button.hide(), t.isActive = !1)

            },

            create: function () {

                var t, n, o = this.instance;

                this.$grid = e('<div class="fancybox-thumbs"></div>')

                    .appendTo(o.$refs.container), t = "<ul>", e.each(o.group, function (e, o) {

                    n = o.opts.thumb || (o.opts.$thumb ? o.opts.$thumb.attr("src") : null), n || "image" !== o.type || (n = o.src), n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')

                }), t += "</ul>", this.$list = e(t)

                    .appendTo(this.$grid)

                    .on("click", "li", function () {

                        o.jumpTo(e(this)

                            .data("index"))

                    }), this.$list.find("img")

                    .hide()

                    .one("load", function () {

                        var t, n, o, i, a = e(this)

                                .parent()

                                .removeClass("fancybox-thumbs-loading"),

                            s = a.outerWidth(),

                            r = a.outerHeight();

                        t = this.naturalWidth || this.width, n = this.naturalHeight || this.height, o = t / s, i = n / r, o >= 1 && i >= 1 && (o > i ? (t /= i, n = r) : (t = s, n /= o)), e(this)

                            .css({

                                width: Math.floor(t),

                                height: Math.floor(n),

                                "margin-top": Math.min(0, Math.floor(.3 * r - .3 * n)),

                                "margin-left": Math.min(0, Math.floor(.5 * s - .5 * t))

                            })

                            .show()

                    })

                    .each(function () {

                        this.src = e(this)

                            .data("src")

                    })

            },

            focus: function () {

                this.instance.current && this.$list.children()

                    .removeClass("fancybox-thumbs-active")

                    .filter('[data-index="' + this.instance.current.index + '"]')

                    .addClass("fancybox-thumbs-active")

                    .focus()

            },

            close: function () {

                this.$grid.hide()

            },

            update: function () {

                this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()

            },

            hide: function () {

                this.isVisible = !1, this.update()

            },

            show: function () {

                this.isVisible = !0, this.update()

            },

            toggle: function () {

                this.isVisible = !this.isVisible, this.update()

            }

        }), e(t)

            .on({

                "onInit.fb": function (t, e) {

                    e && !e.Thumbs && (e.Thumbs = new n(e))

                },

                "beforeShow.fb": function (t, e, n, o) {

                    var i = e && e.Thumbs;

                    if (i && i.isActive) {

                        if (n.modal) return i.$button.hide(), void i.hide();

                        o && e.opts.thumbs.autoStart === !0 && i.show(), i.isVisible && i.focus()

                    }

                },

                "afterKeydown.fb": function (t, e, n, o, i) {

                    var a = e && e.Thumbs;

                    a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())

                },

                "beforeClose.fb": function (t, e) {

                    var n = e && e.Thumbs;

                    n && n.isVisible && e.opts.thumbs.hideOnClose !== !1 && n.close()

                }

            })

    }(document, window.jQuery),

    function (t, e, n) {

        "use strict";



        function o() {

            var t = e.location.hash.substr(1),

                n = t.split("-"),

                o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,

                i = n.join("-");

            return o < 1 && (o = 1), {

                hash: t,

                index: o,

                gallery: i

            }

        }



        function i(t) {

            var e;

            "" !== t.gallery && (e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")

                .eq(t.index - 1), e.length ? e.trigger("click") : n("#" + n.escapeSelector(t.gallery))

                .trigger("click"))

        }



        function a(t) {

            var e;

            return !!t && (e = t.current ? t.current.opts : t.opts, e.$orig ? e.$orig.data("fancybox") : e.hash || "")

        }



        n.escapeSelector || (n.escapeSelector = function (t) {

            var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,

                n = function (t, e) {

                    return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1)

                        .toString(16) + " " : "\\" + t

                };

            return (t + "")

                .replace(e, n)

        });

        var s = null,

            r = null;

        n(function () {

            setTimeout(function () {

                n.fancybox.defaults.hash !== !1 && (n(t)

                    .on({

                        "onInit.fb": function (t, e) {

                            var n, i;

                            e.group[e.currIndex].opts.hash !== !1 && (n = o(), i = a(e), i && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))

                        },

                        "beforeShow.fb": function (n, o, i, c) {

                            var l;

                            i.opts.hash !== !1 && (l = a(o), l && "" !== l && (e.location.hash.indexOf(l) < 0 && (o.opts.origHash = e.location.hash), s = l + (o.group.length > 1 ? "-" + (i.index + 1) : ""), "replaceState" in e.history ? (r && clearTimeout(r), r = setTimeout(function () {

                                e.history[c ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + s), r = null

                            }, 300)) : e.location.hash = s))

                        },

                        "beforeClose.fb": function (o, i, c) {

                            var l, u;

                            r && clearTimeout(r), c.opts.hash !== !1 && (l = a(i), u = i && i.opts.origHash ? i.opts.origHash : "", l && "" !== l && ("replaceState" in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + u) : (e.location.hash = u, n(e)

                                .scrollTop(i.scrollTop)

                                .scrollLeft(i.scrollLeft))), s = null)

                        }

                    }), n(e)

                    .on("hashchange.fb", function () {

                        var t = o();

                        n.fancybox.getInstance() ? !s || s === t.gallery + "-" + t.index || 1 === t.index && s == t.gallery || (s = null, n.fancybox.close()) : "" !== t.gallery && i(t)

                    }), n(e)

                    .one("unload.fb popstate.fb", function () {

                        n.fancybox.getInstance("close", !0, 0)

                    }), i(o()))

            }, 50)

        })

    }(document, window, window.jQuery);

/*

 A simple jQuery modal (http://github.com/kylefox/jquery-modal)

 Version 0.6.0

 */

!function (o) {

    var t = null;

    o.modal = function (e, i) {

        o.modal.close();

        var s, l;

        if (this.$body = o("body"), this.options = o.extend({}, o.modal.defaults, i), this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10)), e.is("a"))

            if (l = e.attr("href"), /^#/.test(l)) {

                if (this.$elm = o(l), 1 !== this.$elm.length) return null;

                this.$body.append(this.$elm), this.open()

            } else this.$elm = o("<div>"), this.$body.append(this.$elm), s = function (o, t) {

                t.elm.remove()

            }, this.showSpinner(), e.trigger(o.modal.AJAX_SEND), o.get(l)

                .done(function (i) {

                    t && (e.trigger(o.modal.AJAX_SUCCESS), t.$elm.empty()

                        .append(i)

                        .on(o.modal.CLOSE, s), t.hideSpinner(), t.open(), e.trigger(o.modal.AJAX_COMPLETE))

                })

                .fail(function () {

                    e.trigger(o.modal.AJAX_FAIL), t.hideSpinner(), e.trigger(o.modal.AJAX_COMPLETE)

                });

        else this.$elm = e, this.$body.append(this.$elm), this.open()

    }, o.modal.prototype = {

        constructor: o.modal,

        open: function () {

            var t = this;

            this.options.doFade ? (this.block(), setTimeout(function () {

                t.show()

            }, this.options.fadeDuration * this.options.fadeDelay)) : (this.block(), this.show()), this.options.escapeClose && o(document)

                .on("keydown.modal", function (t) {

                    27 == t.which && o.modal.close()

                }), this.options.clickClose && this.blocker.click(function (t) {

                t.target == this && o.modal.close()

            })

        },

        close: function () {

            this.unblock(), this.hide(), o(document)

                .off("keydown.modal")

        },

        block: function () {

            this.$elm.trigger(o.modal.BEFORE_BLOCK, [this._ctx()]), this.blocker = o('<div class="jquery-modal blocker"></div>'), this.$body.css("overflow", "hidden"), this.$body.append(this.blocker), this.options.doFade && this.blocker.css("opacity", 0)

                .animate({

                    opacity: 1

                }, this.options.fadeDuration), this.$elm.trigger(o.modal.BLOCK, [this._ctx()])

        },

        unblock: function () {

            if (this.options.doFade) {

                var o = this;

                this.blocker.fadeOut(this.options.fadeDuration, function () {

                    o.blocker.children()

                        .appendTo(o.$body), o.blocker.remove(), o.$body.css("overflow", "")

                })

            } else this.blocker.children()

                .appendTo(this.$body), this.blocker.remove(), this.$body.css("overflow", "")

        },

        show: function () {

            this.$elm.trigger(o.modal.BEFORE_OPEN, [this._ctx()]), this.options.showClose && (this.closeButton = o('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + "</a>"), this.$elm.append(this.closeButton)), this.$elm.addClass(this.options.modalClass + " current"), this.$elm.appendTo(this.blocker), this.options.doFade ? this.$elm.css("opacity", 0)

                .animate({

                    opacity: 1

                }, this.options.fadeDuration) : this.$elm.show(), this.$elm.trigger(o.modal.OPEN, [this._ctx()])

        },

        hide: function () {

            this.$elm.trigger(o.modal.BEFORE_CLOSE, [this._ctx()]), this.closeButton && this.closeButton.remove(), this.$elm.removeClass("current");

            var t = this;

            this.options.doFade ? this.$elm.fadeOut(this.options.fadeDuration, function () {

                t.$elm.trigger(o.modal.AFTER_CLOSE, [t._ctx()])

            }) : this.$elm.hide(0, function () {

                t.$elm.trigger(o.modal.AFTER_CLOSE, [t._ctx()])

            }), this.$elm.trigger(o.modal.CLOSE, [this._ctx()])

        },

        showSpinner: function () {

            this.options.showSpinner && (this.spinner = this.spinner || o('<div class="' + this.options.modalClass + '-spinner"></div>')

                .append(this.options.spinnerHtml), this.$body.append(this.spinner), this.spinner.show())

        },

        hideSpinner: function () {

            this.spinner && this.spinner.remove()

        },

        _ctx: function () {

            return {

                elm: this.$elm,

                blocker: this.blocker,

                options: this.options

            }

        }

    }, o.modal.close = function (o) {

        if (t) {

            o && o.preventDefault(), t.close();

            var e = t.$elm;

            return t = null, e

        }

    }, o.modal.isActive = function () {

        return t ? !0 : !1

    }, o.modal.defaults = {

        escapeClose: !0,

        clickClose: !0,

        closeText: "Ã—",

        closeClass: "",

        modalClass: "modal",

        spinnerHtml: null,

        showSpinner: !0,

        showClose: !0,

        fadeDuration: null,

        fadeDelay: 1

    }, o.modal.BEFORE_BLOCK = "modal:before-block", o.modal.BLOCK = "modal:block", o.modal.BEFORE_OPEN = "modal:before-open", o.modal.OPEN = "modal:open", o.modal.BEFORE_CLOSE = "modal:before-close", o.modal.CLOSE = "modal:close", o.modal.AFTER_CLOSE = "modal:after-close", o.modal.AJAX_SEND = "modal:ajax:send", o.modal.AJAX_SUCCESS = "modal:ajax:success", o.modal.AJAX_FAIL = "modal:ajax:fail", o.modal.AJAX_COMPLETE = "modal:ajax:complete", o.fn.modal = function (e) {

        return 1 === this.length && (t = new o.modal(this, e)), this

    }, o(document)

        .on("click.modal", 'a[rel="modal:close"]', o.modal.close), o(document)

        .on("click.modal", 'a[rel="modal:open"]', function (t) {

            t.preventDefault(), o(this)

                .modal()

        })

}(jQuery);

/**

 * autoNumeric.js

 * @author: Bob Knothe

 * @author: Sokolov Yura

 * @version: 1.9.37 - 2015-05-24 GMT 7:00 PM / 19:00

 */

!function (e) {

    "use strict";



    function t(e) {

        var t = {};

        if (void 0 === e.selectionStart) {

            e.focus();

            var a = document.selection.createRange();

            t.length = a.text.length, a.moveStart("character", -e.value.length), t.end = a.text.length, t.start = t.end - t.length

        } else t.start = e.selectionStart, t.end = e.selectionEnd, t.length = t.end - t.start;

        return t

    }



    function a(e, t, a) {

        if (void 0 === e.selectionStart) {

            e.focus();

            var i = e.createTextRange();

            i.collapse(!0), i.moveEnd("character", a), i.moveStart("character", t), i.select()

        } else e.selectionStart = t, e.selectionEnd = a

    }



    function i(t, a) {

        e.each(a, function (e, i) {

            "function" == typeof i ? a[e] = i(t, a, e) : "function" == typeof t.autoNumeric[i] && (a[e] = t.autoNumeric[i](t, a, e))

        })

    }



    function n(e, t) {

        "string" == typeof e[t] && (e[t] *= 1)

    }



    function r(e, t) {

        i(e, t), t.tagList = ["b", "caption", "cite", "code", "dd", "del", "div", "dfn", "dt", "em", "h1", "h2", "h3", "h4", "h5", "h6", "ins", "kdb", "label", "li", "output", "p", "q", "s", "sample", "span", "strong", "td", "th", "u", "var"];

        var a = t.vMax.toString()

                .split("."),

            r = t.vMin || 0 === t.vMin ? t.vMin.toString()

                .split(".") : [];

        if (n(t, "vMax"), n(t, "vMin"), n(t, "mDec"), t.mDec = "CHF" === t.mRound ? "2" : t.mDec, t.allowLeading = !0, t.aNeg = t.vMin < 0 ? "-" : "", a[0] = a[0].replace("-", ""), r[0] = r[0].replace("-", ""), t.mInt = Math.max(a[0].length, r[0].length, 1), null === t.mDec) {

            var o = 0,

                s = 0;

            a[1] && (o = a[1].length), r[1] && (s = r[1].length), t.mDec = Math.max(o, s)

        }

        null === t.altDec && t.mDec > 0 && ("." === t.aDec && "," !== t.aSep ? t.altDec = "," : "," === t.aDec && "." !== t.aSep && (t.altDec = "."));

        var u = t.aNeg ? "([-\\" + t.aNeg + "]?)" : "(-?)";

        t.aNegRegAutoStrip = u, t.skipFirstAutoStrip = new RegExp(u + "[^-" + (t.aNeg ? "\\" + t.aNeg : "") + "\\" + t.aDec + "\\d].*?(\\d|\\" + t.aDec + "\\d)"), t.skipLastAutoStrip = new RegExp("(\\d\\" + t.aDec + "?)[^\\" + t.aDec + "\\d]\\D*$");

        var c = "-" + t.aNum + "\\" + t.aDec;

        return t.allowedAutoStrip = new RegExp("[^" + c + "]", "gi"), t.numRegAutoStrip = new RegExp(u + "(?:\\" + t.aDec + "?(\\d+\\" + t.aDec + "\\d+)|(\\d*(?:\\" + t.aDec + "\\d*)?))"), t

    }



    function o(e, t, a) {

        if (t.aSign)

            for (; e.indexOf(t.aSign) > -1;) e = e.replace(t.aSign, "");

        e = e.replace(t.skipFirstAutoStrip, "$1$2"), e = e.replace(t.skipLastAutoStrip, "$1"), e = e.replace(t.allowedAutoStrip, ""), t.altDec && (e = e.replace(t.altDec, t.aDec));

        var i = e.match(t.numRegAutoStrip);

        if (e = i ? [i[1], i[2], i[3]].join("") : "", ("allow" === t.lZero || "keep" === t.lZero) && "strip" !== a) {

            var n = [],

                r = "";

            n = e.split(t.aDec), -1 !== n[0].indexOf("-") && (r = "-", n[0] = n[0].replace("-", "")), n[0].length > t.mInt && "0" === n[0].charAt(0) && (n[0] = n[0].slice(1)), e = r + n.join(t.aDec)

        }

        if (a && "deny" === t.lZero || a && "allow" === t.lZero && t.allowLeading === !1) {

            var o = "^" + t.aNegRegAutoStrip + "0*(\\d" + ("leading" === a ? ")" : "|$)");

            o = new RegExp(o), e = e.replace(o, "$1$2")

        }

        return e

    }



    function s(e, t) {

        if ("p" === t.pSign) {

            var a = t.nBracket.split(",");

            t.hasFocus || t.removeBrackets ? (t.hasFocus && e.charAt(0) === a[0] || t.removeBrackets && e.charAt(0) === a[0]) && (e = e.replace(a[0], t.aNeg), e = e.replace(a[1], "")) : (e = e.replace(t.aNeg, ""), e = a[0] + e + a[1])

        }

        return e

    }



    function u(e, t) {

        if (e) {

            var a = +e;

            if (1e-6 > a && a > -1) e = +e, 1e-6 > e && e > 0 && (e = (e + 10)

                .toString(), e = e.substring(1)), 0 > e && e > -1 && (e = (e - 10)

                .toString(), e = "-" + e.substring(2)), e = e.toString();

            else {

                var i = e.split(".");

                void 0 !== i[1] && (0 === +i[1] ? e = i[0] : (i[1] = i[1].replace(/0*$/, ""), e = i.join(".")))

            }

        }

        return "keep" === t.lZero ? e : e.replace(/^0*(\d)/, "$1")

    }



    function c(e, t, a) {

        return t && "." !== t && (e = e.replace(t, ".")), a && "-" !== a && (e = e.replace(a, "-")), e.match(/\d/) || (e += "0"), e

    }



    function l(e, t, a) {

        return a && "-" !== a && (e = e.replace("-", a)), t && "." !== t && (e = e.replace(".", t)), e

    }



    function h(e, t, a) {

        return "" === e || e === t.aNeg ? "zero" === t.wEmpty ? e + "0" : "sign" === t.wEmpty || a ? e + t.aSign : e : null

    }



    function p(e, t) {

        e = o(e, t);

        var a = e.replace(",", "."),

            i = h(e, t, !0);

        if (null !== i) return i;

        var n = "";

        n = 2 === t.dGroup ? /(\d)((\d)(\d{2}?)+)$/ : 4 === t.dGroup ? /(\d)((\d{4}?)+)$/ : /(\d)((\d{3}?)+)$/;

        var r = e.split(t.aDec);

        t.altDec && 1 === r.length && (r = e.split(t.altDec));

        var u = r[0];

        if (t.aSep)

            for (; n.test(u);) u = u.replace(n, "$1" + t.aSep + "$2");

        if (0 !== t.mDec && r.length > 1 ? (r[1].length > t.mDec && (r[1] = r[1].substring(0, t.mDec)), e = u + t.aDec + r[1]) : e = u, t.aSign) {

            var c = -1 !== e.indexOf(t.aNeg);

            e = e.replace(t.aNeg, ""), e = "p" === t.pSign ? t.aSign + e : e + t.aSign, c && (e = t.aNeg + e)

        }

        return 0 > a && null !== t.nBracket && (e = s(e, t)), e

    }



    function g(e, t) {

        e = "" === e ? "0" : e.toString(), n(t, "mDec"), "CHF" === t.mRound && (e = (Math.round(20 * e) / 20)

            .toString());

        var a = "",

            i = 0,

            r = "",

            o = "boolean" == typeof t.aPad || null === t.aPad ? t.aPad ? t.mDec : 0 : +t.aPad,

            s = function (e) {

                var t = 0 === o ? /(\.(?:\d*[1-9])?)0*$/ : 1 === o ? /(\.\d(?:\d*[1-9])?)0*$/ : new RegExp("(\\.\\d{" + o + "}(?:\\d*[1-9])?)0*$");

                return e = e.replace(t, "$1"), 0 === o && (e = e.replace(/\.$/, "")), e

            };

        "-" === e.charAt(0) && (r = "-", e = e.replace("-", "")), e.match(/^\d/) || (e = "0" + e), "-" === r && 0 === +e && (r = ""), (+e > 0 && "keep" !== t.lZero || e.length > 0 && "allow" === t.lZero) && (e = e.replace(/^0*(\d)/, "$1"));

        var u = e.lastIndexOf("."),

            c = -1 === u ? e.length - 1 : u,

            l = e.length - 1 - c;

        if (l <= t.mDec) {

            if (a = e, o > l) {

                -1 === u && (a += ".");

                for (var h = "000000"; o > l;) h = h.substring(0, o - l), a += h, l += h.length

            } else l > o ? a = s(a) : 0 === l && 0 === o && (a = a.replace(/\.$/, ""));

            if ("CHF" !== t.mRound) return 0 === +a ? a : r + a;

            "CHF" === t.mRound && (u = a.lastIndexOf("."), e = a)

        }

        var p = u + t.mDec,

            g = +e.charAt(p + 1),

            d = e.substring(0, p + 1)

                .split(""),

            f = "." === e.charAt(p) ? e.charAt(p - 1) % 2 : e.charAt(p) % 2,

            m = !0;

        if (1 !== f && (f = 0 === f && e.substring(p + 2, e.length) > 0 ? 1 : 0), g > 4 && "S" === t.mRound || g > 4 && "A" === t.mRound && "" === r || g > 5 && "A" === t.mRound && "-" === r || g > 5 && "s" === t.mRound || g > 5 && "a" === t.mRound && "" === r || g > 4 && "a" === t.mRound && "-" === r || g > 5 && "B" === t.mRound || 5 === g && "B" === t.mRound && 1 === f || g > 0 && "C" === t.mRound && "" === r || g > 0 && "F" === t.mRound && "-" === r || g > 0 && "U" === t.mRound || "CHF" === t.mRound)

            for (i = d.length - 1; i >= 0; i -= 1)

                if ("." !== d[i]) {

                    if ("CHF" === t.mRound && d[i] <= 2 && m) {

                        d[i] = 0, m = !1;

                        break

                    }

                    if ("CHF" === t.mRound && d[i] <= 7 && m) {

                        d[i] = 5, m = !1;

                        break

                    }

                    if ("CHF" === t.mRound && m ? (d[i] = 10, m = !1) : d[i] = +d[i] + 1, d[i] < 10) break;

                    i > 0 && (d[i] = "0")

                }

        return d = d.slice(0, p + 1), a = s(d.join("")), 0 === +a ? a : r + a

    }



    function d(e, t, a) {

        var i = t.aDec,

            n = t.mDec;

        if (e = "paste" === a ? g(e, t) : e, i && n) {

            var r = e.split(i);

            r[1] && r[1].length > n && (n > 0 ? (r[1] = r[1].substring(0, n), e = r.join(i)) : e = r[0])

        }

        return e

    }



    function f(e, t) {

        e = o(e, t), e = d(e, t), e = c(e, t.aDec, t.aNeg);

        var a = +e;

        return a >= t.vMin && a <= t.vMax

    }



    function m(t, a) {

        this.settings = a, this.that = t, this.$that = e(t), this.formatted = !1, this.settingsClone = r(this.$that, this.settings), this.value = t.value

    }



    function v(t) {

        return "string" == typeof t && (t = t.replace(/\[/g, "\\[")

            .replace(/\]/g, "\\]"), t = "#" + t.replace(/(:|\.)/g, "\\$1")), e(t)

    }



    function y(e, t, a) {

        var i = e.data("autoNumeric");

        i || (i = {}, e.data("autoNumeric", i));

        var n = i.holder;

        return (void 0 === n && t || a) && (n = new m(e.get(0), t), i.holder = n), n

    }



    m.prototype = {

        init: function (e) {

            this.value = this.that.value, this.settingsClone = r(this.$that, this.settings), this.ctrlKey = e.ctrlKey, this.cmdKey = e.metaKey, this.shiftKey = e.shiftKey, this.selection = t(this.that), ("keydown" === e.type || "keyup" === e.type) && (this.kdCode = e.keyCode), this.which = e.which, this.processed = !1, this.formatted = !1

        },

        setSelection: function (e, t, i) {

            e = Math.max(e, 0), t = Math.min(t, this.that.value.length), this.selection = {

                start: e,

                end: t,

                length: t - e

            }, (void 0 === i || i) && a(this.that, e, t)

        },

        setPosition: function (e, t) {

            this.setSelection(e, e, t)

        },

        getBeforeAfter: function () {

            var e = this.value,

                t = e.substring(0, this.selection.start),

                a = e.substring(this.selection.end, e.length);

            return [t, a]

        },

        getBeforeAfterStriped: function () {

            var e = this.getBeforeAfter();

            return e[0] = o(e[0], this.settingsClone), e[1] = o(e[1], this.settingsClone), e

        },

        normalizeParts: function (e, t) {

            var a = this.settingsClone;

            t = o(t, a);

            var i = t.match(/^\d/) ? !0 : "leading";

            e = o(e, a, i), "" !== e && e !== a.aNeg || "deny" !== a.lZero || t > "" && (t = t.replace(/^0*(\d)/, "$1"));

            var n = e + t;

            if (a.aDec) {

                var r = n.match(new RegExp("^" + a.aNegRegAutoStrip + "\\" + a.aDec));

                r && (e = e.replace(r[1], r[1] + "0"), n = e + t)

            }

            return "zero" !== a.wEmpty || n !== a.aNeg && "" !== n || (e += "0"), [e, t]

        },

        setValueParts: function (e, t, a) {

            var i = this.settingsClone,

                n = this.normalizeParts(e, t),

                r = n.join(""),

                o = n[0].length;

            return f(r, i) ? (r = d(r, i, a), o > r.length && (o = r.length), this.value = r, this.setPosition(o, !1), !0) : !1

        },

        signPosition: function () {

            var e = this.settingsClone,

                t = e.aSign,

                a = this.that;

            if (t) {

                var i = t.length;

                if ("p" === e.pSign) {

                    var n = e.aNeg && a.value && a.value.charAt(0) === e.aNeg;

                    return n ? [1, i + 1] : [0, i]

                }

                var r = a.value.length;

                return [r - i, r]

            }

            return [1e3, -1]

        },

        expandSelectionOnSign: function (e) {

            var t = this.signPosition(),

                a = this.selection;

            a.start < t[1] && a.end > t[0] && ((a.start < t[0] || a.end > t[1]) && this.value.substring(Math.max(a.start, t[0]), Math.min(a.end, t[1]))

                .match(/^\s*$/) ? a.start < t[0] ? this.setSelection(a.start, t[0], e) : this.setSelection(t[1], a.end, e) : this.setSelection(Math.min(a.start, t[0]), Math.max(a.end, t[1]), e))

        },

        checkPaste: function () {

            if (void 0 !== this.valuePartsBeforePaste) {

                var e = this.getBeforeAfter(),

                    t = this.valuePartsBeforePaste;

                delete this.valuePartsBeforePaste, e[0] = e[0].substr(0, t[0].length) + o(e[0].substr(t[0].length), this.settingsClone), this.setValueParts(e[0], e[1], "paste") || (this.value = t.join(""), this.setPosition(t[0].length, !1))

            }

        },

        skipAllways: function (e) {

            var t = this.kdCode,

                a = this.which,

                i = this.ctrlKey,

                n = this.cmdKey,

                r = this.shiftKey;

            if ((i || n) && "keyup" === e.type && void 0 !== this.valuePartsBeforePaste || r && 45 === t) return this.checkPaste(), !1;

            if (t >= 112 && 123 >= t || t >= 91 && 93 >= t || t >= 9 && 31 >= t || 8 > t && (0 === a || a === t) || 144 === t || 145 === t || 45 === t || 224 === t) return !0;

            if ((i || n) && 65 === t) return !0;

            if ((i || n) && (67 === t || 86 === t || 88 === t)) return "keydown" === e.type && this.expandSelectionOnSign(), (86 === t || 45 === t) && ("keydown" === e.type || "keypress" === e.type ? void 0 === this.valuePartsBeforePaste && (this.valuePartsBeforePaste = this.getBeforeAfter()) : this.checkPaste()), "keydown" === e.type || "keypress" === e.type || 67 === t;

            if (i || n) return !0;

            if (37 === t || 39 === t) {

                var o = this.settingsClone.aSep,

                    s = this.selection.start,

                    u = this.that.value;

                return "keydown" === e.type && o && !this.shiftKey && (37 === t && u.charAt(s - 2) === o ? this.setPosition(s - 1) : 39 === t && u.charAt(s + 1) === o && this.setPosition(s + 1)), !0

            }

            return t >= 34 && 40 >= t ? !0 : !1

        },

        processAllways: function () {

            var e;

            return 8 === this.kdCode || 46 === this.kdCode ? (this.selection.length ? (this.expandSelectionOnSign(!1), e = this.getBeforeAfterStriped(), this.setValueParts(e[0], e[1])) : (e = this.getBeforeAfterStriped(), 8 === this.kdCode ? e[0] = e[0].substring(0, e[0].length - 1) : e[1] = e[1].substring(1, e[1].length), this.setValueParts(e[0], e[1])), !0) : !1

        },

        processKeypress: function () {

            var e = this.settingsClone,

                t = String.fromCharCode(this.which),

                a = this.getBeforeAfterStriped(),

                i = a[0],

                n = a[1];

            return t === e.aDec || e.altDec && t === e.altDec || ("." === t || "," === t) && 110 === this.kdCode ? e.mDec && e.aDec ? e.aNeg && n.indexOf(e.aNeg) > -1 ? !0 : i.indexOf(e.aDec) > -1 ? !0 : n.indexOf(e.aDec) > 0 ? !0 : (0 === n.indexOf(e.aDec) && (n = n.substr(1)), this.setValueParts(i + e.aDec, n), !0) : !0 : "-" === t || "+" === t ? e.aNeg ? ("" === i && n.indexOf(e.aNeg) > -1 && (i = e.aNeg, n = n.substring(1, n.length)), i = i.charAt(0) === e.aNeg ? i.substring(1, i.length) : "-" === t ? e.aNeg + i : i, this.setValueParts(i, n), !0) : !0 : t >= "0" && "9" >= t ? (e.aNeg && "" === i && n.indexOf(e.aNeg) > -1 && (i = e.aNeg, n = n.substring(1, n.length)), e.vMax <= 0 && e.vMin < e.vMax && -1 === this.value.indexOf(e.aNeg) && "0" !== t && (i = e.aNeg + i), this.setValueParts(i + t, n), !0) : !0

        },

        formatQuick: function () {

            var e = this.settingsClone,

                t = this.getBeforeAfterStriped(),

                a = this.value;

            if (("" === e.aSep || "" !== e.aSep && -1 === a.indexOf(e.aSep)) && ("" === e.aSign || "" !== e.aSign && -1 === a.indexOf(e.aSign))) {

                var i = [],

                    n = "";

                i = a.split(e.aDec), i[0].indexOf("-") > -1 && (n = "-", i[0] = i[0].replace("-", ""), t[0] = t[0].replace("-", "")), i[0].length > e.mInt && "0" === t[0].charAt(0) && (t[0] = t[0].slice(1)), t[0] = n + t[0]

            }

            var r = p(this.value, this.settingsClone),

                o = r.length;

            if (r) {

                var s = t[0].split(""),

                    u = 0;

                for (u; u < s.length; u += 1) s[u].match("\\d") || (s[u] = "\\" + s[u]);

                var c = new RegExp("^.*?" + s.join(".*?")),

                    l = r.match(c);

                l ? (o = l[0].length, (0 === o && r.charAt(0) !== e.aNeg || 1 === o && r.charAt(0) === e.aNeg) && e.aSign && "p" === e.pSign && (o = this.settingsClone.aSign.length + ("-" === r.charAt(0) ? 1 : 0))) : e.aSign && "s" === e.pSign && (o -= e.aSign.length)

            }

            this.that.value = r, this.setPosition(o), this.formatted = !0

        }

    };

    var S = {

        init: function (t) {

            return this.each(function () {

                var i = e(this),

                    n = i.data("autoNumeric"),

                    r = i.data(),

                    u = i.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])");

                if ("object" == typeof n) return this;

                n = e.extend({}, e.fn.autoNumeric.defaults, r, t, {

                    aNum: "0123456789",

                    hasFocus: !1,

                    removeBrackets: !1,

                    runOnce: !1,

                    tagList: ["b", "caption", "cite", "code", "dd", "del", "div", "dfn", "dt", "em", "h1", "h2", "h3", "h4", "h5", "h6", "ins", "kdb", "label", "li", "output", "p", "q", "s", "sample", "span", "strong", "td", "th", "u", "var"]

                }), n.aDec === n.aSep && e.error("autoNumeric will not function properly when the decimal character aDec: '" + n.aDec + "' and thousand separator aSep: '" + n.aSep + "' are the same character"), i.data("autoNumeric", n);

                var d = y(i, n);

                if (u || "input" !== i.prop("tagName")

                    .toLowerCase() || e.error('The input type "' + i.prop("type") + '" is not supported by autoNumeric()'), -1 === e.inArray(i.prop("tagName")

                    .toLowerCase(), n.tagList) && "input" !== i.prop("tagName")

                    .toLowerCase() && e.error("The <" + i.prop("tagName")

                    .toLowerCase() + "> is not supported by autoNumeric()"), n.runOnce === !1 && n.aForm) {

                    if (u) {

                        var m = !0;

                        "" === i[0].value && "empty" === n.wEmpty && (i[0].value = "", m = !1), "" === i[0].value && "sign" === n.wEmpty && (i[0].value = n.aSign.toString(), m = !1), m && "" !== i.val() && (void 0 === n.anDefault && i[0].value === i.prop("defaultValue") || void 0 !== n.anDefault && n.anDefault.toString() === i.val()) && i.autoNumeric("set", i.val())

                    }

                    -1 !== e.inArray(i.prop("tagName")

                        .toLowerCase(), n.tagList) && "" !== i.text() && i.autoNumeric("set", i.text())

                }

                n.runOnce = !0, i.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])") && (i.on("keydown.autoNumeric", function (t) {

                    return d = y(i), d.settings.aDec === d.settings.aSep && e.error("autoNumeric will not function properly when the decimal character aDec: '" + d.settings.aDec + "' and thousand separator aSep: '" + d.settings.aSep + "' are the same character"), d.that.readOnly ? (d.processed = !0, !0) : (d.init(t), d.skipAllways(t) ? (d.processed = !0, !0) : d.processAllways() ? (d.processed = !0, d.formatQuick(), t.preventDefault(), !1) : (d.formatted = !1, !0))

                }), i.on("keypress.autoNumeric", function (e) {

                    d = y(i);

                    var t = d.processed;

                    return d.init(e), d.skipAllways(e) ? !0 : t ? (e.preventDefault(), !1) : d.processAllways() || d.processKeypress() ? (d.formatQuick(), e.preventDefault(), !1) : void(d.formatted = !1)

                }), i.on("keyup.autoNumeric", function (e) {

                    d = y(i), d.init(e);

                    var t = d.skipAllways(e);

                    return d.kdCode = 0, delete d.valuePartsBeforePaste, i[0].value === d.settings.aSign && ("s" === d.settings.pSign ? a(this, 0, 0) : a(this, d.settings.aSign.length, d.settings.aSign.length)), t ? !0 : "" === this.value ? !0 : void(d.formatted || d.formatQuick())

                }), i.on("focusin.autoNumeric", function () {

                    d = y(i);

                    var e = d.settingsClone;

                    if (e.hasFocus = !0, null !== e.nBracket) {

                        var t = i.val();

                        i.val(s(t, e))

                    }

                    d.inVal = i.val();

                    var a = h(d.inVal, e, !0);

                    null !== a && "" !== a && i.val(a)

                }), i.on("focusout.autoNumeric", function () {

                    d = y(i);

                    var e = d.settingsClone,

                        t = i.val(),

                        a = t;

                    e.hasFocus = !1;

                    var n = "";

                    "allow" === e.lZero && (e.allowLeading = !1, n = "leading"), "" !== t && (t = o(t, e, n), null === h(t, e) && f(t, e, i[0]) ? (t = c(t, e.aDec, e.aNeg), t = g(t, e), t = l(t, e.aDec, e.aNeg)) : t = "");

                    var r = h(t, e, !1);

                    null === r && (r = p(t, e)), (r !== d.inVal || r !== a) && (i.change(), i.val(r), delete d.inVal)

                }))

            })

        },

        destroy: function () {

            return e(this)

                .each(function () {

                    var t = e(this);

                    t.off(".autoNumeric"), t.removeData("autoNumeric")

                })

        },

        update: function (t) {

            return e(this)

                .each(function () {

                    var a = v(e(this)),

                        i = a.data("autoNumeric");

                    "object" != typeof i && e.error("You must initialize autoNumeric('init', {options}) prior to calling the 'update' method");

                    var n = a.autoNumeric("get");

                    return i = e.extend(i, t), y(a, i, !0), i.aDec === i.aSep && e.error("autoNumeric will not function properly when the decimal character aDec: '" + i.aDec + "' and thousand separator aSep: '" + i.aSep + "' are the same character"), a.data("autoNumeric", i), "" !== a.val() || "" !== a.text() ? a.autoNumeric("set", n) : void 0

                })

        },

        set: function (t) {

            return null !== t ? e(this)

                .each(function () {

                    var a = v(e(this)),

                        i = a.data("autoNumeric"),

                        n = t.toString(),

                        r = t.toString(),

                        o = a.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])");

                    return "object" != typeof i && e.error("You must initialize autoNumeric('init', {options}) prior to calling the 'set' method"), r !== a.attr("value") && r !== a.text() || i.runOnce !== !1 || (n = n.replace(",", ".")), e.isNumeric(+n) || e.error("The value (" + n + ") being 'set' is not numeric and has caused a error to be thrown"), n = u(n, i), i.setEvent = !0, n.toString(), "" !== n && (n = g(n, i)), n = l(n, i.aDec, i.aNeg), f(n, i) || (n = g("", i)), n = p(n, i), o ? a.val(n) : -1 !== e.inArray(a.prop("tagName")

                        .toLowerCase(), i.tagList) ? a.text(n) : !1

                }) : void 0

        },

        get: function () {

            var t = v(e(this)),

                a = t.data("autoNumeric");

            "object" != typeof a && e.error("You must initialize autoNumeric('init', {options}) prior to calling the 'get' method");

            var i = "";

            return t.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])") ? i = t.eq(0)

                .val() : -1 !== e.inArray(t.prop("tagName")

                .toLowerCase(), a.tagList) ? i = t.eq(0)

                .text() : e.error("The <" + t.prop("tagName")

                .toLowerCase() + "> is not supported by autoNumeric()"), "" === i && "empty" === a.wEmpty || i === a.aSign && ("sign" === a.wEmpty || "empty" === a.wEmpty) ? "" : ("" !== i && null !== a.nBracket && (a.removeBrackets = !0, i = s(i, a), a.removeBrackets = !1), (a.runOnce || a.aForm === !1) && (i = o(i, a)), i = c(i, a.aDec, a.aNeg), 0 === +i && "keep" !== a.lZero && (i = "0"), "keep" === a.lZero ? i : i = u(i, a))

        },

        getString: function () {

            var t = !1,

                a = v(e(this)),

                i = a.serialize(),

                n = i.split("&"),

                r = e("form")

                    .index(a),

                o = e("form:eq(" + r + ")"),

                s = [],

                u = [],

                c = /^(?:submit|button|image|reset|file)$/i,

                l = /^(?:input|select|textarea|keygen)/i,

                h = /^(?:checkbox|radio)$/i,

                p = /^(?:button|checkbox|color|date|datetime|datetime-local|email|file|image|month|number|password|radio|range|reset|search|submit|time|url|week)/i,

                g = 0;

            return e.each(o[0], function (e, t) {

                "" === t.name || !l.test(t.localName) || c.test(t.type) || t.disabled || !t.checked && h.test(t.type) ? u.push(-1) : (u.push(g), g += 1)

            }), g = 0, e.each(o[0], function (e, t) {

                "input" !== t.localName || "" !== t.type && "text" !== t.type && "hidden" !== t.type && "tel" !== t.type ? (s.push(-1), "input" === t.localName && p.test(t.type) && (g += 1)) : (s.push(g), g += 1)

            }), e.each(n, function (a, i) {

                i = n[a].split("=");

                var o = e.inArray(a, u);

                if (o > -1 && s[o] > -1) {

                    var c = e("form:eq(" + r + ") input:eq(" + s[o] + ")"),

                        l = c.data("autoNumeric");

                    "object" == typeof l && null !== i[1] && (i[1] = e("form:eq(" + r + ") input:eq(" + s[o] + ")")

                        .autoNumeric("get")

                        .toString(), n[a] = i.join("="), t = !0)

                }

            }), t || e.error("You must initialize autoNumeric('init', {options}) prior to calling the 'getString' method"), n.join("&")

        },

        getArray: function () {

            var t = !1,

                a = v(e(this)),

                i = a.serializeArray(),

                n = e("form")

                    .index(a),

                r = e("form:eq(" + n + ")"),

                o = [],

                s = [],

                u = /^(?:submit|button|image|reset|file)$/i,

                c = /^(?:input|select|textarea|keygen)/i,

                l = /^(?:checkbox|radio)$/i,

                h = /^(?:button|checkbox|color|date|datetime|datetime-local|email|file|image|month|number|password|radio|range|reset|search|submit|time|url|week)/i,

                p = 0;

            return e.each(r[0], function (e, t) {

                "" === t.name || !c.test(t.localName) || u.test(t.type) || t.disabled || !t.checked && l.test(t.type) ? s.push(-1) : (s.push(p), p += 1)

            }), p = 0, e.each(r[0], function (e, t) {

                "input" !== t.localName || "" !== t.type && "text" !== t.type && "hidden" !== t.type && "tel" !== t.type ? (o.push(-1), "input" === t.localName && h.test(t.type) && (p += 1)) : (o.push(p), p += 1)

            }), e.each(i, function (a, i) {

                var r = e.inArray(a, s);

                if (r > -1 && o[r] > -1) {

                    var u = e("form:eq(" + n + ") input:eq(" + o[r] + ")"),

                        c = u.data("autoNumeric");

                    "object" == typeof c && (i.value = e("form:eq(" + n + ") input:eq(" + o[r] + ")")

                        .autoNumeric("get")

                        .toString(), t = !0)

                }

            }), t || e.error("None of the successful form inputs are initialized by autoNumeric."), i

        },

        getSettings: function () {

            var t = v(e(this));

            return t.eq(0)

                .data("autoNumeric")

        }

    };

    e.fn.autoNumeric = function (t) {

        return S[t] ? S[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error('Method "' + t + '" is not supported by autoNumeric()') : S.init.apply(this, arguments)

    }, e.fn.autoNumeric.defaults = {

        aSep: ",",

        dGroup: "3",

        aDec: ".",

        altDec: null,

        aSign: "",

        pSign: "p",

        vMax: "9999999999999.99",

        vMin: "-9999999999999.99",

        mDec: null,

        mRound: "S",

        aPad: !0,

        nBracket: null,

        wEmpty: "empty",

        lZero: "allow",

        aForm: !0

    }

}(jQuery);



/*!

 Autosize 4.0.0

 license: MIT

 http://www.jacklmoore.com/autosize

 */

!function (e, t) {

    if ("function" == typeof define && define.amd) define(["exports", "module"], t);

    else if ("undefined" != typeof exports && "undefined" != typeof module) t(exports, module);

    else {

        var n = {

            exports: {}

        };

        t(n.exports, n), e.autosize = n.exports

    }

}(this, function (e, t) {

    "use strict";



    function n(e) {

        function t() {

            var t = window.getComputedStyle(e, null);

            "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), s = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(s) && (s = 0), l()

        }



        function n(t) {

            var n = e.style.width;

            e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t

        }



        function o(e) {

            for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({

                node: e.parentNode,

                scrollTop: e.parentNode.scrollTop

            }), e = e.parentNode;

            return t

        }



        function r() {

            var t = e.style.height,

                n = o(e),

                r = document.documentElement && document.documentElement.scrollTop;

            e.style.height = "";

            var i = e.scrollHeight + s;

            return 0 === e.scrollHeight ? void(e.style.height = t) : (e.style.height = i + "px", u = e.clientWidth, n.forEach(function (e) {

                e.node.scrollTop = e.scrollTop

            }), void(r && (document.documentElement.scrollTop = r)))

        }



        function l() {

            r();

            var t = Math.round(parseFloat(e.style.height)),

                o = window.getComputedStyle(e, null),

                i = "content-box" === o.boxSizing ? Math.round(parseFloat(o.height)) : e.offsetHeight;

            if (i !== t ? "hidden" === o.overflowY && (n("scroll"), r(), i = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null)

                .height)) : e.offsetHeight) : "hidden" !== o.overflowY && (n("hidden"), r(), i = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null)

                .height)) : e.offsetHeight), a !== i) {

                a = i;

                var l = d("autosize:resized");

                try {

                    e.dispatchEvent(l)

                } catch (e) {

                }

            }

        }



        if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) {

            var s = null,

                u = e.clientWidth,

                a = null,

                c = function () {

                    e.clientWidth !== u && l()

                },

                p = function (t) {

                    window.removeEventListener("resize", c, !1), e.removeEventListener("input", l, !1), e.removeEventListener("keyup", l, !1), e.removeEventListener("autosize:destroy", p, !1), e.removeEventListener("autosize:update", l, !1), Object.keys(t)

                        .forEach(function (n) {

                            e.style[n] = t[n]

                        }), i.delete(e)

                }.bind(e, {

                    height: e.style.height,

                    resize: e.style.resize,

                    overflowY: e.style.overflowY,

                    overflowX: e.style.overflowX,

                    wordWrap: e.style.wordWrap

                });

            e.addEventListener("autosize:destroy", p, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", l, !1), window.addEventListener("resize", c, !1), e.addEventListener("input", l, !1), e.addEventListener("autosize:update", l, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", i.set(e, {

                destroy: p,

                update: l

            }), t()

        }

    }



    function o(e) {

        var t = i.get(e);

        t && t.destroy()

    }



    function r(e) {

        var t = i.get(e);

        t && t.update()

    }



    var i = "function" == typeof Map ? new Map : function () {

            var e = [],

                t = [];

            return {

                has: function (t) {

                    return e.indexOf(t) > -1

                },

                get: function (n) {

                    return t[e.indexOf(n)]

                },

                set: function (n, o) {

                    e.indexOf(n) === -1 && (e.push(n), t.push(o))

                },

                delete: function (n) {

                    var o = e.indexOf(n);

                    o > -1 && (e.splice(o, 1), t.splice(o, 1))

                }

            }

        }(),

        d = function (e) {

            return new Event(e, {

                bubbles: !0

            })

        };

    try {

        new Event("test")

    } catch (e) {

        d = function (e) {

            var t = document.createEvent("Event");

            return t.initEvent(e, !0, !1), t

        }

    }

    var l = null;

    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (l = function (e) {

        return e

    }, l.destroy = function (e) {

        return e

    }, l.update = function (e) {

        return e

    }) : (l = function (e, t) {

        return e && Array.prototype.forEach.call(e.length ? e : [e], function (e) {

            return n(e, t)

        }), e

    }, l.destroy = function (e) {

        return e && Array.prototype.forEach.call(e.length ? e : [e], o), e

    }, l.update = function (e) {

        return e && Array.prototype.forEach.call(e.length ? e : [e], r), e

    }), t.exports = l

});



!function (t) {

    t.fn.unveil = function (i, e) {

        function n() {

            var i = a.filter(function () {

                var i = t(this);

                if (!i.is(":hidden")) {

                    var e = o.scrollTop(),

                        n = e + o.height(),

                        r = i.offset()

                            .top,

                        s = r + i.height();

                    return s >= e - u && n + u >= r

                }

            });

            r = i.trigger("unveil"), a = a.not(r)

        }



        var r, o = t(window),

            u = i || 0,

            s = window.devicePixelRatio > 1,

            l = s ? "data-src-retina" : "data-src",

            a = this;

        return this.one("unveil", function () {

            var t = this.getAttribute(l);

            t = t || this.getAttribute("data-src"), t && (this.setAttribute("src", t), "function" == typeof e && e.call(this))

        }), o.on("scroll.unveil resize.unveil lookup.unveil", n), n(), this

    }

}(window.jQuery || window.Zepto);



/*

Script -DatNenHoaXuan-

*/

function $$$(e) {

    return document.getElementById(e)

}



function Forward(e) {

    window.location.href = e

}



function _postback() {

    return void 0

}



function ajaxFunction() {

    var e = null;

    try {

        e = new XMLHttpRequest

    } catch (t) {

        try {

            e = new ActiveXObject("Msxml2.XMLHTTP")

        } catch (t) {

            try {

                e = new ActiveXObject("Microsoft.XMLHTTP")

            } catch (t) {

                return !1

            }

        }

    }

}



function $query(e) {

    var t = "";

    return $(e)

        .find("input")

        .each(function (a) {

            var n = $(e)

                .find("input")

                .eq(a);

            "checkbox" != n.attr("type") && "radio" != n.attr("type") && "file" != n.attr("type") ? t += "&" + n.attr("name") + "=" + encodeURIComponent(n.val()) : "checkbox" == n.attr("type") ? n.is(":checked") && (t += "&" + n.attr("name") + "=" + n.attr("value")) : "radio" == n.attr("type") ? n.is(":checked") && (t += "&" + n.attr("name") + "=" + n.attr("value")) : "file" == n.attr("type") && (t += "&" + n.attr("name") + "=" + document.getElementsByName(n.attr("name"))

                .files)

        }), $(e)

        .find("textarea")

        .each(function (a) {

            var n = $(e)

                .find("textarea")

                .eq(a);

            t += "&" + n.attr("name") + "=" + encodeURIComponent(n.val())

        }), $(e)

        .find("select")

        .each(function (a) {

            var n = $(e)

                .find("select")

                .eq(a);

            t += "&" + n.attr("name") + "=" + encodeURIComponent(n.val())

        }), t.substring(1)

}



function $query_unt(e) {

    return $(e)

        .find("input")

        .each(function (t) {

            var a = $(e)

                .find("input")

                .eq(t);

            "button" != a.attr("type") && "submit" != a.attr("type") && "reset" != a.attr("type") && "hidden" != a.attr("type") && ("checkbox" != a.attr("type") && "radio" != a.attr("type") ? a.val("") : a.attr("checked", !1))

        }), $(e)

        .find("textarea")

        .each(function (t) {

            var a = $(e)

                .find("textarea")

                .eq(t);

            a.val("")

        }), !0

}



function showLoader() {

    $("#_loading")

        .html('<div style="position: fixed; top: 50%; right: 50%; text-align: center; background: transparent; z-index: 999999999;"><div class="windows8"> <div class="wBall" id="wBall_1"> <div class="wInnerBall"> </div> </div> <div class="wBall" id="wBall_2"> <div class="wInnerBall"> </div> </div> <div class="wBall" id="wBall_3"> <div class="wInnerBall"> </div> </div> <div class="wBall" id="wBall_4"> <div class="wInnerBall"> </div> </div> <div class="wBall" id="wBall_5"> <div class="wInnerBall"> </div> </div> </div></div>')

        .hide()

        .fadeIn(10), block = !0

}



function closeLoader() {

    $("#_loading")

        .html("")

        .hide()

        .fadeOut(100), block = !1

}



function showResult(e, t) {

    closeLoader(), $("#" + e)

        .html(t)

        .hide()

        .fadeIn(100), block = !1

}



function sendMail(e, t) {

    var a = $query("#" + t);

    return showLoader(), $.ajax({

        url: "/action.php",

        type: "POST",

        data: "url=" + e + "&" + a,

        dataType: "html",

        success: function (e) {

            closeLoader(), $query_unt("#" + t)
            if(t != '_frm_consign'){
                $("#" + t).parents('.fm-tool').remove()
            }
            alert(e)

        }

    }), !1

}


function sendMail1(e, t) {
    if($('#is_status1').is(":not(:checked)") && $('#is_status2').is(":not(:checked)")){
        alert('Báº¡n háº£y xÃ¡c nháº­n thÃ´ng bÃ¡o ');
        return false;
    }else{
        if($('#is_status1').is(':checked')){
            var key = 1;
        }else{
            var key = 0;
        }
        var a = $query("#" + t);
        return showLoader(), $.ajax({
            url: "/action.php",
            type: "POST",
            data: "url=" + e + "&" + a + "&key="+key,
            dataType: "html",
            success: function (e) {
                closeLoader(),
                    console.log(e);
                //$query_unt("#" + t),
                $("#" + t).parents('.fm-tool').remove(),
                    $('.show_rs_search').html(e)
                $('.show_rs_search').slideDown()
            }
        }), !1
    }
}
function sendMail2(e, t) {
    if($('#is_status3').is(":not(:checked)") && $('#is_status4').is(":not(:checked)")){
        alert('Báº¡n háº£y xÃ¡c nháº­n thÃ´ng bÃ¡o ');
        return false;
    }else{
        if($('#is_status3').is(':checked')){
            var key = 1;
        }else{
            var key = 0;
        }
        var a = $query("#" + t);
        return showLoader(), $.ajax({
            url: "/action.php",
            type: "POST",
            data: "url=" + e + "&" + a + "&key="+key,
            dataType: "html",
            success: function (e) {
                closeLoader(),
                    console.log(e);
                //$query_unt("#" + t),
                $("#" + t).parents('.fm-tool').remove(),
                    $('.show_rs_search').html(e)
                $('.show_rs_search').slideDown()
            }
        }), !1
    }
}


function open_modal(e) {

    return $.ajax({

        url: "/action.php",

        type: "POST",

        data: "url=" + e,

        dataType: "html",

        success: function (e) {

            $("#_modal")

                .html(e), $(".auto-number")

                .autoNumeric("init"), $("#_modal")

                .modal({

                    escapeClose: !1,

                    showClose: !1

                })

        }

    }), !1

}



// function check_consign() {

//     function e() {

//         for (var e = !1, t = 0; t < c.length; t++) {

//             var a = c[t].value,

//                 o = c[t].getAttribute("name"),

//                 d = document.createElement("span"),

//                 u = c[t].parentNode;

//             "SPAN" == u.lastChild.nodeName && u.removeChild(u.lastChild);

//             var p = ["email", "send"],

//                 _ = p.indexOf(o);

//             if ("" == a && 0 > _ && (d.innerHTML = n), "email" == o && "" != a) {

//                 var h = s.test(a);

//                 0 == h && (d.innerHTML = i)

//             }

//             "tel" == o && "" != a && ((1 == isNaN(a) || -1 != a.indexOf(".") || 0 > a) && (d.innerHTML = r), 0 == isNaN(a) && a.length < 8 && (d.innerHTML = r)), "" != d.innerHTML && (c[t].parentNode.appendChild(d), d.setAttribute("class", "show-error"), e = !0, l = !0, c[t].style.border = "1px solid #fff635")

//         }

//         return !e

//     }



//     for (var t = document.forms.frm_consign.getElementsByTagName("input"), a = document.forms.frm_consign.getElementsByTagName("select"), n = $("[name='lang_field']")

//         .val(), i = $("[name='lang_email']")

//         .val(), r = $("[name='lang_phone']")

//         .val(), c = new Array, o = 0; o < t.length + a.length; o++) o < t.length ? c[o] = t[o] : c[o] = a[o - t.length];

//     var l = !1,

//         s = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i,

//         d = document.getElementById("_send_consign");

//     d.onclick = function () {

//         return e()

//     };

//     for (var o = 0; o < c.length; o++) c[o].onchange = function () {

//         1 == l && (this.style.border = "1px solid #ffffff", e())

//     }

// }
function check_consign(){
    var input = document.forms['frm_consign'].getElementsByTagName('input');
    var txtarea = document.forms['frm_consign'].getElementsByTagName('select');
    var err_field = $("[name='lang_field']").val();
    var err_email = $("[name='lang_email']").val();
    var err_phone = $("[name='lang_phone']").val();

    var inputs = new Array();
    for(var i=0; i<(input.length+txtarea.length); i++){
        if(i<input.length) inputs[i]=input[i];
        else inputs[i]=txtarea[i-input.length];
    }
    var run_onchange = false;
    var email_filter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
    function valid(){
        var errors = false;
        for(var i=0; i<inputs.length; i++){
            var value = inputs[i].value;
            var name = inputs[i].getAttribute('name');

            var span = document.createElement('span');
            var p = inputs[i].parentNode;
            if(p.lastChild.nodeName == 'SPAN') {p.removeChild(p.lastChild);}
            var input_unt = ['email', 'send'];
            var cke = input_unt.indexOf(name);
            if( value == '' && cke < 0){
                span.innerHTML = err_field;
            }
            if(name == 'email' && value != '') {
                var return_val = email_filter.test(value);
                if(return_val == false){ span.innerHTML = err_email; }
            }
            if(name == 'tel' && value != ''){
                if(isNaN(value) == true || value.indexOf('.')!=-1 || value < 0){span.innerHTML = err_phone;}
                if(isNaN(value) == false && value.length < 8 && value.length > 12){span.innerHTML = err_phone;}
            }
            if(name == 'name' && value != ''){
                if(value.length > 40){span.innerHTML = 'Há» vÃ  tÃªn khÃ´ng Ä‘Æ°á»£c quÃ¡ 40 kÃ½ tá»±';}
            }

            if(span.innerHTML != ''){
                inputs[i].parentNode.appendChild(span);
                span.setAttribute('class', 'show-error');
                errors = true;
                run_onchange = true;
                inputs[i].style.border = '1px solid #fff635';
            }
        }
        return !errors;
    }

    var register = document.getElementById('_send_consign');
    register.onclick = function(){
        return valid();
    }

    for(var i=0; i<inputs.length; i++){
        inputs[i].onchange = function(){
            if(run_onchange == true){
                this.style.border = '1px solid #ffffff';
                valid();
            }
        }
    }
}


function check_consign2() {

    function e() {

        for (var e = !1, t = 0; t < c.length; t++) {

            var a = c[t].value,

                o = c[t].getAttribute("name"),

                d = document.createElement("span"),

                u = c[t].parentNode;

            "SPAN" == u.lastChild.nodeName && u.removeChild(u.lastChild);

            var p = ["email", "send"],

                _ = p.indexOf(o);

            if ("" == a && 0 > _ && (d.innerHTML = n), "email" == o && "" != a) {

                var h = s.test(a);

                0 == h && (d.innerHTML = i)

            }

            "tel" == o && "" != a && ((1 == isNaN(a) || -1 != a.indexOf(".") || 0 > a) && (d.innerHTML = r), 0 == isNaN(a) && a.length < 8 && (d.innerHTML = r)), "" != d.innerHTML && (c[t].parentNode.appendChild(d), d.setAttribute("class", "show-error"), e = !0, l = !0, c[t].style.border = "1px solid #fff635")

        }

        return !e

    }



    for (var t = document.forms.frm_consign2.getElementsByTagName("input"), a = document.forms.frm_consign2.getElementsByTagName("select"), n = $("[name='lang_field']")

        .val(), i = $("[name='lang_email']")

        .val(), r = $("[name='lang_phone']")

        .val(), c = new Array, o = 0; o < t.length + a.length; o++) o < t.length ? c[o] = t[o] : c[o] = a[o - t.length];

    var l = !1,

        s = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i,

        d = document.getElementById("_send_consign2");

    d.onclick = function () {

        return e()

    };

    for (var o = 0; o < c.length; o++) c[o].onchange = function () {

        1 == l && (this.style.border = "1px solid #ffffff", e())

    }

}

function check_search(){

    var input = document.forms['_check_search'].getElementsByTagName('input');

    var err_field = $("[name='lang_field']").val();

    var err_phone = $("[name='lang_phone']").val();



    var inputs = new Array();

    for(var i=0; i<(input.length); i++){

        if(i<input.length) inputs[i]=input[i];

    }

    var run_onchange = false;

    var email_filter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;

    function valid(){

        var errors = false;

        for(var i=0; i<inputs.length; i++){

            var value = inputs[i].value;

            var name = inputs[i].getAttribute('name');



            var span = document.createElement('span');

            var p = inputs[i].parentNode;

            if(p.lastChild.nodeName == 'SPAN') {p.removeChild(p.lastChild);}



            if( value == ''){

                if( name != 'check_search' && name != 'price') {

                    span.innerHTML = err_field;

                }

            }
            if(name == 'lo' && value != ''){
                if(isNaN(value) == true || value.indexOf('.')!=-1 || value < 0){span.innerHTML = "LÃ´ báº¡n nháº­p khÃ´ng chÃ­nh xÃ¡c";}
            }
            if(name == 'phone1' && value != ''){
                if(isNaN(value) == true || value.indexOf('.')!=-1 || value < 0){span.innerHTML = err_phone;}
                if(isNaN(value) == false && (value.length < 10 || value.length > 11)){span.innerHTML = err_phone;}
            }
            if(name == 'name1' && value != ''){
                if(value.length > 40){span.innerHTML = 'TÃªn chá»§ sá»Ÿ há»­u khÃ´ng Ä‘Æ°á»£c lá»›n hÆ¡n 40 kÃ½ tá»±';}
            }
            if(span.innerHTML != ''){

                inputs[i].parentNode.appendChild(span);

                span.setAttribute('class', 'show-error1');

                errors = true;

                run_onchange = true;

            }

        }

        return !errors;

    }



    var register = document.getElementById('check_search');

    register.onclick = function(){

        return valid();

    }



    for(var i=0; i<inputs.length; i++){

        var id = inputs[i].getAttribute('id');

        inputs[i].onchange = function(){

            if(run_onchange == true){

                valid();

            }

        }

    }

}

function check_search12(){

    var input = document.forms['_check_search1'].getElementsByTagName('input');

    var err_field = $("[name='lang_field']").val();

    var err_phone = $("[name='lang_phone']").val();



    var inputs = new Array();

    for(var i=0; i<(input.length); i++){

        if(i<input.length) inputs[i]=input[i];

    }

    var run_onchange = false;

    var email_filter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;

    function valid(){

        var errors = false;

        for(var i=0; i<inputs.length; i++){

            var value = inputs[i].value;

            var name = inputs[i].getAttribute('name');



            var span = document.createElement('span');

            var p = inputs[i].parentNode;

            if(p.lastChild.nodeName == 'SPAN') {p.removeChild(p.lastChild);}



            if( value == ''){

                if( name != 'check_search' && name != 'price') {

                    span.innerHTML = err_field;

                }

            }
            if(name == 'lo' && value != ''){
                if(isNaN(value) == true || value.indexOf('.')!=-1 || value < 0){span.innerHTML = "LÃ´ báº¡n nháº­p khÃ´ng chÃ­nh xÃ¡c";}
            }
            if(name == 'phone1' && value != ''){
                if(isNaN(value) == true || value.indexOf('.')!=-1 || value < 0){span.innerHTML = err_phone;}
                if(isNaN(value) == false && (value.length < 10 || value.length > 11)){span.innerHTML = err_phone;}
            }
            if(span.innerHTML != ''){

                inputs[i].parentNode.appendChild(span);

                span.setAttribute('class', 'show-error1');

                errors = true;

                run_onchange = true;

            }

        }

        return !errors;

    }



    var register = document.getElementById('check_search1');

    register.onclick = function(){

        return valid();

    }



    for(var i=0; i<inputs.length; i++){

        var id = inputs[i].getAttribute('id');

        inputs[i].onchange = function(){

            if(run_onchange == true){

                valid();

            }

        }

    }

}

function check_discount() {

    function e() {

        for (var e = !1, t = 0; t < c.length; t++) {

            var a = c[t].value,

                o = c[t].getAttribute("name"),

                d = document.createElement("span"),

                u = c[t].parentNode;

            "SPAN" == u.lastChild.nodeName && u.removeChild(u.lastChild);

            var p = ["email", "send"],

                _ = p.indexOf(o);

            if ("" == a && 0 > _ && (d.innerHTML = n), "email" == o && "" != a) {

                var h = s.test(a);

                0 == h && (d.innerHTML = i)

            }

            "tel" == o && "" != a && ((1 == isNaN(a) || -1 != a.indexOf(".") || 0 > a) && (d.innerHTML = r), 0 == isNaN(a) && a.length < 8 && (d.innerHTML = r)), "" != d.innerHTML && (c[t].parentNode.appendChild(d), d.setAttribute("class", "show-error"), e = !0, l = !0, c[t].style.border = "1px solid #fff635")

        }

        return !e

    }



    for (var t = document.forms.frm_discount.getElementsByTagName("input"), a = document.forms.frm_discount.getElementsByTagName("select"), n = $("[name='lang_field']")

        .val(), i = $("[name='lang_email']")

        .val(), r = $("[name='lang_phone']")

        .val(), c = new Array, o = 0; o < t.length + a.length; o++) o < t.length ? c[o] = t[o] : c[o] = a[o - t.length];

    var l = !1,

        s = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i,

        d = document.getElementById("_send_discount");

    d.onclick = function () {

        return e()

    };

    for (var o = 0; o < c.length; o++) c[o].onchange = function () {

        1 == l && (this.style.border = "1px solid #ffffff", e())

    }

}



function check_discount1() {

    function e() {

        for (var e = !1, t = 0; t < c.length; t++) {

            var a = c[t].value,

                o = c[t].getAttribute("name"),

                d = document.createElement("span"),

                u = c[t].parentNode;

            "SPAN" == u.lastChild.nodeName && u.removeChild(u.lastChild);

            var p = ["email", "send"],

                _ = p.indexOf(o);

            if ("" == a && 0 > _ && (d.innerHTML = n), "email" == o && "" != a) {

                var h = s.test(a);

                0 == h && (d.innerHTML = i)

            }

            "tel" == o && "" != a && ((1 == isNaN(a) || -1 != a.indexOf(".") || 0 > a) && (d.innerHTML = r), 0 == isNaN(a) && a.length < 8 && (d.innerHTML = r)), "" != d.innerHTML && (c[t].parentNode.appendChild(d), d.setAttribute("class", "show-error"), e = !0, l = !0, c[t].style.border = "1px solid #fff635")

        }

        return !e

    }



    for (var t = document.forms.frm_discount1.getElementsByTagName("input"), a = document.forms.frm_discount1.getElementsByTagName("select"), n = $("[name='lang_field']")

        .val(), i = $("[name='lang_email']")

        .val(), r = $("[name='lang_phone']")

        .val(), c = new Array, o = 0; o < t.length + a.length; o++) o < t.length ? c[o] = t[o] : c[o] = a[o - t.length];

    var l = !1,

        s = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i,

        d = document.getElementById("_send_discount1");

    d.onclick = function () {

        return e()

    };

    for (var o = 0; o < c.length; o++) c[o].onchange = function () {

        1 == l && (this.style.border = "1px solid #ffffff", e())

    }

}



function check_discount2() {

    function e() {

        for (var e = !1, t = 0; t < c.length; t++) {

            var a = c[t].value,

                o = c[t].getAttribute("name"),

                d = document.createElement("span"),

                u = c[t].parentNode;

            "SPAN" == u.lastChild.nodeName && u.removeChild(u.lastChild);

            var p = ["email", "send"],

                _ = p.indexOf(o);

            if ("" == a && 0 > _ && (d.innerHTML = n), "email" == o && "" != a) {

                var h = s.test(a);

                0 == h && (d.innerHTML = i)

            }

            "tel" == o && "" != a && ((1 == isNaN(a) || -1 != a.indexOf(".") || 0 > a) && (d.innerHTML = r), 0 == isNaN(a) && a.length < 8 && (d.innerHTML = r)), "" != d.innerHTML && (c[t].parentNode.appendChild(d), d.setAttribute("class", "show-error"), e = !0, l = !0, c[t].style.border = "1px solid #fff635")

        }

        return !e

    }



    for (var t = document.forms.frm_discount2.getElementsByTagName("input"), a = document.forms.frm_discount2.getElementsByTagName("select"), n = $("[name='lang_field']")

        .val(), i = $("[name='lang_email']")

        .val(), r = $("[name='lang_phone']")

        .val(), c = new Array, o = 0; o < t.length + a.length; o++) o < t.length ? c[o] = t[o] : c[o] = a[o - t.length];

    var l = !1,

        s = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i,

        d = document.getElementById("_send_discount2");

    d.onclick = function () {

        return e()

    };

    for (var o = 0; o < c.length; o++) c[o].onchange = function () {

        1 == l && (this.style.border = "1px solid #ffffff", e())

    }

}

function check_discount3() {

    function e() {

        for (var e = !1, t = 0; t < c.length; t++) {

            var a = c[t].value,

                o = c[t].getAttribute("name"),

                d = document.createElement("span"),

                u = c[t].parentNode;

            "SPAN" == u.lastChild.nodeName && u.removeChild(u.lastChild);

            var p = ["email", "send"],

                _ = p.indexOf(o);

            if ("" == a && 0 > _ && (d.innerHTML = n), "email" == o && "" != a) {

                var h = s.test(a);

                0 == h && (d.innerHTML = i)

            }

            "tel" == o && "" != a && ((1 == isNaN(a) || -1 != a.indexOf(".") || 0 > a) && (d.innerHTML = r), 0 == isNaN(a) && a.length < 8 && (d.innerHTML = r)), "" != d.innerHTML && (c[t].parentNode.appendChild(d), d.setAttribute("class", "show-error"), e = !0, l = !0, c[t].style.border = "1px solid #fff635")

        }

        return !e

    }



    for (var t = document.forms.frm_discount3.getElementsByTagName("input"), a = document.forms.frm_discount3.getElementsByTagName("select"), n = $("[name='lang_field']")

        .val(), i = $("[name='lang_email']")

        .val(), r = $("[name='lang_phone']")

        .val(), c = new Array, o = 0; o < t.length + a.length; o++) o < t.length ? c[o] = t[o] : c[o] = a[o - t.length];

    var l = !1,

        s = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i,

        d = document.getElementById("_send_discount3");

    d.onclick = function () {

        return e()

    };

    for (var o = 0; o < c.length; o++) c[o].onchange = function () {

        1 == l && (this.style.border = "1px solid #ffffff", e())

    }

}

function check_discount4() {

    function e() {

        for (var e = !1, t = 0; t < c.length; t++) {

            var a = c[t].value,

                o = c[t].getAttribute("name"),

                d = document.createElement("span"),

                u = c[t].parentNode;

            "SPAN" == u.lastChild.nodeName && u.removeChild(u.lastChild);

            var p = ["email", "send4"],

                _ = p.indexOf(o);

            if ("" == a && 0 > _ && (d.innerHTML = n), "email" == o && "" != a) {

                var h = s.test(a);

                0 == h && (d.innerHTML = i)

            }

            "tel" == o && "" != a && ((1 == isNaN(a) || -1 != a.indexOf(".") || 0 > a) && (d.innerHTML = r), 0 == isNaN(a) && a.length < 8 && (d.innerHTML = r)), "" != d.innerHTML && (c[t].parentNode.appendChild(d), d.setAttribute("class", "show-error"), e = !0, l = !0, c[t].style.border = "1px solid #fff635")

        }

        return !e

    }



    for (var t = document.forms.frm_discount4.getElementsByTagName("input"), a = document.forms.frm_discount4.getElementsByTagName("select"), n = $("[name='lang_field']")

        .val(), i = $("[name='lang_email']")

        .val(), r = $("[name='lang_phone']")

        .val(), c = new Array, o = 0; o < t.length + a.length; o++) o < t.length ? c[o] = t[o] : c[o] = a[o - t.length];

    var l = !1,

        s = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i,

        d = document.getElementById("_send_discount4");

    d.onclick = function () {

        return e()

    };

    for (var o = 0; o < c.length; o++) c[o].onchange = function () {

        1 == l && (this.style.border = "1px solid #ffffff", e())

    }

}

function check_order() {

    function e() {

        for (var e = !1, t = 0; t < c.length; t++) {

            var a = c[t].value,

                o = c[t].getAttribute("name"),

                d = document.createElement("span"),

                u = c[t].parentNode;

            "SPAN" == u.lastChild.nodeName && u.removeChild(u.lastChild);

            var p = ["email", "send"],

                _ = p.indexOf(o);

            if ("" == a && 0 > _ && (d.innerHTML = n), "email" == o && "" != a) {

                var h = s.test(a);

                0 == h && (d.innerHTML = i)

            }

            "tel" == o && "" != a && ((1 == isNaN(a) || -1 != a.indexOf(".") || 0 > a) && (d.innerHTML = r), 0 == isNaN(a) && a.length < 8 && (d.innerHTML = r)), "" != d.innerHTML && (c[t].parentNode.appendChild(d), d.setAttribute("class", "show-error"), e = !0, l = !0, c[t].style.border = "1px solid #fff635")

        }

        return !e

    }



    for (var t = document.forms.frm_order.getElementsByTagName("input"), a = document.forms.frm_order.getElementsByTagName("select"), n = $("[name='lang_field']")

        .val(), i = $("[name='lang_email']")

        .val(), r = $("[name='lang_phone']")

        .val(), c = new Array, o = 0; o < t.length + a.length; o++) o < t.length ? c[o] = t[o] : c[o] = a[o - t.length];

    var l = !1,

        s = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i,

        d = document.getElementById("_send_order");

    d.onclick = function () {

        return e()

    };

    for (var o = 0; o < c.length; o++) c[o].onchange = function () {

        1 == l && (this.style.border = "1px solid #ffffff", e())

    }

}



function load_realty(e, t, a) {

    showLoader();

    var n = parseInt(e.attr("rel")) + 1;

    e.attr("rel", n), n == a && e.hide();

    var i = "",

        r = $('#_r_filter input[name="block"]')

            .val();

    "" != r && (i = i + "&bl=" + r);



    var c = $('#_r_filter input[name="acreage"]')

        .val();

    "" != c && (i = i + "&ac=" + c);

    var m = $('#_r_filter input[name="month"]')

        .val();

    "" != m && (i = i + "&month=" + m);

    var y = $('#_r_filter input[name="year"]')

        .val();

    "" != y && (i = i + "&year=" + y);

    var s = $('#_r_filter input[name="stock"]')

        .val();

    "" != s && (i = i + "&stock=" + s);

    var o = $('#_r_filter input[name="tag"]')

        .val();

    return "" != o && (i = i + "&tag=" + o),

        $("#_r_filter a.active")

            .each(function () {

                var e = $(this)

                        .attr("data-role"),

                    t = $(this)

                        .attr("rel");

                i = i + "&" + e + "=" + t

            }), $.ajax({

        url: "/action.php",

        type: "POST",

        data: "url=load_realty&id=" + t + "&p=" + n + i,

        dataType: "html",

        success: function (e) {
            console.log(e)

            $("#_realty_" + t)

                .append(e), $(".img img")

                .unveil(300), closeLoader()
            if(e == ""){
                $('#_realty_'+ t ).parent().find('.view-all').css('display','none')
            }

        }

    }), !1

}



function sign_in(e) {

    var t = $query("#" + e);

    return showLoader(), $.ajax({

        url: "/action.php",

        type: "POST",

        data: "url=user&type=signin&" + t,

        dataType: "html",

        success: function (e) {

            closeLoader(), 1 == e ? window.location.reload() : showResult("_result", e)

        }

    }), !1

}



function post_v3p() {

    if (showLoader(), $("#f_v3p")

        .val()) {

        var e = new FormData($("#frm_v3p")[0]);

        e.append("url", "post_v3p"), e.append("type", "add"), showLoader(), $.ajax({

            url: "/action.php",

            type: "POST",

            data: e,

            async: !1,

            cache: !1,

            processData: !1,

            contentType: !1,

            dataType: "json",

            success: function (e) {

                closeLoader(), $('#frm_v3p textarea[name="line"]')

                    .val(""), $("#frm_v3p textarea")

                    .height(36), $("#f_v3p")

                    .val(""), $("#image_preview")

                    .attr("src", ""), $("#image_preview")

                    .hide(), 1 == e.msg_process ? ($("#list_v3p")

                    .prepend(e.msg_data), sliderV3p.reloadSlider({

                    speed: 1e3,

                    infiniteLoop: !1,

                    hideControlOnEnd: !0,

                    pager: !1,

                    controls: !0,

                    onSliderLoad: function () {

                        var e = 0;

                        $("#list_v3p .item-v3p")

                            .each(function () {

                                e++, $(this)

                                    .find("a.detail-v3p")

                                    .attr("href", "#gallery-" + e)

                            })

                    }

                })) : alert(e.msg_data)

            },

            error: function () {

                closeLoader(), alert("CÃ³ lá»—i xáº£y ra khÃ´ng cáº­p nháº­t Ä‘Æ°á»£c dá»¯ liá»‡u, vui lÃ²ng thá»±c hiá»‡n láº¡i.")

            }

        })

    } else closeLoader(), alert("Báº¡n cáº§n pháº£i chá»n hÃ¬nh Ä‘á»ƒ Ä‘Äƒng tin.");

    return !1

}



function btn_edit_v3p(e) {

    return showLoader(), $.ajax({

        url: "/action.php",

        type: "POST",

        data: "url=post_v3p&type=show&id=" + parseInt(e),

        dataType: "json",

        success: function (t) {

            1 == t.msg_process ? (showResult("frm_v3p", t.msg_data), $("#frm_v3p")

                .attr("onsubmit", "return edit_v3p(" + parseInt(e) + ");"), autosize($("#frm_v3p textarea")), $("#f_v3p")

                .change(function () {

                    readURL(this)

                })) : alert(t.msg_data)

        }

    }), !1

}



function edit_v3p(e) {

    showLoader();

    var t = new FormData($("#frm_v3p")[0]);

    return t.append("url", "post_v3p"), t.append("type", "edit"), t.append("id", parseInt(e)), showLoader(), $.ajax({

        url: "/action.php",

        type: "POST",

        data: t,

        async: !1,

        cache: !1,

        processData: !1,

        contentType: !1,

        dataType: "json",

        success: function (t) {

            closeLoader(), $("#frm_v3p")

                .attr("onsubmit", "return post_v3p();"), $('#frm_v3p textarea[name="line"]')

                .val(""), $("#frm_v3p textarea")

                .height(36), $("#f_v3p")

                .val(""), $("#image_preview")

                .attr("src", ""), $("#image_preview")

                .hide(), 1 == t.msg_process ? ($('#list_v3p .item-v3p[rel="' + parseInt(e) + '"]')

                .html(t.msg_data), sliderV3p.reloadSlider({

                speed: 1e3,

                infiniteLoop: !1,

                hideControlOnEnd: !0,

                pager: !1,

                controls: !0,

                onSliderLoad: function () {

                    var e = 0;

                    $("#list_v3p .item-v3p")

                        .each(function () {

                            e++, $(this)

                                .find("a.detail-v3p")

                                .attr("href", "#gallery-" + e)

                        })

                }

            })) : alert(t.msg_data)

        },

        error: function () {

            closeLoader(), alert("CÃ³ lá»—i xáº£y ra khÃ´ng cáº­p nháº­t Ä‘Æ°á»£c dá»¯ liá»‡u, vui lÃ²ng thá»±c hiá»‡n láº¡i.")

        }

    }), !1

}



function load_chat(e, t, a) {

    $.ajax({

        url: "/action.php",

        type: "POST",

        data: "url=chat&type=" + e + "&id=" + t,

        dataType: "json",

        success: function (t) {

            var n = parseInt(t.rs);

            if (1 == n) {

                var i = $(".dnw-contentChat");

                if ("load_default" == e) i.append(t.msg), i.scrollTop(i[0].scrollHeight);

                else if ("load_first" == e) {

                    var r = $(".dnw-contentChat .dnw-item")

                        .first();

                    if ("" == t.msg) return !1;

                    i.prepend(t.msg), i.scrollTop(r.offset()

                        .top)

                } else "load_last" == e && (i.append(t.msg), 50 > a && i.scrollTop(i[0].scrollHeight))

            } else alert(t.msg);

            return !0

        }

    })

}



function vi_sent_year(e, t) {

    return $(".loading-year")

        .show(), $.ajax({

        url: "/action.php",

        type: "POST",

        data: {

            url: e,

            id_product: t,

            year: $("#vi_year")

                .val(),

            gender: $("input[name='gender']:checked")

                .val()

        },

        dataType: "json",

        success: function (e) {

            $(".loading-year")

                .hide();

            var t = '<div class="title-info-customer">ThÃ´ng tin cá»§a báº¡n</div>';

            t += '<div id="content_info_custome" class="content-info-customer">', t += '<div class="item"><label>NÄƒm sinh gia chá»§:</label><span>' + e.namsinh + "</span><i>" + e.tuoi + "</i></div>", t += '<div class="item"><label>Má»‡nh gia chá»§:</label><span>' + e.menhgiachu + "</span></div>", t += '<div class="item"><label>Cung gia chá»§:</label><span>' + e.cunggiachu + "</span></div>", t += '<div class="item"><label>Quáº» tráº¡ch gia chá»§:</label><span>' + e.quetrachgiachu + "</span></div>", t += "</div>", t += '<div class="compass">', t += '<div class="title-info-customer">HÆ°á»›ng tá»‘t Ä‘á»‘i vá»›i tuá»•i cá»§a báº¡n</div>', t += '<div class="quetrachgiachu">' + e.quetrachgiachu + "</div>", t += '<div class="compass-good">', t += "<ul>", $.each(e.huong_giachu, function (a) {

                t += "<li>HÆ°á»›ng <b>" + e.huong_giachu[a].huong1 + ": </b><span>" + e.huong_giachu[a].huong2 + "</span><b> (" + e.huong_giachu[a].huong3 + "</b>)</li>"

            }), t += "</ul>", t += "</div>", t += "</div>", t += '<div class="area">', t += '<div class="title-info-customer">HÆ°á»›ng cá»§a LÃ´ Äáº¥t</div>', t += '<div id="area_content">', t += '<div class="item"><ul>' + e.block + "</ul></div>", t += '<div class="item"><ul>' + e.lo + "</ul></div>", t += '<div class="item"><span>HÆ°á»›ng:</span><ul>' + e.huong + "</ul></div>", t += "</div>", t += "</div>", t += '<div class="clearfix"></div>', t += '<div class="result">', t += e.kq ? '<table><thead><td colspan="2">Tháº­t lÃ  tuyá»‡t vá»i! Báº¡n Ä‘Ã£ tÃ¬m Ä‘Æ°á»£c lÃ´ Ä‘áº¥t phÃ¹ há»£p.</td></thead><tr><td>HÆ°á»›ng ' + e.direction_t1 + "</td><td>" + e.direction_t2 + "</td></tr></table>" : '<table><thead><td colspan="2">Ráº¤T TIáº¾C LÃ” Äáº¤T NÃ€Y CÃ“ HÆ¯á»šNG CHÆ¯A Tá»T NHáº¤T Vá»šI Báº N. TUY NHIÃŠN, HIá»†N CÃ“ Äáº¾N ' + e.total_all + " LÃ” KHÃC PHÃ™ Há»¢P 100% Vá»šI TUá»”I Cá»¦A Báº N NHÆ¯ SAU</td></thead></table>", t += "</div>", t += '<div class="clearfix"></div>', $.each(e.product_menu, function (a) {

                e.product_menu[a].total > 0 && (t += '<div class="rw-realty"><h1 class="title">CÃ³ <span>(' + e.product_menu[a].total + ")</span> lÃ´ Ä‘áº¥t phÃ¹ há»£p vá»›i báº¡n táº¡i " + e.product_menu[a].name + "</h1>", t += '<div id="_realty_' + e.product_menu[a].id + '" class="wp-list realty clearfix">', $.each(e.product_menu[a].product, function (n) {

                    t += '<div class="item-ln">', t += '<div class="box">', t += '<div class="img">' + e.product_menu[a].product[n].photo_avt + "</div>", t += '<div class="comment' + e.product_menu[a].product[n].sold + '">', t += e.product_menu[a].product[n].title, t += '<ul class="tags-ln">' + e.product_menu[a].product[n].content + "</ul>", t += "</div>", t += "</div>", t += "</div>"

                }), t += "</div>", e.product_menu[a].total > 4 && (t += '<input type="hidden" name="page" value="1"  id="num_page_' + e.product_menu[a].id + '">', t += '<div class="view-all f-space10">', t += '<a href="javascript:;" rel="1" onclick="return load_product_year($(this),' + e.product_menu[a].id + ", " + e.product_menu[a].total + "," + $("#vi_year")

                    .val() + "," + $("input[name='gender']:checked")

                    .val() + ');"', t += 'title="' + e.product_menu[a].name + '" "="">Xem thÃªm sáº£n pháº©m</a>', t += "</div>"), t += "</div>")

            }), $("#result-check-year")

                .html(t), $("#result-check-year")

                .show()

        }

    }), !1

}



function load_product_year(e, t, a, n, i) {

    var r = parseInt(e.attr("rel")) + 1;

    return e.attr("rel", r), r == a && e.hide(), $.ajax({

        url: "/action.php",

        type: "POST",

        data: "url=vi_list_product&id=" + t + "&p=" + r + "&total=" + a + "&year=" + n + "&gender=" + i,

        dataType: "html",

        success: function (e) {

            $("#_realty_" + t)

                .append(e), $(".img img")

                .unveil(300), closeLoader()

        }

    }), !1

}



function readURL(e) {

    if (e.files && e.files[0]) {

        var t = new FileReader;

        t.onload = function (e) {

            $("#image_preview")

                .attr("src", e.target.result), $("#image_preview")

                .show()

        }, t.readAsDataURL(e.files[0])

    }

}



function fm_tool(e, t) {

    // var w=$('.box-wp').width()-$('.item-n').width()-15;

    // var h=$('.item-n').width()+30;

    $(e).parent().children().removeClass('active');

    $(e).addClass('active');

    return showLoader(), $(e)

        .parent()

        .find(".fm-tool")

        .remove(), "hot" == t ? closeLoader() : $.ajax({

        url: "/action.php",

        type: "POST",

        data: "url=fm_tool&type=" + t,

        dataType: "html",

        success: function (t) {

            $('.content-fm-tool').html(t), closeLoader(),$('.box-hot2,.box-hot3').hide(),($(window).width()<=950?($('.box-hot1').hide()):'');

        }

    }),(t=='hot')?($('.box-hot1,.box-hot2,.box-hot3').show(),$('.content-fm-tool').hide()):$('.content-fm-tool').show(), !1

}



function random_users(){

    var $liCollection = $("#list_user_random li");

    var $firstListItem = $liCollection.first();

    $liCollection.first().addClass("show");

    setInterval(function() {

        var $activeListItem = $(".show")

        $activeListItem.removeClass("show");

        var $nextListItem = $activeListItem.closest('li').next();

        var $nextListItem1 = $activeListItem.closest('li').next();

        if ($nextListItem.length == 0) {

            $nextListItem = $firstListItem;

        }

        $nextListItem.addClass("show");

        $nextListItem1.addClass("show");

    }, 1000);



}

$(document)

    .ready(function () {

        $(window)

            .scroll(function () {

                $(this)

                    .scrollTop() > 50 ? $("#go-top")

                    .stop()

                    .animate({

                        bottom: "150px"

                    }, 500) : $("#go-top")

                    .stop()

                    .animate({

                        bottom: "-50px"

                    }, 500)

            }), $("#go-top")

            .click(function () {

                $("html, body")

                    .stop()

                    .animate({

                        scrollTop: 0

                    }, 500, function () {

                        $("#go-top")

                            .stop()

                            .animate({

                                bottom: "-50px"

                            }, 500)

                    })

            }), $(function () {

            function e() {

                var e = $(this)

                    .scrollTop();

                console.log(e);

                Math.abs(n - e) <= i || (e > n && e > r ? $(".welcome-mobit")

                    .removeClass("nav-downt")

                    .addClass("nav-up") : e + $(window)

                    .height() < $(document)

                    .height() && $(".welcome-mobit")

                    .removeClass("nav-upt")

                    .addClass("nav-down"), n = e);

                if(e<2000) $(".welcome-mobit").removeClass("nav-downt")

            }



            var t = window.innerWidth;

            if (1100 > t ? $(".btn-tool")

                .addClass("c-scroll") : $(".btn-tool")

                .removeClass("c-scroll"), $(window)

                .scroll(function () {

                    $(this)

                        .scrollTop() > 10 || 1100 > t ? $(".btn-tool")

                        .addClass("c-scroll") : $(".btn-tool")

                        .removeClass("c-scroll")

                }), 960 >= t) {

                var a, n = 0,

                    i = 5,

                    r = $("header")

                        .outerHeight();

                $(window)

                    .scroll(function (e) {

                        a = !0

                    }), setInterval(function () {

                    a && (e(), a = !1)

                }, 250)

            }

        }), $(".auto-number")

            .autoNumeric("init")

    }),

    function (e) {

        e.fn.menumaker = function (t) {

            var a = e(this);

            e.extend({

                title: "",

                format: "dropdown",

                sticky: !1

            }, t);

            return this.each(function () {

                a.find("li ul")

                    .parent()

                    .addClass("has-sub"), multiTg = function () {

                    a.find(".has-sub ul li.active")

                        .parents(".has-sub")

                        .addClass("active")

                }, multiTg()

            })

        }, e(document)

            .ready(function () {

                e(document)

                    .ready(function () {

                        e("nav.navigation")

                            .menumaker({

                                title: "",

                                format: "multitoggle"

                            })

                    }), e("#_contact_scroll")

                    .scrollToFixed({

                        marginTop: 50,

                        limit: function () {

                            var t = e(".row-re-others")

                                .offset()

                                .top - e("#_contact_scroll")

                                .outerHeight(!0) - 10;

                            return t

                        },

                        zIndex: 3

                    }), e('#calculator input[type="text"]')

                    .keypress(function () {

                        var t = e(this)

                                .attr("name"),

                            a = e('#calculator input[name="price_m"]')

                                .autoNumeric("get"),

                            n = e('#calculator input[name="acreage"]')

                                .autoNumeric("get"),

                            i = e('#calculator input[name="price_b"]')

                                .autoNumeric("get"),

                            r = e('#calculator input[name="discount"]')

                                .autoNumeric("get"),

                            c = e('#calculator input[name="price_a"]')

                                .autoNumeric("get"),

                            o = c_acreage = c_price_b = c_discount = c_price_a = 0;

                        if ("price_m" == t)

                            if (o = a, n > 0 ? (c_acreage = n, c_price_b = a * n) : i > 0 ? (c_price_b = i, c_acreage = i / a) : (c_acreage = n, c_price_b = i), c_price_b > 0 && r > 0) {

                                c_discount = r;

                                var l = c_price_b / 100 * r;

                                l = c_price_b - l, c_price_a = l

                            } else if (c_price_b > 0 && c > 0) {

                                c_price_a = c;

                                var l = c_price_b - c;

                                l = l / c_price_b * 100, c_discount = l

                            } else c_discount = r, c_price_a = c;

                        else if ("acreage" == t)

                            if (c_acreage = n, a > 0 ? (o = a, c_price_b = a * n) : i > 0 ? (c_price_b = i, o = i / n) : (o = a, c_price_b = i), c_price_b > 0 && r > 0) {

                                c_discount = r;

                                var l = c_price_b / 100 * r;

                                l = c_price_b - l, c_price_a = l

                            } else if (c_price_b > 0 && c > 0) {

                                c_price_a = c;

                                var l = c_price_b - c;

                                l = l / c_price_b * 100, c_discount = l

                            } else c_discount = r, c_price_a = c;

                        else if ("price_b" == t)

                            if (c_price_b = i, n > 0 ? (c_acreage = n, o = i / n) : a > 0 ? (o = a, c_acreage = i / a) : (o = a, c_acreage = n), c_price_b > 0 && r > 0) {

                                c_discount = r;

                                var l = c_price_b / 100 * r;

                                l = c_price_b - l, c_price_a = l

                            } else if (c_price_b > 0 && c > 0) {

                                c_price_a = c;

                                var l = c_price_b - c;

                                l = l / c_price_b * 100, c_discount = l

                            } else c_discount = r, c_price_a = c;

                        else if ("discount" == t)

                            if (o = a, c_acreage = n, c_price_b = i, c_price_b > 0 && r > 0) {

                                c_discount = r;

                                var l = c_price_b / 100 * r;

                                l = c_price_b - l, c_price_a = l

                            } else if (c_price_b > 0 && c > 0) {

                                c_price_a = c;

                                var l = c_price_b - c;

                                l = l / c_price_b * 100, c_discount = l

                            } else c_discount = r, c_price_a = c;

                        else if ("price_a" == t)

                            if (o = a, c_acreage = n, c_price_b = i, c_price_b > 0 && c > 0) {

                                c_price_a = c;

                                var l = c_price_b - c;

                                l = l / c_price_b * 100, c_discount = l

                            } else if (c_price_b > 0 && r > 0) {

                                c_discount = r;

                                var l = c_price_b / 100 * r;

                                l = c_price_b - l, c_price_a = l

                            } else c_discount = r, c_price_a = c;

                        e('#calculator input[name="price_m"]')

                            .autoNumeric("set", o), e('#calculator input[name="acreage"]')

                            .autoNumeric("set", c_acreage), e('#calculator input[name="price_b"]')

                            .autoNumeric("set", c_price_b), e('#calculator input[name="discount"]')

                            .autoNumeric("set", c_discount), e('#calculator input[name="price_a"]')

                            .autoNumeric("set", c_price_a)

                    })

            })

    }(jQuery);

var sliderV3p;

$(document)

    .ready(function () {

        $(".detail-wp img")

            .each(function () {

                var e = $(this)

                    .parent("a")

                    .length;

                $(this)

                    .width() > 100 && 0 == e && $(this)

                    .replaceWith('<a data-fancybox="gallery" href="' + $(this)

                        .attr("src") + '">' + $(this)[0].outerHTML + "</a>")

            }), Tipped.create('[data-toggle="tipped"]'), sliderV3p = $("#list_v3p")

            .bxSlider({

                speed: 1e3,

                infiniteLoop: !1,

                hideControlOnEnd: !0,

                slideSelector: ".item-v3p",

                slideWidth: 400,

                maxSlides: 1,

                minSlides: 1,

                slideMargin: 0,

                pager: !1,

                controls: !0,

                onSliderLoad: function () {

                    var e = 0;

                    $("#list_v3p .item-v3p")

                        .each(function () {

                            e++, $(this)

                                .find("a.detail-v3p")

                                .attr("href", "#gallery-" + e)

                        })

                }

            }), $("#_r_filter .c-choice")

            .click(function () {

                var e = window.location.origin + "/",

                    t = 0,

                    a = $(this)

                        .attr("data-role"),

                    n = $(this)

                        .attr("rel"),

                    i = "/?filter=realty";

                "sub" == a ? (e += n, t = 1) : "lov" == a || "loc" == a ? this.checked && (i = i + "&" + a + "=" + n) : i = i + "&" + a + "=" + n;

                var r = $('#_r_filter input[name="acreage"]').val();

                "" != r && (i = i + "&ac=" + r);

                var b = $('#_r_filter input[name="block"]').val();

                "" != b && (i = i + "&bl=" + b);



                var c = $('#_r_filter input[name="tag"]').val();

                console.log(r);

                "" != c && (i = i + "&tag=" + c), $("#_r_filter .o-choice.active")

                    .each(function () {

                        var n = $(this)

                                .attr("data-role"),

                            r = $(this)

                                .attr("rel");

                        n != a && ("sub" == n ? (e += r, t = 1) : i = i + "&" + n + "=" + r)

                    }), 0 == t && (e += "bat-dong-san") , window.location.href = e + i

            }), $("#_db_filter a")

            .click(function () {

                var e = window.location.origin + "/",

                    t = 0,

                    a = $(this)

                        .attr("data-role"),

                    n = $(this)

                        .attr("rel"),

                    i = "/?filter=realty",

                    r = $('#_r_filter input[name="acreage"]')

                        .val();

                "" != r && "ac" != a && n != r && (i = i + "&ac=" + r);

                var c = $('#_r_filter input[name="tag"]')

                    .val();

                "" != c && "tag" != a && n != c && (i = i + "&tag=" + c), $("#_r_filter .o-choice.active")

                    .each(function () {

                        var n = $(this)

                                .attr("data-role"),

                            r = $(this)

                                .attr("rel");

                        n != a && ("sub" == n ? (e += r, t = 1) : i = i + "&" + n + "=" + r)

                    }), 0 == t && (e += "bat-dong-san"), window.location.href = e + i

            }), $(".post-re .ct-post .overlay")

            .click(function () {

                $(".post-re .btn-re-more")

                    .hide(), $(".post-re .btn-re-less")

                    .show(), $(".post-re .post-more .ct-post")

                    .addClass("open")

            }), $(".post-re .btn-re-more")

            .click(function () {

                $(this)

                    .hide(), $(".post-re .btn-re-less")

                    .show(), $(".post-re .post-more .ct-post")

                    .addClass("open")

            }), $(".post-re .btn-re-less")

            .click(function () {

                $(this)

                    .hide(), $(".post-re .btn-re-more")

                    .show(), $(".post-re .post-more .ct-post")

                    .removeClass("open"), $("html, body")

                    .animate({

                        scrollTop: parseInt($(".detail-wp .post-more")

                            .offset()

                            .top - 80)

                    }, 0)

            }), $(".welcome-icon .consign > a")

            .click(function () {

                return open_modal("consign")

            }), $(".dnw-chat")

            .find(".dnw-contentChat")

            .length && load_chat("load_default", 0, 0), $("#_dnw_submitChat")

            .submit(function () {

                var e = $(this)

                        .children('textarea[name="line"]'),

                    t = $.trim(e.val());

                if (0 == t.length) return !1;

                var a = "url=chat&type=send&" + $(this)

                    .serialize();

                return console.log(a), e.val(""), $.ajax({

                    url: "/action.php",

                    type: "POST",

                    data: a,

                    dataType: "json",

                    success: function (e) {

                        var t = parseInt(e.rs);

                        if (1 == t) {

                            var a = $(".dnw-contentChat");

                            a.append(e.msg), a.scrollTop(a[0].scrollHeight)

                        } else {

                            if (-1 == t) return open_modal("login");

                            alert(e.msg)

                        }

                        return !0

                    },

                    error: function () {

                        return !1

                    }

                }), !1

            }), $('#_dnw_submitChat textarea[name="line"]')

            .on("keydown", function (e) {

                13 != e.keyCode || e.shiftKey || ($("#_dnw_submitChat")

                    .submit(), $(this)

                    .val(""), e.preventDefault())

            }), $(".dnw-contentChat")

            .scroll(function () {

                if (0 == $(this)

                    .scrollTop()) {

                    var e = $(".dnw-contentChat .dnw-item")

                            .first(),

                        t = parseInt(e.attr("rel"));

                    load_chat("load_first", t, 0)

                }

            }), $(".vi-year-click")

            .on("click", function () {

                $(".check-year-vi")

                    .slideDown("slow")

            }), autosize($("#frm_v3p textarea")), $("#f_v3p")

            .change(function () {

                readURL(this)

            })

    });

function filter_month(){

    if($('.filter-admin').length){

        var m=$('#select_filter_month').val();

        var t=$('#product_id').val();

        $.ajax({

            url: "/action.php",

            type: "GET",

            data: "url=filter_month&month=" + m + "&product_id=" + t,

            dataType: "json",

            success: function (data) {

                $('#stock').html(data.stock);

                $('#out_of_stock').html(data.out_stock);

            }

        })

    }

}

$(function () {

    $(".img img")

        .unveil(300), $("nav#menu")

        .mmenu({

            extensions: ["effect-slide-menu", "pageshadow"],

            searchfield: !0,

            counters: !1,

            navbar: {

                title: "www.datnenhoaxuan.com"

            },

            offCanvas: {

                position: "right"

            },

            navbars: [{

                position: "top",

                content: ["searchfield"]

            }, {

                position: "top",

                content: ["prev", "title", "close"]

            }, {

                position: "bottom",

                content: ['<a class="facebook fa fa-facebook" target="_blank" href="https://www.facebook.com/SunLand.SunGroup" title="Facebook"></a>', '<a class="twitter fa fa-twitter" target="_blank" href="https://twitter.com/vanbdsdanang" title="Twitter"></a>', '<a class="google-plus fa fa-google-plus" target="_blank" href="https://plus.google.com/u/0/111338385758381759392" title="Google Plus"></a>', '<a class="linkedin fa fa-linkedin" target="_blank" href="https://www.linkedin.com/in/datnenhoaxuan" title="LinkedIn"></a>', '<a class="youtube fa fa-youtube" target="_blank" href="https://www.youtube.com/channel/UCyVelvQFDPkZjZbKcsjanMw" title="Youtube"></a>']

            }]

        });

    $('#input_block').keypress(function(event){

        var keycode = (event.keyCode ? event.keyCode : event.which);

        if (keycode == '13') {

            var this_t=$('#_r_filter .c-choice');

            var e = window.location.origin + "/",

                t = 0,

                a = this_t

                    .attr("data-role"),

                n = this_t

                    .attr("rel"),

                i = "/?filter=realty";

            "sub" == a ? (e += n, t = 1) : "lov" == a || "loc" == a ? this_t.checked && (i = i + "&" + a + "=" + n) : i = i + "&" + a + "=" + n;

            var r = $('#_r_filter input[name="acreage"]').val();

            "" != r && (i = i + "&ac=" + r);

            var b = $('#_r_filter input[name="block"]').val();

            "" != b && (i = i + "&bl=" + b);

            var c = $('#_r_filter input[name="tag"]').val();

            console.log(r);

            "" != c && (i = i + "&tag=" + c), $("#_r_filter .o-choice.active")

                .each(function () {

                    var n = this_t

                            .attr("data-role"),

                        r = this_t

                            .attr("rel");

                    n != a && ("sub" == n ? (e += r, t = 1) : i = i + "&" + n + "=" + r)

                }), 0 == t && (e += "bat-dong-san"), window.location.href = e + i

        }

    });

    filter_month();

    $('#select_filter_month').on('change',function(){

        filter_month();

    });

});

$(document).ready(function(){

    //humburgers();

    function humburgers() {

        $('.hamburger').on('click',function () {

            $(this).toggleClass('is-active');

            return false;

        });

    }

});

//$(document).ready(function(){$("body").bind("cut copy",function(n){n.preventDefault()}),$("body").on("contextmenu",function(n){return!1})});



function owl_tintuclq(){
    var owl = $('.tintuclq');
    owl.owlCarousel({
        loop:false,
        margin:20,
        autoplay:true,
        responsiveClass:true,
        autoplayTimeout:5000,
        smartSpeed:2500,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            426:{
                items:2
            },
            569:{
                items:3
            },
            1000:{
                items:4
            },
        },
    });
}

$(document).ready(function() {
    owl_tintuclq();
});
$(window).resize(function() {
    owl_tintuclq();
});


var map;
var geocoder;
function loadMap(){
    // var drc = {lat: 16.013943, lng: 108.238239};
    // map = new google.maps.Map(document.getElementById('map'),{
    //     zoom: 16,
    //     center: drc
    // });
    // var marker = new google.maps.Marker({
    //     position: drc,
    //     icon: 'images/ic.png',
    //     map: map
    // });
    // var occho = document.getElementById('data').innerHTML;
    // var cdata = JSON.parse(occho);
    //     geocoder = new google.maps.Geocoder();
    //     codeAddress(cdata)

    // var oclon = document.getElementById('allData').innerHTML
    // var allData = JSON.parse(oclon);
    // showAllColleges(allData)
}
function showAllColleges(allData){
    var infoWind = new google.maps.InfoWindow;
    Array.prototype.forEach.call(allData, function(data){
        var content = document.createElement('div');
        var strong = document.createElement('strong');
        strong.innerHTML = data.name;
        content.appendChild(strong);

        // var img = document.createElement('img');
        //     img.src = 'uploads/product/'+data.img;
        //     img.style.width = '100px';
        //     content.appendChild(img);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(data.lat, data.lng),
            icon: 'images/ic.png',
            map: map
        });
        marker.addListener('click', function(){
            infoWind.setContent(content);
            infoWind.open(map, marker);
        })
    })
}
function codeAddress(arr) {
    Array.prototype.forEach.call(arr, function(data){
        var address =  "";
        geocoder.geocode( {'address': address}, function(results, status){
            if(status=='OK'){
                map.setCenter(results[0].geometry.location);
                var points = {};
                points.id = data.article_id;
                points.lat = results[0].geometry.location.lat();
                points.lng = results[0].geometry.location.lng();
                console.log(points)
                // updateCollegeWithLatLng(points);
            }else{
                // alert('Geocode was not successful for the following reason: '+ status);
            }
        });
    });
}