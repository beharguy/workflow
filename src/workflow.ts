import {IStepConstructor} from "./IStep";
import { isUndefined } from "./utils";

export default class Workflow {
  private steps: Array<IStepConstructor> = [];

  constructor(private name?: string) {}

  registerStep = (Step: IStepConstructor): () => void => {
    const step:IStepConstructor = new Step(this);

    this.steps.push(step);

    return () => {
      this.removeStep(step);
    };
  };
  
  removeStep = (step: IStepConstructor): void => {
    if (!isUndefined(step.destory)) {
      step.destory();
  
      const stepIndex = this.steps.findIndex((item): boolean => item === step);
      this.steps.splice(stepIndex, 1);
    }
  };

}
