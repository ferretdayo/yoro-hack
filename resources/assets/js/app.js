
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app',
    data: function() {
        return {
            code: "",
            selected: [],
            foods: [
                {id: 1, name: "豆腐", img: "http://localhost:8000/img/toufu.png", code: "t1"},
                {id: 2, name: "鶏の唐揚げ", img: "http://localhost:8000/img/karaage.png", code: "n2"},
                {id: 3, name: "アスパラ串", img: "http://localhost:8000/img/asu.png", code: "a2"},
                {id: 4, name: "ポテトフライ", img: "http://localhost:8000/img/poteto.png", code: "p1"},
                {id: 5, name: "ごろごろサラダ", img: "http://localhost:8000/img/goro.png", code: "b2"},
                {id: 6, name: "ヘルシーサラダ", img: "http://localhost:8000/img/sappari.png", code: "c1"},
                {id: 7, name: "枝豆", img: "http://localhost:8000/img/edamame.png", code: "e1"},
                {id: 8, name: "冷やしトマト", img: "http://localhost:8000/img/tomato.png", code: "t2"},
                {id: 9, name: "ステーキ", img: "http://localhost:8000/img/stake.png", code: "item1"},
            ],
            drinks: [
                {id: 10, name: "焼酎", img: "http://localhost:8000/img/shou.png", code: "item2"},
                {id: 11, name: "ビール", img: "http://localhost:8000/img/beer.jpg", code: "b1"},
                {id: 12, name: "日本酒", img: "http://localhost:8000/img/sake.jpg", code: "item3"},
            ],
            desserts: [
                {id: 13, name: "ゴロッとフルーツ", img: "http://localhost:8000/img/furu.png", code: "f1"},
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
    },
    methods: {
        // 注文商品の数を追加するメソッド
        add: function(name, code) {
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
                this.selected.push({name: name, cnt: 1, code: code})
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
        }
    }
});
