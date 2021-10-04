# Logiska operatorer

## Innehåll

- [Logisk OCH (LOGICAL AND)](#logisk-och-logical-and)
    - [Sanningstabell AND](#sanningstabell-and)
- [Logisk ELLER (LOGICAL OR)](#logisk-eller-logical-or)
    - [Sanningstabell OR](#sanningstabell-or)
- [Logisk INTE (LOGICAL NOT)](#logisk-inte-logical-not)
- [Övningar](#vningar)

# Logisk OCH (LOGICAL AND)

```javascript
const AND = (1 + 1 == 2) && (2 + 2 == 4)
alert(AND)  // True
```

```javascript
const AND = (1 + 1 == 2) && (2 + 2 == 5)
alert(AND)  // False
```

## Sanningstabell AND

| AND       | False      | True     |
| --------- |:----------:| --------:|
| False     | False      | False    |
| True      | False      | **True** |

# Logisk ELLER (LOGICAL OR)

```javascript
const OR = (1 + 1 == 2) || (2 + 2 == 4)
alert(OR)  // True
```

```javascript
const OR = (1 + 1 == 2) || (2 + 2 == 5)
alert(OR)  // True
```

```javascript
const OR = (1 + 1 == 3) || (2 + 2 == 5)
alert(OR)  // False
```

## Sanningstabell OR

| AND       | False      | True     |
| --------- |:----------:| --------:|
| False     | False      | **True** |
| True      | **True**   | **True** |

# Logisk INTE (LOGICAL NOT)

```javascript
const NOT = !(1 + 1 == 2)
alert(NOT)  // False
```

```javascript
const NOT = !(1 + 1 == 3)
alert(NOT)  // True
```

# Övningar

Skriv av exemplen ovan

## Övning 1

I ovanstående övningar testa att jämföra strängar med samma operatorer

## Övning 2

I ovanstående övningar testa att jämföra boolenska uttryck med samma operatorer

## Övning 3

Skapa ett antal olika variabler med olika innehåll samt använd dem på olika sätt med kod exemplen ovan




