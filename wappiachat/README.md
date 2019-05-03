Hej!

Här är mitt bidrag. Appen börjar i komponeneten Login som hämtar listan där användaren får "logga in". Däefter skickas listan vidare, via ChatModel, till SelectFriend där man, som namnet antyder, får välja vän att skicka till. När de två användarna är bestämda skickas de vidare till HandleChat som renderar ReadMessage och SendMessage. ReadMessage hanterar och visar inkommande meddelanden medan SendMessage skickar användarens meddelanden. 

Som jag skrev i kommentarerna i koden, så kommenterade jag bort en "auto update"-funktion då den skulle generera lite för många API-calls. Men med den funktionen behövs inte update-knappen. Bättre hade troligen varit att använda Axios eller liknande men det hann jag inte med. 

Vi hörs!

/Viktor 
