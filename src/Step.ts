/**
 * TODO: [ ] Implement an on method that listen to the step's inputs
 * TODO: [ ] Implement a dispatch method that dispatch a message to another step
 */
import { IStep, IStepConstructor } from "./IStep";
import Workflow from "./workflow";

export default class Step implements IStep {
  readonly workflow: Workflow;
  readonly name?: string;

  constructor(workflow: Workflow, name?: string) {
    this.workflow = workflow;
    this.name = name;
  }

  remove = (): void => {
    this.workflow.removeStep(this as unknown as IStepConstructor);
  };
}
