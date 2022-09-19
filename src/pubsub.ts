import { isArray, isFunction } from "./utils";
import { IPubSubHandlers } from "./IPubSub";

const handlers: IPubSubHandlers = {};

export const subscribe = (
  eventName: string,
  handler: Function
): (() => void) => {
  if (!isFunction(handler)) return;

  if (!isArray(handlers[eventName])) {
    handlers[eventName] = [];
  }

  handlers[eventName] = [...handlers[eventName], handler];

  return () => {
    handlers[eventName] = handlers[eventName].filter(
      (eventHandler) => eventHandler !== handler
    );
  };
};

export const publsih = (eventName: string, message: any): void => {
  if (!isArray(handlers[eventName])) return;

  const eventHandler: Function[] = handlers[eventName];

  for (let handlerIndex:number = 0; handlerIndex < eventHandler.length; handlerIndex++) {
    eventHandler[handlerIndex](message);
  };
};
