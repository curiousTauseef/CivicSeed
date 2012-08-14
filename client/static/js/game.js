var Game = {};
var quad1 = {"neighbors":[-1,-1,-1,-1,1,-1,5,6],"tiles":[{"localX":0,"localY":0,"worldX":0,"nogo":false,"worldY":0},{"localX":1,"localY":0,"worldX":1,"nogo":false,"worldY":0},{"localX":2,"localY":0,"worldX":2,"nogo":false,"worldY":0},{"localX":3,"localY":0,"worldX":3,"nogo":false,"worldY":0},{"localX":4,"localY":0,"worldX":4,"nogo":false,"worldY":0},{"localX":5,"localY":0,"worldX":5,"nogo":false,"worldY":0},{"localX":6,"localY":0,"worldX":6,"nogo":false,"worldY":0},{"localX":7,"localY":0,"worldX":7,"nogo":false,"worldY":0},{"localX":8,"localY":0,"worldX":8,"nogo":false,"worldY":0},{"localX":9,"localY":0,"worldX":9,"nogo":true,"worldY":0},{"localX":10,"localY":0,"worldX":10,"nogo":true,"worldY":0},{"localX":11,"localY":0,"worldX":11,"nogo":true,"worldY":0},{"localX":12,"localY":0,"worldX":12,"nogo":false,"worldY":0},{"localX":13,"localY":0,"worldX":13,"nogo":false,"worldY":0},{"localX":14,"localY":0,"worldX":14,"nogo":false,"worldY":0},{"localX":15,"localY":0,"worldX":15,"nogo":false,"worldY":0},{"localX":16,"localY":0,"worldX":16,"nogo":false,"worldY":0},{"localX":17,"localY":0,"worldX":17,"nogo":false,"worldY":0},{"localX":18,"localY":0,"worldX":18,"nogo":false,"worldY":0},{"localX":19,"localY":0,"worldX":19,"nogo":false,"worldY":0},{"localX":20,"localY":0,"worldX":20,"nogo":false,"worldY":0},{"localX":21,"localY":0,"worldX":21,"nogo":false,"worldY":0},{"localX":22,"localY":0,"worldX":22,"nogo":false,"worldY":0},{"localX":23,"localY":0,"worldX":23,"nogo":false,"worldY":0},{"localX":24,"localY":0,"worldX":24,"nogo":false,"worldY":0},{"localX":25,"localY":0,"worldX":25,"nogo":false,"worldY":0},{"localX":26,"localY":0,"worldX":26,"nogo":false,"worldY":0},{"localX":27,"localY":0,"worldX":27,"nogo":false,"worldY":0},{"localX":0,"localY":1,"worldX":0,"nogo":false,"worldY":1},{"localX":1,"localY":1,"worldX":1,"nogo":false,"worldY":1},{"localX":2,"localY":1,"worldX":2,"nogo":false,"worldY":1},{"localX":3,"localY":1,"worldX":3,"nogo":false,"worldY":1},{"localX":4,"localY":1,"worldX":4,"nogo":false,"worldY":1},{"localX":5,"localY":1,"worldX":5,"nogo":false,"worldY":1},{"localX":6,"localY":1,"worldX":6,"nogo":false,"worldY":1},{"localX":7,"localY":1,"worldX":7,"nogo":false,"worldY":1},{"localX":8,"localY":1,"worldX":8,"nogo":false,"worldY":1},{"localX":9,"localY":1,"worldX":9,"nogo":false,"worldY":1},{"localX":10,"localY":1,"worldX":10,"nogo":false,"worldY":1},{"localX":11,"localY":1,"worldX":11,"nogo":true,"worldY":1},{"localX":12,"localY":1,"worldX":12,"nogo":true,"worldY":1},{"localX":13,"localY":1,"worldX":13,"nogo":true,"worldY":1},{"localX":14,"localY":1,"worldX":14,"nogo":false,"worldY":1},{"localX":15,"localY":1,"worldX":15,"nogo":false,"worldY":1},{"localX":16,"localY":1,"worldX":16,"nogo":false,"worldY":1},{"localX":17,"localY":1,"worldX":17,"nogo":false,"worldY":1},{"localX":18,"localY":1,"worldX":18,"nogo":false,"worldY":1},{"localX":19,"localY":1,"worldX":19,"nogo":false,"worldY":1},{"localX":20,"localY":1,"worldX":20,"nogo":false,"worldY":1},{"localX":21,"localY":1,"worldX":21,"nogo":false,"worldY":1},{"localX":22,"localY":1,"worldX":22,"nogo":false,"worldY":1},{"localX":23,"localY":1,"worldX":23,"nogo":false,"worldY":1},{"localX":24,"localY":1,"worldX":24,"nogo":false,"worldY":1},{"localX":25,"localY":1,"worldX":25,"nogo":false,"worldY":1},{"localX":26,"localY":1,"worldX":26,"nogo":false,"worldY":1},{"localX":27,"localY":1,"worldX":27,"nogo":false,"worldY":1},{"localX":0,"localY":2,"worldX":0,"nogo":false,"worldY":2},{"localX":1,"localY":2,"worldX":1,"nogo":false,"worldY":2},{"localX":2,"localY":2,"worldX":2,"nogo":false,"worldY":2},{"localX":3,"localY":2,"worldX":3,"nogo":false,"worldY":2},{"localX":4,"localY":2,"worldX":4,"nogo":false,"worldY":2},{"localX":5,"localY":2,"worldX":5,"nogo":false,"worldY":2},{"localX":6,"localY":2,"worldX":6,"nogo":false,"worldY":2},{"localX":7,"localY":2,"worldX":7,"nogo":false,"worldY":2},{"localX":8,"localY":2,"worldX":8,"nogo":false,"worldY":2},{"localX":9,"localY":2,"worldX":9,"nogo":false,"worldY":2},{"localX":10,"localY":2,"worldX":10,"nogo":false,"worldY":2},{"localX":11,"localY":2,"worldX":11,"nogo":false,"worldY":2},{"localX":12,"localY":2,"worldX":12,"nogo":false,"worldY":2},{"localX":13,"localY":2,"worldX":13,"nogo":true,"worldY":2},{"localX":14,"localY":2,"worldX":14,"nogo":true,"worldY":2},{"localX":15,"localY":2,"worldX":15,"nogo":false,"worldY":2},{"localX":16,"localY":2,"worldX":16,"nogo":false,"worldY":2},{"localX":17,"localY":2,"worldX":17,"nogo":false,"worldY":2},{"localX":18,"localY":2,"worldX":18,"nogo":false,"worldY":2},{"localX":19,"localY":2,"worldX":19,"nogo":false,"worldY":2},{"localX":20,"localY":2,"worldX":20,"nogo":false,"worldY":2},{"localX":21,"localY":2,"worldX":21,"nogo":false,"worldY":2},{"localX":22,"localY":2,"worldX":22,"nogo":false,"worldY":2},{"localX":23,"localY":2,"worldX":23,"nogo":false,"worldY":2},{"localX":24,"localY":2,"worldX":24,"nogo":false,"worldY":2},{"localX":25,"localY":2,"worldX":25,"nogo":false,"worldY":2},{"localX":26,"localY":2,"worldX":26,"nogo":false,"worldY":2},{"localX":27,"localY":2,"worldX":27,"nogo":false,"worldY":2},{"localX":0,"localY":3,"worldX":0,"nogo":false,"worldY":3},{"localX":1,"localY":3,"worldX":1,"nogo":false,"worldY":3},{"localX":2,"localY":3,"worldX":2,"nogo":false,"worldY":3},{"localX":3,"localY":3,"worldX":3,"nogo":false,"worldY":3},{"localX":4,"localY":3,"worldX":4,"nogo":false,"worldY":3},{"localX":5,"localY":3,"worldX":5,"nogo":false,"worldY":3},{"localX":6,"localY":3,"worldX":6,"nogo":false,"worldY":3},{"localX":7,"localY":3,"worldX":7,"nogo":false,"worldY":3},{"localX":8,"localY":3,"worldX":8,"nogo":false,"worldY":3},{"localX":9,"localY":3,"worldX":9,"nogo":false,"worldY":3},{"localX":10,"localY":3,"worldX":10,"nogo":false,"worldY":3},{"localX":11,"localY":3,"worldX":11,"nogo":false,"worldY":3},{"localX":12,"localY":3,"worldX":12,"nogo":false,"worldY":3},{"localX":13,"localY":3,"worldX":13,"nogo":false,"worldY":3},{"localX":14,"localY":3,"worldX":14,"nogo":true,"worldY":3},{"localX":15,"localY":3,"worldX":15,"nogo":true,"worldY":3},{"localX":16,"localY":3,"worldX":16,"nogo":true,"worldY":3},{"localX":17,"localY":3,"worldX":17,"nogo":false,"worldY":3},{"localX":18,"localY":3,"worldX":18,"nogo":false,"worldY":3},{"localX":19,"localY":3,"worldX":19,"nogo":false,"worldY":3},{"localX":20,"localY":3,"worldX":20,"nogo":false,"worldY":3},{"localX":21,"localY":3,"worldX":21,"nogo":false,"worldY":3},{"localX":22,"localY":3,"worldX":22,"nogo":false,"worldY":3},{"localX":23,"localY":3,"worldX":23,"nogo":false,"worldY":3},{"localX":24,"localY":3,"worldX":24,"nogo":false,"worldY":3},{"localX":25,"localY":3,"worldX":25,"nogo":false,"worldY":3},{"localX":26,"localY":3,"worldX":26,"nogo":false,"worldY":3},{"localX":27,"localY":3,"worldX":27,"nogo":false,"worldY":3},{"localX":0,"localY":4,"worldX":0,"nogo":false,"worldY":4},{"localX":1,"localY":4,"worldX":1,"nogo":false,"worldY":4},{"localX":2,"localY":4,"worldX":2,"nogo":false,"worldY":4},{"localX":3,"localY":4,"worldX":3,"nogo":false,"worldY":4},{"localX":4,"localY":4,"worldX":4,"nogo":false,"worldY":4},{"localX":5,"localY":4,"worldX":5,"nogo":false,"worldY":4},{"localX":6,"localY":4,"worldX":6,"nogo":false,"worldY":4},{"localX":7,"localY":4,"worldX":7,"nogo":false,"worldY":4},{"localX":8,"localY":4,"worldX":8,"nogo":false,"worldY":4},{"localX":9,"localY":4,"worldX":9,"nogo":false,"worldY":4},{"localX":10,"localY":4,"worldX":10,"nogo":false,"worldY":4},{"localX":11,"localY":4,"worldX":11,"nogo":false,"worldY":4},{"localX":12,"localY":4,"worldX":12,"nogo":false,"worldY":4},{"localX":13,"localY":4,"worldX":13,"nogo":false,"worldY":4},{"localX":14,"localY":4,"worldX":14,"nogo":false,"worldY":4},{"localX":15,"localY":4,"worldX":15,"nogo":true,"worldY":4},{"localX":16,"localY":4,"worldX":16,"nogo":true,"worldY":4},{"localX":17,"localY":4,"worldX":17,"nogo":false,"worldY":4},{"localX":18,"localY":4,"worldX":18,"nogo":false,"worldY":4},{"localX":19,"localY":4,"worldX":19,"nogo":false,"worldY":4},{"localX":20,"localY":4,"worldX":20,"nogo":false,"worldY":4},{"localX":21,"localY":4,"worldX":21,"nogo":false,"worldY":4},{"localX":22,"localY":4,"worldX":22,"nogo":false,"worldY":4},{"localX":23,"localY":4,"worldX":23,"nogo":false,"worldY":4},{"localX":24,"localY":4,"worldX":24,"nogo":false,"worldY":4},{"localX":25,"localY":4,"worldX":25,"nogo":false,"worldY":4},{"localX":26,"localY":4,"worldX":26,"nogo":false,"worldY":4},{"localX":27,"localY":4,"worldX":27,"nogo":false,"worldY":4},{"localX":0,"localY":5,"worldX":0,"nogo":false,"worldY":5},{"localX":1,"localY":5,"worldX":1,"nogo":false,"worldY":5},{"localX":2,"localY":5,"worldX":2,"nogo":false,"worldY":5},{"localX":3,"localY":5,"worldX":3,"nogo":false,"worldY":5},{"localX":4,"localY":5,"worldX":4,"nogo":false,"worldY":5},{"localX":5,"localY":5,"worldX":5,"nogo":false,"worldY":5},{"localX":6,"localY":5,"worldX":6,"nogo":false,"worldY":5},{"localX":7,"localY":5,"worldX":7,"nogo":false,"worldY":5},{"localX":8,"localY":5,"worldX":8,"nogo":false,"worldY":5},{"localX":9,"localY":5,"worldX":9,"nogo":false,"worldY":5},{"localX":10,"localY":5,"worldX":10,"nogo":false,"worldY":5},{"localX":11,"localY":5,"worldX":11,"nogo":false,"worldY":5},{"localX":12,"localY":5,"worldX":12,"nogo":false,"worldY":5},{"localX":13,"localY":5,"worldX":13,"nogo":false,"worldY":5},{"localX":14,"localY":5,"worldX":14,"nogo":false,"worldY":5},{"localX":15,"localY":5,"worldX":15,"nogo":false,"worldY":5},{"localX":16,"localY":5,"worldX":16,"nogo":true,"worldY":5},{"localX":17,"localY":5,"worldX":17,"nogo":true,"worldY":5},{"localX":18,"localY":5,"worldX":18,"nogo":true,"worldY":5},{"localX":19,"localY":5,"worldX":19,"nogo":false,"worldY":5},{"localX":20,"localY":5,"worldX":20,"nogo":false,"worldY":5},{"localX":21,"localY":5,"worldX":21,"nogo":false,"worldY":5},{"localX":22,"localY":5,"worldX":22,"nogo":false,"worldY":5},{"localX":23,"localY":5,"worldX":23,"nogo":false,"worldY":5},{"localX":24,"localY":5,"worldX":24,"nogo":false,"worldY":5},{"localX":25,"localY":5,"worldX":25,"nogo":false,"worldY":5},{"localX":26,"localY":5,"worldX":26,"nogo":false,"worldY":5},{"localX":27,"localY":5,"worldX":27,"nogo":false,"worldY":5},{"localX":0,"localY":6,"worldX":0,"nogo":false,"worldY":6},{"localX":1,"localY":6,"worldX":1,"nogo":false,"worldY":6},{"localX":2,"localY":6,"worldX":2,"nogo":false,"worldY":6},{"localX":3,"localY":6,"worldX":3,"nogo":false,"worldY":6},{"localX":4,"localY":6,"worldX":4,"nogo":false,"worldY":6},{"localX":5,"localY":6,"worldX":5,"nogo":false,"worldY":6},{"localX":6,"localY":6,"worldX":6,"nogo":false,"worldY":6},{"localX":7,"localY":6,"worldX":7,"nogo":false,"worldY":6},{"localX":8,"localY":6,"worldX":8,"nogo":false,"worldY":6},{"localX":9,"localY":6,"worldX":9,"nogo":false,"worldY":6},{"localX":10,"localY":6,"worldX":10,"nogo":false,"worldY":6},{"localX":11,"localY":6,"worldX":11,"nogo":false,"worldY":6},{"localX":12,"localY":6,"worldX":12,"nogo":false,"worldY":6},{"localX":13,"localY":6,"worldX":13,"nogo":false,"worldY":6},{"localX":14,"localY":6,"worldX":14,"nogo":false,"worldY":6},{"localX":15,"localY":6,"worldX":15,"nogo":false,"worldY":6},{"localX":16,"localY":6,"worldX":16,"nogo":false,"worldY":6},{"localX":17,"localY":6,"worldX":17,"nogo":true,"worldY":6},{"localX":18,"localY":6,"worldX":18,"nogo":true,"worldY":6},{"localX":19,"localY":6,"worldX":19,"nogo":false,"worldY":6},{"localX":20,"localY":6,"worldX":20,"nogo":false,"worldY":6},{"localX":21,"localY":6,"worldX":21,"nogo":false,"worldY":6},{"localX":22,"localY":6,"worldX":22,"nogo":false,"worldY":6},{"localX":23,"localY":6,"worldX":23,"nogo":false,"worldY":6},{"localX":24,"localY":6,"worldX":24,"nogo":false,"worldY":6},{"localX":25,"localY":6,"worldX":25,"nogo":false,"worldY":6},{"localX":26,"localY":6,"worldX":26,"nogo":false,"worldY":6},{"localX":27,"localY":6,"worldX":27,"nogo":false,"worldY":6},{"localX":0,"localY":7,"worldX":0,"nogo":false,"worldY":7},{"localX":1,"localY":7,"worldX":1,"nogo":false,"worldY":7},{"localX":2,"localY":7,"worldX":2,"nogo":false,"worldY":7},{"localX":3,"localY":7,"worldX":3,"nogo":false,"worldY":7},{"localX":4,"localY":7,"worldX":4,"nogo":false,"worldY":7},{"localX":5,"localY":7,"worldX":5,"nogo":false,"worldY":7},{"localX":6,"localY":7,"worldX":6,"nogo":false,"worldY":7},{"localX":7,"localY":7,"worldX":7,"nogo":false,"worldY":7},{"localX":8,"localY":7,"worldX":8,"nogo":false,"worldY":7},{"localX":9,"localY":7,"worldX":9,"nogo":false,"worldY":7},{"localX":10,"localY":7,"worldX":10,"nogo":false,"worldY":7},{"localX":11,"localY":7,"worldX":11,"nogo":false,"worldY":7},{"localX":12,"localY":7,"worldX":12,"nogo":false,"worldY":7},{"localX":13,"localY":7,"worldX":13,"nogo":false,"worldY":7},{"localX":14,"localY":7,"worldX":14,"nogo":false,"worldY":7},{"localX":15,"localY":7,"worldX":15,"nogo":false,"worldY":7},{"localX":16,"localY":7,"worldX":16,"nogo":false,"worldY":7},{"localX":17,"localY":7,"worldX":17,"nogo":false,"worldY":7},{"localX":18,"localY":7,"worldX":18,"nogo":true,"worldY":7},{"localX":19,"localY":7,"worldX":19,"nogo":true,"worldY":7},{"localX":20,"localY":7,"worldX":20,"nogo":false,"worldY":7},{"localX":21,"localY":7,"worldX":21,"nogo":false,"worldY":7},{"localX":22,"localY":7,"worldX":22,"nogo":false,"worldY":7},{"localX":23,"localY":7,"worldX":23,"nogo":false,"worldY":7},{"localX":24,"localY":7,"worldX":24,"nogo":false,"worldY":7},{"localX":25,"localY":7,"worldX":25,"nogo":false,"worldY":7},{"localX":26,"localY":7,"worldX":26,"nogo":false,"worldY":7},{"localX":27,"localY":7,"worldX":27,"nogo":false,"worldY":7},{"localX":0,"localY":8,"worldX":0,"nogo":false,"worldY":8},{"localX":1,"localY":8,"worldX":1,"nogo":false,"worldY":8},{"localX":2,"localY":8,"worldX":2,"nogo":false,"worldY":8},{"localX":3,"localY":8,"worldX":3,"nogo":false,"worldY":8},{"localX":4,"localY":8,"worldX":4,"nogo":false,"worldY":8},{"localX":5,"localY":8,"worldX":5,"nogo":false,"worldY":8},{"localX":6,"localY":8,"worldX":6,"nogo":false,"worldY":8},{"localX":7,"localY":8,"worldX":7,"nogo":false,"worldY":8},{"localX":8,"localY":8,"worldX":8,"nogo":false,"worldY":8},{"localX":9,"localY":8,"worldX":9,"nogo":false,"worldY":8},{"localX":10,"localY":8,"worldX":10,"nogo":false,"worldY":8},{"localX":11,"localY":8,"worldX":11,"nogo":false,"worldY":8},{"localX":12,"localY":8,"worldX":12,"nogo":false,"worldY":8},{"localX":13,"localY":8,"worldX":13,"nogo":false,"worldY":8},{"localX":14,"localY":8,"worldX":14,"nogo":false,"worldY":8},{"localX":15,"localY":8,"worldX":15,"nogo":false,"worldY":8},{"localX":16,"localY":8,"worldX":16,"nogo":false,"worldY":8},{"localX":17,"localY":8,"worldX":17,"nogo":false,"worldY":8},{"localX":18,"localY":8,"worldX":18,"nogo":false,"worldY":8},{"localX":19,"localY":8,"worldX":19,"nogo":true,"worldY":8},{"localX":20,"localY":8,"worldX":20,"nogo":true,"worldY":8},{"localX":21,"localY":8,"worldX":21,"nogo":true,"worldY":8},{"localX":22,"localY":8,"worldX":22,"nogo":false,"worldY":8},{"localX":23,"localY":8,"worldX":23,"nogo":false,"worldY":8},{"localX":24,"localY":8,"worldX":24,"nogo":false,"worldY":8},{"localX":25,"localY":8,"worldX":25,"nogo":false,"worldY":8},{"localX":26,"localY":8,"worldX":26,"nogo":false,"worldY":8},{"localX":27,"localY":8,"worldX":27,"nogo":false,"worldY":8},{"localX":0,"localY":9,"worldX":0,"nogo":false,"worldY":9},{"localX":1,"localY":9,"worldX":1,"nogo":false,"worldY":9},{"localX":2,"localY":9,"worldX":2,"nogo":false,"worldY":9},{"localX":3,"localY":9,"worldX":3,"nogo":false,"worldY":9},{"localX":4,"localY":9,"worldX":4,"nogo":false,"worldY":9},{"localX":5,"localY":9,"worldX":5,"nogo":false,"worldY":9},{"localX":6,"localY":9,"worldX":6,"nogo":false,"worldY":9},{"localX":7,"localY":9,"worldX":7,"nogo":false,"worldY":9},{"localX":8,"localY":9,"worldX":8,"nogo":false,"worldY":9},{"localX":9,"localY":9,"worldX":9,"nogo":false,"worldY":9},{"localX":10,"localY":9,"worldX":10,"nogo":false,"worldY":9},{"localX":11,"localY":9,"worldX":11,"nogo":false,"worldY":9},{"localX":12,"localY":9,"worldX":12,"nogo":false,"worldY":9},{"localX":13,"localY":9,"worldX":13,"nogo":false,"worldY":9},{"localX":14,"localY":9,"worldX":14,"nogo":false,"worldY":9},{"localX":15,"localY":9,"worldX":15,"nogo":false,"worldY":9},{"localX":16,"localY":9,"worldX":16,"nogo":false,"worldY":9},{"localX":17,"localY":9,"worldX":17,"nogo":false,"worldY":9},{"localX":18,"localY":9,"worldX":18,"nogo":false,"worldY":9},{"localX":19,"localY":9,"worldX":19,"nogo":false,"worldY":9},{"localX":20,"localY":9,"worldX":20,"nogo":true,"worldY":9},{"localX":21,"localY":9,"worldX":21,"nogo":true,"worldY":9},{"localX":22,"localY":9,"worldX":22,"nogo":true,"worldY":9},{"localX":23,"localY":9,"worldX":23,"nogo":false,"worldY":9},{"localX":24,"localY":9,"worldX":24,"nogo":false,"worldY":9},{"localX":25,"localY":9,"worldX":25,"nogo":false,"worldY":9},{"localX":26,"localY":9,"worldX":26,"nogo":false,"worldY":9},{"localX":27,"localY":9,"worldX":27,"nogo":false,"worldY":9},{"localX":0,"localY":10,"worldX":0,"nogo":false,"worldY":10},{"localX":1,"localY":10,"worldX":1,"nogo":false,"worldY":10},{"localX":2,"localY":10,"worldX":2,"nogo":false,"worldY":10},{"localX":3,"localY":10,"worldX":3,"nogo":false,"worldY":10},{"localX":4,"localY":10,"worldX":4,"nogo":false,"worldY":10},{"localX":5,"localY":10,"worldX":5,"nogo":false,"worldY":10},{"localX":6,"localY":10,"worldX":6,"nogo":false,"worldY":10},{"localX":7,"localY":10,"worldX":7,"nogo":false,"worldY":10},{"localX":8,"localY":10,"worldX":8,"nogo":false,"worldY":10},{"localX":9,"localY":10,"worldX":9,"nogo":false,"worldY":10},{"localX":10,"localY":10,"worldX":10,"nogo":false,"worldY":10},{"localX":11,"localY":10,"worldX":11,"nogo":false,"worldY":10},{"localX":12,"localY":10,"worldX":12,"nogo":false,"worldY":10},{"localX":13,"localY":10,"worldX":13,"nogo":false,"worldY":10},{"localX":14,"localY":10,"worldX":14,"nogo":false,"worldY":10},{"localX":15,"localY":10,"worldX":15,"nogo":false,"worldY":10},{"localX":16,"localY":10,"worldX":16,"nogo":false,"worldY":10},{"localX":17,"localY":10,"worldX":17,"nogo":false,"worldY":10},{"localX":18,"localY":10,"worldX":18,"nogo":false,"worldY":10},{"localX":19,"localY":10,"worldX":19,"nogo":false,"worldY":10},{"localX":20,"localY":10,"worldX":20,"nogo":false,"worldY":10},{"localX":21,"localY":10,"worldX":21,"nogo":true,"worldY":10},{"localX":22,"localY":10,"worldX":22,"nogo":true,"worldY":10},{"localX":23,"localY":10,"worldX":23,"nogo":true,"worldY":10},{"localX":24,"localY":10,"worldX":24,"nogo":false,"worldY":10},{"localX":25,"localY":10,"worldX":25,"nogo":false,"worldY":10},{"localX":26,"localY":10,"worldX":26,"nogo":false,"worldY":10},{"localX":27,"localY":10,"worldX":27,"nogo":false,"worldY":10},{"localX":0,"localY":11,"worldX":0,"nogo":false,"worldY":11},{"localX":1,"localY":11,"worldX":1,"nogo":false,"worldY":11},{"localX":2,"localY":11,"worldX":2,"nogo":false,"worldY":11},{"localX":3,"localY":11,"worldX":3,"nogo":false,"worldY":11},{"localX":4,"localY":11,"worldX":4,"nogo":false,"worldY":11},{"localX":5,"localY":11,"worldX":5,"nogo":false,"worldY":11},{"localX":6,"localY":11,"worldX":6,"nogo":false,"worldY":11},{"localX":7,"localY":11,"worldX":7,"nogo":false,"worldY":11},{"localX":8,"localY":11,"worldX":8,"nogo":false,"worldY":11},{"localX":9,"localY":11,"worldX":9,"nogo":false,"worldY":11},{"localX":10,"localY":11,"worldX":10,"nogo":false,"worldY":11},{"localX":11,"localY":11,"worldX":11,"nogo":false,"worldY":11},{"localX":12,"localY":11,"worldX":12,"nogo":false,"worldY":11},{"localX":13,"localY":11,"worldX":13,"nogo":false,"worldY":11},{"localX":14,"localY":11,"worldX":14,"nogo":false,"worldY":11},{"localX":15,"localY":11,"worldX":15,"nogo":false,"worldY":11},{"localX":16,"localY":11,"worldX":16,"nogo":false,"worldY":11},{"localX":17,"localY":11,"worldX":17,"nogo":false,"worldY":11},{"localX":18,"localY":11,"worldX":18,"nogo":false,"worldY":11},{"localX":19,"localY":11,"worldX":19,"nogo":false,"worldY":11},{"localX":20,"localY":11,"worldX":20,"nogo":false,"worldY":11},{"localX":21,"localY":11,"worldX":21,"nogo":false,"worldY":11},{"localX":22,"localY":11,"worldX":22,"nogo":true,"worldY":11},{"localX":23,"localY":11,"worldX":23,"nogo":true,"worldY":11},{"localX":24,"localY":11,"worldX":24,"nogo":true,"worldY":11},{"localX":25,"localY":11,"worldX":25,"nogo":true,"worldY":11},{"localX":26,"localY":11,"worldX":26,"nogo":false,"worldY":11},{"localX":27,"localY":11,"worldX":27,"nogo":false,"worldY":11},{"localX":0,"localY":12,"worldX":0,"nogo":false,"worldY":12},{"localX":1,"localY":12,"worldX":1,"nogo":false,"worldY":12},{"localX":2,"localY":12,"worldX":2,"nogo":false,"worldY":12},{"localX":3,"localY":12,"worldX":3,"nogo":false,"worldY":12},{"localX":4,"localY":12,"worldX":4,"nogo":false,"worldY":12},{"localX":5,"localY":12,"worldX":5,"nogo":false,"worldY":12},{"localX":6,"localY":12,"worldX":6,"nogo":false,"worldY":12},{"localX":7,"localY":12,"worldX":7,"nogo":false,"worldY":12},{"localX":8,"localY":12,"worldX":8,"nogo":false,"worldY":12},{"localX":9,"localY":12,"worldX":9,"nogo":false,"worldY":12},{"localX":10,"localY":12,"worldX":10,"nogo":false,"worldY":12},{"localX":11,"localY":12,"worldX":11,"nogo":false,"worldY":12},{"localX":12,"localY":12,"worldX":12,"nogo":false,"worldY":12},{"localX":13,"localY":12,"worldX":13,"nogo":false,"worldY":12},{"localX":14,"localY":12,"worldX":14,"nogo":false,"worldY":12},{"localX":15,"localY":12,"worldX":15,"nogo":false,"worldY":12},{"localX":16,"localY":12,"worldX":16,"nogo":false,"worldY":12},{"localX":17,"localY":12,"worldX":17,"nogo":false,"worldY":12},{"localX":18,"localY":12,"worldX":18,"nogo":false,"worldY":12},{"localX":19,"localY":12,"worldX":19,"nogo":false,"worldY":12},{"localX":20,"localY":12,"worldX":20,"nogo":false,"worldY":12},{"localX":21,"localY":12,"worldX":21,"nogo":false,"worldY":12},{"localX":22,"localY":12,"worldX":22,"nogo":false,"worldY":12},{"localX":23,"localY":12,"worldX":23,"nogo":true,"worldY":12},{"localX":24,"localY":12,"worldX":24,"nogo":true,"worldY":12},{"localX":25,"localY":12,"worldX":25,"nogo":true,"worldY":12},{"localX":26,"localY":12,"worldX":26,"nogo":true,"worldY":12},{"localX":27,"localY":12,"worldX":27,"nogo":false,"worldY":12}],"quadrantNumber":0,"worldX":0,"worldY":0};
Game.fps = 30;
//these will be the players last coords
Game.x;
Game.y;
Game.quadrant = 0;

Game.init = function() {
	Game.x = 32;
	Game.y = 32;
	$(".map").css({
		"background-position-x":Game.x+"px",
		"background-position-y":Game.y+"px"
	});
	console.log(quad1);
};

Game.draw = function() {
 
};

Game.update = function() {
  
};

Game.changePosition = function(x,y){
	Game.x = x;
	Game.y = y;
};

