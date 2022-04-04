# Skywalker family tree

## Baserad på böckerna, inte på Jar Jar Abrams + Disneys påhitt

Name                Born            birthPlace      Mother              Father
---                 -------         ----------      -------             -------
Shmi Skywalker      72 BBY          Tatooine
Anakin Skywalker    41 BBY          Tatooine        Shmi Skywalker
Padmé Amidala       46 BBY          Naboo           Jobal Naberri       Ruwee Naberri
Luke Skywalker      19 BBY          Tatooine        Padmé Amidala       Anakin Skywalker
Leia Skywalker      19 BBY          Alderaan        Padmé Amidala       Anakin Skywalker

correction: Leia was adopted by Organa Royal family.
Update: 
Leia Organa         19 BBY          Alderaan        Breha of Alderaan   Bail Organa

Han Solo            29 BBY          Corellia        Jaina Solo          Jonash Solo
Mara Jade           17 BBY                          
Ben Skywalker       26.5 ABY        Coruscant       Mara Jade           Luke Skywalker
Jacen  Solo         9 ABY           Coruscant       Leia Organa         Han Solo
Jaina Solo          9 ABY           Coruscant       Leia Organa         Han Solo
Anakin Solo         10.5 ABY        Coruscant       Leia Organa         Han Solo

extras:
Jaina Solo
Jonash Solo
Breha of Alderaan   
Bail Organa

#demo of json object

route: POST person/
{"name": "Shmi Skywalker", "born": "72 BBY", "birthPlace": "Tatooine"}
{"name": "Anakin Skywalker", "born": "41 BBY", "birthPlace": "Tattoine", "mother": "Shmi Skywalker"}
{"name": "Ruwee Naberri"}
{"name": "Jobal Naberri"}
{"name": "Padmé Amidala", "born": "46 BBY", "birthPlace": "Naboo", "mother": "Ruwee Naberri", "father": "Jobal Naberri"}
{"name": "Luke Skywalker", "born": "19 BBY", "birthPlace": "Tatooine", "mother": "Padmé Amidala", "father": "Anakin Skywalker"}
{"name": "Leia Skywalker", "born": "19 BBY", "birthPlace": "Alderaan", "mother": "Padmé Amidala", "father": "Anakin Skywalker"}

route: PUT person/{Leias Id}
{"name": "Leia Organa", "born": "19 BBY", "birthPlace": "Alderaan", "mother": "Queen Breha of Alderaan", "father": "Bail Organa"}

route: POST person/
{"name: "Queen Breha of Alderaan"}
{"name": "Bail Organa"}
{"name": "Mara Jade", "born": "17 BBY"}
{"name": "Ben Skywalker", "born": "26.5 ABY", "birthPlace": "Coruscant", "mother": "Mara Jade", "father": "Luke Skywalker"}
{"name": "Han Solo", "born": "29 BBY", "birthPlace": "Corellia", "mother": "Jaina Solo", "father": "Jonash Solo"}
{"name": "Jacen Solo", "born": "9 ABY", "birthPlace": "Coruscant", "mother": "Leia Organa", "father": "Han Solo"}
{"name": "Jaina Solo", "born": "9 ABY", "birthPlace": "Coruscant", "mother": "Leia Organa", "father": "Han Solo"}
{"name": "Anakin Solo", "born": "10.5 ABY", "birthPlace": "Coruscant", "mother": "Leia Organa", "father": "Han Solo"}
{"name": "Jar Jar Binks"}

route: DELETE person/{Jar Jar Binks Id}


```
                     .              .       .                    .      .
.        .               .       .     .            .
   .           .        .                     .        .            .
             .               .    .          .              .   .         .
               _________________      ____         __________
 .       .    /                 |    /    \    .  |          \
     .       /    ______   _____| . /      \      |    ___    |     .     .
             \    \    |   |       /   /\   \     |   |___>   |
           .  \    \   |   |      /   /__\   \  . |         _/               .
 .     ________>    |  |   | .   /            \   |   |\    \_______    .
      |            /   |   |    /    ______    \  |   | \           |
      |___________/    |___|   /____/      \____\ |___|  \__________|    .
  .     ____    __  . _____   ____      .  __________   .  _________
       \    \  /  \  /    /  /    \       |          \    /         |      .
        \    \/    \/    /  /      \      |    ___    |  /    ______|  .
         \              /  /   /\   \ .   |   |___>   |  \    \
   .      \            /  /   /__\   \    |         _/.   \    \            +
           \    /\    /  /            \   |   |\    \______>    |   .
            \  /  \  /  /    ______    \  |   | \              /          .
 .       .   \/    \/  /____/      \____\ |___|  \____________/  LS
                               .                                        .
     .                           .         .               .                 .
                .                                   .            .

```