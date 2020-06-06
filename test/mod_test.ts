import { ConsoleTransport, Houston, LogLevel, Format } from '../mod.ts'

const Logger = new Houston([

  new ConsoleTransport([LogLevel.Info, LogLevel.Error, LogLevel.Success, LogLevel.Warning])

], { format: Format.text })

Logger.log(LogLevel.Info, 'testttt')