import Axios from 'axios-observable';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
import {
    URL_POST_VALIDATE_USER,
    URL_GET_ROLEMENU,
    ROLE,
    CLIENTID,
    ACTION_VALIDATE_USER
} from '../constant';
import { async } from 'rxjs/internal/scheduler/async';
export const validateUser = async (tblUserdata) => {

    //return new Observable(
    //    function subscribe(subscriber) {
    //        subscriber.next("My First Observable")
    //    }
    //);
   //return Axios.request({
   //     method: 'get',
   //     url: 'https://jsonplaceholder.typicode.com/posts/',
   //     responseType: 'stream'
   // })

    await Axios.get('https://jsonplaceholder.typicode.com/posts/').subscribe((response) => {
        var dt = from(response.data)
        return dt;
    })

    //let response = await Axios.post(URL_POST_VALIDATE_USER, tblUserdata)
    //return response;


}
