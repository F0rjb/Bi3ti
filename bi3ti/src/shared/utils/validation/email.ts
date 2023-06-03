import { ValidatorFn } from './models/Validatorfn';

export const validateEmail: ValidatorFn =
  (
    email: string,
    options?: Object,
  ): boolean => {
    const re =
      /[a - z0 - 9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    return re.test(email.trim());
  };
