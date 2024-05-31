import { ReasonPhrases, StatusCodes } from 'http-status-codes'; 
import { Response } from 'express';

export class HttpResponse {

  public OK(res: Response, data: any): Response { // Function syntax corrected and return type added
    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      statusMessage: ReasonPhrases.OK,
      data,
    });
  }

  public notFound(res: Response, data: any): Response { // Function syntax corrected and return type added
    return res.status(StatusCodes.NOT_FOUND).json({
      status: StatusCodes.NOT_FOUND,
      statusMessage: ReasonPhrases.NOT_FOUND,
      data,
    });
  }

  public notAuthorized(res: Response, data: any): Response { // Function syntax corrected and return type added
    return res.status(StatusCodes.UNAUTHORIZED).json({
      status: StatusCodes.UNAUTHORIZED,
      statusMessage: ReasonPhrases.UNAUTHORIZED,
      data,
    });
  }

  public forbidden(res: Response, data: any): Response { // Function syntax corrected and return type added
    return res.status(StatusCodes.FORBIDDEN).json({
      status: StatusCodes.FORBIDDEN,
      statusMessage: ReasonPhrases.FORBIDDEN,
      data,
    });
  }

  public Error(res: Response, data: any): Response { // Function syntax corrected and return type added
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      statusMessage: ReasonPhrases.INTERNAL_SERVER_ERROR,
      data,
    });
  }

}
