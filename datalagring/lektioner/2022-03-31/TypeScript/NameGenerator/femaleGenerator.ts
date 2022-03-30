import NameGenerator from "./nameClass";
class femaleGenerator
{
    getName()
    {
        // array of female names
        const names:Array<string> = [
            "Maria","Heather","Alessa","Cheryl","Claudia",
            "Cybil","Lisa","Alessa","Angela","Mary","Marie","Carol",
            "Chloe","Chrissy","Missy","Christabella","Connie","Cynthia",
            "Dahlia","Eleanor","Elle","Emelie","Emma","Francesca",
            "Eileen","Hanna","Helen","Helene","Jennifer","Jessica",
            "Jillian","Jodie","Juliana","Karen","Katie","Michelle",
            "Mira","Nora","Rose","Scarlet","Shannon","Sharon","Suki",
            "Tina","Tiffany","Tina","Tracy","Vanessa","Victoria","Vicky",
            "Wendy","Yvonne","Zoe","Zoey","Zara","Zoe","Zara","Zoey"];
        let gen=new NameGenerator(names);
        return gen.getName();
    }
}
export default femaleGenerator;