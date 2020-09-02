interface CustomResponse {
  valid: boolean;
  error: string;
}

export const errorResponse = (): CustomResponse => {
  return {
    valid: false,
    error: 'error occurred',
  }
};

export const validator = (validatorFn?: () => CustomResponse): CustomResponse => {
  return errorResponse();
};
