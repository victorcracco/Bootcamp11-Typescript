import { Request, Response } from "express";
import createUser  from "./services/CreateUser";

// string, number, boolean, object, array
// interfaces

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'victorcracco@gmail.com',
        password: '123456',
        techs: ['Node.js', 'React',
    {title: 'Javascript', experience: 100 },
    ],
    });



    return response.json({ message: 'Hello World'});
}

