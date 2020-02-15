const canvas = document.getElementById("main");

/*画布大小*/
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*renderer*/
renderer = new THREE.WebGLRenderer({ canvas });
renderer.shadowMap.enabled = true; //辅助线
renderer.shadowMapSoft = true; //柔和阴影
renderer.setClearColor(0xffffff, 0);

/*scene*/
scene = new THREE.Scene();

/*camera*/
camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(-200, 50, 0);
camera.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(camera);

renderer.render(scene, camera);

let Sun,
  Mercury,  //水星
  Venus,  //金星
  Earth,
  Mars,
  Jupiter, //木星
  Saturn, //土星
  Uranus, //天王
  Neptune, //海王
  stars = [];

module.exports = {

  init(){
      //构造太阳
      ...

      /*planets*/
      Mercury = this.initPlanet('Mercury','rgb(124,131,203)',20,2);
      stars.push(Mercury);

      Venus = this.initPlanet('Venus','rgb(190,138,44)',30,4);
      stars.push(Venus);

      Earth = this.initPlanet('Earth','rgb(46,69,119)',40,5);
      stars.push(Earth);

      Mars = this.initPlanet('Mars','rgb(210,81,16)',50,4);
      stars.push(Mars);

      Jupiter = this.initPlanet('Jupiter','rgb(254,208,101)',70,9);
      stars.push(Jupiter);

      Saturn = this.initPlanet('Saturn','rgb(210,140,39)',100,7);
      stars.push(Saturn);

      Uranus = this.initPlanet('Uranus', 'rgb(49,168,218)',120,4);
      stars.push(Uranus);

      Neptune = this.initPlanet('Neptune','rgb(84,125,204)',150,3);
      stars.push(Neptune);

  },

  /**
   * 初始化行星
   * @param name  行星名字
   * @param color  颜色
   * @param distance  距离原点（太阳中心）的距离
   * @param volume  体积
   * @returns {{name: *, distance: *, volume: *, Mesh: THREE.Mesh}}
   */
  initPlanet(name,color,distance,volume) {
    let mesh = new THREE.Mesh( new THREE.SphereGeometry( volume, 16,16 ),
      new THREE.MeshLambertMaterial( { emissive: color } )
    );
    mesh.position.z = -distance;
    mesh.receiveShadow = true;
    mesh.castShadow = true;

    mesh.name = name;

    let star = {
      name,
      distance,
      volume,
      Mesh : mesh
    }

    scene.add(mesh);

    return star;
  },
}