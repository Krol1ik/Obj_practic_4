"use strict";

// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


const personalMovieDB = {
    count : null,
    movies : {},
    actors : {},
    genres : [],
    private : false,
    start: function () {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function() {
        let flag = 1;
        let check = false;
        
        while (flag < 3){
            while (!check){
            let qntyFilms = prompt('Один из последних просмотренных фильмов?');
            if(qntyFilms != null && qntyFilms != '' && qntyFilms.length < 10){
                this.movies[flag + 'film'] = qntyFilms;
                check = true;
                console.log(check);
            } else {
                console.log('error');
            }
        }
            while(check){
            let starOfFilm = prompt('На сколько его цените?');
            if(starOfFilm != null && starOfFilm != '' && starOfFilm.length < 10){
                this.movies[flag + 'stars'] = starOfFilm;
                check = false;
            } else {
                console.log('error');
            }
        }
            flag++;
        }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы настоящий коиноман");
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function(){
        if(!this.private){
            console.log(personalMovieDB);
        } else {
            console.log("DB is private");
        }
        this.toggleVisibleMyDB();
    },
    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
            let checkGeners = prompt(`Ваш любимый жанр под номером: ${i}`);
            if(checkGeners == '' || checkGeners == null){
                i--;  
            } else {     
                personalMovieDB.genres[i-1] = checkGeners;
            }
        }
        // for(let key in this.genres){
        //     console.log(`Любимйы жанр #${+key+1}: ${this.genres[key]}`);
        // }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимйы жанр #${i + 1}: ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        if(!this.private){
            this.private = true;
        } else {
            this.private = false;
        }
    }
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();