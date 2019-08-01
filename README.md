# Mvc.js <img src="https://github.com/youngmonkeys/ezyfox-server/blob/master/logo.png" width="48" height="48" />
mvc for javascript

# Synopsis

mvc for javascript

# Code Example

**1. Add a new controller**
```javascript
let mvc = Mvc.getInstance();
mvc.newController("login");
```

**2. Add a view**
```javascript
var loginController = mvc.getController("login");
loginController.addDefaultView('access-app', (data) => {
    console.log(JSON.stringify(data));
});
```

**3. Update a view**
```javascript
var loginController = mvc.getController("login");
loginController.updateViews("access-app", {success: true});
```

# Installation

for es6:

```
npm i mvc-es6
```