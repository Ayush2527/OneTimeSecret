import { Request, Response } from 'express';
import { v4 as uuid4 } from 'uuid';
import { createSecretService } from 'secret/command/create-secret';
import { CreateSecret } from 'secret/command/create-secret/create-secret';
import { getSecret } from 'secret/queries/get-secret';
import * as bcrypt from 'bcrypt';


export const postSecret = async (request: Request, response: Response) => {
  const id = uuid4();
  const { body } = request;
   
  const command = new CreateSecret({
    id,
    body: body.body,
    password:body.password,
    expiresIn: body.expiresIn,
  });

  await createSecretService.execute(command);

  const secret = await getSecret.byId(id);
  response.json(secret);
};

export const getSingleSecret = async (request: Request, response: Response) => {
  const secret = await getSecret.byId(request.params.id);
  if(secret.password){
    return (response.json({
      id: secret.id,
      body: "This Message is encrypted",
      password: secret.password,
      expiresIn: secret.expiresIn  
      }))
  }
    return (response.json(secret))
  // response.json(secret);
//  console.log(secret)
};

export const getMessage =async (request:Request, response:Response) => {
const encrypt = await getSecret.byId(request.params.id);
const { password} = request.body;
if(encrypt.password){
  const validPass = await bcrypt.compare(password, encrypt.password)
  if(validPass){
    response.json(encrypt.body)
    // console.log(encrypt.body)
  }else{  
    response.json('invalid Password')
  }
}

else{
response.json(encrypt.body)
}
}