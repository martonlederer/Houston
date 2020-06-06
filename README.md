# Houston
An advanced [Deno](https://deno.land) logger, with no dependencies.

## Usage
You can create really simple or very advanced and complicated, informative logs with Houston.

### Importing the module
```ts
//you can import all required types, etc. from the mod.ts
import { Houston } from 'https://deno.land/x/houston/mod.ts'
```

### Creating a basic logger
For this you will also need to import the `ConsoleTransport` [transport](#transports) from `mod.ts`
```ts
const Logger = new Houston([

  new ConsoleTransport()

])
```
Here, we are basically creating a new logger for our project and initializing a new transport, a `ConsoleTransport`. You can read more about transports [here](#transports).

If you want to log something, you can easily do it depending on the level of your log:
```ts
//logging an info
Logger.log(LogLevel.Info, 'This is an info')

//logging a successful action
Logger.log(LogLevel.Success, 'This is a success notice')

//logging a warning
Logger.log(LogLevel.Warning, 'This is a warning')

//logging an error
Logger.log(LogLevel.Error, 'This is an error')
```

## API
As explained above, we can use the `Houston` instance to create a new logger. You can read about it's configuration below.

### Transports
Transports are different methods of logging. You need can add them to your logger by including one when initializing

|   Transport name       |   Description |
|------------------------|---------------|
|   ConsoleTransport     |  This transport will log the desired messages to the command line, with additional options   |
|   FileTransport [W.I.P]|  This transport will save your logs in a file    |
|   WebTransport [W.I.P] |  This transport will send `PUT` requests containing you logs, to save on an external server  |

### Config
The config is a set of custom options that modify the way your logs look. You can also use them individually when adding a new transport to the `Houston` instance

... W.I.P.