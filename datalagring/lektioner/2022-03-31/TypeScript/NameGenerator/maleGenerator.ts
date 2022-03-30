import NameGenerator from "./nameClass";
class maleGenerator
{
    getName()
    {
        // array of male names
        const names:Array<string>= [
            "Adam","Alex","Ben","Billy","Bobby","Brett",
            "Brian","Bryan","Charlie","Christopher","Colin","Curtis",
            "Daniel","Derek","Douglas","Eddie","Ernest","Finn","Frank",
            "Freddie","George","Glenn","Harry","Henry","Ian","Isaac",
            "Jack","Jacob","James","Jason","Jeff","John","Joseph","Joshua",
            "Justin","Keith","Kevin","Kurt","Lee","Leonard","Liam","Logan",
            "Lucas","Luke","Mark","Martin","Michael","Nathan","Neil","Nicholas",
            "Oliver","Oscar","Paul","Peter","Philip","Richard","Robert","Ryan",
            "Samuel","Sean","Shaun","Simon","Stephen","Steven","Thomas","Timothy",
            "Trevor","Victor","William","Zachary","Zach","Zack","Zackary","Zane"];
            let gen=new NameGenerator(names);
        return gen.getName();
    }
}

export default maleGenerator;