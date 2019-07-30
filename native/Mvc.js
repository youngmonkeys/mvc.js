var Controller = function() {

    this.views = {};

    this.addView = function(action, viewId, view) {
        var available = this.views[action];
        if (!available) {
            available = {};
        }
        available[viewId] = view;
        this.views[action] = available;
    }

    this.addDefaultView = function(action, view) {
        this.addView(action, "", view);
    }

    this.removeView = function(action, viewId) {
        var available = this.views[action];
        if (available) {
            delete available[viewId];
        }
    }

    this.removeDefaultView = function(action) {
        this.removeView(action, "");
    }

    this.removeViews = function(action) {
        var available = this.views[action];
        if (available) {
            for (var key in available)
                delete available[key];
        }
        delete this.views[action];
    }

    this.removeAllViews = function() {
        for(var action in this.views) {
            var available = this.views[action];
            for (var key in available)
                delete available[key];
            delete this.views[action];
        }
    }

    this.updateView = function(action, viewId, data) {
        var available = this.views[action];
        if (available) {
            var view = available[viewId];
            if(view)
                view(data);
        }
    }

    this.updateViews = function(action, data) {
        var available = this.views[action];
        if (available) {
            for (var key in available) {
                var view = available[key];
                view(data);
            }
        }
    }
}

var MvcClass = function() {

    this.controllers = {}
    this.models = {};

    this.newController = function(name) {
        var controller = new Controller();
        this.addController(name, controller);
        return controller;
    }

    this.addController = function(name, controller) {
        this.controllers[name] = controller;
    }

    this.getController = function(name) {
        var controller = this.controllers[name];
        return controller;
    }
}

var Mvc = (function() {

    var instance = null;

    function newInstance() {
        var mvc = new MvcClass();
        return mvc;
    }

    return {
         getInstance() {
            if (!instance)
                instance = newInstance();
            return instance;
        }
    }
})();
