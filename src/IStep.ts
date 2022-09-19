import Workflow from "./workflow";

export interface IStep {
  workflow: Workflow;
  name?: string;
  remove(): void;
  destory?(): void;
}

export interface IStepConstructor extends IStep {
  new (workflow: Workflow, name?: string): IStepConstructor;
}
