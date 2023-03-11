document.querySelector('.bt-start').onclick = () => {
    document.querySelector('.container-1').style.display = 'none';
    document.querySelector('.container-2').style.display = 'flex';
}

let n = 0;
let m = 0;

document.querySelector('.bt-br-min').onclick = () => {
    if(n>0){
        n -= 1;
        document.querySelector('.count').innerHTML = `${n} : ${m}`;
    }
    if(n>m){
        document.querySelector('.brothers').style.background = 'rgb(16 0 87)';
        document.querySelector('.brothers').style.color = 'rgb(255, 255, 255)'
        document.querySelector('.sisters').style.background = 'rgb(255, 255, 255)';
        document.querySelector('.sisters').style.color = 'rgb(0, 0, 0)';
    }
    else if(m>n){
        document.querySelector('.sisters').style.background = 'rgb(16 0 87)';
        document.querySelector('.sisters').style.color = 'rgb(255, 255, 255)';
        document.querySelector('.brothers').style.background = 'rgb(255, 255, 255)';
        document.querySelector('.brothers').style.color = 'rgb(0, 0, 0)';
    }
    else{
        document.querySelector('.sisters').style.background = 'rgb(255, 255, 255)';
        document.querySelector('.sisters').style.color = 'rgb(0, 0, 0)';
        document.querySelector('.brothers').style.background = 'rgb(255, 255, 255)';
        document.querySelector('.brothers').style.color = 'rgb(0, 0, 0)';
    }
}
document.querySelector('.bt-br-plus').onclick = () => {
    n += 1;
    document.querySelector('.count').innerHTML = `${n} : ${m}`;
    if(n>m){
        document.querySelector('.brothers').style.background = 'rgb(16 0 87)';
        document.querySelector('.brothers').style.color = 'rgb(255, 255, 255)';
        document.querySelector('.sisters').style.background = 'rgb(255, 255, 255)';
        document.querySelector('.sisters').style.color = 'rgb(0, 0, 0)';
    }
    else if(m>n){
        document.querySelector('.sisters').style.background = 'rgb(16 0 87)';
        document.querySelector('.sisters').style.color = 'rgb(255, 255, 255)';
        document.querySelector('.brothers').style.background = 'rgb(255, 255, 255)';
        document.querySelector('.brothers').style.color = 'rgb(0, 0, 0)';
    }
    else{
        document.querySelector('.sisters').style.background = 'rgb(255, 255, 255)';
        document.querySelector('.sisters').style.color = 'rgb(0, 0, 0)';
        document.querySelector('.brothers').style.background = 'rgb(255, 255, 255)';
        document.querySelector('.brothers').style.color = 'rgb(0, 0, 0)';
    }
}
document.querySelector('.bt-sr-min').onclick = () => {
    if(m>0){
        m -= 1;
        document.querySelector('.count').innerHTML = `${n} : ${m}`;
        if(n>m){
            document.querySelector('.brothers').style.background = 'rgb(16 0 87)';
            document.querySelector('.brothers').style.color = 'rgb(255, 255, 255)';
            document.querySelector('.sisters').style.background = 'rgb(255, 255, 255)';
            document.querySelector('.sisters').style.color = 'rgb(0, 0, 0)';
        }
        else if(m>n){
            document.querySelector('.sisters').style.background = 'rgb(16 0 87)';
            document.querySelector('.sisters').style.color = 'rgb(255, 255, 255)';
            document.querySelector('.brothers').style.background = 'rgb(255, 255, 255)';
        document.querySelector('.brothers').style.color = 'rgb(0, 0, 0)';
        }
        else{
            document.querySelector('.sisters').style.background = 'rgb(255, 255, 255)';
            document.querySelector('.sisters').style.color = 'rgb(0, 0, 0)';
            document.querySelector('.brothers').style.background = 'rgb(255, 255, 255)';
            document.querySelector('.brothers').style.color = 'rgb(0, 0, 0)';
        }
    }
}
document.querySelector('.bt-sr-plus').onclick = () => {
    m += 1;
    document.querySelector('.count').innerHTML = `${n} : ${m}`;
    if(n>m){
        document.querySelector('.brothers').style.background = 'rgb(16 0 87)';
        document.querySelector('.brothers').style.color = 'rgb(255, 255, 255)';
        document.querySelector('.sisters').style.background = 'rgb(255, 255, 255)';
        document.querySelector('.sisters').style.color = 'rgb(0, 0, 0)';
    }
    else if(m>n){
        document.querySelector('.sisters').style.background = 'rgb(16 0 87)';
        document.querySelector('.sisters').style.color = 'rgb(255, 255, 255)';
        document.querySelector('.brothers').style.background = 'rgb(255, 255, 255)';
        document.querySelector('.brothers').style.color = 'rgb(0, 0, 0)';
    }
    else{
        document.querySelector('.sisters').style.background = 'rgb(255, 255, 255)';
        document.querySelector('.sisters').style.color = 'rgb(0, 0, 0)';
        document.querySelector('.brothers').style.background = 'rgb(255, 255, 255)';
        document.querySelector('.brothers').style.color = 'rgb(0, 0, 0)';
    }
}

document.querySelector('.open').onclick = () => {
    document.querySelector('.open').style.display = 'none';
    document.querySelector('.answer').style.display = 'block';
    document.querySelector('.close').style.display = 'block';
}
document.querySelector('.close').onclick = () => {
    document.querySelector('.open').style.display = 'block';
    document.querySelector('.close').style.display = 'none';
    document.querySelector('.answer').style.display = 'none';
}

let i = 1;

document.querySelector('.next').onclick = () => {
    if(i<50) i++;
    if(i == 1){
        document.querySelector('h3').innerHTML = 'Запитання 1';
        document.querySelector('.question').innerHTML = 'Скільки областей мав у підпорядкуванні Артаксеркс?';
        document.querySelector('.answer').innerHTML = '127';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 2){
        document.querySelector('h3').innerHTML = 'Запитання 2';
        document.querySelector('.question').innerHTML = 'Яке було географічне положення імперії, де перебувала Естер?';
        document.querySelector('.answer').innerHTML = 'Від Індії до Ефіопії';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 3){
        document.querySelector('h3').innerHTML = 'Запитання 3';
        document.querySelector('.question').innerHTML = 'Яке місто було вагомим в Імперії?';
        document.querySelector('.answer').innerHTML = 'Сузи';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 4){
        document.querySelector('h3').innerHTML = 'Запитання 4';
        document.querySelector('.question').innerHTML = 'В який рік царювання Артаксеркса був бенкет?';
        document.querySelector('.answer').innerHTML = 'В третій рік';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 5){
        document.querySelector('h3').innerHTML = 'Запитання 5';
        document.querySelector('.question').innerHTML = 'Для кого цар показував своє багатство на бенкеті?';
        document.querySelector('.answer').innerHTML = 'Для головних начальників війська та правителів області';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 6){
        document.querySelector('h3').innerHTML = 'Запитання 6';
        document.querySelector('.question').innerHTML = 'Скільки днів тривав бенкет?';
        document.querySelector('.answer').innerHTML = '180 днів';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 7){
        document.querySelector('h3').innerHTML = 'Запитання 7';
        document.querySelector('.question').innerHTML = 'Для кого було 7 днів святкування?';
        document.querySelector('.answer').innerHTML = 'Для народу, який находився в Сузах';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 8){
        document.querySelector('h3').innerHTML = 'Запитання 8';
        document.querySelector('.question').innerHTML = 'Що відомо про царицю Вашті?';
        document.querySelector('.answer').innerHTML = 'Робила святкування для жінок, була дуже красива, не захотіла прийти по наказу царя';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 9){
        document.querySelector('h3').innerHTML = 'Запитання 9';
        document.querySelector('.question').innerHTML = "Ім'я князя, якого послухав цар, коли цариця Вашті не захотіла прийти за наказом царя";
        document.querySelector('.answer').innerHTML = 'Мемухан';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 10){
        document.querySelector('h3').innerHTML = 'Запитання 10';
        document.querySelector('.question').innerHTML = 'Хто дав рекомендацію царю знайти молодих дівчат?';
        document.querySelector('.answer').innerHTML = 'Слуги царя';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 11){
        document.querySelector('h3').innerHTML = 'Запитання 11';
        document.querySelector('.question').innerHTML = 'З якого коліна був Мардохей?';
        document.querySelector('.answer').innerHTML = 'З коліна Веніамінового';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 12){
        document.querySelector('h3').innerHTML = 'Запитання 12';
        document.querySelector('.question').innerHTML = 'При якому царю було переселення народів у Вавилон?';
        document.querySelector('.answer').innerHTML = 'Ієхонія';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 13){
        document.querySelector('h3').innerHTML = 'Запитання 13';
        document.querySelector('.question').innerHTML = "Яке єврейське ім'я Естер?";
        document.querySelector('.answer').innerHTML = 'Гадасса';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 14){
        document.querySelector('h3').innerHTML = 'Запитання 14';
        document.querySelector('.question').innerHTML = 'В якому родстві була Естер з Мардохеєм?';
        document.querySelector('.answer').innerHTML = 'Двоюрідна сестра';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 15){
        document.querySelector('h3').innerHTML = 'Запитання 15';
        document.querySelector('.question').innerHTML = 'Хто такий Гегай?';
        document.querySelector('.answer').innerHTML = 'Сторож жінок';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 16){
        document.querySelector('h3').innerHTML = 'Запитання 16';
        document.querySelector('.question').innerHTML = 'Як звали батька Естер?';
        document.querySelector('.answer').innerHTML = 'Амінадав';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 17){
        document.querySelector('h3').innerHTML = 'Запитання 17';
        document.querySelector('.question').innerHTML = 'Що було записано в книгу денних записів царя?';
        document.querySelector('.answer').innerHTML = 'Мардохей повідомив про змову євнухів, які стерегли поріг';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 18){
        document.querySelector('h3').innerHTML = 'Запитання 18';
        document.querySelector('.question').innerHTML = 'Якої національності був Аман?';
        document.querySelector('.answer').innerHTML = "Агаг'янин (амаликитянин)";
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 19){
        document.querySelector('h3').innerHTML = 'Запитання 19';
        document.querySelector('.question').innerHTML = 'Чому Аман розгнівався на Мардохея?';
        document.querySelector('.answer').innerHTML = 'Мардохей не поклонявся йому';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 20){
        document.querySelector('h3').innerHTML = 'Запитання 20';
        document.querySelector('.question').innerHTML = 'Яку ціну дав Аман царю за знищення ізраїльського народу?';
        document.querySelector('.answer').innerHTML = '10000 талантів срібла';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 21){
        document.querySelector('h3').innerHTML = 'Запитання 21';
        document.querySelector('.question').innerHTML = 'Що скріплювало накази царя?';
        document.querySelector('.answer').innerHTML = 'Царський перстень';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 22){
        document.querySelector('h3').innerHTML = 'Запитання 22';
        document.querySelector('.question').innerHTML = 'Що значить пур?';
        document.querySelector('.answer').innerHTML = 'Жереб';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 23){
        document.querySelector('h3').innerHTML = 'Запитання 23';
        document.querySelector('.question').innerHTML = 'Коли повинні були винищити єврейський народ';
        document.querySelector('.answer').innerHTML = '13 день адара (дванадцятий місяць)';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 24){
        document.querySelector('h3').innerHTML = 'Запитання 24';
        document.querySelector('.question').innerHTML = 'Скільки днів Естер не була звана до царя?';
        document.querySelector('.answer').innerHTML = '30 днів';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 25){
        document.querySelector('h3').innerHTML = 'Запитання 25';
        document.querySelector('.question').innerHTML = 'Скільки днів був піст? Яка причина цьому?';
        document.querySelector('.answer').innerHTML = '3 дні, розмова з царем';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 26){
        document.querySelector('h3').innerHTML = 'Запитання 26';
        document.querySelector('.question').innerHTML = 'В чому виразилася любов Естер до свого народу?';
        document.querySelector('.answer').innerHTML = 'Самопожертва (Ест. 4:16)';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 27){
        document.querySelector('h3').innerHTML = 'Запитання 27';
        document.querySelector('.question').innerHTML = 'Що простягнув цар до Естер?';
        document.querySelector('.answer').innerHTML = 'Золотий скіпетр';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 28){
        document.querySelector('h3').innerHTML = 'Запитання 28';
        document.querySelector('.question').innerHTML = 'В чому прообраз царського скіпетра?';
        document.querySelector('.answer').innerHTML = 'Божа милість';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 29){
        document.querySelector('h3').innerHTML = 'Запитання 29';
        document.querySelector('.question').innerHTML = 'Як звали жінку Амана?';
        document.querySelector('.answer').innerHTML = 'Зереш';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 30){
        document.querySelector('h3').innerHTML = 'Запитання 30';
        document.querySelector('.question').innerHTML = 'Чому Господь забрав сон від царя?';
        document.querySelector('.answer').innerHTML = "Божий план для Його народу: звелів принести книгу пам'ятну денних записів";
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 31){
        document.querySelector('h3').innerHTML = 'Запитання 31';
        document.querySelector('.question').innerHTML = 'Яка була реакція Амана після того, як він відзначив Мордехая пошаною?';
        document.querySelector('.answer').innerHTML = 'Закрив голову, сумний';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 32){
        document.querySelector('h3').innerHTML = 'Запитання 32';
        document.querySelector('.question').innerHTML = 'Хто сказав Аману про його падіння?';
        document.querySelector('.answer').innerHTML = 'Дружина його та мудреці';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 33){
        document.querySelector('h3').innerHTML = 'Запитання 33';
        document.querySelector('.question').innerHTML = 'Який подарок попросила Естер у царя?';
        document.querySelector('.answer').innerHTML = 'Своє життя та життя євреїв';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 34){
        document.querySelector('h3').innerHTML = 'Запитання 34';
        document.querySelector('.question').innerHTML = 'Яку характеристику надала Естер про Амана?';
        document.querySelector('.answer').innerHTML = 'Злий';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 35){
        document.querySelector('h3').innerHTML = 'Запитання 35';
        document.querySelector('.question').innerHTML = 'Чим відомий Харвон?';
        document.querySelector('.answer').innerHTML = 'Сказав царю, що можна повісити Амана';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 36){
        document.querySelector('h3').innerHTML = 'Запитання 36';
        document.querySelector('.question').innerHTML = 'Якої висоти було дерево, на якому повісили Амана?';
        document.querySelector('.answer').innerHTML = '50 ліктів';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 37){
        document.querySelector('h3').innerHTML = 'Запитання 37';
        document.querySelector('.question').innerHTML = 'До кого перейшов перстень після Амана?';
        document.querySelector('.answer').innerHTML= 'До Мардохея';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 38){
        document.querySelector('h3').innerHTML = 'Запитання 38';
        document.querySelector('.question').innerHTML = 'Яка була пошта в Імперії Артаксеркса?';
        document.querySelector('.answer').innerHTML = 'Коні, мули, одногорбі верблюди';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 39){
        document.querySelector('h3').innerHTML = 'Запитання 39';
        document.querySelector('.question').innerHTML = 'Яка була реакція Євреїв на новий указ?';
        document.querySelector('.answer').innerHTML = 'Радість, веселощі, бенкет, свято';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 40){
        document.querySelector('h3').innerHTML = 'Запитання 40';
        document.querySelector('.question').innerHTML = 'Опишіть Мардохея після смерті Амана';
        document.querySelector('.answer').innerHTML = 'Великий, відомий, слава ходила по всім областям, піднімався все вище і вище';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 41){
        document.querySelector('h3').innerHTML = 'Запитання 41';
        document.querySelector('.question').innerHTML = 'Чия ініціатива повісити синів Амана?';
        document.querySelector('.answer').innerHTML = 'Естер';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 42){
        document.querySelector('h3').innerHTML = 'Запитання 42';
        document.querySelector('.question').innerHTML = 'Скількох синів Амана було повішено?';
        document.querySelector('.answer').innerHTML= '10 синів';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 43){
        document.querySelector('h3').innerHTML = 'Запитання 43';
        document.querySelector('.question').innerHTML = 'Дата побиття юдеями їхніх ворогів?';
        document.querySelector('.answer').innerHTML= '13 день дванадцятого місяця (Адар)';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 44){
        document.querySelector('h3').innerHTML = 'Запитання 44';
        document.querySelector('.question').innerHTML = 'Що було дозволено юдеям в городі Сузах?';
        document.querySelector('.answer').innerHTML = 'Вбивати ворогів у 14 день місяця Адара';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 45){
        document.querySelector('h3').innerHTML = 'Запитання 45';
        document.querySelector('.question').innerHTML = 'Як називається свято в честь перемоги євреїв над ворогами?';
        document.querySelector('.answer').innerHTML = 'Пурим';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 46){
        document.querySelector('h3').innerHTML = 'Запитання 46';
        document.querySelector('.question').innerHTML = 'Чи святкується свято Пурим у наші дні євреями?';
        document.querySelector('.answer').innerHTML= 'Да';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 47){
        document.querySelector('h3').innerHTML = 'Запитання 47';
        document.querySelector('.question').innerHTML = 'Яким способом євреї отримали перемогу?';
        document.querySelector('.answer').innerHTML = 'Піст, молитва, плач (Ест. 9:31)';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 48){
        document.querySelector('h3').innerHTML = 'Запитання 48';
        document.querySelector('.question').innerHTML = 'Останній указ царя в книзі Естер?';
        document.querySelector('.answer').innerHTML = 'Наклав податки на землю й острови';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 49){
        document.querySelector('h3').innerHTML = 'Запитання 49';
        document.querySelector('.question').innerHTML = 'Джерело де описується докладне свідчення про Мардохея?';
        document.querySelector('.answer').innerHTML= 'Книга денних записів царів мідійських та персидських';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 50){
        document.querySelector('h3').innerHTML = 'Запитання 50';
        document.querySelector('.question').innerHTML = 'Яку посаду обіймав Мардохей після цих подій?';
        document.querySelector('.answer').innerHTML= 'Був другим після царя';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    
}


document.querySelector('.last').onclick = () => {
    if(i>1) i--;
    if(i == 1){
        document.querySelector('h3').innerHTML = 'Запитання 1';
        document.querySelector('.question').innerHTML = 'Скільки областей мав у підпорядкуванні Артаксеркс?';
        document.querySelector('.answer').innerHTML = '127';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 2){
        document.querySelector('h3').innerHTML = 'Запитання 2';
        document.querySelector('.question').innerHTML = 'Яке було географічне положення імперії, де перебувала Естер?';
        document.querySelector('.answer').innerHTML = 'Від Індії до Ефіопії';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 3){
        document.querySelector('h3').innerHTML = 'Запитання 3';
        document.querySelector('.question').innerHTML = 'Яке місто було вагомим в Імперії?';
        document.querySelector('.answer').innerHTML = 'Сузи';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 4){
        document.querySelector('h3').innerHTML = 'Запитання 4';
        document.querySelector('.question').innerHTML = 'В який рік царювання Артаксеркса був бенкет?';
        document.querySelector('.answer').innerHTML = 'В третій рік';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 5){
        document.querySelector('h3').innerHTML = 'Запитання 5';
        document.querySelector('.question').innerHTML = 'Для кого цар показував своє багатство на бенкеті?';
        document.querySelector('.answer').innerHTML = 'Для головних начальників війська та правителів області';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 6){
        document.querySelector('h3').innerHTML = 'Запитання 6';
        document.querySelector('.question').innerHTML = 'Скільки днів тривав бенкет?';
        document.querySelector('.answer').innerHTML = '180 днів';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 7){
        document.querySelector('h3').innerHTML = 'Запитання 7';
        document.querySelector('.question').innerHTML = 'Для кого було 7 днів святкування?';
        document.querySelector('.answer').innerHTML = 'Для народу, який находився в Сузах';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 8){
        document.querySelector('h3').innerHTML = 'Запитання 8';
        document.querySelector('.question').innerHTML = 'Що відомо про царицю Вашті?';
        document.querySelector('.answer').innerHTML = 'Робила святкування для жінок, була дуже красива, не захотіла прийти по наказу царя';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 9){
        document.querySelector('h3').innerHTML = 'Запитання 9';
        document.querySelector('.question').innerHTML = "Ім'я князя, якого послухав цар, коли цариця Вашті не захотіла прийти за наказом царя";
        document.querySelector('.answer').innerHTML = 'Мемухан';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 10){
        document.querySelector('h3').innerHTML = 'Запитання 10';
        document.querySelector('.question').innerHTML = 'Хто дав рекомендацію царю знайти молодих дівчат?';
        document.querySelector('.answer').innerHTML = 'Слуги царя';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 11){
        document.querySelector('h3').innerHTML = 'Запитання 11';
        document.querySelector('.question').innerHTML = 'З якого коліна був Мардохей?';
        document.querySelector('.answer').innerHTML = 'З коліна Веніамінового';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 12){
        document.querySelector('h3').innerHTML = 'Запитання 12';
        document.querySelector('.question').innerHTML = 'При якому царю було переселення народів у Вавилон?';
        document.querySelector('.answer').innerHTML = 'Ієхонія';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 13){
        document.querySelector('h3').innerHTML = 'Запитання 13';
        document.querySelector('.question').innerHTML = "Яке єврейське ім'я Естер?";
        document.querySelector('.answer').innerHTML = 'Гадасса';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 14){
        document.querySelector('h3').innerHTML = 'Запитання 14';
        document.querySelector('.question').innerHTML = 'В якому родстві була Естер з Мардохеєм?';
        document.querySelector('.answer').innerHTML = 'Двоюрідна сестра';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 15){
        document.querySelector('h3').innerHTML = 'Запитання 15';
        document.querySelector('.question').innerHTML = 'Хто такий Гегай?';
        document.querySelector('.answer').innerHTML = 'Сторож жінок';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 16){
        document.querySelector('h3').innerHTML = 'Запитання 16';
        document.querySelector('.question').innerHTML = 'Як звали батька Естер?';
        document.querySelector('.answer').innerHTML = 'Амінадав';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 17){
        document.querySelector('h3').innerHTML = 'Запитання 17';
        document.querySelector('.question').innerHTML = 'Що було записано в книгу денних записів царя?';
        document.querySelector('.answer').innerHTML = 'Мардохей повідомив про змову євнухів, які стерегли поріг';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 18){
        document.querySelector('h3').innerHTML = 'Запитання 18';
        document.querySelector('.question').innerHTML = 'Якої національності був Аман?';
        document.querySelector('.answer').innerHTML = "Агаг'янин (амаликитянин)";
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 19){
        document.querySelector('h3').innerHTML = 'Запитання 19';
        document.querySelector('.question').innerHTML = 'Чому Аман розгнівався на Мардохея?';
        document.querySelector('.answer').innerHTML = 'Мардохей не поклонявся йому';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 20){
        document.querySelector('h3').innerHTML = 'Запитання 20';
        document.querySelector('.question').innerHTML = 'Яку ціну дав Аман царю за знищення ізраїльського народу?';
        document.querySelector('.answer').innerHTML = '10000 талантів срібла';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 21){
        document.querySelector('h3').innerHTML = 'Запитання 21';
        document.querySelector('.question').innerHTML = 'Що скріплювало накази царя?';
        document.querySelector('.answer').innerHTML = 'Царський перстень';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 22){
        document.querySelector('h3').innerHTML = 'Запитання 22';
        document.querySelector('.question').innerHTML = 'Що значить пур?';
        document.querySelector('.answer').innerHTML = 'Жереб';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 23){
        document.querySelector('h3').innerHTML = 'Запитання 23';
        document.querySelector('.question').innerHTML = 'Коли повинні були винищити єврейський народ';
        document.querySelector('.answer').innerHTML = '13 день адара (дванадцятий місяць)';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 24){
        document.querySelector('h3').innerHTML = 'Запитання 24';
        document.querySelector('.question').innerHTML = 'Скільки днів Естер не була звана до царя?';
        document.querySelector('.answer').innerHTML = '30 днів';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 25){
        document.querySelector('h3').innerHTML = 'Запитання 25';
        document.querySelector('.question').innerHTML = 'Скільки днів був піст? Яка причина цьому?';
        document.querySelector('.answer').innerHTML = '3 дні, розмова з царем';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 26){
        document.querySelector('h3').innerHTML = 'Запитання 26';
        document.querySelector('.question').innerHTML = 'В чому виразилася любов Естер до свого народу?';
        document.querySelector('.answer').innerHTML = 'Самопожертва (Ест. 4:16)';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 27){
        document.querySelector('h3').innerHTML = 'Запитання 27';
        document.querySelector('.question').innerHTML = 'Що простягнув цар до Естер?';
        document.querySelector('.answer').innerHTML = 'Золотий скіпетр';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 28){
        document.querySelector('h3').innerHTML = 'Запитання 28';
        document.querySelector('.question').innerHTML = 'В чому прообраз царського скіпетра?';
        document.querySelector('.answer').innerHTML = 'Божа милість';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 29){
        document.querySelector('h3').innerHTML = 'Запитання 29';
        document.querySelector('.question').innerHTML = 'Як звали жінку Амана?';
        document.querySelector('.answer').innerHTML = 'Зереш';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 30){
        document.querySelector('h3').innerHTML = 'Запитання 30';
        document.querySelector('.question').innerHTML = 'Чому Господь забрав сон від царя?';
        document.querySelector('.answer').innerHTML = "Божий план для Його народу: звелів принести книгу пам'ятну денних записів";
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 31){
        document.querySelector('h3').innerHTML = 'Запитання 31';
        document.querySelector('.question').innerHTML = 'Яка була реакція Амана після того, як він відзначив Мордехая пошаною?';
        document.querySelector('.answer').innerHTML = 'Закрив голову, сумний';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 32){
        document.querySelector('h3').innerHTML = 'Запитання 32';
        document.querySelector('.question').innerHTML = 'Хто сказав Аману про його падіння?';
        document.querySelector('.answer').innerHTML = 'Дружина його та мудреці';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 33){
        document.querySelector('h3').innerHTML = 'Запитання 33';
        document.querySelector('.question').innerHTML = 'Який подарок попросила Естер у царя?';
        document.querySelector('.answer').innerHTML = 'Своє життя та життя євреїв';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 34){
        document.querySelector('h3').innerHTML = 'Запитання 34';
        document.querySelector('.question').innerHTML = 'Яку характеристику надала Естер про Амана?';
        document.querySelector('.answer').innerHTML = 'Злий';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 35){
        document.querySelector('h3').innerHTML = 'Запитання 35';
        document.querySelector('.question').innerHTML = 'Чим відомий Харвон?';
        document.querySelector('.answer').innerHTML = 'Сказав царю, що можна повісити Амана';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 36){
        document.querySelector('h3').innerHTML = 'Запитання 36';
        document.querySelector('.question').innerHTML = 'Якої висоти було дерево, на якому повісили Амана?';
        document.querySelector('.answer').innerHTML = '50 ліктів';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 37){
        document.querySelector('h3').innerHTML = 'Запитання 37';
        document.querySelector('.question').innerHTML = 'До кого перейшов перстень після Амана?';
        document.querySelector('.answer').innerHTML= 'До Мардохея';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 38){
        document.querySelector('h3').innerHTML = 'Запитання 38';
        document.querySelector('.question').innerHTML = 'Яка була пошта в Імперії Артаксеркса?';
        document.querySelector('.answer').innerHTML = 'Коні, мули, одногорбі верблюди';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 39){
        document.querySelector('h3').innerHTML = 'Запитання 39';
        document.querySelector('.question').innerHTML = 'Яка була реакція Євреїв на новий указ?';
        document.querySelector('.answer').innerHTML = 'Радість, веселощі, бенкет, свято';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 40){
        document.querySelector('h3').innerHTML = 'Запитання 40';
        document.querySelector('.question').innerHTML = 'Опишіть Мардохея після смерті Амана';
        document.querySelector('.answer').innerHTML = 'Великий, відомий, слава ходила по всім областям, піднімався все вище і вище';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 41){
        document.querySelector('h3').innerHTML = 'Запитання 41';
        document.querySelector('.question').innerHTML = 'Чия ініціатива повісити синів Амана?';
        document.querySelector('.answer').innerHTML = 'Естер';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 42){
        document.querySelector('h3').innerHTML = 'Запитання 42';
        document.querySelector('.question').innerHTML = 'Скількох синів Амана було повішено?';
        document.querySelector('.answer').innerHTML= '10 синів';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 43){
        document.querySelector('h3').innerHTML = 'Запитання 43';
        document.querySelector('.question').innerHTML = 'Дата побиття юдеями їхніх ворогів?';
        document.querySelector('.answer').innerHTML= '13 день дванадцятого місяця (Адар)';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 44){
        document.querySelector('h3').innerHTML = 'Запитання 44';
        document.querySelector('.question').innerHTML = 'Що було дозволено юдеям в городі Сузах?';
        document.querySelector('.answer').innerHTML = 'Вбивати ворогів у 14 день місяця Адара';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 45){
        document.querySelector('h3').innerHTML = 'Запитання 45';
        document.querySelector('.question').innerHTML = 'Як називається свято в честь перемоги євреїв над ворогами?';
        document.querySelector('.answer').innerHTML = 'Пурим';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 46){
        document.querySelector('h3').innerHTML = 'Запитання 46';
        document.querySelector('.question').innerHTML = 'Чи святкується свято Пурим у наші дні євреями?';
        document.querySelector('.answer').innerHTML= 'Да';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 47){
        document.querySelector('h3').innerHTML = 'Запитання 47';
        document.querySelector('.question').innerHTML = 'Яким способом євреї отримали перемогу?';
        document.querySelector('.answer').innerHTML = 'Піст, молитва, плач (Ест. 9:31)';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 48){
        document.querySelector('h3').innerHTML = 'Запитання 48';
        document.querySelector('.question').innerHTML = 'Останній указ царя в книзі Естер?';
        document.querySelector('.answer').innerHTML = 'Наклав податки на землю й острови';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 49){
        document.querySelector('h3').innerHTML = 'Запитання 49';
        document.querySelector('.question').innerHTML = 'Джерело де описується докладне свідчення про Мардохея?';
        document.querySelector('.answer').innerHTML= 'Книга денних записів царів мідійських та персидських';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
    else if(i == 50){
        document.querySelector('h3').innerHTML = 'Запитання 50';
        document.querySelector('.question').innerHTML = 'Яку посаду обіймав Мардохей після цих подій?';
        document.querySelector('.answer').innerHTML= 'Був другим після царя';
        document.querySelector('.open').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.answer').style.display = 'none';
    }
}

document.querySelector('.main').onclick = () => {
    document.querySelector('.container-1').style.display = 'flex';
    document.querySelector('.container-2').style.display = 'none';
    i = 1;
    n = 0;
    m = 0;
    document.querySelector('.count').innerHTML = `${n} : ${m}`;
    document.querySelector('.sisters').style.background = 'rgb(255, 255, 255)';
    document.querySelector('.sisters').style.color = 'rgb(0, 0, 0)';
    document.querySelector('.brothers').style.background = 'rgb(255, 255, 255)';
    document.querySelector('.brothers').style.color = 'rgb(0, 0, 0)';
    document.querySelector('.open').style.display = 'block';
    document.querySelector('.close').style.display = 'none';
    document.querySelector('.answer').style.display = 'none';
    document.querySelector('h3').innerHTML = 'Запитання 1';
    document.querySelector('.question').innerHTML = 'Скільки областей мав у підпорядкуванні Артаксеркс?';
    document.querySelector('.answer').innerHTML = '127';
}






