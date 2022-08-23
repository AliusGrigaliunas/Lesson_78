import { secondUser } from './people'

type numbers = {
    number:number;
};

const d: numbers[] = [{number:55}];

const b = [66];

const c = [...b,...d];

const user: person[] = [{name:'al',surname:'gr'}]



console.log(c, user, secondUser);