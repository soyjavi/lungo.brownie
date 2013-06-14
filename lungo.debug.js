
/*
Lungo - HTML5 Cross-Device Framework
http://lungo.tapquo.com
Copyright (c) 2011-2013 Tapquo S.L. - Licensed GPLv3, Commercial

@namespace  Lungo
@author     Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {
  var Lungo;

  window.Lungo = Lungo = {};

  Lungo.VERSION = "2.1.0511";

  Lungo.DEVICE = null;

  Lungo.Config || (Lungo.Config = {});

  Lungo.Element || (Lungo.Element = {});

  Lungo.Data || (Lungo.Data = {});

  Lungo.Sugar || (Lungo.Sugar = {});

  Lungo.View || (Lungo.View = {});

  Lungo.Boot || (Lungo.Boot = {});

  Lungo.Device || (Lungo.Device = {});

  Lungo.ready || (Lungo.ready = Quo().ready);

}).call(this);


/*
Object with data-attributes (HTML5) with a special <markup>

@namespace Lungo
@class Attributes

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
@author Guillermo Pascual <pasku@tapquo.com> || @pasku1
*/


(function() {

  Lungo.Attributes = {
    count: {
      selector: "*",
      html: "<span class=\"tag count\">{{value}}</span>"
    },
    pull: {
      selector: "*",
      html: "<div data-control=\"pull\" data-icon=\"{{value}}\" data-loading>\n  <strong></strong>\n</div>"
    },
    progress: {
      selector: "*",
      html: "<div class=\"progress\">\n  <span class=\"bar\"><span class=\"value\" style=\"width:{{value}};\"></span></span>\n</div>"
    },
    label: {
      selector: "*",
      html: "<abbr>{{value}}</abbr>"
    },
    icon: {
      selector: "*",
      html: "<span class=\"icon {{value}}\"></span>"
    },
    image: {
      selector: "*",
      html: "<img src=\"{{value}}\" class=\"icon\" />"
    },
    title: {
      selector: "header",
      html: "<h1 class=\"title centered\">{{value}}</h1>"
    },
    "control-checkbox": {
      selector: "*",
      html: "<input type=\"checkbox\" value=\"None\" id=\"{{value}}\" />\n<label for=\"{{value}}\"></label>"
    },
    loading: {
      selector: "*",
      html: "<div class=\"loading {{value}}\">\n  <span class=\"top\"></span>\n  <span class=\"right\"></span>\n  <span class=\"bottom\"></span>\n  <span class=\"left\"></span>\n</div>"
    },
    back: {
      selector: "header",
      html: "<nav class=\"left\"><a href=\"#\" data-view-section=\"back\"><span class=\"icon {{value}}\"></span></a></nav>"
    }
  };

}).call(this);


/*
Temporary cache system

@namespace Lungo
@class Cache

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
@author Guillermo Pascual <pasku@tapquo.com> || @pasku1
*/


(function() {

  Lungo.Cache = (function(lng) {
    var exists, get, remove, set, _cache;
    _cache = {};
    /*
    Sets in the LungoJS cache system a new key/value
    @method set
    @param {string} Key for the new value
    @param {object} Type of environment: DESKTOP_ENVIRONMENT or MOBILE_ENVIRONMENT
    */

    set = function(key, value) {
      if (exists(key)) {
        return _cache[key] = lng.Core.mix(get(key), value);
      } else {
        return _cache[key] = value;
      }
    };
    /*
    Returns the value of a given key.
    @method get
    @param {string} Key in LungoJS Cache System
    @param {string} [OPTIONAL] Subkey in LungoJS Cache System
    @return {object} Value
    */

    get = function(key, value) {
      if (arguments.length === 1) {
        return _cache[key];
      } else {
        if (_cache[arguments[0]]) {
          return _cache[arguments[0]][arguments[1]];
        } else {
          return void 0;
        }
      }
    };
    /*
    Removes the instance in LungoJs Cache System of a given key
    @method remove
    @param {string} Key in LungoJS Cache System
    @param {string} [OPTIONAL] Subkey in LungoJS Cache System
    */

    remove = function(key, value) {
      if (arguments.length === 1) {
        return delete _cache[key];
      } else {
        return delete _cache[arguments[0]][arguments[1]];
      }
    };
    /*
    Returns the existence of a key in LungoJs Cache System
    @method exists
    @param {String} Key in LungoJS Cache System
    @return {Boolean} true if exists, false if not
    */

    exists = function(key) {
      if (_cache[key]) {
        return true;
      } else {
        return false;
      }
    };
    return {
      set: set,
      get: get,
      remove: remove,
      exists: exists
    };
  })(Lungo);

}).call(this);


/*
Object with data-attributes (HTML5) with a special <markup>

@namespace Lungo
@class Constants

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Constants = {
    ELEMENT: {
      SECTION: "section",
      ARTICLE: "article",
      ASIDE: "aside",
      MENU: "menu",
      BODY: "body",
      DIV: "div",
      LIST: "<ul></ul>",
      LI: "li"
    },
    QUERY: {
      ARTICLE_ROUTER: "[data-view-article]",
      SECTION_ROUTER: "[data-view-section]",
      ARTICLE_ROUTER_TOUCH: "header [data-view-article], footer [data-view-article], nav[data-control] [data-view-article]",
      SECTION_ROUTER_TOUCH: "header [data-view-section], footer [data-view-section], nav[data-control] [data-view-section]",
      ARTICLE_ROUTER_TAP: "article [data-view-article]",
      SECTION_ROUTER_TAP: "article [data-view-section]",
      ASIDE_ROUTER: "[data-view-aside]",
      MENU_ROUTER: "[data-view-menu]",
      LIST_IN_ELEMENT: "article.list",
      ELEMENT_SCROLLABLE: "article.scroll",
      HREF_ASIDE: "section[data-aside].drag",
      HREF_ROUTER: "a[href][data-router]",
      MENU_HREF: "[data-control=menu] a[href]",
      CONTROL_CHECKBOX: "[data-control-checkbox]",
      NAVIGATION_ITEM: "a[href][data-router=\"article\"]",
      ARTICLE_REFERENCE: "[data-article]",
      TITLE: "header .title, footer .title",
      ACTIVE_LIST_ITEM: "li a.active, li.active"
    },
    CLASS: {
      ACTIVE: "active",
      ASIDE: "aside",
      SHOW: "show",
      HIDE: "hide",
      HIDING: "hiding",
      RIGHT: "right",
      LEFT: "left",
      HORIZONTAL: "horizontal",
      SMALL: "small",
      LAST: "last"
    },
    TRIGGER: {
      LOAD: "load",
      UNLOAD: "unload"
    },
    EVENT: {
      TRANSITION_END: ["webkitAnimationEnd", "animationend"],
      CHANGE: "change"
    },
    TRANSITION: {
      DURATION: 400,
      ORIGIN: "transition-origin",
      ATTR: "transition"
    },
    ASIDE: {
      NORMAL: 264
    },
    ATTRIBUTE: {
      ID: "id",
      HREF: "href",
      TITLE: "title",
      ARTICLE: "article",
      CLASS: "class",
      WIDTH: "width",
      HEIGHT: "height",
      PIXEL: "px",
      PERCENT: "%",
      ROUTER: "router",
      FIRST: "first",
      LAST: "last",
      EMPTY: "",
      CHILDREN: "children",
      TRANSITION: "transition",
      STATE: "state",
      DIRECTION: "direction"
    },
    BINDING: {
      START: "{{",
      END: "}}",
      KEY: "value",
      SELECTOR: "{{value}}"
    },
    DEVICE: {
      PHONE: "phone",
      TABLET: "tablet",
      TV: "tv"
    },
    ERROR: {
      DATABASE: "ERROR: Connecting to Data.Sql.",
      DATABASE_TRANSACTION: "ERROR: Data.Sql >> ",
      ROUTER: "ERROR: The target does not exists >>",
      LOADING_RESOURCE: "ERROR: Loading resource: "
    }
  };

}).call(this);


/*
Contains all the common functions used in Lungo.

@namespace Lungo
@class Core

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
@author Guillermo Pascual <pasku@tapquo.com> || @pasku1
*/


(function() {

  Lungo.Core = (function(lng, $$) {
    var ARRAY_PROTO, bind, environment, execute, findByProperty, isMobile, isOwnProperty, log, mix, orderByProperty, toArray, toType;
    ARRAY_PROTO = Array.prototype;
    /*
    Console system to display messages when you are in debug mode.
    @method log
    @param  {number} Severity based in (1)Log, (2)Warn, (>2)Error
    @param  {string} Message to show in console
    */

    log = function(severity, message) {
      if (!lng.Core.isMobile()) {
        return console[(severity === 1 ? "log" : (severity === 2 ? "warn" : "error"))](message);
      }
    };
    /*
    Executes callbacks based on the parameters received.
    @method execute
    @param  {Function} callback to execute
    */

    execute = function() {
      var args, callback;
      args = toArray(arguments);
      callback = args.shift();
      if (toType(callback) === "function") {
        return callback.apply(null, args);
      }
    };
    /*
    Creates a new function that, when called, itself calls this function in
    the context of the provided this value, with a given sequence of arguments
    preceding any provided when the new function was called.
    @method bind
    @param  {object} object to which the 'this' can refer in the new function when the new function is called.
    @param  {Function} method A function object.
    */

    bind = function(object, method) {
      return function() {
        return method.apply(object, toArray(arguments));
      };
    };
    /*
    Copy from any number of objects and mix them all into a new object.
    The implementation is simple; just loop through arguments and
    copy every property of every object passed to the function.
    @method mix
    @param  {object} arguments to mix them all into a new object.
    @return {object} child a new object with all the objects from the arguments mixed.
    */

    mix = function() {
      var arg, argument, child, len, prop;
      child = child || {};
      arg = 0;
      len = arguments.length;
      while (arg < len) {
        argument = arguments[arg];
        for (prop in argument) {
          if (isOwnProperty(argument, prop)) {
            child[prop] = argument[prop];
          }
        }
        arg++;
      }
      return child;
    };
    /*
    Every object descended from Object inherits the hasOwnProperty method.
    This method can be used to determine whether an object has the specified property
    as a direct property of that object.
    @param  {object} object to test for a property's existence inside itself.
    @param  {string} property the name of the property to test.
    @return {boolean} indicating whether the object has the specified property.
    */

    isOwnProperty = function(object, property) {
      return $$.isOwnProperty(object, property);
    };
    /*
    Determine the internal JavaScript [[Class]] of an object.
    @param  {object} obj to get the real type of itself.
    @return {string} with the internal JavaScript [[Class]] of itself.
    */

    toType = function(obj) {
      return $$.toType(obj);
    };
    /*
    Convert an array-like object into a true JavaScript array.
    @param  {object} obj Any object to turn into a native Array.
    @return {object} The object is now a plain array.
    */

    toArray = function(obj) {
      return ARRAY_PROTO.slice.call(obj, 0);
    };
    /*
    Determine if the current environment is a mobile environment
    @method isMobile
    @return {boolean} true if is mobile environment, false if not.
    */

    isMobile = function() {
      return $$.isMobile();
    };
    /*
    Returns information of execute environment
    @method environment
    @return {object} Environment information
    */

    environment = function() {
      return $$.environment();
    };
    /*
    Returns a ordered list of objects by a property
    @method orderByProperty
    @param  {list} List of objects
    @param  {string} Name of property
    @param  {string} Type of order: asc (ascendent) or desc (descendent)
    @return {list} Ordered list
    */

    orderByProperty = function(data, property, order) {
      var order_operator;
      order_operator = (order === "desc" ? -1 : 1);
      return data.sort(function(a, b) {
        if (a[property] < b[property]) {
          return -order_operator;
        } else {
          if (a[property] > b[property]) {
            return order_operator;
          } else {
            return 0;
          }
        }
      });
    };
    /*
    Returns a Object in a list by a property value
    @method objectInListByProperty
    @param  {list} List of objects
    @param  {string} Name of property
    @param  {var} Value for comparision
    @return {object} Instance of object founded (if exists)
    */

    findByProperty = function(list, property, value) {
      var element, i, len, search;
      search = null;
      i = 0;
      len = list.length;
      while (i < len) {
        element = list[i];
        if (element[property] === value) {
          search = element;
          break;
        }
        i++;
      }
      return search;
    };
    return {
      log: log,
      execute: execute,
      bind: bind,
      mix: mix,
      isOwnProperty: isOwnProperty,
      toType: toType,
      toArray: toArray,
      isMobile: isMobile,
      environment: environment,
      orderByProperty: orderByProperty,
      findByProperty: findByProperty
    };
  })(Lungo, Quo);

}).call(this);


/*
LungoJS Dom Handler

@namespace Lungo
@class Dom

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


/*
Add an event listener
@method dom
@param  {string} DOM selector
@return {Object} QuoJS instance
*/


(function() {

  Lungo.dom = function(selector) {
    return $$(selector);
  };

}).call(this);


/*
Event Manager (with delegates)

@namespace Lungo
@class Events

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Events = (function(lng) {
    var SPACE_CHAR, init;
    SPACE_CHAR = " ";
    init = function(events) {
      var element, event, event_name, index_of, _results;
      _results = [];
      for (event in events) {
        index_of = event.indexOf(SPACE_CHAR);
        if (index_of > 0) {
          event_name = event.substring(0, index_of);
          element = event.substring(index_of + 1);
          _results.push(lng.dom(document.body).delegate(element, event_name, events[event]));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
    return {
      init: init
    };
  })(Lungo);

}).call(this);


/*
?

@namespace Lungo
@class Fallback

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Fallback = (function(lng) {
    var fixPositionInAndroid;
    fixPositionInAndroid = function() {
      var env, position;
      env = lng.Core.environment();
      position = env.isMobile && env.os.name === "Android" && env.os.version < "3" ? "absolute" : "fixed";
      return lng.dom(document.body).data("position", position);
    };
    return {
      fixPositionInAndroid: fixPositionInAndroid
    };
  })(Lungo);

}).call(this);


/*
Instance initializer

@namespace Lungo
@class Init

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.init = function(config) {
    var isPhone;
    Lungo.Config = config;
    if (config && config.resources) {
      Lungo.Resource.load(config.resources);
    }
    Lungo.Boot.Device.init();
    isPhone = Lungo.DEVICE === Lungo.Constants.DEVICE.PHONE;
    Lungo.Router = isPhone ? Lungo.RouterPhone : Lungo.RouterTablet;
    Lungo.Boot.Events.init();
    Lungo.Boot.Data.init();
    return Lungo.Boot.Layout.init();
  };

}).call(this);


/*
Notification system in CSS3

@namespace Lungo
@class Notification

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Notification = (function(lng) {
    var ATTRIBUTE, BINDING, DELAY_TIME, MARKUP_NOTIFICATION, SELECTOR, STYLE, TRANSITION, confirm, error, hide, html, push, show, success, _button_markup, _el, _hide, _init, _markup, _notify, _options, _show, _subscribeEvents, _window;
    _options = [];
    _el = null;
    _window = null;
    DELAY_TIME = 1;
    ATTRIBUTE = lng.Constants.ATTRIBUTE;
    BINDING = lng.Constants.BINDING;
    TRANSITION = lng.Constants.TRANSITION;
    SELECTOR = {
      BODY: "body",
      NOTIFICATION: ".notification",
      MODAL: ".notification .window",
      MODAL_HREF: ".notification .window a",
      WINDOW_CLOSABLE: ".notification [data-action=close], .notification > .error, .notification > .success",
      CONFIRM_BUTTONS: ".notification .confirm button, .notification .push"
    };
    STYLE = {
      MODAL: "modal",
      VISIBLE: "visible",
      SHOW: "show",
      WORKING: "working",
      INPUT: "input"
    };
    MARKUP_NOTIFICATION = "<div class=\"notification\"><div class=\"window\"></div></div>";
    /*
    Show a custom message, if no parameters shows a loading window.
    @method   show
    @param    {string} [OPTIONAL] Icon, null for no icon.
    @param    {string} [OPTIONAL] Title
    @param    {number} [OPTIONAL] Seconds to show the notification, 0 for unlimited.
    @param    {function} [OPTIONAL] Callback when notification it's closed
    */

    show = function(icon, title, seconds, callback) {
      var data_loading, markup;
      markup = void 0;
      if (icon != null) {
        markup = _markup(title, null, icon);
      } else {
        data_loading = lng.Attributes.loading.html;
        markup = data_loading.replace(BINDING.START + BINDING.KEY + BINDING.END, "white");
      }
      _show(markup, "growl");
      return _hide(seconds, callback);
    };
    /*
    */

    hide = function() {
      _window.removeClass("show");
      return setTimeout((function() {
        return _el.removeClass("show").removeClass("html").removeClass("confirm").removeClass("notify").removeClass("growl");
      }), TRANSITION.DURATION / 2);
    };
    /*
    */

    confirm = function(options) {
      var markup;
      _options = options;
      markup = _markup(options.title, options.description, options.icon);
      markup += _button_markup(options.accept, "accept");
      markup += _button_markup(options.cancel, "cancel");
      return _show(markup, "confirm");
    };
    /*
    */

    success = function(title, description, icon, seconds, callback) {
      if (icon == null) {
        icon = "ok";
      }
      return _notify(title, description, icon, "success", seconds, callback);
    };
    /*
    */

    error = function(title, description, icon, seconds, callback) {
      if (icon == null) {
        icon = "remove-sign";
      }
      return _notify(title, description, icon, "error", seconds, callback);
    };
    /*
    */

    html = function(markup, button, style, seconds) {
      if (button) {
        markup += "<a href=\"#\" class=\"button large anchor\" data-action=\"close\">" + button + "</a>";
      }
      _show(markup, "html " + style);
      return _hide(seconds);
    };
    /*
    */

    push = function(title, icon, style) {
      _show(_markup(title, null, icon), "push " + style, false);
      return _hide(5);
    };
    _init = function() {
      lng.dom(SELECTOR.BODY).append(MARKUP_NOTIFICATION);
      _el = lng.dom(SELECTOR.NOTIFICATION);
      _window = _el.children(".window");
      return _subscribeEvents();
    };
    _show = function(html, stylesheet, block) {
      if (block == null) {
        block = true;
      }
      if (block) {
        _el.removeClass("push");
      } else {
        _el.addClass("push");
      }
      if (!_window.hasClass("show")) {
        _el.addClass("show");
      } else {
        _window.removeClass(STYLE.SHOW);
      }
      return setTimeout((function() {
        _window.html(html);
        return _window.attr("class", "window " + stylesheet + " show");
      }), TRANSITION.DURATION / 2);
    };
    _hide = function(seconds, callback) {
      var _this = this;
      if ((seconds != null) && seconds > 0) {
        return setTimeout((function() {
          if (callback) {
            return callback.call(void 0, callback);
          } else {
            return hide();
          }
        }), seconds * 1000);
      }
    };
    _notify = function(title, description, icon, stylesheet, seconds, callback) {
      _show(_markup(title, description, icon), stylesheet);
      return _hide(seconds, callback);
    };
    _markup = function(title, description, icon) {
      description = (!description ? "&nbsp;" : description);
      title = (!title ? "&nbsp;" : title);
      return "<span class=\"icon " + icon + "\"></span><strong class=\"text bold\">" + title + "</strong><small>" + description + "</small>";
    };
    _button_markup = function(options, callback) {
      return "<button data-callback=\"" + callback + "\" class=\"anchor\">" + options.label + "</a>";
    };
    _subscribeEvents = function() {
      lng.dom(SELECTOR.CONFIRM_BUTTONS).touch(function(event) {
        var button, callback;
        button = lng.dom(this);
        if (_options[button.data("callback")] != null) {
          callback = _options[button.data("callback")].callback;
          _options = null;
          if (callback != null) {
            callback.call(void 0, callback);
          }
        }
        return hide();
      });
      return lng.dom(SELECTOR.WINDOW_CLOSABLE).tap(hide);
    };
    _init();
    return {
      show: show,
      hide: hide,
      error: error,
      success: success,
      confirm: confirm,
      html: html,
      push: push
    };
  })(Lungo);

}).call(this);


/*
Load Resources

@namespace Lungo
@class Resource

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Resource = (function(lng, $$) {
    var ELEMENT, ERROR, load, _load, _loadSyncResource, _pushResourceInBody;
    ELEMENT = lng.Constants.ELEMENT;
    ERROR = lng.Constants.ERROR;
    /*
    Start loading async sections (local & remote)
    
    @method start
    */

    load = function(resource, container) {
      var i, len, _results;
      if (lng.Core.toType(resource) === "array") {
        i = 0;
        len = resource.length;
        _results = [];
        while (i < len) {
          _load(resource[i]);
          _results.push(i++);
        }
        return _results;
      } else {
        return _load(resource, container);
      }
    };
    /*
    @todo
    */

    _load = function(resource, container) {
      try {
        return _pushResourceInBody(_loadSyncResource(resource), container);
      } catch (error) {
        return lng.Core.log(3, error.message);
      }
    };
    _loadSyncResource = function(url) {
      return $$.ajax({
        url: url,
        async: false,
        dataType: "html",
        error: function() {
          return console.error(ERROR.LOADING_RESOURCE + url);
        }
      });
    };
    _pushResourceInBody = function(markup, container) {
      if (lng.Core.toType(markup) === "string") {
        container = (container ? container : ELEMENT.BODY);
        return lng.dom(container).append(markup);
      }
    };
    return {
      load: load
    };
  })(Lungo, Quo);

}).call(this);

(function() {

  (function(w, undefined_) {
    var canBeFilledWithPoly, classtext, closest, defaultEasing, doc, docElem, enable, enabled, intercept, overflowProbablyAlreadyWorks, timeKeeper, toss;
    doc = w.document;
    docElem = doc.documentElement;
    classtext = "scroll-enabled";
    canBeFilledWithPoly = "ontouchmove" in doc;
    overflowProbablyAlreadyWorks = "WebkitOverflowScrolling" in docElem.style || (!canBeFilledWithPoly && w.screen.width > 1200) || (function() {
      var ua, webkit, wkLte534, wkversion;
      ua = w.navigator.userAgent;
      webkit = ua.match(/AppleWebKit\/([0-9]+)/);
      wkversion = webkit && webkit[1];
      wkLte534 = webkit && wkversion >= 534;
      return ua.match(/Android ([0-9]+)/) && RegExp.$1 >= 3 && wkLte534 || ua.match(RegExp(" Version\\/([0-9]+)")) && RegExp.$1 >= 0 && w.blackberry && wkLte534 || ua.indexOf(/PlayBook/) > -1 && RegExp.$1 >= 0 && wkLte534 || ua.match(/Fennec\/([0-9]+)/) && RegExp.$1 >= 4 || ua.match(/wOSBrowser\/([0-9]+)/) && RegExp.$1 >= 233 && wkLte534 || ua.match(/NokiaBrowser\/([0-9\.]+)/) && parseFloat(RegExp.$1) === 7.3 && webkit && wkversion >= 533;
    })();
    defaultEasing = function(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    };
    enabled = false;
    timeKeeper = void 0;
    toss = function(elem, options) {
      var endLeft, endTop, i, j, o, sLeft, sTop;
      i = 0;
      sLeft = elem.scrollLeft;
      sTop = elem.scrollTop;
      o = {
        top: "+0",
        left: "+0",
        duration: 100,
        easing: w.overthrow.easing
      };
      endLeft = void 0;
      endTop = void 0;
      if (options) {
        for (j in o) {
          if (options[j] !== void 0) {
            o[j] = options[j];
          }
        }
      }
      if (typeof o.left === "string") {
        o.left = parseFloat(o.left);
        endLeft = o.left + sLeft;
      } else {
        endLeft = o.left;
        o.left = o.left - sLeft;
      }
      if (typeof o.top === "string") {
        o.top = parseFloat(o.top);
        endTop = o.top + sTop;
      } else {
        endTop = o.top;
        o.top = o.top - sTop;
      }
      timeKeeper = setInterval(function() {
        if (i++ < o.duration) {
          elem.scrollLeft = o.easing(i, sLeft, o.left, o.duration);
          return elem.scrollTop = o.easing(i, sTop, o.top, o.duration);
        } else {
          if (endLeft !== elem.scrollLeft) {
            elem.scrollLeft = endLeft;
          }
          if (endTop !== elem.scrollTop) {
            elem.scrollTop = endTop;
          }
          return intercept();
        }
      }, 1);
      return {
        top: endTop,
        left: endLeft,
        duration: o.duration,
        easing: o.easing
      };
    };
    closest = function(target, ascend) {
      return !ascend && target.className && target.className.indexOf("scroll") > -1 && target || closest(target.parentNode);
    };
    intercept = function() {
      return clearInterval(timeKeeper);
    };
    enable = function() {
      var changeScrollTarget, elem, finishScroll, inputs, lastDown, lastLefts, lastRight, lastTops, resetHorTracking, resetVertTracking, setPointers, start;
      if (enabled) {
        return;
      }
      enabled = true;
      if (overflowProbablyAlreadyWorks || canBeFilledWithPoly) {
        docElem.className += " " + classtext;
      }
      w.overthrow.forget = function() {
        docElem.className = docElem.className.replace(classtext, "");
        if (doc.removeEventListener) {
          doc.removeEventListener("touchstart", start, false);
        }
        w.overthrow.easing = defaultEasing;
        return enabled = false;
      };
      if (overflowProbablyAlreadyWorks || !canBeFilledWithPoly) {
        return;
      }
      elem = void 0;
      lastTops = [];
      lastLefts = [];
      lastDown = void 0;
      lastRight = void 0;
      resetVertTracking = function() {
        lastTops = [];
        return lastDown = null;
      };
      resetHorTracking = function() {
        lastLefts = [];
        return lastRight = null;
      };
      finishScroll = function() {
        var duration, left, top;
        top = (lastTops[0] - lastTops[lastTops.length - 1]) * 8;
        left = (lastLefts[0] - lastLefts[lastLefts.length - 1]) * 8;
        duration = Math.max(Math.abs(left), Math.abs(top)) / 8;
        top = (top > 0 ? "+" : "") + top;
        left = (left > 0 ? "+" : "") + left;
        if (!isNaN(duration) && duration > 0 && (Math.abs(left) > 80 || Math.abs(top) > 80)) {
          return toss(elem, {
            left: left,
            top: top,
            duration: duration
          });
        }
      };
      inputs = void 0;
      setPointers = function(val) {
        var i, il, _results;
        inputs = elem.querySelectorAll("textarea, input");
        i = 0;
        il = inputs.length;
        _results = [];
        while (i < il) {
          inputs[i].style.pointerEvents = val;
          _results.push(i++);
        }
        return _results;
      };
      changeScrollTarget = function(startEvent, ascend) {
        var newTarget, tEnd;
        if (doc.createEvent) {
          newTarget = (!ascend || ascend === void 0) && elem.parentNode || elem.touchchild || elem;
          tEnd = void 0;
          if (newTarget !== elem) {
            tEnd = doc.createEvent("HTMLEvents");
            tEnd.initEvent("touchend", true, true);
            elem.dispatchEvent(tEnd);
            newTarget.touchchild = elem;
            elem = newTarget;
            return newTarget.dispatchEvent(startEvent);
          }
        }
      };
      start = function(e) {
        var end, height, move, scrollHeight, scrollL, scrollT, scrollWidth, startX, startY, touchStartE, width;
        intercept();
        resetVertTracking();
        resetHorTracking();
        elem = closest(e.target);
        if (!elem || elem === docElem || e.touches.length > 1) {
          return;
        }
        setPointers("none");
        touchStartE = e;
        scrollT = elem.scrollTop;
        scrollL = elem.scrollLeft;
        height = elem.offsetHeight;
        width = elem.offsetWidth;
        startY = e.touches[0].pageY;
        startX = e.touches[0].pageX;
        scrollHeight = elem.scrollHeight;
        scrollWidth = elem.scrollWidth;
        move = function(e) {
          var down, right, tx, ty;
          ty = scrollT + startY - e.touches[0].pageY;
          tx = scrollL + startX - e.touches[0].pageX;
          down = ty >= (lastTops.length ? lastTops[0] : 0);
          right = tx >= (lastLefts.length ? lastLefts[0] : 0);
          if ((ty > 0 && ty < scrollHeight - height) || (tx > 0 && tx < scrollWidth - width)) {
            e.preventDefault();
          } else {
            changeScrollTarget(touchStartE);
          }
          if (lastDown && down !== lastDown) {
            resetVertTracking();
          }
          if (lastRight && right !== lastRight) {
            resetHorTracking();
          }
          lastDown = down;
          lastRight = right;
          elem.scrollTop = ty;
          elem.scrollLeft = tx;
          lastTops.unshift(ty);
          lastLefts.unshift(tx);
          if (lastTops.length > 3) {
            lastTops.pop();
          }
          if (lastLefts.length > 3) {
            return lastLefts.pop();
          }
        };
        end = function(e) {
          finishScroll();
          setPointers("auto");
          setTimeout((function() {
            return setPointers("none");
          }), 450);
          elem.removeEventListener("touchmove", move, false);
          return elem.removeEventListener("touchend", end, false);
        };
        elem.addEventListener("touchmove", move, false);
        return elem.addEventListener("touchend", end, false);
      };
      return doc.addEventListener("touchstart", start, false);
    };
    w.overthrow = {
      set: enable,
      forget: function() {},
      easing: defaultEasing,
      toss: toss,
      intercept: intercept,
      closest: closest,
      support: (overflowProbablyAlreadyWorks ? "native" : canBeFilledWithPoly && "polyfilled" || "none")
    };
    return enable();
  })(this);

}).call(this);


/*
External Data & Services Manager

@namespace Lungo
@class Service
@requires QuoJS

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
@author Guillermo Pascual <pasku@tapquo.com> || @pasku1
*/


(function() {

  Lungo.Service = (function(lng, $$) {
    var DATE_PATTERN, URL_CACHE_INDEX_KEY, cache, get, json, post, _calculateDiferenceTime, _calculateTimeSpent, _checkIsValidPattern, _saveServiceInCache, _urlCached;
    URL_CACHE_INDEX_KEY = "lungojs_service_cache";
    DATE_PATTERN = {
      MINUTE: "minute",
      HOUR: "hour",
      DAY: "day"
    };
    /*
    Load data from the server using a HTTP GET request.
    
    @method get
    
    @param  {string} Containing the URL to which the request is sent
    @param  {object} A map or string that is sent to the server with the request
    @param  {Function} Callback function after the request [OPTIONAL]
    @param  {string} Mime-Type: json, xml, html, or text [OPTIONAL]
    */

    get = function(url, data, success, dataType) {
      return $$.get(url, data, success, dataType);
    };
    /*
    Load data from the server using a HTTP POST request.
    
    @method post
    
    @param  {string} Containing the URL to which the request is sent
    @param  {object} A map or string that is sent to the server with the request
    @param  {Function} Callback function after the request [OPTIONAL]
    @param  {string} Mime-Type: json, xml, html, or text [OPTIONAL]
    */

    post = function(url, data, success, dataType) {
      return $$.post(url, data, success, dataType);
    };
    /*
    Load data from the server using a HTTP GET request.
    
    @method json
    
    @param  {string} Containing the URL to which the request is sent
    @param  {object} A map or string that is sent to the server with the request
    @param  {Function} [OPTIONAL] Callback function after the request
    */

    json = function(url, data, success) {
      return $$.json(url, data, success);
    };
    /*
    Auto-caching system with date pattern.
    
    @method cache
    
    @param  {string} Containing the URL to which the request is sent
    @param  {object} A map or string that is sent to the server with the request
    @param  {string} Date pattern (example: 15 minutes, 1 hour, 3 days)
    @param  {Function} [OPTIONAL] Callback function after the request
    @param  {string} Mime-Type: json, xml, html, or text [OPTIONAL]
    */

    cache = function(url, data, date_pattern, callback, dataType) {
      var url_key, value;
      url_key = url + $$.serializeParameters(data);
      if (_urlCached(url_key, date_pattern)) {
        value = lng.Data.Storage.persistent(url_key);
        if (value) {
          return callback.call(callback, value);
        }
      } else {
        return $$.get(url, data, (function(result) {
          _saveServiceInCache(url_key, result);
          return callback.call(callback, result);
        }), dataType);
      }
    };
    _urlCached = function(url, date_pattern) {
      var in_cache, time_between, url_cache_index;
      in_cache = false;
      url_cache_index = lng.Data.Storage.persistent(URL_CACHE_INDEX_KEY);
      if (url_cache_index) {
        time_between = _calculateTimeSpent(url_cache_index[url]);
        in_cache = _checkIsValidPattern(time_between, date_pattern);
      }
      return in_cache;
    };
    _calculateTimeSpent = function(url_last_access) {
      var now, service_last_access;
      now = new Date().getTime();
      service_last_access = new Date(url_last_access).getTime();
      return now - service_last_access;
    };
    _checkIsValidPattern = function(time_between, date_pattern) {
      var diference_time, pattern;
      pattern = date_pattern.split(" ");
      diference_time = _calculateDiferenceTime(pattern[1], time_between);
      if (diference_time < pattern[0]) {
        return true;
      } else {
        return false;
      }
    };
    _calculateDiferenceTime = function(pattern_name, time_between) {
      var diference;
      diference = (time_between / 1000) / 60;
      if (pattern_name.indexOf(DATE_PATTERN.HOUR) >= 0) {
        diference = diference / 60;
      } else {
        if (pattern_name.indexOf(DATE_PATTERN.DAY) >= 0) {
          diference = (diference / 60) / 24;
        }
      }
      return diference;
    };
    _saveServiceInCache = function(url, result) {
      var service_cache_index;
      service_cache_index = lng.Data.Storage.persistent(URL_CACHE_INDEX_KEY) || {};
      service_cache_index[url] = new Date();
      lng.Data.Storage.persistent(URL_CACHE_INDEX_KEY, service_cache_index);
      return lng.Data.Storage.persistent(url, result);
    };
    return {
      get: get,
      post: post,
      json: json,
      cache: cache,
      Settings: $$.ajaxSettings
    };
  })(Lungo, Quo);

}).call(this);


/*
Handles the <sections> and <articles> to show

@namespace Lungo
@class Router

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
@author Guillermo Pascual <pasku@tapquo.com> || @pasku1
@author Ignacio Olalde <ina@tapquo.com> || @piniphone
*/


(function() {

  Lungo.RouterPhone = (function(lng) {
    var C, HASHTAG, animationEnd, article, back, history, section, step, _animating, _history, _notCurrentTarget, _removeLast, _section, _setSectionDirections, _show, _updateNavigationElements, _url;
    C = lng.Constants;
    HASHTAG = "#";
    _history = [];
    _animating = false;
    /*
    Navigate to a <section>.
    @method   section
    @param    {string} Id of the <section>
    */

    section = function(section_id) {
      var current, future, query;
      if (_animating) {
        return false;
      }
      current = lng.Element.Cache.section;
      if (_notCurrentTarget(current, section_id)) {
        query = C.ELEMENT.SECTION + HASHTAG + section_id;
        future = current ? current.siblings(query) : lng.dom(query);
        if (future.length) {
          _section(future, current);
          lng.Router.step(section_id);
          if (Lungo.Config.history !== false) {
            _url();
          }
          return _updateNavigationElements();
        }
      } else if (lng.Element.Cache.aside) {
        return lng.Aside.hide();
      }
    };
    /*
    Return to previous section.
    @method   back
    */

    back = function() {
      var current, future, query;
      if (_animating) {
        return false;
      }
      _removeLast();
      current = lng.Element.Cache.section;
      query = C.ELEMENT.SECTION + HASHTAG + history();
      future = current.siblings(query);
      if (future.length) {
        _section(future, current, true);
        if (Lungo.Config.history !== false) {
          _url();
        }
        return _updateNavigationElements();
      }
    };
    /*
    Displays the <article> in a particular <section>.
    @method   article
    @param    {string} <section> Id
    @param    {string} <article> Id
    */

    article = function(section_id, article_id, element) {
      var target;
      if (_notCurrentTarget(lng.Element.Cache.article, article_id)) {
        lng.Router.section(section_id);
        target = lng.Element.Cache.section.find("#" + article_id);
        if (target.length > 0) {
          lng.Element.Cache.article.removeClass(C.CLASS.ACTIVE).trigger(C.TRIGGER.UNLOAD);
          lng.Element.Cache.article = target.addClass(C.CLASS.ACTIVE).trigger(C.TRIGGER.LOAD);
          if ((element != null ? element.data(C.ATTRIBUTE.TITLE) : void 0) != null) {
            lng.Element.Cache.section.find(C.QUERY.TITLE).text(element.data(C.ATTRIBUTE.TITLE));
          }
          if (Lungo.Config.history !== false) {
            _url();
          }
          return _updateNavigationElements();
        }
      }
    };
    /*
    Triggered when <section> animation ends. Reset animation classes of section and aside
    @method   animationEnd
    @param    {eventObject}
    */

    animationEnd = function(event) {
      var direction;
      section = lng.dom(event.target);
      direction = section.data(C.ATTRIBUTE.DIRECTION);
      if (direction === "out" || direction === "back-out") {
        section.removeClass(C.CLASS.SHOW);
      }
      section.removeAttr("data-" + C.ATTRIBUTE.DIRECTION);
      return _animating = false;
    };
    /*
    Create a new element to the browsing history based on the current section id.
    @method step
    @param  {string} Id of the section
    */

    step = function(section_id) {
      if (section_id !== history()) {
        return _history.push(section_id);
      }
    };
    /*
    Returns the current browsing history section id.
    @method history
    @return {string} Current section id
    */

    history = function() {
      return _history[_history.length - 1];
    };
    /*
    Private methods
    */

    _section = function(future, current, backward) {
      var callback;
      if (backward == null) {
        backward = false;
      }
      callback = function() {
        return _show(future, current, backward);
      };
      if (lng.Element.Cache.aside) {
        return lng.Aside.hide(callback);
      } else {
        return callback();
      }
    };
    _show = function(future, current, backward) {
      if (current != null) {
        _setSectionDirections(future, current, backward);
      }
      return lng.Section.show(current, future);
    };
    _setSectionDirections = function(future, current, backward) {
      var dirPrefix;
      if (backward == null) {
        backward = false;
      }
      if ((current == null) || !future.length) {
        return false;
      }
      _animating = true;
      dirPrefix = backward ? "back-" : "";
      future.addClass(C.CLASS.SHOW);
      if (future.data(C.TRANSITION.ATTR)) {
        future.data(C.ATTRIBUTE.DIRECTION, "" + dirPrefix + "in");
      }
      if (current.data(C.TRANSITION.ATTR)) {
        return current.data(C.ATTRIBUTE.DIRECTION, "" + dirPrefix + "out");
      } else {
        return current.removeClass(C.CLASS.SHOW);
      }
    };
    _notCurrentTarget = function(current, id) {
      return (current != null ? current.attr(C.ATTRIBUTE.ID) : void 0) !== id;
    };
    _url = function() {
      var _hashed_url, _i, _len;
      _hashed_url = "";
      for (_i = 0, _len = _history.length; _i < _len; _i++) {
        section = _history[_i];
        _hashed_url += "" + section + "/";
      }
      _hashed_url += lng.Element.Cache.article.attr("id");
      return setTimeout((function() {
        return window.location.hash = _hashed_url;
      }), 0);
    };
    _updateNavigationElements = function() {
      var article_id, links, nav;
      article_id = lng.Element.Cache.article.attr(C.ATTRIBUTE.ID);
      links = lng.dom(C.QUERY.ARTICLE_ROUTER).removeClass(C.CLASS.ACTIVE);
      links.filter("[data-view-article=" + article_id + "]").addClass(C.CLASS.ACTIVE);
      nav = lng.Element.Cache.section.find(C.QUERY.ARTICLE_REFERENCE).addClass(C.CLASS.HIDE);
      return nav.filter("[data-article*='" + article_id + "']").removeClass(C.CLASS.HIDE);
    };
    _removeLast = function() {
      if (_history.length > 1) {
        return _history.length -= 1;
      }
    };
    return {
      section: section,
      back: back,
      article: article,
      history: history,
      step: step,
      animationEnd: animationEnd
    };
  })(Lungo);

}).call(this);


/*
Handles the <sections> and <articles> to show on a tablet device

@namespace Lungo
@class Router

@author Ignacio Olalde <ina@tapquo.com> || @piniphone
*/


(function() {

  Lungo.RouterTablet = (function(lng) {
    var C, HASHTAG, animationEnd, article, back, history, section, step, _animating, _applyDirection, _callbackSection, _checkAside, _fromCallback, _history, _isChild, _notCurrentTarget, _parentId, _removeLast, _sameSection, _show, _showAside, _showBackward, _showForward, _showFuture, _updateNavigationElements, _url;
    C = lng.Constants;
    HASHTAG = "#";
    _history = [];
    _animating = false;
    _callbackSection = void 0;
    _fromCallback = false;
    /*
    Navigate to a <section>.
    @method   section
    @param    {string} Id of the <section>
    */

    section = function(section_id) {
      var current, future, query;
      if (_animating) {
        return false;
      }
      current = lng.Element.Cache.section;
      if (_notCurrentTarget(current, section_id)) {
        query = C.ELEMENT.SECTION + HASHTAG + section_id;
        future = current ? current.siblings(query) : lng.dom(query);
        if (future.length) {
          _show(future, current);
          step(section_id);
          if (Lungo.Config.history !== false) {
            _url();
          }
          return _updateNavigationElements();
        }
      }
    };
    /*
    Return to previous section.
    @method   back
    */

    back = function(animating) {
      var current, future, i, query, target;
      if (animating == null) {
        animating = true;
      }
      if (_animating) {
        return false;
      }
      if (!_sameSection()) {
        target = lng.dom(event.target).closest(C.ELEMENT.SECTION);
        if (target.length) {
          i = 0;
          while (history() !== target.attr("id") && i++ < 10) {
            _applyDirection(lng.dom(C.ELEMENT.SECTION + HASHTAG + history()), "back-out");
            _removeLast();
          }
          lng.Element.Cache.section = target;
        }
      }
      _removeLast();
      current = lng.Element.Cache.section;
      query = C.ELEMENT.SECTION + HASHTAG + history();
      future = current.siblings(query);
      if (future.length) {
        _show(future, current, true, animating);
        if (Lungo.Config.history !== false) {
          _url();
        }
        return _updateNavigationElements();
      }
    };
    /*
    Displays the <article> in a particular <section>.
    @method   article
    @param    {string} <section> Id
    @param    {string} <article> Id
    */

    article = function(section_id, article_id, element) {
      var target;
      if (!_sameSection() && section_id !== lng.Element.Cache.section.attr("id")) {
        back(false);
      }
      target = lng.dom("article#" + article_id);
      if (target.length > 0) {
        section = target.closest(C.ELEMENT.SECTION);
        lng.Router.section(section.attr("id"));
        section.children("" + C.ELEMENT.ARTICLE + "." + C.CLASS.ACTIVE).removeClass(C.CLASS.ACTIVE).trigger(C.TRIGGER.UNLOAD);
        lng.Element.Cache.article.removeClass(C.CLASS.ACTIVE).trigger(C.TRIGGER.UNLOAD);
        lng.Element.Cache.article = target.addClass(C.CLASS.ACTIVE).trigger(C.TRIGGER.LOAD);
        if ((element != null ? element.data(C.ATTRIBUTE.TITLE) : void 0) != null) {
          section.find(C.QUERY.TITLE).text(element.data(C.ATTRIBUTE.TITLE));
        }
        if (Lungo.Config.history !== false) {
          _url();
        }
        return _updateNavigationElements(article_id);
      }
    };
    /*
    Triggered when <section> animation ends. Reset animation classes of section and aside
    @method   animationEnd
    @param    {eventObject}
    */

    animationEnd = function(event) {
      var direction;
      section = lng.dom(event.target);
      direction = section.data(C.ATTRIBUTE.DIRECTION);
      if (direction) {
        if (direction === "out" || direction === "back-out") {
          section.removeClass(C.CLASS.SHOW);
        }
        section.removeAttr("data-" + C.ATTRIBUTE.DIRECTION);
        if (_callbackSection != null) {
          _fromCallback = true;
          _show(_callbackSection, void 0);
          _callbackSection = void 0;
        }
      }
      if (section.hasClass("asideHidding")) {
        section.removeClass("asideHidding").removeClass("aside");
      }
      if (section.hasClass("asideShowing")) {
        section.removeClass("asideShowing").addClass("aside");
      }
      if (section.hasClass("shadowing")) {
        section.removeClass("shadowing").addClass("shadow");
      }
      if (section.hasClass("unshadowing")) {
        section.removeClass("unshadowing").removeClass("shadow");
      }
      return _animating = false;
    };
    /*
    Create a new element to the browsing history based on the current section id.
    @method step
    @param  {string} Id of the section
    */

    step = function(section_id) {
      if (section_id !== history()) {
        return _history.push(section_id);
      }
    };
    /*
    Returns the current browsing history section id.
    @method history
    @return {string} Current section id
    */

    history = function() {
      return _history[_history.length - 1];
    };
    /*
    Private methods
    */

    _show = function(future, current, backward) {
      if (backward == null) {
        backward = false;
      }
      if (current == null) {
        _showFuture(future);
      } else {
        if (backward) {
          _showBackward(current, future);
        } else {
          _showForward(current, future);
        }
        lng.Section.show(current, future);
      }
      return _fromCallback = false;
    };
    _showFuture = function(future) {
      var current, currentHasAside, _ref, _ref1;
      console.error("Show future --> ", future.attr("id"), "curr->", lng.Element.Cache.section);
      lng.Element.Cache.dump();
      current = lng.Element.Cache.section;
      lng.Section.show(void 0, future);
      currentHasAside = ((_ref = lng.Element.Cache.section) != null ? _ref.data("aside") : void 0) != null;
      console.error("has asside -->", currentHasAside);
      if (!_fromCallback || !((_ref1 = lng.Element.Cache.section) != null ? _ref1.data("aside") : void 0)) {
        console.error('por aqui');
        future.addClass(C.CLASS.SHOW);
      } else {
        _applyDirection(future, "in");
      }
      return _checkAside(void 0, future);
    };
    _showForward = function(current, future) {
      var elements, hideSelector, parent_id;
      if (_isChild(current, future)) {
        _applyDirection(future, "in");
      } else {
        _removeLast();
        hideSelector = "section." + C.CLASS.SHOW;
        parent_id = _parentId(future);
        if (parent_id) {
          hideSelector += ":not(#" + parent_id + ")";
        }
        elements = lng.dom(hideSelector);
        _applyDirection(elements, "back-out");
        _callbackSection = future;
      }
      return _checkAside(current, future);
    };
    _showBackward = function(current, future) {
      var showSections;
      _applyDirection(current, "back-out");
      showSections = lng.dom("section." + C.CLASS.SHOW + ":not(#" + (current.attr('id')) + ")");
      if (showSections.length === 1 && (showSections.first().data("children") != null)) {
        console.error("Show aside -->", showSections.first().data("aside"));
        lng.Aside.show(showSections.first().data("aside"));
      }
      return _callbackSection = future;
    };
    _checkAside = function(current, target) {
      var aside_id, current_aside;
      aside_id = target.data("aside");
      current_aside = lng.Element.Cache.aside;
      if (aside_id) {
        if (!((current != null) && (lng.Element.Cache.aside != null))) {
          return _showAside(aside_id, target);
        } else if (!current_aside.hasClass("box")) {
          return lng.Aside.hide();
        }
      } else {
        return lng.Aside.hide();
      }
    };
    _showAside = function(aside_id, target) {
      if (target.data("children")) {
        return lng.Aside.show(aside_id);
      } else {
        return lng.Aside.showFix(aside_id);
      }
    };
    _parentId = function(section) {
      var parent;
      parent = lng.dom("[data-children~=" + (section.attr('id')) + "]");
      if (parent.length) {
        return parent.attr("id");
      }
      return null;
    };
    _isChild = function(current, future) {
      var children, target_id;
      children = current.data("children");
      if (!children) {
        return false;
      }
      target_id = future.attr("id");
      return children.indexOf(target_id) !== -1;
    };
    _applyDirection = function(section, direction) {
      var apply, isForward;
      isForward = direction.indexOf("in") >= 0;
      apply = false;
      if (isForward) {
        if (!section.hasClass(C.CLASS.SHOW)) {
          apply = true;
        }
      } else {
        apply = true;
      }
      if (apply) {
        section.addClass(C.CLASS.SHOW);
        if (section.data(C.TRANSITION.ATTR)) {
          return section.data(C.ATTRIBUTE.DIRECTION, direction);
        }
      }
    };
    _sameSection = function() {
      var dispacher_section, same;
      if (!event || !lng.Element.Cache.section) {
        return true;
      }
      dispacher_section = lng.dom(event.target).closest("section,aside");
      same = dispacher_section.attr("id") === lng.Element.Cache.section.attr("id");
      return same;
    };
    _notCurrentTarget = function(current, id) {
      return (current != null ? current.attr(C.ATTRIBUTE.ID) : void 0) !== id;
    };
    _url = function() {
      var _hashed_url, _i, _len;
      _hashed_url = "";
      for (_i = 0, _len = _history.length; _i < _len; _i++) {
        section = _history[_i];
        _hashed_url += "" + section + "/";
      }
      _hashed_url += lng.Element.Cache.article.attr("id");
      return setTimeout((function() {
        return window.location.hash = _hashed_url;
      }), 0);
    };
    _updateNavigationElements = function(article_id) {
      var aside, current_section_id, links, nav, _ref;
      if (!article_id) {
        article_id = (_ref = lng.Element.Cache.article) != null ? _ref.attr(C.ATTRIBUTE.ID) : void 0;
      }
      links = lng.dom(C.QUERY.ARTICLE_ROUTER).removeClass(C.CLASS.ACTIVE);
      links.filter("[data-view-article=" + article_id + "]").addClass(C.CLASS.ACTIVE);
      nav = lng.Element.Cache.section.find(C.QUERY.ARTICLE_REFERENCE).addClass(C.CLASS.HIDE);
      nav.filter("[data-article~='" + article_id + "']").removeClass(C.CLASS.HIDE);
      if (lng.Element.Cache.aside) {
        current_section_id = lng.Element.Cache.section.attr("id");
        aside = lng.Element.Cache.aside;
        aside.find(C.QUERY.SECTION_ROUTER + "." + C.CLASS.ACTIVE).removeClass("active");
        return aside.find("[data-view-section=" + current_section_id + "]").addClass(C.CLASS.ACTIVE);
      }
    };
    _removeLast = function() {
      if (_history.length > 1) {
        return _history.length -= 1;
      }
    };
    return {
      section: section,
      back: back,
      article: article,
      history: history,
      step: step,
      animationEnd: animationEnd,
      historys: function() {
        return _history;
      }
    };
  })(Lungo);

}).call(this);


/*
Initialize the <articles> layout of a certain <section>

@namespace Lungo
@class Aside

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Aside = (function(lng) {
    var C, animationEnd, draggable, hide, show, showFix, toggle, _alreadyOpen, _asideStylesheet, _callback, _customAsideAnimation, _phoneCustomAnimation;
    C = lng.Constants;
    _callback = void 0;
    _customAsideAnimation = void 0;
    /*
    Display an aside element with a particular <section>
    @method show
    */

    show = function(aside_id, animate_section, fromX) {
      var aside, aside_section, aside_transition, child, childs, _i, _len, _ref;
      if (animate_section == null) {
        animate_section = true;
      }
      if (fromX == null) {
        fromX = 0;
      }
      aside = lng.dom("#" + aside_id);
      if (aside.length && !_alreadyOpen(aside_id)) {
        lng.Element.Cache.aside = aside;
        if (lng.DEVICE === C.DEVICE.PHONE) {
          aside_transition = aside.data(C.TRANSITION.ATTR) || "left";
          aside.addClass(C.CLASS.SHOW);
          if (fromX) {
            return _phoneCustomAnimation(fromX, false);
          } else {
            return lng.Element.Cache.section.data("aside-" + aside_transition, "show");
          }
        } else {
          aside.addClass(C.CLASS.SHOW);
          aside_section = lng.dom("[data-aside=" + aside_id + "][data-children]");
          if (aside_section.attr("id") !== ((_ref = lng.Element.Cache.section) != null ? _ref.attr("id") : void 0)) {
            lng.Element.Cache.section.addClass("shadowing");
            childs = aside_section.data("children").split(" ");
            for (_i = 0, _len = childs.length; _i < _len; _i++) {
              child = childs[_i];
              child = lng.dom(C.ELEMENT.SECTION + "#" + child);
              if (child.hasClass(C.CLASS.SHOW)) {
                child.addClass("shadowing");
              }
            }
          }
          return aside_section.removeClass("aside").addClass("asideShowing");
        }
      }
    };
    /*
    Shows a fixed aside (not able to hide cause section have not children)
    @method hide
    */

    showFix = function(aside_id) {
      var aside;
      aside = lng.dom("#" + aside_id);
      if (aside.length) {
        lng.Element.Cache.aside = aside;
        return aside.addClass(C.CLASS.SHOW).addClass("box");
      }
    };
    /*
    Hide an aside element with a particular section
    @method hide
    */

    hide = function(callback, fromX) {
      var aside_transition;
      if (lng.Element.Cache.aside) {
        _callback = callback;
        aside_transition = lng.Element.Cache.aside.data(C.TRANSITION.ATTR) || "left";
        if (lng.DEVICE === C.DEVICE.PHONE) {
          lng.Element.Cache.section.removeClass("aside").removeClass("aside-right");
          if (fromX) {
            return _phoneCustomAnimation(fromX, true);
          } else {
            return lng.Element.Cache.section.data("aside-" + aside_transition, "hide");
          }
        } else {
          lng.dom(".aside").removeClass("aside").addClass("asideHidding");
          lng.Element.Cache.aside = null;
          if (callback) {
            callback.call(callback);
          }
          return lng.dom(".shadow").removeClass("shadow").addClass("unshadowing");
        }
      } else if (callback) {
        return callback.call(callback);
      }
    };
    /*
    Toggle an aside element
    @method toggle
    @param  {string} Aside id
    */

    toggle = function(aside) {
      if (lng.Element.Cache.aside) {
        return lng.Aside.hide();
      } else {
        return lng.Aside.show(aside);
      }
    };
    /*
    Triggered when <aside> animation ends.
    @method   animationEnd
    @param    {object} event
    */

    animationEnd = function(event) {
      var aside_transition, className, section;
      section = lng.dom(event.target);
      aside_transition = lng.Element.Cache.aside.data(C.TRANSITION.ATTR) || "left";
      if (section.data("aside-" + aside_transition) === "hide") {
        lng.Element.Cache.aside.removeClass(C.CLASS.SHOW);
        lng.Element.Cache.aside = null;
        section.removeAttr("data-aside-" + aside_transition);
        if (_callback) {
          _callback.call(_callback);
        }
        _callback = void 0;
      } else {
        className = aside_transition.indexOf("right") === -1 ? "aside" : "aside-right";
        section.removeAttr("style").removeAttr("data-aside-" + aside_transition).addClass(className);
      }
      if (_customAsideAnimation) {
        _customAsideAnimation.remove();
        return _customAsideAnimation = void 0;
      }
    };
    /*
    @todo
    @method draggable
    */

    draggable = function() {
      var MIN_XDIFF;
      if (lng.DEVICE !== C.DEVICE.PHONE) {
        return false;
      }
      MIN_XDIFF = 96;
      return lng.dom(C.QUERY.HREF_ASIDE).each(function() {
        var aside, el, section, started;
        started = false;
        el = lng.dom(this);
        section = el.closest("section");
        aside = lng.dom("aside#" + el.data("aside"));
        section.swiping(function(gesture) {
          var xdiff, ydiff;
          if (!(section.hasClass("aside") || section.hasClass("aside-right"))) {
            xdiff = gesture.currentTouch.x - gesture.iniTouch.x;
            ydiff = Math.abs(gesture.currentTouch.y - gesture.iniTouch.y);
            started = (started ? true : xdiff > 3 * ydiff && xdiff < 50);
            if (started) {
              xdiff = (xdiff > 256 ? 256 : (xdiff < 0 ? 0 : xdiff));
              aside.addClass(C.CLASS.SHOW);
              section.vendor("transform", "translateX(" + xdiff + "px)");
              return section.vendor("transition-duration", "0s");
            } else {
              return section.attr("style", "");
            }
          }
        });
        return section.swipe(function(gesture) {
          var diff, ydiff;
          diff = gesture.currentTouch.x - gesture.iniTouch.x;
          ydiff = Math.abs(gesture.currentTouch.y - gesture.iniTouch.y);
          section.attr("style", "");
          if (diff > MIN_XDIFF && started) {
            show(aside.attr("id"), true, gesture.currentTouch.x);
          } else {
            hide;
          }
          return started = false;
        });
      });
    };
    /*
    Private methods
    */

    _alreadyOpen = function(aside_id) {
      var _ref;
      return ((_ref = lng.Element.Cache.aside) != null ? _ref.attr("id") : void 0) === aside_id;
    };
    _asideStylesheet = function() {
      var _ref;
      if ((_ref = lng.Element.Cache.aside) != null ? _ref.hasClass(C.CLASS.RIGHT) : void 0) {
        return "" + C.CLASS.RIGHT;
      } else {
        return "  ";
      }
    };
    _phoneCustomAnimation = function(fromX, hide) {
      var kfStyle;
      if (hide == null) {
        hide = false;
      }
      if (hide) {
        kfStyle = document.createTextNode("@-webkit-keyframes asideCustomKF {\n  0%   { -webkit-transform: translateX(" + fromX + "px); }\n  40%  { -webkit-transform: translateX(" + (fromX + 8) + "px); }\n  100% { -webkit-transform: translateX(0); }\n}");
      } else {
        kfStyle = document.createTextNode("@-webkit-keyframes asideCustomKF {\n  0%   { -webkit-transform: translateX(" + fromX + "px); }\n  60%  { -webkit-transform: translateX(" + (C.ASIDE.NORMAL + 8) + "px); }\n  100% { -webkit-transform: translateX(" + C.ASIDE.NORMAL + "px); }\n}");
      }
      _customAsideAnimation = document.createElement('style');
      _customAsideAnimation.type = 'text/css';
      _customAsideAnimation.appendChild(kfStyle);
      document.getElementsByTagName("head")[0].appendChild(_customAsideAnimation);
      return lng.Element.Cache.section.style("-webkit-animation-name", "asideCustomKF");
    };
    return {
      toggle: toggle,
      show: show,
      showFix: showFix,
      hide: hide,
      draggable: draggable,
      animationEnd: animationEnd
    };
  })(Lungo);

}).call(this);


/*
Initialize the <articles> layout of a certain <section>

@namespace Lungo
@class Section

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Section = (function(lng) {
    var C, show, _phone, _tablet;
    C = lng.Constants;
    show = function(current, target) {
      var active_article;
      if (lng.DEVICE === C.DEVICE.PHONE) {
        _phone(target);
      } else {
        _tablet(current, target);
      }
      lng.Element.Cache.section = target;
      active_article = target.find("" + C.ELEMENT.ARTICLE + "." + C.CLASS.ACTIVE);
      if (active_article.length === 0) {
        active_article = target.find(C.ELEMENT.ARTICLE).first().addClass(C.CLASS.ACTIVE);
      }
      lng.Element.Cache.article = active_article;
      if (current) {
        current.trigger(C.TRIGGER.UNLOAD);
      }
      return target.trigger(C.TRIGGER.LOAD);
    };
    /*
    Private methods
    */

    _phone = function(target) {
      return target.addClass(C.CLASS.SHOW);
    };
    _tablet = function(current, target) {
      return this;
    };
    return {
      show: show
    };
  })(Lungo);

}).call(this);


/*
Initialize the <articles> layout of a certain <section>

@namespace Lungo
@class Article

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Article = (function(lng) {
    var C, clean;
    C = lng.Constants;
    /*
    Clean the content of a particular article with a specific markup
    @method clean
    @param  {string} Article ID
    @param  {string} Icon
    @param  {string} Title
    @param  {string} Description [OPTIONAL]
    @param  {string} Button label [OPTIONAL]
    */

    clean = function(id, icon, title, description, button) {
      var el, markup;
      if (description == null) {
        description = "";
      }
      if (button == null) {
        button = null;
      }
      if (el = lng.dom("" + C.ELEMENT.ARTICLE + "#" + id)) {
        markup = "";
        if (icon != null) {
          markup = "<div class=\"empty\">\n  <span class=\"icon " + icon + "\"></span>\n  <strong>" + title + "</strong>\n  <small>" + description + "</small>\n</div>";
        }
        el.html(markup);
        if (button) {
          return el.children().append("<button class='anchor'><abbr>" + button + "</abbr></button>");
        }
      }
    };
    return {
      clean: clean
    };
  })(Lungo);

}).call(this);


/*
Make an analysis of Data attributes in HTML elements and creates a <markup>
based on each data type.

@namespace Lungo.Boot
@class Data

@author Javier Jimenez Villar <javi@tapquo.com>  || @soyjavi
@author Guillermo Pascual <pasku@tapquo.com>     || @pasku1
@author Ignacio Olalde <ina@tapquo.com>          || @piniphone
*/


(function() {

  Lungo.Boot.Data = (function(lng) {
    var BINDING, init, _bindDataAttribute, _findDataAttributesIn, _findElements;
    BINDING = lng.Constants.BINDING;
    /*
    Initialize the <markup> data-attributes analisys
    @method init
    */

    init = function(selector) {
      var el;
      el = lng.dom(selector || document.body);
      if (el.length > 0) {
        return _findDataAttributesIn(el);
      }
    };
    _findDataAttributesIn = function(element) {
      var key, _results;
      _results = [];
      for (key in lng.Attributes) {
        if (lng.Core.isOwnProperty(lng.Attributes, key)) {
          _results.push(_findElements(element, key));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
    _findElements = function(element, key) {
      var attribute, selector;
      attribute = lng.Attributes[key];
      selector = attribute.selector + "[data-" + key + "]";
      element.find(selector).each(function(index, children) {
        var el;
        el = lng.dom(children);
        return _bindDataAttribute(el, el.data(key), attribute.html);
      });
      if (element.data(key) != null) {
        return _bindDataAttribute(element, element.data(key), attribute.html);
      }
    };
    _bindDataAttribute = function(element, value, html) {
      return element.prepend(html.replace(/\{\{value\}\}/g, value));
    };
    return {
      init: init
    };
  })(Lungo);

}).call(this);


/*
@todo

@namespace Lungo.Boot
@class Device

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Boot.Device = (function(lng) {
    var DEVICE, init;
    DEVICE = lng.Constants.DEVICE;
    /*
    @todo
    @method init
    */

    init = function() {
      var body, env;
      env = lng.Core.environment();
      lng.DEVICE = (env.screen.width < 768 ? DEVICE.PHONE : DEVICE.TABLET);
      body = lng.dom(document.body);
      body.data("device", lng.DEVICE);
      if (env.os) {
        body.data("os", env.os.name.toLowerCase());
      }
      if (lng.DEVICE === lng.Constants.DEVICE.PHONE) {
        return lng.Aside.draggable();
      }
    };
    return {
      init: init
    };
  })(Lungo);

}).call(this);


/*
Initialize the automatic DOM UI events

@namespace Lungo.Boot
@class Events

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
@author Guillermo Pascual <pasku@tapquo.com> || @pasku1
@author Ignacio Olalde <ina@tapquo.com> || @piniphone
*/


(function() {

  Lungo.Boot.Events = (function(lng) {
    var ATTRIBUTE, C, CLASS, ELEMENT, QUERY, init, _changeCheckboxValue, _closeMenu, _onArticle, _onAside, _onAsyncResource, _onMenu, _onSection, _transitionEnd;
    C = lng.Constants;
    ATTRIBUTE = lng.Constants.ATTRIBUTE;
    CLASS = lng.Constants.CLASS;
    ELEMENT = lng.Constants.ELEMENT;
    QUERY = lng.Constants.QUERY;
    /*
    Initializes the automatic subscription events by markup of the project.
    
    @method init
    */

    init = function() {
      var transition, _i, _len, _ref, _results;
      lng.dom(C.QUERY.SECTION_ROUTER_TOUCH).touch(_onSection);
      lng.dom(C.QUERY.SECTION_ROUTER_TAP).tap(_onSection);
      lng.dom(C.QUERY.ARTICLE_ROUTER_TOUCH).touch(_onArticle);
      lng.dom(C.QUERY.ARTICLE_ROUTER_TAP).tap(_onArticle);
      lng.dom(C.QUERY.ASIDE_ROUTER).touch(_onAside);
      lng.dom(C.QUERY.MENU_ROUTER).touch(_onMenu);
      lng.dom(QUERY.MENU_HREF).touch(_closeMenu);
      lng.dom(QUERY.CONTROL_CHECKBOX).on(C.EVENT.CHANGE, _changeCheckboxValue);
      _ref = C.EVENT.TRANSITION_END;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        transition = _ref[_i];
        lng.dom("body").delegate(C.ELEMENT.SECTION, transition, _transitionEnd);
        _results.push(lng.dom("body").delegate(C.ELEMENT.ASIDE, transition, _transitionEnd));
      }
      return _results;
    };
    _onSection = function(event) {
      var el, section_id;
      event.preventDefault();
      el = lng.dom(this);
      if (el.data("async")) {
        return _onAsyncResource(el, C.ELEMENT.SECTION);
      } else {
        section_id = el.data("view-section");
        if (section_id !== "back") {
          return lng.Router.section(section_id);
        } else {
          return lng.Router.back();
        }
      }
    };
    _onArticle = function(event) {
      var el;
      event.preventDefault();
      el = lng.dom(this);
      if (el.data("async")) {
        return _onAsyncResource(el, C.ELEMENT.ARTICLE);
      } else {
        return lng.Router.article(lng.Router.history(), el.data("view-article"), el);
      }
    };
    _onAsyncResource = function(el, type) {
      var id, link, section_id, url, _i, _len, _ref;
      url = el.data("async");
      id = el.data("view-" + type);
      lng.Notification.show();
      if (type === C.ELEMENT.ARTICLE) {
        section_id = lng.Element.Cache.section.attr(C.ATTRIBUTE.ID);
        lng.Resource.load(url, C.ELEMENT.SECTION + "#" + section_id);
      } else {
        lng.Resource.load(url);
      }
      lng.Boot.Data.init("#" + id);
      _ref = lng.dom("[data-async='" + url + "']");
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        link = _ref[_i];
        link.removeAttribute("data-async");
      }
      if (type === C.ELEMENT.ARTICLE) {
        lng.Router.article(section_id, id);
        lng.Aside.hide();
      } else {
        lng.Router.section(id);
      }
      return lng.Notification.hide();
    };
    _onAside = function(event) {
      var aside_id;
      event.preventDefault();
      aside_id = lng.dom(event.target).closest(C.QUERY.ASIDE_ROUTER).data("view-aside");
      return lng.Aside.toggle(aside_id);
    };
    _onMenu = function(event) {
      var menu_id;
      event.preventDefault();
      menu_id = lng.dom(this).data("view-menu");
      return lng.dom("[data-control=menu]#" + menu_id).toggleClass(CLASS.SHOW);
    };
    _closeMenu = function(event) {
      var el, parent;
      event.preventDefault();
      el = lng.dom(this);
      parent = el.parent("[data-control=menu]").removeClass(CLASS.SHOW).attr(C.ATTRIBUTE.ID);
      return lng.dom("[data-view-menu=" + parent + "] > .icon").attr("class", "icon " + el.data("icon"));
    };
    _changeCheckboxValue = function(event) {
      var checked, el, input;
      event.preventDefault();
      el = lng.dom(this);
      input = el.find("input");
      checked = input[0].checked;
      input.val(checked.toString());
      el.removeClass("checked");
      if (checked) {
        return el.addClass("checked");
      }
    };
    _transitionEnd = function(event) {
      var asideRelated, hasDirection, section, shadowRelated;
      section = lng.dom(event.target);
      hasDirection = section.data("direction");
      asideRelated = section.hasClass("asideHidding") || section.hasClass("asideShowing");
      shadowRelated = section.hasClass("shadowing") || section.hasClass("unshadowing");
      if (hasDirection || asideRelated || shadowRelated) {
        return lng.Router.animationEnd(event);
      } else {
        return lng.Aside.animationEnd(event);
      }
    };
    return {
      init: init
    };
  })(Lungo);

}).call(this);


/*
Initialize the Layout of LungoJS (if it's a mobile environment)

@namespace Lungo.Boot
@class Layout

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Boot.Layout = (function(lng) {
    var C, HASHTAG, init, _createListElement, _initElement, _initSection, _initSectionbyUrl, _scrollFix;
    C = lng.Constants;
    HASHTAG = "#";
    /*
    Initializes all <section> & <article> of the project
    @method init
    */

    init = function() {
      var _ref;
      lng.Fallback.fixPositionInAndroid();
      if (Lungo.Config.history && ((_ref = window.location.hash) != null ? _ref.length : void 0) >= 2) {
        _initSectionbyUrl();
      } else {
        _initSection();
      }
      _initElement(C.QUERY.LIST_IN_ELEMENT, _createListElement);
      return _initElement(C.QUERY.ELEMENT_SCROLLABLE, _scrollFix);
    };
    /*
    Private methods
    */

    _initSectionbyUrl = function() {
      var article_id, history, section, section_id, _i, _len;
      history = window.location.hash.replace(HASHTAG, "").split("/");
      section_id = history[history.length - 2];
      article_id = history[history.length - 1];
      if (history.length > 2) {
        history.length -= 2;
        for (_i = 0, _len = history.length; _i < _len; _i++) {
          section = history[_i];
          lng.Router.step(section);
        }
      }
      lng.Router.section(section_id);
      return lng.Router.article(section_id, article_id);
    };
    _initSection = function() {
      var section;
      section = lng.dom(C.ELEMENT.SECTION).first();
      if (section) {
        return lng.Router.section(section.attr(C.ATTRIBUTE.ID));
      }
    };
    _initElement = function(selector, callback) {
      var element, found_elements, i, len, _results;
      found_elements = lng.dom(selector);
      i = 0;
      len = found_elements.length;
      _results = [];
      while (i < len) {
        element = lng.dom(found_elements[i]);
        lng.Core.execute(callback, element);
        _results.push(i++);
      }
      return _results;
    };
    _createListElement = function(element) {
      var element_id;
      if (element.children().length === 0) {
        element_id = element.attr(C.ATTRIBUTE.ID);
        return element.append(C.ELEMENT.LIST);
      }
    };
    _scrollFix = function(element) {
      return element[0].addEventListener("touchstart", (function(event) {
        var scrollTop;
        scrollTop = this.scrollTop;
        if (scrollTop <= 1) {
          this.scrollTop = 1;
        }
        if (scrollTop + this.offsetHeight >= this.scrollHeight) {
          return this.scrollTop = this.scrollHeight - this.offsetHeight - 1;
        }
      }), false);
    };
    return {
      init: init
    };
  })(Lungo);

}).call(this);


/*
DOM Elements caching

@namespace Lungo.Element
@class Cache

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Element.Cache = {
    section: null,
    article: null,
    aside: null,
    navigation: null,
    dump: function() {
      var txt, _ref, _ref1, _ref2, _ref3;
      txt = "";
      txt += "================ cache data ================\n";
      txt += " SECTION:    " + ((_ref = this.section) != null ? _ref.attr('id') : void 0) + "\n";
      txt += " ARTICLE:    " + ((_ref1 = this.article) != null ? _ref1.attr('id') : void 0) + "\n";
      txt += " ASIDE:      " + ((_ref2 = this.aside) != null ? _ref2.attr('id') : void 0) + "\n";
      txt += " NAVIGATION: " + ((_ref3 = this.navigation) != null ? _ref3.attr('id') : void 0) + "\n";
      txt += "============================================\n";
      return console.error(txt);
    }
  };

}).call(this);


/*
Creates a instance of Carousel Element

@namespace Lungo.Element
@class Carousel
@version 1.0

@author Ignacio Olalde <ina@tapquo.com> || @piniphone
@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Element.Carousel = function(element, callback) {
    var next, position, prev, refresh, _handleGestures, _instance, _setup, _slide, _touchEnd, _touchMove, _touchStart, _transitionEnd;
    _instance = {
      index: 0,
      speed: 300,
      callback: callback,
      container: element,
      element: element.children[0],
      slide: void 0,
      slides: [],
      slides_length: 0,
      width: 0,
      start: {},
      isScrolling: void 0,
      deltaX: 0
    };
    prev = function(delay) {
      if (_instance.index) {
        return _slide(_instance.index - 1, _instance.speed);
      }
    };
    next = function(delay) {
      if (_instance.index < _instance.slides_length - 1) {
        return _slide(_instance.index + 1, _instance.speed);
      } else {
        return _slide(0, _instance.speed);
      }
    };
    position = function() {
      return _instance.index;
    };
    refresh = function() {
      return _setup();
    };
    _setup = function() {
      var el, index;
      _instance.slides = _instance.element.children;
      _instance.slides_length = _instance.slides.length;
      if (_instance.slides_length < 2) {
        return null;
      }
      _instance.width = ("getBoundingClientRect" in _instance.container ? _instance.container.getBoundingClientRect().width : _instance.container.offsetWidth);
      if (!_instance.width) {
        return null;
      }
      _instance.element.style.width = (_instance.slides.length * _instance.width) + "px";
      index = _instance.slides.length;
      while (index--) {
        el = _instance.slides[index];
        el.style.width = _instance.width + "px";
        el.style.display = "table-cell";
        el.style.verticalAlign = "top";
      }
      _slide(_instance.index, 0);
      return _instance.container.style.visibility = "visible";
    };
    _slide = function(index, duration) {
      var style;
      style = _instance.element.style;
      if (duration === void 0) {
        duration = _instance.speed;
      }
      style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = duration + "ms";
      style.MozTransform = style.webkitTransform = "translate3d(" + -(index * _instance.width) + "px,0,0)";
      style.msTransform = style.OTransform = "translateX(" + -(index * _instance.width) + "px)";
      return _instance.index = index;
    };
    _handleGestures = function() {
      _instance.element.addEventListener("touchstart", _touchStart, false);
      _instance.element.addEventListener("touchmove", _touchMove, false);
      _instance.element.addEventListener("touchend", _touchEnd, false);
      _instance.element.addEventListener("webkitTransitionEnd", _transitionEnd, false);
      _instance.element.addEventListener("msTransitionEnd", _transitionEnd, false);
      _instance.element.addEventListener("oTransitionEnd", _transitionEnd, false);
      _instance.element.addEventListener("transitionend", _transitionEnd, false);
      return window.addEventListener("resize", _setup, false);
    };
    _touchStart = function(event) {
      _instance.start = {
        pageX: event.touches[0].pageX,
        pageY: event.touches[0].pageY,
        time: Number(new Date())
      };
      _instance.isScrolling = void 0;
      _instance.deltaX = 0;
      _instance.element.style.MozTransitionDuration = _instance.element.style.webkitTransitionDuration = 0;
      return event.stopPropagation();
    };
    _touchMove = function(e) {
      var factor, pos;
      if (e.touches.length > 1 || e.scale && e.scale !== 1) {
        return;
      }
      _instance.deltaX = e.touches[0].pageX - _instance.start.pageX;
      if (typeof _instance.isScrolling === "undefined") {
        _instance.isScrolling = !!(_instance.isScrolling || Math.abs(_instance.deltaX) < Math.abs(e.touches[0].pageY - _instance.start.pageY));
      }
      if (!_instance.isScrolling) {
        e.preventDefault();
        factor = (!_instance.index && _instance.deltaX > 0 || _instance.index === _instance.slides_length - 1 && _instance.deltaX < 0 ? Math.abs(_instance.deltaX) / _instance.width + 1 : 1);
        _instance.deltaX = _instance.deltaX / factor;
        pos = _instance.deltaX - _instance.index * _instance.width;
        _instance.element.style.MozTransform = _instance.element.style.webkitTransform = "translate3d(" + pos + "px,0,0)";
        return e.stopPropagation();
      }
    };
    _touchEnd = function(e) {
      var isPastBounds, isValidSlide;
      isValidSlide = Number(new Date()) - _instance.start.time < 250 && Math.abs(_instance.deltaX) > 20 || Math.abs(_instance.deltaX) > _instance.width / 2;
      isPastBounds = !_instance.index && _instance.deltaX > 0 || _instance.index === _instance.slides_length - 1 && _instance.deltaX < 0;
      if (!_instance.isScrolling) {
        _slide(_instance.index + (isValidSlide && !isPastBounds ? (_instance.deltaX < 0 ? 1 : -1) : 0), _instance.speed);
      }
      return e.stopPropagation();
    };
    _transitionEnd = function(event) {
      if (_instance.callback) {
        return _instance.callback.apply(_instance.callback, [_instance.index, _instance.slides[_instance.index]]);
      }
    };
    _setup();
    _handleGestures();
    return {
      prev: prev,
      next: next,
      position: position,
      refresh: refresh
    };
  };

}).call(this);


/*
Set a counter to the element

@namespace Lungo.Element
@class count

@param  {string} Element query selector
@param  {number} Value for counter

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Element.count = function(selector, count) {
    var binding, element, html;
    element = Lungo.dom(selector);
    if (element) {
      element.children(".tag.count").remove();
      if (count) {
        binding = Lungo.Constants.BINDING.SELECTOR;
        html = Lungo.Attributes.count.html.replace(binding, count);
        return element.append(html);
      }
    }
  };

}).call(this);


/*
Creates a loading element in any area of layout

@namespace Lungo.Element
@method loading

@param  {string}  Element query selector
@param  {number}  stylesheet (null for hide)

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Element.loading = function(selector, stylesheet) {
    var binding, element, html;
    element = Lungo.dom(selector);
    if (element) {
      html = null;
      if (stylesheet) {
        binding = Lungo.Constants.BINDING.SELECTOR;
        html = Lungo.Attributes.loading.html.replace(binding, stylesheet);
      }
      return element.html(html);
    }
  };

}).call(this);


/*
Set a progress to the element

@namespace Lungo.Element
@method Progress

@param  {string}  Element query selector
@param  {number}  Percentage

@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Element.progress = function(selector, percentage) {
    var element;
    element = Lungo.dom(selector);
    if (element) {
      percentage += Lungo.Constants.ATTRIBUTE.PERCENT;
      return element.find(".value").style(Lungo.Constants.ATTRIBUTE.WIDTH, percentage);
    }
  };

}).call(this);


/*
Creates a instance of Pull & Refresh Element

@namespace Lungo.Element
@class Pull
@version 1.0

@author Ignacio Olalde <ina@tapquo.com> || @piniphone
@author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  Lungo.Element.Pull = function(element_selector, config_data) {
    var ANIMATION_TIME, CONFIG, CONFIG_BASE, CONTAINER, CURRENT_DISTANCE, ELEMENT, MAX_HEIGHT, REFRESHING, REFRESHING_HEIGHT, hide, _blockGestures, _getTouchY, _handlePullEnd, _handlePulling, _moveElementTo, _refreshStart, _setContainerLoading, _setContainerOnPulling, _setContainerTitle;
    REFRESHING_HEIGHT = 68;
    MAX_HEIGHT = 80;
    ANIMATION_TIME = 300;
    CURRENT_DISTANCE = 0;
    REFRESHING = false;
    ELEMENT = $$(element_selector);
    CONTAINER = ELEMENT.siblings("div[data-control=\"pull\"]");
    CONFIG = void 0;
    CONFIG_BASE = {
      onPull: "Pull down to refresh",
      onRelease: "Release to...",
      onRefresh: "Loading...",
      callback: void 0
    };
    CONFIG = Lungo.Core.mix(CONFIG_BASE, config_data);
    hide = function() {
      _moveElementTo(0, true);
      setTimeout((function() {
        REFRESHING = false;
        CONTAINER.attr("class", "");
        return ELEMENT[0].removeEventListener("touchmove", _blockGestures, true);
      }), ANIMATION_TIME);
      return CURRENT_DISTANCE = 0;
    };
    _moveElementTo = function(posY, animate) {
      var newPos;
      newPos = (posY > MAX_HEIGHT ? MAX_HEIGHT : posY);
      if (animate) {
        ELEMENT.addClass("pull");
      } else {
        ELEMENT.removeClass("pull");
      }
      ELEMENT.style("-webkit-transform", "translate(0, " + newPos + "px)");
      if (animate) {
        return setTimeout((function() {
          return ELEMENT.removeClass("pull");
        }), ANIMATION_TIME);
      }
    };
    _refreshStart = function(event) {
      REFRESHING = true;
      ELEMENT[0].addEventListener("touchmove", _blockGestures, true);
      _setContainerTitle(CONFIG.onRefresh);
      _setContainerLoading(true);
      _moveElementTo(REFRESHING_HEIGHT, true);
      if (CONFIG.callback) {
        return CONFIG.callback.apply(this);
      }
    };
    _setContainerTitle = function(title) {
      return CONTAINER.find("strong").html(title);
    };
    _setContainerLoading = function(op) {
      if (op) {
        return CONTAINER.addClass("refresh");
      } else {
        return CONTAINER.removeClass("refresh");
      }
    };
    _setContainerOnPulling = function(op) {
      if (op) {
        return CONTAINER.addClass("rotate");
      } else {
        return CONTAINER.removeClass("rotate");
      }
    };
    _blockGestures = function(touchEvent) {
      return touchEvent.preventDefault();
    };
    _handlePulling = function(event) {
      _moveElementTo(CURRENT_DISTANCE, false);
      _setContainerLoading(false);
      if (CURRENT_DISTANCE > REFRESHING_HEIGHT) {
        _setContainerTitle(CONFIG.onRelease);
        return _setContainerOnPulling(true);
      } else {
        _setContainerTitle(CONFIG.onPull);
        return _setContainerOnPulling(false);
      }
    };
    _handlePullEnd = function(event) {
      if (CURRENT_DISTANCE > REFRESHING_HEIGHT) {
        _refreshStart();
      } else {
        hide();
      }
      return this;
    };
    _getTouchY = function(event) {
      if ($$.isMobile()) {
        return event.touches[0].pageY;
      } else {
        return event.pageY;
      }
    };
    (function() {
      var INI_Y, STARTED;
      STARTED = false;
      INI_Y = 0;
      return ELEMENT.bind("touchstart", function(event) {
        if (ELEMENT[0].scrollTop <= 1) {
          STARTED = true;
          INI_Y = _getTouchY(event);
        }
        return true;
      }).bind("touchmove", function(event) {
        var current_y;
        if (!REFRESHING && STARTED) {
          current_y = _getTouchY(event);
          CURRENT_DISTANCE = current_y - INI_Y;
          if (CURRENT_DISTANCE >= 0) {
            _handlePulling(event);
            event.preventDefault();
          }
        }
        return true;
      }).bind("touchend", function() {
        if (STARTED) {
          _handlePullEnd();
        }
        STARTED = false;
        return true;
      });
    })();
    return {
      hide: hide
    };
  };

}).call(this);
