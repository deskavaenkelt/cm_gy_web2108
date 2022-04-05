# Skywalker family tree

## Baserad på böckerna, inte på Jar Jar Abrams + Disneys påhitt

| Name              | Born         | birthPlace   | Mother       | Father       |
| ------------      | ------------ | ------------ | ------------ | ------------ |
| Shmi Skywalker    | 72 BBY       |  Tattoine    |              |              |
| Anakin Skywalker  | 41 BBY       |  Tattoine    | Shmi Skywalker|              |
| Padmé Amidala     | 28 BBY       |  Coruscant   | Jobal Naberri| Ruwee Naberri |
| Luke Skywalker     | 19 BBY      |  Alderaan    | Padmé Amidala | Anakin Skywalker |
| Leia Skywalker     | 19 BBY      |  Alderaan    | Padmé Amidala | Anakin Skywalker |

Correction

| Name              | Born         | birthPlace   | Mother       | Father       |
| ------------      | ------------ | ------------ | ------------ | ------------ |
| Leia Organa       | 19 BBY      |  Alderaan    | Queen Breha of Alderaan | Bail Organa |

More characters

| Name              | Born         | birthPlace   | Mother       | Father       |
| ------------      | ------------ | ------------ | ------------ | ------------ |
| Han Solo          | 19 BBY      |  Alderaan    | Jaina Solo (elder) | Jonash Solo |
| Mara Jade         | 19 BBY      |              |                |                 |
| Ben Skywalker     | 26.5 ABY    | Coruscant    | Mara Jade      | Luke Skywalker  |
| Jacen Solo        | 9 ABY       | Coruscant    | Leia Organa    | Han Solo       |
| Jaina Solo (younger) | 9 ABY       | Coruscant    | Leia Organa    | Han Solo       |
| Anakin Solo        | 10.5 ABY    | Coruscant    | Leia Organa    | Han Solo       |
| Jaila Solo (eder) |              |              |                |                |
| Jonash Solo       |              |              |                |                |
| Bail Organa       |              |              |                |                |
| Queen Breha of Alderaan |              |              |                |                |

#demo of json object

| json code and routes |
|------------|
| route: POST person/ |
|{"name": "Shmi Skywalker", "born": "72 BBY", "birthPlace": "Tatooine"}|
|{"name": "Anakin Skywalker", "born": "41 BBY", "birthPlace": "Tattoine", "mother": "Shmi Skywalker"}|
|{"name": "Ruwee Naberri"}|
|{"name": "Jobal Naberri"}|
|{"name": "Padmé Amidala", "born": "46 BBY", "birthPlace": "Naboo", "mother": "Ruwee Naberri", "father": "Jobal Naberri"}|
|{"name": "Luke Skywalker", "born": "19 BBY", "birthPlace": "Tatooine", "mother": "Padmé Amidala", "father": "Anakin Skywalker"}|
|{"name": "Leia Skywalker", "born": "19 BBY", "birthPlace": "Alderaan", "mother": "Padmé Amidala", "father": "Anakin Skywalker"}|
||
|route: PUT person/{Leias Id}|
|{"name": "Leia Organa", "born": "19 BBY", "birthPlace": "Alderaan", "mother": "Queen Breha of Alderaan", "father": "Bail Organa"}|
||
|route: POST person/|
|{"name: "Queen Breha of Alderaan"}|
|{"name": "Bail Organa"}|
|{"name": "Mara Jade", "born": "17 BBY"}|
|{"name": "Ben Skywalker", "born": "26.5 ABY", "birthPlace": "Coruscant", "mother": "Mara Jade", "father": "Luke Skywalker"}|
|{"name": "Han Solo", "born": "29 BBY", "birthPlace": "Corellia", "mother": "Jaina Solo", "father": "Jonash Solo"}|
|{"name": "Jacen Solo", "born": "9 ABY", "birthPlace": "Coruscant", "mother": "Leia Organa", "father": "Han Solo"}|
|{"name": "Jaina Solo", "born": "9 ABY", "birthPlace": "Coruscant", "mother": "Leia Organa", "father": "Han Solo"}|
|{"name": "Anakin Solo", "born": "10.5 ABY", "birthPlace": "Coruscant", "mother": "Leia Organa", "father": "Han Solo"}|
|{"name": "Jar Jar Binks"}|
||
|route: DELETE person/{Jar Jar Binks Id}|
| Mwahahahahaaaaaaaaaaaaaaaaa |

## Cool logga
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
