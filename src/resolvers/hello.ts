import { Resolver, Query } from "type-graphql";

@Resolver()
export class HelloResolver{
    @Query(() => String)
    hello(){
        return "hello world"
    }
    @Query(() => String)
    bye(){
        return "good bye"
    }
    @Query(() => String)
    shaka(){
        let shaka = 'shaka breh';
        return shaka;
    }
}