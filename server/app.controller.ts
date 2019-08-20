import { Controller, Post, Req, Res, Next, HttpStatus } from '@nestjs/common';

@Controller('app')
export class AppController {

    @Post()
    postIndicator( @Req() req: Request, @Res() res: Response ) {
        return {status: 'Hello'};
        // const password = req.body['password'];

        // //To check validation
        // let upperCase: boolean = false;
        // let lowerCase: boolean = false;
        // let numeric: boolean = false;
        // let symbols: boolean = false;
        // let length: boolean = false;

        // //To set progress
        // let progress: Array<boolean> = [
        //     false,
        //     false,
        //     false,
        //     false,
        //     false,
        //     false,
        //     false,
        //     false,
        //     false,
        //     false,
        //     false,
        //     false
        // ];

        // let count: number = 0;


        // //checking password length
        // if ( password.length >= 6 && password.length <= 24 ) {
        //     length = true;
        //     count++;
        // }


        // if ( password.length >= 6 ) {
        //     count++;
        // }

        // if ( password.length >= 9 ) {
        //     count++;
        // }

        // if ( password.length >= 12 ) {
        //     count++;
        // }

        // if ( password.length >= 15 ) {
        //     count++;
        // } //

        // if ( password.length >= 18 ) {
        //     count++;
        // }

        // if ( password.length >= 20 ) {
        //     count++;
        // }

        // if ( password.length >= 22 ) {
        //     count++;
        // }


        // //checking Rest of the Conditions
        // let upperCheck: boolean = false;
        
        // for (let i = 0; i < password.length; i++ ) {
        //     let character: string = password.charAt(i);

        //     let char_val: number = character.charCodeAt(0);

        //     let temp: number = 0;

        //     if( char_val >= 32 && char_val <= 47 ) {
        //         symbols = true;
        //     }

        //     if( char_val >= 48 && char_val <= 57 ) {
        //         numeric = true;
        //     }

        //     if( char_val >= 58 && char_val <= 64 ) {
        //         symbols = true;
        //     }

        //     if ( char_val >= 65 && char_val <= 90 ) {
        //         upperCase = true;
        //     }

        //     if ( char_val >= 91 && char_val <= 96 ) {
        //         symbols = true;
        //     }

        //     if ( char_val >= 97 && char_val <= 122 ) {
        //         lowerCase = true;
        //     }

        //     if ( char_val >= 123 && char_val <= 127 ) {
        //         symbols = true;
        //     }

        // }//end of For Loop

        // if ( upperCase ) {
        //     count++;
        // }

        // if ( lowerCase ) {
        //     count++;
        // }

        // if ( numeric ) {
        //     count++;
        // }

        // if ( symbols ) {
        //     count++;
        // }



        // for( let j = 0; j < count; j++ ) {
        //     progress[j] = true;
        // }

        // res.status( HttpStatus.OK ).json([
        //     upperCase: upperCase,
        //     lowerCase: lowerCase,
        //     numeric: numeric,
        //     symbols: symbols,
        //     length: length,
        //     progress: progress,
        //     count: count,
        //     passLength: password.length
        // ]);
    }
}
