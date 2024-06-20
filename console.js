let exp_hero = 7000
let name_hero = "Garen"


if (exp_hero < 1000) {
    console.log(`você, ${name_hero}, é do nível ferro porque seu xp é ${exp_hero}`); // Nível Ferro
}
else if (exp_hero >= 1001 && exp_hero <= 2000) {
    console.log(`você, ${name_hero}, é do nível bronze porque seu xp é ${exp_hero}`); // Nível Bronze
}
else if (exp_hero >= 2001 && exp_hero <= 5000) {
    console.log(`você, ${name_hero}, é do nível prata porque seu xp é ${exp_hero}`); // Nível Prata
}
else if (exp_hero >= 5001 && exp_hero <= 7000) {
    console.log(`você, ${name_hero}, é do nível ouro porque seu xp é ${exp_hero}`); // Nível Ouro
}
else if (exp_hero >= 7001 && exp_hero <= 8000) {
    console.log(`você, ${name_hero}, é do nível platina porque seu xp é ${exp_hero}`); // Nível Platina
}
else if (exp_hero >= 8001 && exp_hero <= 9000) {
    console.log(`você, ${name_hero}, é do nível ascendente porque seu xp é ${exp_hero}`); // Nível Ascendente
}
else if (exp_hero >= 9001 && exp_hero <= 11000) {
    console.log(`você, ${name_hero}, é do nível mestre porque seu xp é ${exp_hero}`); // Nível Mestre
}
else if (exp_hero > 11000) {
    console.log(`você, ${name_hero}, é do nível desafiante porque seu xp é ${exp_hero}`); // Nível Desafiante
}
