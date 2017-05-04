@extends('layouts.app')

@section('content')
<ul class="nav nav-tabs nav-justified">
    <li role="menu" class="active"><a href="#food" data-toggle="tab"><span class="glyphicon glyphicon-cutlery" aria-hidden="true"></span> フード</a></li>
    <li role="menu"><a href="#drink" data-toggle="tab"><span class="glyphicon glyphicon-baby-formula" aria-hidden="true"></span> ドリンク</a></li>
    <li role="menu"><a href="#dessert" data-toggle="tab"><span class="glyphicon glyphicon-ice-lolly-tasted" aria-hidden="true"></span> デザート</a></li>
</ul>
<div class="row">
    <div class="col-md-8 col-sm-9 col-lg-9">
        <!--タブのコンテンツ部分-->
        <div class="tab-content">
            <div id="food" class="tab-pane active">
                <div class="content">
                    <div class="thumbnail" v-for="food in foods">
                        <img v-bind:src="food.img" alt="..." width="200" height="200">
                        <div class="caption">
                            <h3 class="title">@{{food.name}}</h3>
                            <p><a href="#" class="btn btn-success btn-block add" role="button" v-on:click="add(food.name)">追加</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="drink" class="tab-pane">
                <div class="content">
                    <div class="thumbnail" v-for="drink in drinks">
                        <img v-bind:src="drink.img" alt="..." width="200" height="200">
                        <div class="caption">
                            <h3 class="title">@{{drink.name}}</h3>
                            <p><a href="#" class="btn btn-success btn-block add" role="button" v-on:click="add(drink.name)">追加</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="dessert" class="tab-pane">
                <div class="content">
                    <div class="thumbnail" v-for="dessert in desserts">
                        <img v-bind:src="dessert.img" alt="..." width="200" height="200">
                        <div class="caption">
                            <h3 class="title">@{{dessert.name}}</h3>
                            <p><a href="#" class="btn btn-success btn-block add" role="button" v-on:click="add(dessert.name)">追加</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-3 col-lg-3 menu-list">
        <h2 class="title">注文リスト</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <td></td>
                    <td>商品名</td>
                    <td>注文数</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="select in selected">
                    <td><button class="btn btn-primary" v-on:click="sub(select.name)"> - </button></td>
                    <td>@{{select.name}}</td>
                    <td>@{{select.cnt}}</td>
                    <td><button class="btn btn-primary" v-on:click="add(select.name)"> + </button></td>
                </tr>
            </tbody>
        </table>
        <div class="order-cnt">
            <span class="title">現在の注文数</span><span class="order">@{{allOrder}}</span>
        </div>
        <div class="submit">
            <button class="btn btn-warning btn-block" v-if="selected.length > 0" data-toggle="modal" data-target="#myModal">注文</button>
            <button class="btn btn-warning btn-block" v-if="selected.length <= 0" data-toggle="modal" v-on:click="error()">注文</button>
        </div>
    </div>
</div>


<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">注文しました:D</h4>
            </div>
            <div class="modal-body">
                <h3>ガチャコード</h3>
                <br>
                <h1>@{{codeGenerate}}</h1>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
@endsection