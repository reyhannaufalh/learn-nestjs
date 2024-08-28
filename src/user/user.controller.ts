import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/api/users')
export class UserController {
  @Get()
  get(): string {
    return 'GET /users';
  }

  @Get('/hello')
  async getByQuery(@Query('name') name: string): Promise<string> {
    return `Name is ${name}`;
  }

  @Get('/user/:id')
  getById(@Param('id') id: string): string {
    return `GET /users/${id}`;
  }

  @Post()
  post(): string {
    return 'POST /user';
  }

  @Get('/response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return {
      data: 'response',
    };
  }

  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: '/api/users/response',
      statusCode: 301,
    };
  }

  @Get('/set-cookie')
  setCookie(@Query('name') name: string, @Res() response: Response) {
    response.cookie('name', name);
    response.status(200).send('Cookie set');
  }

  @Get('/get-cookie')
  getCookie(@Req() request: Request): string {
    return request.cookies['name'];
  }

  @Get('/view/hello')
  viewHello(@Query('name') name: string, @Res() response: Response) {
    response.render('index.html', {
      title: 'Views',
      name: name,
    });
  }
}
