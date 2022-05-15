# Aplicatia pentru rezervarea unei mese la restaurant
<h4>Radu Florin-Eusebiu</h4>
<h3>Link către aplicația publicată prin intermediul Heroku: https://arcane-hollows-28218.herokuapp.com/ </br>
Link către prezentarea video:  https://youtu.be/t8wSGllGcc8
</h3>
<h3>•	Descriere problemă </h3>
<h4>Restaurantul Bibliotheque dorește să le ofere clientilor posibilitatea ca acestia să își rezerve o masă prin intermediul unei aplicații web pentru a nu mai avea loc situația în care aceștia ajung la restaurant și nu se poate găsi o masă disponibilă. Astfel, problema restaurantului va fi rezolvată printr-o aplicație care îi va servi ca un operator pentru serzervari.</h4>
<h3>•	Descriere API folosite </h3>
<h4>În cadrul aplicației s-au folosit platforma Google Cloud Platform, cât și serviciul SendGrid.
Din platforma am folosit Google Cloud Sql – Cloud Sql – acesta este un serviciu care se ocupa cu creara, gestionarea, întreținera și administrarea bazelor de date relaționale. Serviciul a fost utilizat pentru stocarea datelor din aplicație într-o baza de date în cloud.
SendGrid – este un serviciu care are ca principală funcționalitate experierea de email-uri de la un expeditor către un destinator. Aplicația pentru rezervare folosește acest seriviciu ca un reminder cu detaliile rezervarii pentru restaurant.
În cadrul aplicatiei a fost integrat un api pentru o baza de date sql, s-a furnizat un user și credențialele aferente, iar serviciul sendGrid ne-a furnizat un api și în cadrul acestuia am creat un sender, adica un mail de pe care sa trimitem mesajele și un altul unde sa le primim. 
În baza de date din cloud au fost create 2 tabele, una aferenta mesajelor cu detaliile acestora iar alta pentru a tine o evidenta a rezervarilor cu informațiile aferente acestora.
</h4>
<h3>•	Fluxuri de date </h3>
<h4>În cadrul aplicației se realizeaza get-uri și posturi pentru diferitele operatii efectuate de un client.
<img src="https://user-images.githubusercontent.com/72069136/168493439-25df99ff-2fe6-4925-8fb8-9d3dbf50fdbe.png" alt="Alt text" title="Optional title">
Pentru ambele tabele ale aplicației au fost realizate operatiile crud de select, insert, update, delete pentru toata tabela cât și pentru id-uri explicite.
Cele mai frecvente rude utilizate în aplicație sunt cele de get all messages, insert a rezervation, intert a message și cea de mailing care folosește serviciul sendGrid.
</h4>
<h3>•	Prezentarea Aplicației</h3>
<img src="https://user-images.githubusercontent.com/72069136/168493551-30bc41d0-f618-48e8-b811-3335bf902223.png" alt="Alt text" title="Optional title">
<h3>Aplicația prezintă 3 componente: </br>
•	O listă de rezervări recente realizare de clienții restaurantului</br>
•	Un formular de introducere a detalii lor unei rezervarii</br>
•	Trimiterea de mail-uri către restaurant fiind realizată la apasarea butonului de rezerva, astfel se trimite un mail cu detaliile acesteia cât și se stocheama mesajul și rezervarea în baza de date
</h3>
