import { Color, ConsoleTransport, Houston, LogLevel } from '../mod.ts'

const Logger = new Houston([

  new ConsoleTransport([LogLevel.Info, LogLevel.Error])

])

Logger.log(LogLevel.Info, 'testttt')