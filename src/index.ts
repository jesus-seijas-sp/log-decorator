/**
 * Logger index
 */

import { Container, inject, injectable } from 'inversify';
import { containerManager, DecoratorHelper } from './core';
import { logClass, logDecoratorConfiguration, logMethod } from './log-decorator';
import { ConsoleLogger, Log, Logger, LogLevel, PinoLogger } from './logger';
import { TYPES } from './types';

export {
  Container,
  inject,
  injectable,
  containerManager,
  DecoratorHelper,
  ConsoleLogger,
  LogLevel,
  Log,
  Logger,
  PinoLogger,
  logClass,
  logDecoratorConfiguration,
  logMethod,
  TYPES
};
