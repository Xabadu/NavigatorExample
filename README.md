# NavigatorExample
This is a simple Navigator example for React Native apps. Works on iOS and Android.

## Usage

1.- Clone and install

    git clone 
    npm install

2.- Open the project in Xcode

   open ios/NavigatorExample.xcodeproj

3.- Run in emulator to test

## How does it work?

The navigator logic is pretty straightfoward. It works with a main component and an object of routes. The object itself has key-value pairs which represent:

* Key: Name of the route (Eg. login).
* Value: Component that represents that name.

Routes are always referenced by their name in order to load their respective component.

## Rendering scenes a.k.a. Loading new components

Components are loaded in the *renderScene* method inside the Main Component. This method passes several properties into the component:

* route: The route object.
* navigator: A reference to the navigator, so you can push and pop routes in each component.
* properties object: This is a rest param, mapping whatever properties you choose to pass to new components.

## How to change screens

So whenever you want to change screens, push a new route into the stack, referencing the navigator property:

    this.props.navigator.push({name: 'signup'});

Or, if you wanna go back to the previous screen, you can pop a route directly:

    this.props.navigator.pop();

If you need to change context (like, going from auth views into authorized views), you can reset the route stack for a clean start (this method receives an array as param):

    this.props.navigator.immediatelyResetRouteStack([{name: 'your-authenticated-view'}]);

## Contributing

If you want to improve this example or come across any bugs with the implementation, feel free to open an issue to discuss it :D

## Need more help?

If you have any questions about this example or the navigator itself, feel free to open an issue or contact me through [Twitter](http://twitter.com/xabadu). I'll be more than happy to help with whatever I can.
