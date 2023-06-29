export class  CustomExeceptions extends Error{
    constructor(message){
    super(message)
    this.name = 'CustomExeceptions'}
}