import { ValidatorFn } from './validation/models/Validatorfn';
import { LengthOptions } from './validation/models/options/length';

export const _validateLegth: ValidatorFn =
  (
    text: string,
    options?: LengthOptions,
  ): boolean => {
    const textLength =
      text.trim().length;
    if (
      options?.min &&
      textLength < options.min
    )
      return false;
    if (
      options?.max &&
      textLength > options.max
    )
      return false;
    return true;
  };
