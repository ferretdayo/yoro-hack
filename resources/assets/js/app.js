
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
                {id: 1, name: "白ご飯", img: "http://localhost:8000/img/gohan.jpg"},
                {id: 2, name: "鶏の唐揚げ", img: "http://localhost:8000/img/karaage.jpg"},
                {id: 3, name: "シーザーサラダ", img: "http://localhost:8000/img/sarada.jpg"},
                {id: 1, name: "白ご飯", img: "http://localhost:8000/img/gohan.jpg"},
                {id: 2, name: "鶏の唐揚げ", img: "http://localhost:8000/img/karaage.jpg"},
                {id: 3, name: "シーザーサラダ", img: "http://localhost:8000/img/sarada.jpg"},
                {id: 1, name: "白ご飯", img: "http://localhost:8000/img/gohan.jpg"},
                {id: 2, name: "鶏の唐揚げ", img: "http://localhost:8000/img/karaage.jpg"},
                {id: 3, name: "シーザーサラダ", img: "http://localhost:8000/img/sarada.jpg"},
            ],
            drinks: [
                {id: 1, name: "お茶", img: "http://localhost:8000/img/ocha.jpg"},
                {id: 2, name: "ビール", img: "http://localhost:8000/img/beer.jpg"},
                {id: 3, name: "コークハイ", img: "http://localhost:8000/img/sake.jpg"},
            ],
            desserts: [
                {id: 1, name: "パンケーキ", img: "http://localhost:8000/img/pancake.jpg"},
                {id: 2, name: "バニラアイス", img: "http://localhost:8000/img/ice.jpg"},
                {id: 3, name: "パフェ", img: "http://localhost:8000/img/pafe.jpg"},
            ]
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
        // キャラクター or アイテムのコードの生成
        codeGenerate: function() {
            let sum = 0;
            for(let i = 0; i < this.selected.length; i++) {
                sum += this.selected[i].cnt
            }
            let rnd = Math.floor(Math.random() * 11)
            console.log(rnd)
            if (rnd % 2 == 0) {
                return sum + ":TEST1";
            }
            return sum + ":TEST2";
        }
    },
    methods: {
        // 注文商品の数を追加するメソッド
        add: function(name) {
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
                this.selected.push({name: name, cnt: 1})
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
