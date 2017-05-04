
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//window.VueQRCodeComponent = require('vue-qrcode-component')

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example', VueQRCodeComponent);

const app = new Vue({
    el: '#app',
    data: function() {
        return {
            code: "",
            selected: [],
            foods: [
                {id: 1, name: "豆腐", img: "http://yoro-hack.herokuapp.com/img/toufu.png", codes: ["t1"]},
                {id: 2, name: "鶏の唐揚げ", img: "http://yoro-hack.herokuapp.com/img/karaage.png", codes: ["n2"]},
                {id: 3, name: "アスパラ串", img: "http://yoro-hack.herokuapp.com/img/asu.png", codes: ["a2"]},
                {id: 4, name: "ポテトフライ", img: "http://yoro-hack.herokuapp.com/img/poteto.png", codes: ["p1", "p2"]},
                {id: 5, name: "ごろごろサラダ", img: "http://yoro-hack.herokuapp.com/img/goro.png", codes: ["b2"]},
                {id: 6, name: "ヘルシーサラダ", img: "http://yoro-hack.herokuapp.com/img/sappari.png", codes: ["c1", "c2"]},
                {id: 7, name: "枝豆", img: "http://yoro-hack.herokuapp.com/img/edamame.png", codes: ["e1"]},
                {id: 8, name: "冷やしトマト", img: "http://yoro-hack.herokuapp.com/img/tomato.png", codes: ["t2"]},
                {id: 9, name: "ステーキ", img: "http://yoro-hack.herokuapp.com/img/stake.png", codes: ["b1"]},
            ],
            drinks: [
                {id: 10, name: "焼酎", img: "http://yoro-hack.herokuapp.com/img/shou.png", codes: ["item2"]},
                {id: 11, name: "ビール", img: "http://yoro-hack.herokuapp.com/img/beer.jpg", codes: ["item4"]},
                {id: 12, name: "日本酒", img: "http://yoro-hack.herokuapp.com/img/sake.jpg", codes: ["item3"]},
            ],
            desserts: [
                {id: 13, name: "ゴロッとフルーツ", img: "http://yoro-hack.herokuapp.com/img/furu.png", codes: ["f1"]},
            ],
        }
    },
    computed: {
        // 注文のすべての数の計算
        allOrder: function() {
            let sum = 0;
            for(let i = 0; i < this.selected.length; i++) {
                sum += this.selected[i].cnt
            }
            return sum;
        },
        // qrcodeStr: function() {
        //     let codes = []
        //     for(let i = 0; i < this.selected.length; i++) {
        //         codes.push(this.selected[i].code)
        //     }
        //     return JSON.stringify(codes)
        // }
    },
    methods: {
        // 注文商品の数を追加するメソッド
        add: function(name, codes) {
            let filter = []
            filter = this.selected.filter((value) => {
                if (value.name === name) return true;
                else return false;
            })
            // すでにある場合
            if (filter.length > 0) {
                for(let i = 0; i < this.selected.length; i++) {
                    if (this.selected[i].name === name) {
                        this.selected[i].cnt++;
                    }
                }
            } else {
                let key = Math.floor(Math.random() * 11) % 2
                if(codes.length > 1) {
                    this.selected.push({name: name, cnt: 1, code: codes[key]})
                } else {
                    this.selected.push({name: name, cnt: 1, code: codes[0]})
                }
            }
        },
        // 注文商品の数を減らすメソッド
        sub: function(name) {
            for(let i = 0; i < this.selected.length; i++) {
                if (this.selected[i].name === name) {
                    this.selected[i].cnt--;
                }
            }
            this.selected = this.selected.filter((value) => {
                if (value.cnt > 0) return true;
                else return false;
            })
        },
        error: function() {
            alert("商品を選択していません")
        },
        submit: function() {
            this.selected = []
        }
    }
});
