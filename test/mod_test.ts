import { ConsoleTransport, Houston, LogLevel } from '../mod.ts'

const Logger = new Houston([

  new ConsoleTransport([LogLevel.Info, LogLevel.Error, LogLevel.Success, LogLevel.Warning])

])

Logger.log(LogLevel.Info, 'testttt')