Miniprojekt 4

Jag hade kul!
Det var dock svårare än jag först trodde. Interfacet var klurigt att få till. Uträkningsfunktionerna var relativt lätta att få till. Dock var det svårt att inte få varningar när jag lade till clickfunktioner och hämtade element från html. Det kunde dock lösas med configfil och ända till "HTMLELement | null" och pillande med if-satser. 
Bilden var klurig att få till men gjorde bla så här: "const imgUrl = new URL('../img/animal.png', import.meta.url);" istället för tt skapa variabler för varje.

la även till: "browserslist":[
    ">0.5%",
    "not dead", 
    "not ie <=11"
  ] 
  
  i package.json(hjälpte mot nåt men minns inte exakt varför)
  
  "module": "es2022", <---detta hjälpte också mot nåt
