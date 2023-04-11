import { Request, Response, NextFunction } from 'express';
import { AnySchema } from 'yup';

const validateDataMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.body = validated;
      return next();
    } catch (err) {
      return res.status(400).json({
        error: err.errors,
      });
    }
  };

export default validateDataMiddleware;
