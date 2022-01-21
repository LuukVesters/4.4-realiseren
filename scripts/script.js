// Auteur: Luuk Vesters
// Aanmaakdatum: 12-1-2022
// Opdracht 4.4 Realiseren
console.log("Gebruik de functie calculator()")
console.log("Een voorbeeld is: calculator(5, \"+\", 5)")
console.log("Maak gebruik van de operatoren: + - x : en ^")
console.log("Gemaakt door Luuk Vesters")
console.log("Gemaakt op 12-1-2022")

function calculator (number1, operator, number2) 
{
    if (operator == undefined) 
{
        return "undefined"
    } else 
    {
        if (operator == "+") 
        {
            return console.log(number1 + " + " + number2 + " = " + (number1+number2))
        } 
        else if (operator == "-") 
        {
            return console.log(number1 + " - " + number2 + " = " + (number1-number2))
        } 
        else if (operator == "x") 
        {
            return console.log(number1 + " x " + number2 + " = " + (number1*number2))
        } 
        else if (operator == ":") 
        {
            return console.log(number1 + " : " + number2 + " = " + (number1/number2))
        }
        else if (operator == "^") 
        {
            return console.log(number1 + " ^ " + number2 + " = " + (number1**number2))
        }
    } 
}